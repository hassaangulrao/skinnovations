import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"; // Make sure to import your CSS file

// Custom component to handle zoom control
const MapZoomHandler = () => {
  const map = useMap();

  useEffect(() => {
    const handleWheel = (e) => {
      if (!e.ctrlKey) {
        e.preventDefault(); // Prevent zooming when ctrl is not pressed
      }
    };

    // Attach the wheel event listener to the map
    map.on("wheel", handleWheel);

    // Cleanup on unmount
    return () => {
      map.off("wheel", handleWheel);
    };
  }, [map]);

  return null; // This component doesn't render anything
};

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <MapZoomHandler /> {/* Include the custom zoom handler */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
