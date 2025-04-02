import React from "react";
import '../../index.css';
const Button = (props) => {
    // Määrame nupu klassi vastavalt textOnly prop'ile
    const buttonClass = props.textOnly ? 'text-button' : 'button';
    return (
        <button className={buttonClass} type={props.type || 'button'} onClick={props.onClick}
        disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button