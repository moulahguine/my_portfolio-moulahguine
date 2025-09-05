import React, { useRef, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function InteractiveMap() {
  const mapRef = useRef(null);

  // Center point between Turkey and Morocco to show both countries
  const mapCenter = useMemo(() => [37.5, 30], []);

  // Coordinates
  const istanbul = useMemo(() => [41.0082, 28.9784], []);
  const rabat = useMemo(() => [34.0209, -6.8416], []);

  // Flag-based marker icons
  const istanbulIcon = L.divIcon({
    className: "custom-marker istanbul-marker",
    html: `
      <div style="
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
        border-radius: 50%;
        border: 4px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        position: relative;
      ">
        🇹🇷
        <div style="
          position: absolute;
          top: -10px;
          right: -30px;
         width:fit-content;
         padding: 1px 4px;
          background:rgb(106, 106, 106);
          border-radius: 16px;
          border: 2px solid white;
          font-size: 10px;
          color:rgb(255, 255, 255);
        ">current</div>
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  const rabatIcon = L.divIcon({
    className: "custom-marker rabat-marker",
    html: `
      <div style="
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #c53030 0%, #9b2c2c 100%);
        border-radius: 50%;
        border: 4px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        position: relative;
      ">
        🇲🇦
        <div style="
          position: absolute;
          top: -10px;
          right: -20px;
          width: fit-content;
          padding:2px 4px;
          background:rgb(111, 111, 111);
          border-radius: 16px;
          border: 2px solid white;
          font-size: 10px;
          color:rgb(255, 255, 255);
        ">origin</div>
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  return (
    <div className="interactive-map-container">
      <MapContainer
        center={mapCenter}
        zoom={4}
        style={{ height: "400px", width: "100%" }}
        ref={mapRef}
        zoomControl={true}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        touchZoom={true}
      >
        {/* style tile layer - Light */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />

        {/* Istanbul Marker */}
        <Marker position={istanbul} icon={istanbulIcon}>
          <Popup>
            <div style={{ textAlign: "center", padding: "8px" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#667eea" }}>
                Istanbul, Turkey
              </h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
                Current Location 🇹🇷
              </p>
            </div>
          </Popup>
        </Marker>

        {/* Rabat Marker */}
        <Marker position={rabat} icon={rabatIcon}>
          <Popup>
            <div style={{ textAlign: "center", padding: "8px" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#f5576c" }}>
                Rabat, Morocco
              </h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
                Origin 🇲🇦
              </p>
            </div>
          </Popup>
        </Marker>

        {/* Location Dots for Istanbul and Morocco */}
        <CircleMarker
          center={istanbul}
          radius={6}
          pathOptions={{
            color: "#3b82f6",
            fillColor: "#60a5fa",
            fillOpacity: 0.8,
            weight: 2,
            opacity: 0.9,
          }}
        />

        <CircleMarker
          center={rabat}
          radius={6}
          pathOptions={{
            color: "#10b981",
            fillColor: "#34d399",
            fillOpacity: 0.8,
            weight: 2,
            opacity: 0.9,
          }}
        />
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
