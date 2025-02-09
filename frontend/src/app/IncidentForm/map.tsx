import React, { useState } from "react";
import Map, { NavigationControl, GeolocateControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox GL CSS
import classes from "./Page.module.css";
const MapDisplay = () => {
  const [clickedLocation, setClickedLocation] = useState(null);
  const handleMapClick = (event) => {
    const { lngLat } = event; // Get the longitude and latitude from the event
    setClickedLocation(lngLat); // Save clicked location to state
    console.log("Clicked Location:", lngLat);
  };

  return (
    <div>
      Clicked Location: Lat {clickedLocation?.lat}, Lng {clickedLocation?.lng}
      <main className={classes.mainStyle}>
        <Map
          mapboxAccessToken="pk.eyJ1Ijoic3BvcnRlayIsImEiOiJjbTZ3aW12MTgwa2ttMmlwdDdqMjQ5ODJwIn0.YqGRUemBdOYPV05KqCQXsg"
          mapStyle="mapbox://styles/mapbox/streets-v12"
          onClick={handleMapClick}
          style={{
            width: "100%",
            height: "100%",
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
      </main>
    </div>
  );
};

export default MapDisplay;
