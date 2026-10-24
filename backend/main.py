import os
from typing import List, Dict, Any
from fastapi import FastAPI, Request, Response, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import httpx
from geo_resolver import GeoResolver
from ai_analyzer import AIAnalyzer

app = FastAPI(title="Docker Pulls Map Telemetry Gateway")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

geo_engine = GeoResolver()
ai_engine = AIAnalyzer()

UPSTREAM_REGISTRY = os.environ.get("UPSTREAM_REGISTRY", "https://registry-1.docker.io")
telemetry_db: List[Dict[str, Any]] = []

def record_telemetry(ip: str, path: str):
    geo_data = geo_engine.resolve_ip(ip)
    geo_data["path"] = path
    geo_data["timestamp"] = "Just now"
    telemetry_db.append(geo_data)

@app.get("/api/pulls")
async def get_pulls():
    return telemetry_db

@app.post("/api/analyze")
async def run_ai_analysis():
    return {"analysis": ai_engine.analyze_telemetry(telemetry_db[-50:])}

@app.api_route("/v2/{path:path}", methods=["GET", "HEAD", "POST"])
async def proxy_registry(path: str, request: Request, background_tasks: BackgroundTasks):
    forwarded = request.headers.get("x-forwarded-for")
    client_ip = forwarded.split(",")[0].strip() if forwarded else request.client.host

    background_tasks.add_task(record_telemetry, client_ip, path)

    async with httpx.AsyncClient() as client:
        url = f"{UPSTREAM_REGISTRY}/v2/{path}"
        headers = {k: v for k, v in request.headers.items() if k.lower() != "host"}
        resp = await client.request(
            method=request.method,
            url=url,
            headers=headers,
            params=request.query_params,
            follow_redirects=True
        )
        return Response(
            content=resp.content,
            status_code=resp.status_code,
            headers=dict(resp.headers)
        )
