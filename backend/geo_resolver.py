import os
import geoip2.database
from typing import Dict, Any

class GeoResolver:
    def __init__(self, db_path: str = "GeoLite2-City.mmdb"):
        self.db_path = db_path
        self.reader = None
        if os.path.exists(self.db_path):
            try:
                self.reader = geoip2.database.Reader(self.db_path)
            except Exception as e:
                print(f"[WARN] Failed to load MaxMind DB: {e}")

    def resolve_ip(self, ip_address: str) -> Dict[str, Any]:
        default_payload = {
            "ip": ip_address,
            "country": "Unknown",
            "state": "Unknown",
            "city": "Unknown",
            "lat": 0.0,
            "lng": 0.0
        }
        if not self.reader or ip_address in ("127.0.0.1", "localhost", "::1"):
            return default_payload

        try:
            res = self.reader.city(ip_address)
            return {
                "ip": ip_address,
                "country": res.country.name or "Unknown",
                "state": res.subdivisions.most_specific.name or "Unknown" if res.subdivisions else "Unknown",
                "city": res.city.name or "Unknown",
                "lat": res.location.latitude or 0.0,
                "lng": res.location.longitude or 0.0
            }
        except Exception:
            return default_payload

    def close(self):
        if self.reader:
            self.reader.close()
          
