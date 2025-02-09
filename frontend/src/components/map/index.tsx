"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { GeolocateControl, NavigationControl } from "react-map-gl/mapbox";


const MapComponent = () => {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic3BvcnRlayIsImEiOiJjbTZ3aW12MTgwa2ttMmlwdDdqMjQ5ODJwIn0.YqGRUemBdOYPV05KqCQXsg"
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{
        height: "100%",
        width: "100%",
      }}

      initialViewState={{
        latitude: 45.5017,
        longitude: -73.5673,
        zoom: 10,
      }}
      maxZoom={20}
      minZoom={3}
    >
      <GeolocateControl position="top-left" />
      <NavigationControl position="top-left" />
    </Map>
  );
};

export default MapComponent;

