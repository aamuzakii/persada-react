import React from 'react';
import {GoogleMap} from "@react-google-maps/api";
import {useLoadScript} from "@react-google-maps/api";

function MapContainer() {
  return (
    <div style={{ height: '30vh', width: '100vw', boxSizing: 'border-box', backgroundColor: 'red' }} >
      <GoogleMaps></GoogleMaps>
    </div>
  )
}

export default MapContainer



const mapContainerStyle = {
    width: '100vw',
    height: '30vh',
}
const center = {
    lat: 31.968599,
    lng: -99.901810,
}

function GoogleMaps() {
    const{isLoaded, loadError} = useLoadScript({
        // Uncomment the line below and add your API key
        googleMapsApiKey: "AIzaSyDyX2181GZ886fcOytok9bEXQtN0JDMcME"
    });

    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    return(
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={11} 
        center={center} 
        />
    )
}