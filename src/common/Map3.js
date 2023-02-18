import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader"
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q")
Geocode.setLanguage('en')
Geocode.setRegion('es')

const containerStyle = {
  width: '600px',
  height: '500px'
};

export default function Map(props) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    console.log('map', map)
    const loader = new Loader({
      apiKey: "AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q",
      version: "weekly",
    });


    loader.load().then(() => {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      }));
    });
  }, []);

  useEffect(() => {
    // The marker, positioned at Uluru
    const marker = new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map,
    });
  }, [map]);


  return (
    <>
      <div style={{ width: "600px", height: "600px" }} ref={mapRef} />

    </>
  )
}
