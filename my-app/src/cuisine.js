import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { GoogleMap, useJsApiLoader , Marker} from "@react-google-maps/api";
import './css/cuisine.css';


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
                <br />
            <button class="WhatToEat" onClick={() => navigateToHome()}> 
                What To
                Eat
            </button>
            <div class="mainContent">
                <div class="mainImage">
                    <GoogleMap
                        zoom={10}
                        center={{ lat: latitude, lng: longitude}}
                        mapContainerClassName="map-container"
                        id='map'
                    >
                        <Marker position={{lat: latitude, lng: longitude}} />
                    </GoogleMap>
                </div>
                <button onClick={() => nearbySearch()}>
                searchNearbyRestaurant
                </button>
                <button onClick={() => addMarker()}>
                addMarker
                </button>
                <GoogleMap id='map2'></GoogleMap>
                <p id='restaurantList'></p>
                <div class="nearbyrestaurants" id="nearbyRestaurants"></div>
            </div>
            </div>
        )
    }

    const nearbySearch = () => {
        let currentPos = new window.google.maps.LatLng(latitude, longitude);
        var service = new window.google.maps.places.PlacesService(document.getElementById('map2'));
        var request = {
            type: ['restaurant'],
            keyword: searchParams.get('nationality'),
            location: currentPos,
            radius: '5000',
        };

        service.nearbySearch(request, function(results, status) {
            console.log("Call Google nearbySearch API")
            const restaurantList = document.getElementById('nearbyRestaurants');
            restaurantList.textContent = "";
            restaurantList.append(document.createElement("br"));
            restaurantList.append(document.createElement("br"));
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              console.log("Google nearbySearch API loaded successfully")
              for (let i = 0; i<4 && i <results.length; i++){
                const restaurantHtml = document.createElement("div");
                restaurantHtml.classList.add("restaurants");

                const imageDiv = document.createElement("div");
                imageDiv.classList.add("restaurantImage")
                const restaurantImg = document.createElement("img");
                restaurantImg.src = require('./Images/' + searchParams.get('nationality') + '.jpg');
                restaurantImg.alt = "Food";
                imageDiv.appendChild(restaurantImg);
                restaurantHtml.appendChild(imageDiv);

                const restaurantInfoDiv = document.createElement("div");

                restaurantInfoDiv.classList.add("restaurantInfo");
                const restaurantNameSpan = document.createElement("span");
                restaurantNameSpan.classList.add("restaurantName");
                restaurantNameSpan.innerText = results[i].name;

                const restaurantInfoList = document.createElement("ul");
                const latlngNode = document.createElement("li");
                let latlong =  document.createTextNode("latitude: " + results[i].geometry.location.lat() + " longitude: " + results[i].geometry.location.lng());
                const priceNode = document.createElement("li");
                let price =  document.createTextNode("price: " + results[i].price_level);
                const ratingNode = document.createElement("li");
                let rating =  document.createTextNode("rating: " + results[i].rating);
                latlngNode.appendChild(latlong);
                priceNode.appendChild(price);
                ratingNode.appendChild(rating);
                restaurantInfoList.appendChild(latlngNode);
                restaurantInfoList.appendChild(priceNode);
                restaurantInfoList.appendChild(ratingNode);
                
                restaurantInfoDiv.appendChild(restaurantNameSpan);
                restaurantInfoDiv.appendChild(document.createElement("br"));
                restaurantInfoDiv.appendChild(restaurantInfoList)

                restaurantHtml.appendChild(restaurantInfoDiv);
                restaurantList.append(restaurantHtml)
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


    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey,
        libraries: ['places']
    });
    if (!isLoaded) return <div>Loading</div>
    return <Map />;

}

export default Cuisine;