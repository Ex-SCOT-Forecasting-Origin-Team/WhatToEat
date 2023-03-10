import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import WhatToEat from './WhatToEat';
import Map from './Map';
import './css/cuisine.css';


function Cuisine() {
    const navigate = useNavigate();
    const navigateToHome = (nationality) => {  
        navigate({
        pathname: "/"
        });
    };;

    const [searchParams] = useSearchParams();
    return (
        <div>
            <br />
            <WhatToEat />
            <div class="mainContent">
                <div class="mainImage">
                    <Map />
                    {/* <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food"></img> */}
                </div>
                <div class="nearbyrestaurants">
                    <br></br>
                    <br></br>
                    <div class="restaurants">
                        <div class="restaurantImage">
                            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food"></img>
                        </div>
                        <div class="restaurantInfo">
                            <span class="restaurantName">Restaurant Name</span>  
                            <br></br> 
                            <span class="restaurantDistance">.5 MILES</span>        
                        </div>
                    </div>
                    <div class="restaurants">
                        <div class="restaurantImage">
                            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food"></img>
                        </div>
                        <div class="restaurantInfo">
                            <span class="restaurantName">Restaurant Name</span>  
                            <br></br> 
                            <span class="restaurantDistance">.5 MILES</span>        
                        </div>
                    </div>
                    <div class="restaurants">
                        <div class="restaurantImage">
                            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food"></img>
                        </div>
                        <div class="restaurantInfo">
                            <span class="restaurantName">Restaurant Name</span>  
                            <br></br> 
                            <span class="restaurantDistance">.5 MILES</span>        
                        </div>
                    </div>
                    <div class="restaurants">
                        <div class="restaurantImage">
                            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food"></img>
                        </div>
                        <div class="restaurantInfo">
                            <span class="restaurantName">Restaurant Name</span>  
                            <br></br> 
                            <span class="restaurantDistance">.5 MILES</span>        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cuisine;