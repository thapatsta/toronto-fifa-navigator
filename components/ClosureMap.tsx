"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet default icon issue in Next.js
const fixLeafletIcon = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
};

const landmarks = [
  { name: "Toronto Stadium", pos: [43.6335, -79.4186] as [number, number], desc: "Home of Toronto FC & FIFA 2026 matches. 45,000 capacity." },
  { name: "Fort York / The Bentway", pos: [43.6389, -79.4056] as [number, number], desc: "FIFA Fan Festival — June 11 to July 19. Free admission." },
  { name: "Exhibition GO Station", pos: [43.6364, -79.4183] as [number, number], desc: "GO Transit to Exhibition. Customer-only on match days." },
  { name: "St. Andrew Station", pos: [43.6476, -79.3856] as [number, number], desc: "Free shuttle to Fleet Street hub on match days." },
  { name: "Fleet Street Hub", pos: [43.6365, -79.412] as [number, number], desc: "Main transit access point. TTC streetcar final stop + shuttle drop-off." },
];

const alwaysClosedLines = [
  { positions: [[43.637, -79.41], [43.636, -79.418]] as [number, number][], label: "Fleet Street — TTC Only", color: "#1a237e" },
  { positions: [[43.639, -79.408], [43.6365, -79.406]] as [number, number][], label: "Fort York Blvd — Pedestrian Only", color: "#2e7d32" },
];

const matchDayLines = [
  { positions: [[43.634, -79.428], [43.6375, -79.4015]] as [number, number][], label: "Lake Shore Blvd W — Closed Match Days", color: "#c62828" },
];

const matchDayPolygons = [
  {
    positions: [
      [43.6427, -79.424], [43.6427, -79.414],
      [43.638, -79.414], [43.638, -79.424],
    ] as [number, number][],
    label: "Liberty Village — Local Traffic Only",
    color: "#ef6c00",
  },
];

const walkingRoutes = [
  { positions: [[43.6476, -79.3856], [43.6365, -79.412]] as [number, number][], label: "Shuttle Route: St. Andrew → Fleet Street" },
];

function MapUpdater({ matchDay }: { matchDay: boolean }) {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [matchDay, map]);
  return null;
}

interface ClosureMapProps {
  matchDay: boolean;
}

export default function ClosureMap({ matchDay }: ClosureMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    fixLeafletIcon();
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
      <MapContainer
        center={[43.6365, -79.412]}
        zoom={14}
        className="w-full h-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater matchDay={matchDay} />

        {/* Always-on landmark markers */}
        {landmarks.map((lm) => (
          <Marker key={lm.name} position={lm.pos}>
            <Popup>
              <strong>{lm.name}</strong>
              <br />
              {lm.desc}
            </Popup>
          </Marker>
        ))}

        {/* Always-on closures */}
        {alwaysClosedLines.map((line) => (
          <Polyline key={line.label} positions={line.positions} pathOptions={{ color: line.color, weight: 5 }}>
            <Popup>{line.label}</Popup>
          </Polyline>
        ))}

        {/* Walking/shuttle route */}
        {walkingRoutes.map((route) => (
          <Polyline
            key={route.label}
            positions={route.positions}
            pathOptions={{ color: "#2e7d32", weight: 3, dashArray: "8, 6" }}
          >
            <Popup>{route.label}</Popup>
          </Polyline>
        ))}

        {/* Match day only closures */}
        {matchDay &&
          matchDayLines.map((line) => (
            <Polyline key={line.label} positions={line.positions} pathOptions={{ color: line.color, weight: 5 }}>
              <Popup>
                <strong>Match Day Only</strong>
                <br />
                {line.label}
              </Popup>
            </Polyline>
          ))}

        {matchDay &&
          matchDayPolygons.map((poly) => (
            <Polygon
              key={poly.label}
              positions={poly.positions}
              pathOptions={{ color: poly.color, fillColor: poly.color, fillOpacity: 0.2, weight: 2 }}
            >
              <Popup>
                <strong>Match Day Only</strong>
                <br />
                {poly.label}
              </Popup>
            </Polygon>
          ))}
      </MapContainer>
    </div>
  );
}
