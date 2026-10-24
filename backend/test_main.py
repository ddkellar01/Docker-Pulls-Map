import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_pulls_endpoint():
    response = client.get("/api/pulls")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_registry_proxy_health():
    # Test health of root or proxy routes
    response = client.get("/v2/")
    # Will forward or return status depending on upstream reachability
    assert response.status_code in (200, 401, 404, 502, 503)
