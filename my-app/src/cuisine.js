import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './css/index.css'

function Cuisine() {
    const navigate = useNavigate();
    const navigateToHome = (nationality) => {  
        navigate({
        pathname: "/"
        });
    };

    const [searchParams] = useSearchParams();
    return (
        <div>
            <button onClick={() => navigateToHome()}>
            WhatToEat
        </button>
            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="Food" height={200} width={200}></img>
            <p> Results for: { searchParams.get('nationality') }</p>
        </div>
    );
}

export default Cuisine;