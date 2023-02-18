import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";
import marker from "../res/img/marker.png"

Geocode.setApiKey("AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q")
Geocode.setLanguage('en')
Geocode.setRegion('es')
// Geocode.enableDebug()

const containerStyle = {
  width: '600px',
  height: '500px'
};

export default function Map(props) {
  const [hospitals] = useState(
    ["Bệnh viện FV", "Bệnh viện Chợ Rẫy", "Bệnh viện Bình Thạnh"]);
  const [mapLocation, setMapLocation] = useState([]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q"
  })

  useEffect(() => {

    (async () => {


      // Get the location of vietnam hospitals
      const locations = await Promise.all(hospitals.map(async hospital => {
        console.log(hospital);

        try {
          const res = await Geocode.fromAddress(hospital);
          const location = res.results[0].geometry.location;

          return location;
        } catch (e) {
          console.error(e)
        }
      }))

      console.log('locations', locations)
      setMapLocation(locations);
    })();

  }, [hospitals]);

  const onClickMarker = (e) => {
    console.log('onClickMarker', e)
  }

  const getMarkers = () => {
    return mapLocation.map((location, index) => {
      return (
        <Marker
          key={index}
          position={location}
          onClick={onClickMarker}
        />
      );
    })
  }

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapLocation[0]}
        zoom={13}
      >
        {getMarkers()}
      </GoogleMap>
    );
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : 'loading...'
}
