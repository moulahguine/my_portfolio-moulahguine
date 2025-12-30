"use client";

import React, { useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
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
  // Center point between Turkey and Morocco to show both countries
  const mapCenter = useMemo(() => [41.0082, 28.9784], []);

  // Coordinates
  const istanbul = useMemo(() => [41.0082, 28.9784], []);

  return (
    <div className="interactive-map-container">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
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
          maxZoom={63}
        />

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
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
