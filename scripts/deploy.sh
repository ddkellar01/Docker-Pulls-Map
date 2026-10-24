#!/usr/bin/env bash
set -e

echo "=========================================="
echo "🚀 Deploying Docker Pulls Map (PullGlobe-3D)"
echo "=========================================="

if [ ! -f .env ]; then
  echo "[WARN] .env file not found. Copying from .env.example..."
  cp .env.example .env
  echo "[!] Please update your API keys in the .env file."
fi

echo "[INFO] Building and starting containers with Docker Compose..."
docker-compose up --build -d

echo "=========================================="
echo "✅ Deployment Successful!"
echo "🌐 Frontend Dashboard: http://localhost:3000"
echo "🔌 Telemetry Proxy:    http://localhost:8000"
echo "=========================================="
