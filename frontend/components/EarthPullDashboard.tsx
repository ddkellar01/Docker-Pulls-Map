'use client';

import React, { useEffect, useRef } from 'react';

export interface PullRecord {
  ip: string;
  country: string;
  state: string;
  city: string;
  lat: number;
  lng: number;
  path?: string;
  timestamp?: string;
}

export default function EarthPullDashboard({ pulls }: { pulls: PullRecord[] }) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function initGoogleEarthMap() {
      if (!window.google || !mapRef.current) return;

      try {
        const { Map } = await (google.maps as any).importLibrary("maps");
        const { AdvancedMarkerElement } = await (google.maps as any).importLibrary("marker");

        const map = new Map(mapRef.current, {
          center: { lat: 20.0, lng: 0.0 },
          zoom: 2.5,
          mapId: 'DOCKER_PULLS_GLOBE_VIEW',
          mapTypeId: 'satellite',
          tilt: 45,
          heading: 0,
        });

        pulls.forEach((pull) => {
          if (pull.lat !== 0.0 || pull.lng !== 0.0) {
            const pinContainer = document.createElement('div');
            pinContainer.className = 'flex items-center space-x-2 bg-zinc-950/90 text-emerald-400 text-xs font-mono px-2.5 py-1 rounded-md border border-emerald-500/40 shadow-xl';
            pinContainer.innerHTML = `
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
              <span>${pull.city}, ${pull.state} (${pull.country})</span>
            `;

            new AdvancedMarkerElement({
              map,
              position: { lat: pull.lat, lng: pull.lng },
              title: `${pull.city}, ${pull.state}, ${pull.country} - ${pull.ip}`,
              content: pinContainer,
            });
          }
        });
      } catch (err) {
        console.error('Error rendering 3D Google Earth Map:', err);
      }
    }

    initGoogleEarthMap();
  }, [pulls]);

  return (
    <div className="w-full h-[650px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-black">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
