import React, { useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { geoFindMe } from './location.js';
import './css/index.css';


function Display() {
  const navigate = useNavigate();
  const navigateToCuisine = (nationality) => {  
    navigate({
      pathname: "/cuisine",
      search: createSearchParams({
        nationality: nationality
      }).toString()
    });
  };

  // Effect Hook: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    var location = geoFindMe();
  });

  const [searchParams] = useSearchParams();

  return (
    <div id="main">
      <br />
      <div class="WhatToEat"> 
        What To
        <br />
        Eat
      </div>
        <div class='rowContainer'>
            <div class="row">
                <button class="button" onClick={() => navigateToCuisine('American')} >
                    <img src={require('./Images/American.jpg')} alt="Food"></img>
                    <span>Chinese</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('American')} >
                    <img src={require('./Images/American.jpg')} alt="Food"></img>
                    <span>American</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Mexican')} >
                    <img src={require('./Images/Mexican.jpg')} alt="Food"></img>
                    <span>Mexican</span>  
                </button>
          </div>
          <div class="row">
                <button class="button" onClick={() => navigateToCuisine('Chinese')} >
                    <img src={require('./Images/Chinese.jpg')} alt="Food"></img>
                    <span>Chinese</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('American')} >
                    <img src={require('./Images/American.jpg')} alt="Food"></img>
                    <span>American</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Mexican')} >
                    <img src={require('./Images/Mexican.jpg')} alt="Food"></img>
                    <span>Mexican</span>  
                </button>
          </div>
      </div>
    </div>
  );
};

export default Display;