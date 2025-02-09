"use client";
import MapComponent from "@/components/map";

const MapPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-10 flex-col">
      <div className="font-bold text-2xl">
        Découvrez les incidents en cours
      </div>
      <div className="w-full h-full border-2 border-black flex flex-1">
        <MapComponent />

      </div>
    </div>
  );
};



export default MapPage;

