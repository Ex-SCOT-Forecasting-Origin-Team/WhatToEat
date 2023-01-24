import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';


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
    </div>
  );
};

export default Display;