"use client";
import getIncidents from "@/http/incidents";
import { Icon } from "@iconify/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl/mapbox";

export interface Incident {
  id: number;
  latitude: number;
  longitude: number;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}


const MapComponent = () => {

  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await getIncidents();
      setIncidents(response);
    };

    fetchIncidents();
  }, []);



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
      {incidents.map((incident) => (
        <Marker key={incident.id} longitude={incident.longitude} latitude={incident.latitude} anchor="bottom" onClick={() => {
          console.log(incident);
        }}>
          <Icon icon="mdi:fire" className="text-red-500 text-2xl" />
        </Marker>
      ))}


    </Map>
  );
};



export default MapComponent;

