import './css/WhatToEat.css';
import { useNavigate } from 'react-router-dom';

import React from 'react';

function WhatToEat() {
    const navigate = useNavigate();
    const navigateToHome = (nationality) => {  
        navigate({
        pathname: "/"
        });
    };;
  return (
    <button className="WhatToEat" onClick={() => navigateToHome()}>
    What To
    Eat
    </button>
  );
}

export default WhatToEat;