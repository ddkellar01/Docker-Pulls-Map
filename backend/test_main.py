from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_pulls_endpoint():
    response = client.get("/api/pulls")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
