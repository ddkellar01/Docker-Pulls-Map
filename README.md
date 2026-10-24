# 🌍 Docker-Pulls-Map (PullGlobe-3D)

[![CI / CD Pipeline](https://github.com/ddkellar01/Docker-Pulls-Map/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ddkellar01/Docker-Pulls-Map/actions/workflows/ci-cd.yml)
[![Docker Image CI/CD](https://github.com/ddkellar01/Docker-Pulls-Map/actions/workflows/docker-image.yml/badge.svg)](https://github.com/ddkellar01/Docker-Pulls-Map/actions/workflows/docker-image.yml)

---

## 🧰 Tech Stack & Architecture

### 💻 Core Programming Languages & Core Systems
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)

### ⛓️ Web3 & Infrastructure
![Docker Registry](https://img.shields.io/badge/Docker_Registry_V2-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![HTTPX](https://img.shields.io/badge/HTTPX_Async-000000?style=for-the-badge&logo=python&logoColor=white)

### ⚙️ Platform Support & Hardware Architecture
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-0D597F?style=for-the-badge&logo=alpine-linux&logoColor=white)

### ⚡ Low-Level Infrastructure & Performance
![MaxMind GeoIP2](https://img.shields.io/badge/MaxMind_GeoLite2-12463F?style=for-the-badge&logo=geocaching&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-4053D6?style=for-the-badge&logo=python&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=for-the-badge&logo=pydantic&logoColor=white)

### 🛠️ DevOps & Build Tools
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)

### ☁️ Cloud
![Google Cloud Platform](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)
![Google Maps API](https://img.shields.io/badge/Google_Maps_3D-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)
![Google Gemini AI](https://img.shields.io/badge/Google_Gemini_Pro-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

---

## What is this?
Imagine you build a cool computer project and put it in a digital box (called a container) for people to download. **Docker-Pulls-Map** is like a magic scoreboard and GPS map that shows you every single time someone on planet Earth downloads your box!

## What is this about?
It is about making software downloads visible and fun. Instead of looking at a boring text list of numbers, you get to watch a real 3D spinning globe light up with flashing pins showing where your fans and users live.

## What this does?
1. **Catches Downloads**: Sits quietly in the middle like a traffic guard when someone downloads your code.
2. **Finds Locations**: Looks at their internet address and figures out their city, state, and country.
3. **Draws a Map**: Sends that location to a 3D Google Earth globe website.
4. **Asks an AI**: Wakes up a smart AI robot (Gemini Pro) to check the traffic and make sure everything looks healthy and normal.
   
https://labs.google/fx/tools/flow/shared/video/02d33b92-8996-43f3-a522-42097c835b62

## Why is this cool?
Because you get to watch a 3D globe spin and glow every time someone in Tokyo, New York, or London pulls your code! Plus, you have an AI robot acting like a security guard looking out for your project.

## What problems this solves?
Normally, app stores or container registries just give you a cold, boring number like "500 downloads today." They don't tell you *who* is downloading it or *where* in the world they are. This project fixes that by showing you exact map locations and checking for weird computer traffic automatically.

https://labs.google/fx/tools/flow/shared/video/1eef513b-711c-4657-8f39-cd9d7bdfbd97

## How does this works?
When someone types the download command for your code, it goes through our special Python helper program first. That helper checks their internet address (IP), looks up their city using a map dictionary, saves it to a list, and instantly updates a 3D web page so you can see a shiny glowing pin drop on the globe!

---

## Step by Step
1. **The Pull**: A user downloads your container image.
2. **The Intercept**: Our backend proxy catches the request.
3. **The Lookup**: MaxMind figures out the user's city and country coordinates.
4. **The Display**: The frontend 3D globe shows a glowing pulse marker.
5. **The AI Check**: Gemini Pro reads the recent activity and writes a summary report.

---

## How to install this?

1. **Clone the code repository**:
   ```bash
   git clone [https://github.com/ddkellar01/Docker-Pulls-Map.git](https://github.com/ddkellar01/Docker-Pulls-Map.git)
   cd Docker-Pulls-Map
