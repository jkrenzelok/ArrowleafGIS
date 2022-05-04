import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "75vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 48.191968, lng: -114.3140604
  }
  return (
     <LoadScript
       googleMapsApiKey="">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;