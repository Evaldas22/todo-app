import React from 'react';
import { Button as BootButton } from 'reactstrap';
import './Button.css';

const Button = ({ clickHandler, label, color, className }) => {
    return (
        <BootButton 
            color={color} 
            onClick={clickHandler}
            className={`button ${className}`}>
            {label}
        </BootButton>
    )
}

export default Button;