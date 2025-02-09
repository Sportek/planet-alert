import classes from "@/css/page.module.css";
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox GL CSS
import { useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl/mapbox";
const MapDisplay = () => {
  const [clickedLocation, setClickedLocation] = useState<{ lat: number, lng: number } | null>(null);
  const handleMapClick = (event: any) => {
    const { lngLat } = event; // Get the longitude and latitude from the event
    setClickedLocation(lngLat); // Save clicked location to state
    console.log("Clicked Location:", lngLat);
  };


  return (
    <div>
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

          {clickedLocation && (
            <Marker
              longitude={clickedLocation.lng}
              latitude={clickedLocation.lat}
              anchor="bottom"
              color="red"
            />
          )}
        </Map>
      </main>

    </div>

  );
};

export default MapDisplay;