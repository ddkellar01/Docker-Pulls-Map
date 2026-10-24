import os
from typing import List, Dict, Any
from google import genai

class AIAnalyzer:
    def __init__(self):
        api_key = os.environ.get("GEMINI_API_KEY")
        self.client = genai.Client(api_key=api_key) if api_key else None

    def analyze_telemetry(self, pull_logs: List[Dict[str, Any]]) -> str:
        if not self.client:
            return "Gemini API Key is not configured. Set GEMINI_API_KEY to enable AI reasoning."

        prompt = f"""
        You are an infrastructure telemetry and threat intelligence assistant.
        Analyze the following real-time container image pull events grouped by geography:

        {pull_logs}

        Provide a structured markdown response covering:
        1. **Geographic Concentration**: Primary geographic hubs pulling the image.
        2. **CI/CD vs. Manual Traffic**: Distinguish between cloud runner spikes and human developer pulls.
        3. **Security Anomalies**: Flag rapid sequential pulls or suspicious origin patterns.
        """

        try:
            response = self.client.models.generate_content(
                model='gemini-2.5-pro',
                contents=prompt,
            )
            return response.text
        except Exception as e:
            return f"Error executing Gemini Pro analysis: {str(e)}"
          
