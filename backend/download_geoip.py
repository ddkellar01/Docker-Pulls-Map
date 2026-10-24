import os
import urllib.request
import tarfile

def download_maxmind_db():
    db_path = "GeoLite2-City.mmdb"
    if os.path.exists(db_path):
        print(f"[INFO] MaxMind database already exists at {db_path}")
        return

    print("[INFO] Note: MaxMind GeoLite2 database requires a free license key or local .mmdb file.")
    print("[INFO] Please place your GeoLite2-City.mmdb file inside the backend/ directory.")

if __name__ == "__main__":
    download_maxmind_db()
  
