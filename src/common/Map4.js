import React, { useEffect, useState, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader"


export default function Map(props) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyBTdA_CZDkBE3mEJKA7f_9BB9k092w390Q",
      libraries: ["places"],
      version: "weekly",
    });


    loader.load().then(() => {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { lat: 10.8005, lng: 106.6612 },
        zoom: 12,
      }));
    });
  }, []);

  useEffect(() => {
    if (!map) return;

    const infowindow = new window.google.maps.InfoWindow();

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      placeId: "ChIJjakKOzAvdTER7WuO3pn-gZ4",
      fields: ["name", "formatted_address", "place_id", "geometry", "formatted_phone_number", "opening_hours"],
    }


    service.getDetails(request, (place, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new window.google.maps.Marker({
          map,
          position: place.geometry.location,
        });

        window.google.maps.event.addListener(marker, "click", () => {
          const content = document.createElement("div");
          const nameElement = document.createElement("h2");

          nameElement.textContent = place.name;
          content.appendChild(nameElement);

          const placeIdElement = document.createElement("p");

          placeIdElement.textContent = place.formatted_phone_number;
          content.appendChild(placeIdElement);

          const openHourElement = document.createElement("p");

          openHourElement.textContent = place.opening_hours.weekday_text;
          content.appendChild(openHourElement);


          const placeAddressElement = document.createElement("p");

          placeAddressElement.textContent = place.formatted_address;
          content.appendChild(placeAddressElement);
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
  }, [map])

  const getInfoBox = (place) => {
    console.log("placeInfo", place);
    return (
      <div>
        <h1>{place.name}</h1>
        <p>{place.formatted_address}</p>
        <p>{place.formatted_phone_number}</p>
        <p>{place.opening_hours}</p>
      </div>
    );
  }
  return (
    <div style={{ width: "600px", height: "500px" }} ref={mapRef} />
  )
}