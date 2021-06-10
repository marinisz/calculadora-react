import React from 'react';
import './Button.css'

const Button = (props,{onClick}) => {

    return ( 
        <button onClick={onClick}>
            {props.a} 
        </button>
        
     );
}
 
export default Button;