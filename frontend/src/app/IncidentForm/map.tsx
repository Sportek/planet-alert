import React from "react";
import Map, { NavigationControl, GeolocateControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox GL CSS
import classes from "./Page.module.css";
const MapDisplay = () => {
  return (
    <div>
      <main className={classes.mainStyle}>
        <Map
          mapboxAccessToken="pk.eyJ1Ijoic3BvcnRlayIsImEiOiJjbTZ3aW12MTgwa2ttMmlwdDdqMjQ5ODJwIn0.YqGRUemBdOYPV05KqCQXsg"
          mapStyle="mapbox://styles/mapbox/streets-v12"
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
//==========================================================
// import React, { useState, useEffect } from "react";
// import Map, { NavigationControl, GeolocateControl } from "react-map-gl/mapbox";
// import "mapbox-gl/dist/mapbox-gl.css";
// import classes from "./Page.module.css";

// const MapDisplay = () => {
//   const [userLocation, setUserLocation] = useState({
//     latitude: 35.668641, // Valeur par défaut (Tokyo)
//     longitude: 139.750567,
//     zoom: 10,
//   });

//   // Obtenir la position utilisateur
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           zoom: 12, // Zoom sur la position de l'utilisateur
//         });
//       },
//       (error) => {
//         console.error("Erreur de géolocalisation :", error);
//       },
//       { enableHighAccuracy: true } // Option pour une meilleure précision
//     );
//   }, []);

//   return (
//     <div>
//       <main className={classes.mainStyle}>
//         <Map
//           mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
//           mapStyle="mapbox://styles/mapbox/streets-v12"
//           style={{ width: "100%", height: "100vh" }}
//           initialViewState={userLocation} // Mise à jour dynamique
//           maxZoom={20}
//           minZoom={3}
//         >
//           <GeolocateControl position="top-left" />
//           <NavigationControl position="top-left" />
//         </Map>
//       </main>
//     </div>
//   );
// };

// export default MapDisplay;
