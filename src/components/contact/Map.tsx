'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    L: any;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Charger Leaflet depuis CDN
    const loadLeaflet = async () => {
      if (typeof window.L === 'undefined') {
        // Charger le CSS
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(linkEl);

        // Charger le JS
        const scriptEl = document.createElement('script');
        scriptEl.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        document.head.appendChild(scriptEl);

        await new Promise(resolve => scriptEl.onload = resolve);
      }

      if (mapRef.current && !mapInstanceRef.current) {
        // Coordonnées de Lachine, Québec
        const lat = 45.4322;
        const lng = -73.6757;

        // Initialiser la carte
        mapInstanceRef.current = window.L.map(mapRef.current).setView([lat, lng], 15);

        // Ajouter la couche OpenStreetMap
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);

        // Ajouter un marqueur
        window.L.marker([lat, lng])
          .addTo(mapInstanceRef.current)
          .bindPopup('NextGen IT<br>565 23e Avenue<br>Lachine, Québec H8S 3V3')
          .openPopup();
      }
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full min-h-[400px] rounded-lg shadow-lg"
      style={{ zIndex: 1 }}
    />
  );
}
