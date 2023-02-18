import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, Point } from '@react-google-maps/api';
import marker from "../res/img/marker.png"

const containerStyle = {
  width: '1000px',
  height: '500px'
};

export default function Map(props) {
  const [mapLocation] = useState([
    {
      position: { lat: 10.77722745001941, lng: 106.69062171463216 },
      key: "aaaa"
    },
    {
      position: { lat: 10.784309975777592, lng: 106.67465720688587 },
      key: "bbb"
    },
    // { lat: 10.77467, lng: 106.69016 },
    // { lat: 10.74096, lng: 106.60913 }, 
    // { lat: 10.79392, lng: 106.72024 },
  ]);

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  const mapviewMarkerClickHandler = (e) => {
    const latLng = {
      lat: e.latLng?.lat(),
      lng: e.latLng?.lng()
    };

    // const result = diaryData.filter((diary) => {
    //   return JSON.stringify(latLng) === JSON.stringify(diary.location)
    // })
    console.log(latLng)
    // setlistData([...result])
  };
  return (
    <div className="map_container">
      <LoadScript
        googleMapsApiKey="AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q"
        language="en"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapLocation[0]}
          zoom={15}
        >
          <Marker
            position={{ lat: 10.77722745001941, lng: 106.69062171463216 }}
            onClick={mapviewMarkerClickHandler}
          />
          {mapLocation.map((marker, index) => {

            return (
              <Marker
                position={{ lat: 10.77722745001941, lng: 106.69062171463216 }}
                onClick={mapviewMarkerClickHandler}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
