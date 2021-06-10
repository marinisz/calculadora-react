import React from 'react';
import './Display.css'

const Display = (props) => {
    return ( 
        <div className="display-container">
            {props.valor}
        </div>
     );
}
 
export default Display;