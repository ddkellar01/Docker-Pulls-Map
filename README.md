# 🌍 Docker Pulls Map (PullGlobe-3D)

An autonomous telemetry and 3D geospatial visualization engine that tracks the exact geographic origin (`state`, `city`, `country`) of container image pulls in real time, augmented with **Gemini Pro AI** analytics.

---

## 🚀 Key Features

* **Registry Telemetry Interceptor**: A FastAPI transparent proxy that captures client IP addresses during `docker pull` operations and forwards layers upstream without performance degradation.
* **MaxMind Geolocation Engine**: Resolves incoming IP addresses into precise GPS coordinates and regional hierarchy (`city`, `state`, `country`).
* **Interactive 3D Google Earth UI**: A Next.js dashboard featuring a high-performance 3D satellite globe with real-time advanced markers and ping animations.
* **Gemini Pro AI Reasoning**: Background analysis engine that evaluates pull patterns, distinguishes CI/CD runner spikes from human developers, and detects security anomalies.

---

## 🛠️ Quick Start

1. **Clone and Configure**:
   ```bash
   git clone [https://github.com/yourusername/docker-pulls-map.git](https://github.com/yourusername/docker-pulls-map.git)
   cd docker-pulls-map
   cp .env.example .env
