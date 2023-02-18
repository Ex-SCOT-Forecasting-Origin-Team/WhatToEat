import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import WhatToEat from './WhatToEat';
import './css/display.css';


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
  const navigateToHome = (nationality) => {  
    navigate({
    pathname: "/"
    });
};

  const [searchParams] = useSearchParams();

  return (
    <div id="main">
        <br />
            <WhatToEat />
        <div class='rowContainer'>
            <div class="row">
                <button class="button" onClick={() => navigateToCuisine('American')} >
                    <img src={require('./Images/American.jpg')} alt="Food"></img>
                    <span>American</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Korean')} >
                    <img src={require('./Images/Korean.jpg')} alt="Food"></img>
                    <span>Korean</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Mexican')} >
                    <span>Mexican</span>  
                    <img src={require('./Images/Mexican.jpg')} alt="Food"></img>
                </button>
                <button class="button" onClick={() => navigateToCuisine('Sushi')} >
                    <img src={require('./Images/Sushi.jpg')} alt="Food"></img>
                    <span>Sushi</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Chinese')} >
                    <img src={require('./Images/Chinese.jpg')} alt="Food"></img>
                    <span>Chinese</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('groupVoting')} >
                    <img src={require('./Images/groupVoting.jpg')} alt="Food"></img>
                </button>
          </div>
          <div class="row">
                <button class="button" onClick={() => navigateToCuisine('Sushi')} >
                    <img src={require('./Images/Sushi.jpg')} alt="Food"></img>
                    <span>Sushi</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Chinese')} >
                    <img src={require('./Images/Chinese.jpg')} alt="Food"></img>
                    <span>Chinese</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('groupVoting')} >
                    <img src={require('./Images/groupVoting.jpg')} alt="Food"></img>
                </button>
                <button class="button" onClick={() => navigateToCuisine('Sushi')} >
                    <img src={require('./Images/Sushi.jpg')} alt="Food"></img>
                    <span>Sushi</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('Chinese')} >
                    <img src={require('./Images/Chinese.jpg')} alt="Food"></img>
                    <span>Chinese</span>   
                </button>
                <button class="button" onClick={() => navigateToCuisine('groupVoting')} >
                    <img src={require('./Images/groupVoting.jpg')} alt="Food"></img>
                </button>

          </div>
      </div>
    </div>
  );
};

export default Display;