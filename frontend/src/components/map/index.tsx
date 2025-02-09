"use client";
import { User } from "@/contexts/user";
import getIncidents from "@/http/incidents";
import { Icon } from "@iconify/react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { GeolocateControl, Marker, NavigationControl } from "react-map-gl/mapbox";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export interface Incident {
  id: number;
  latitude: number;
  longitude: number;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}


export const INCIDENT_CONFIG = {
  "Incendie": {
    color: "#FF4D4D",  // Rouge vif
    icon: "mdi:fire-alert",
    label: "Incendie"
  },
  "Déversement de pétrole": {
    color: "#4A4A4A",  // Gris foncé
    icon: "mdi:oil",
    label: "Déversement de pétrole"
  },
  "Décharge illégale": {
    color: "#8B4513",  // Marron
    icon: "mdi:dump-truck",
    label: "Décharge illégale"
  },
  "Déforestation": {
    color: "#228B22",  // Vert forêt
    icon: "mdi:tree-off",
    label: "Déforestation"
  },
  "Pollution": {
    color: "#800080",  // Violet
    icon: "mdi:factory",
    label: "Pollution"
  },
  "Autre": {
    color: "#FFA500",  // Orange
    icon: "mdi:alert",
    label: "Autre"
  }
} as const;

export type TypeIncident = keyof typeof INCIDENT_CONFIG;


export const getIncidentConfig = (type: TypeIncident) => {
  return INCIDENT_CONFIG[type] ?? INCIDENT_CONFIG["Autre"];
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
        <Marker key={incident.id} longitude={incident.longitude} latitude={incident.latitude} anchor="bottom">
          <Popover>
            <PopoverTrigger>
              <Icon icon={getIncidentConfig(incident.type as TypeIncident).icon} className="text-2xl" style={{ color: getIncidentConfig(incident.type as TypeIncident).color }} />
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 space-y-3">
              <div className="border-b pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Icon icon={getIncidentConfig(incident.type as TypeIncident).icon} className="text-2xl" style={{ color: getIncidentConfig(incident.type as TypeIncident).color }} />
                  <h3 className="font-semibold text-lg">Incident {getIncidentConfig(incident.type as TypeIncident).label}</h3>
                </div>

                <p className="text-sm text-gray-600">{incident.description}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account" className="text-gray-500" />
                  <p>Signalé par {incident.user.fullName}</p>
                </div>


                <div className="flex items-center gap-2">
                  <Icon icon="mdi:clock-outline" className="text-gray-500" />
                  <p>Créé le {new Date(incident.createdAt).toLocaleString('fr-FR', {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Icon icon="mdi:map-marker" className="text-gray-500" />
                  <p>Lat: {incident.latitude.toFixed(4)}, Lng: {incident.longitude.toFixed(4)}</p>
                </div>
              </div>
            </PopoverContent>

          </Popover>


        </Marker>


      ))}


    </Map>
  );
};



export default MapComponent;

