import React, { useEffect } from 'react';
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

  // Effect Hook: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    geoFindMe();
  });

  return (
    <div >
      {/* <button onClick={() => navigateToCuisine('Home')}>
            WhatToEat
        </button> */}
      <br />
      <br />
      <p id="status"></p>
      <a id="map-link" target="_blank"></a>
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
         
    </div>
  );
};

export default Display;