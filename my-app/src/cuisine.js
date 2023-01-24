import React from 'react';
import { useSearchParams } from 'react-router-dom';


function Cuisine() {
    const [searchParams] = useSearchParams();
    return (
        <div >
            WhatToEat = { searchParams.get('nationality') }
        </div>
    );
}

export default Cuisine;