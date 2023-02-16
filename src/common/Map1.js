import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScriptNext,
  MarkerClusterer,
} from "@react-google-maps/api";

const mapStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 10.762622,
  lng: 106.660172,
};
export default function Map(props) {
  const [mapLocation] = useState([
    { lat: 10.80012, lng: 106.68424 },
    { lat: 10.77467, lng: 106.69016 },
    { lat: 10.74096, lng: 106.60913 },
    { lat: 10.79392, lng: 106.72024 },
  ]);

  const mapviewMarkerClickHandler = (e) => {};
  console.log(11111, props);
  return (
    <div className="map_container">
      <LoadScriptNext
        googleMapsApiKey="AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q"
        language="en"
      >
        <GoogleMap
          zoom={18}
          center={center}
          mapContainerClassName="map"
          fullscreenControl
          options={{
            styles: mapStyle,
            // streetViewControl: false,
            // disableDefaultUI: false,
          }}
        >
          {/* {mapLocation.map((location, index) => {
          <MarkerClusterer
            position={location}
            key={index}
            onClick={(e) => mapviewMarkerClickHandler(e)}
          />;
        })} */}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
}
