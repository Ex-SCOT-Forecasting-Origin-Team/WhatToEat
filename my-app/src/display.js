import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { geoFindMe } from './location.js';

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

  return (
    <div >
      WhatToEat
      <br />
      <br />
      <br />
        <button onClick={() => navigateToCuisine('Chinese')}>
          Chinese
        </button>
        <button onClick={() => navigateToCuisine('American')}>
            American
        </button>
        <button onClick={() => navigateToCuisine('Mexican')}>
            Mexican
        </button>
        <button onClick={() => navigateToCuisine('Korean')}>
            Korean
        </button>

        <button onClick={() => geoFindMe()}>
          Show my location
        </button>
        <p id="status"></p>
        <a id="map-link" target="_blank"></a>
         
    </div>
  );
};

export default Display;