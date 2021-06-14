import React from 'react';
import './Button.css'

const Button = ({ children, onClick,name }) => {
	return (
		<button name={name} onClick={onClick}>
			{children}
		</button>
	);
};
 
export default Button;