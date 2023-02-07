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
    var location =geoFindMe();
  });

  const [searchParams] = useSearchParams();

  return (
    <div style={{ background: '#EBE2D9' }} id="main">
    <br />
    <div class="WhatToEat"> 
      What To
      <br />
      Eat
      </div>
      <p id="status"></p>
      <a id="map-link" target="_blank"></a>
      <div class="row">
          <button class="button" onClick={() => navigateToCuisine('Chinese')} >
              <img src={require('./Images/Chinese.jpg')} alt="Food" height={200} width={200}></img>
              <span>Chinese</span>   
          </button>
          <button class="button" onClick={() => navigateToCuisine('American')} >
              <img src={require('./Images/American.jpg')} alt="Food" height={200} width={200}></img>
              <span>American</span>   
          </button>
          
          <button class="button" onClick={() => navigateToCuisine('Mexican')} >
              <img src={require('./Images/Mexican.jpg')} alt="Food" height={200} width={200}></img>
              <span>Mexican</span>  
          </button>
           
          <button class="button" onClick={() => navigateToCuisine('Korean')} >
              <img src={require('./Images/Korean.jpg')} alt="Food" height={200} width={200}></img>
              <span>Korean</span>  
          </button>
    </div>
    <div class="row">
          <button class="button" onClick={() => navigateToCuisine('Chinese')} >
              <img src={require('./Images/Chinese.jpg')} alt="Food" height={200} width={200}></img>
              <span>Chinese</span>   
          </button>
          <button class="button" onClick={() => navigateToCuisine('American')} >
              <img src={require('./Images/American.jpg')} alt="Food" height={200} width={200}></img>
              <span>American</span>   
          </button>
          
          <button class="button" onClick={() => navigateToCuisine('Mexican')} >
              <img src={require('./Images/Mexican.jpg')} alt="Food" height={200} width={200}></img>
              <span>Mexican</span>  
          </button>
           
          <button class="button" onClick={() => navigateToCuisine('Korean')} >
              <img src={require('./Images/Korean.jpg')} alt="Food" height={200} width={200}></img>
              <span>Korean</span>  
          </button>
    </div>
    </div>
  );
};

export default Display;