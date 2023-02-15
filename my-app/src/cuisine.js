import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { GoogleMap, useJsApiLoader , Marker} from "@react-google-maps/api";
import './css/index.css'

function Cuisine() {
    const navigate = useNavigate();
    const navigateToHome = (nationality) => {  
        navigate({
        pathname: "/"
        });
    };
    const [searchParams] = useSearchParams();
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

   function Map() {
        return (
            <div>
                <button onClick={() => navigateToHome()}>
                WhatToEat
                </button>
                <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food" height={200} width={200}></img>
                <p> Results for: { searchParams.get('nationality') }</p>
                <button onClick={() => nearbySearch()}>
                searchNearbyRestaurant
                </button>
                <button onClick={() => addMarker()}>
                addMarker
                </button>
                <GoogleMap
                    zoom={10}
                    center={{ lat: latitude, lng: longitude}}
                    mapContainerClassName="map-container"
                    id='map'
                >
                    <Marker position={{lat: latitude, lng: longitude}} />
                </GoogleMap>
                <GoogleMap id='map2'></GoogleMap>
                <p id='restaurantList'></p>
            </div>
        )
    }

    const nearbySearch = () => {
        let currentPos = new window.google.maps.LatLng(latitude, longitude);
        var service = new window.google.maps.places.PlacesService(document.getElementById('map2'));
        var request = {
            type: ['restaurant'],
            location: currentPos,
            radius: '500',
        };

        service.nearbySearch(request, function(results, status) {
            console.log("Call Google nearbySearch API")
            const restaurantList = document.getElementById('restaurantList')
            restaurantList.textContent = ""
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              console.log("Google nearbySearch API loaded successfully")
              for (let i = 0; i<5 && i <results.length; i++){
                const restaurantHtml = document.createElement("ul")
                const nameNode = document.createElement("li");
                let name =  document.createTextNode("name: " + results[i].name);
                const latlngNode = document.createElement("li");
                let latlong =  document.createTextNode("latitude: " + results[i].geometry.location.lat() + " longitude: " + results[i].geometry.location.lng());
                const priceNode = document.createElement("li");
                let price =  document.createTextNode("price: " + results[i].price_level);
                const ratingNode = document.createElement("li");
                let rating =  document.createTextNode("rating: " + results[i].rating);
                nameNode.appendChild(name);
                latlngNode.appendChild(latlong);
                priceNode.appendChild(price);
                ratingNode.appendChild(rating);

                restaurantHtml.appendChild(nameNode);
                restaurantHtml.appendChild(latlngNode);
                restaurantHtml.appendChild(priceNode);
                restaurantHtml.appendChild(ratingNode);
                restaurantList.append(restaurantHtml);
              }
            }
        });
    }

    // TODO add markers of the nearbyRestaurant to the app
    const addMarker = () => {
        // console.log(document.getElementById('map'));
        // let map = new window.google.maps.Map(document.getElementById("map2"));
        // const marker = new window.google.maps.Marker({
        //     map,
        //     position: new window.google.maps.LatLng(-33.8665433,151.1956316),
        //   });
    }


    function success(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }

    function error() {
        console.log("load current position failed")
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAVa_kbWiQaQH9gqZhzq3EqKYuRR8h8chw",
        libraries: ['places']
    });
    if (!isLoaded) return <div>Loading</div>
    return <Map />;

}

export default Cuisine;