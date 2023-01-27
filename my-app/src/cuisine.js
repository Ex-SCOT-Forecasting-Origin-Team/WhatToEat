import React from 'react';
import { useSearchParams } from 'react-router-dom';


function Cuisine() {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <img src={require('./Images/' + searchParams.get('nationality') + '.jpg')} alt="American Food" height={200} width={200}></img>
            <p> Results for: { searchParams.get('nationality') }</p>
        </div>
    );
}

export default Cuisine;