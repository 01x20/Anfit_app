import React from "react";

const Button = ({ title, onClick, className = "" }) => {
    return (
            <button 
            type="button" 
            onClick={onClick || undefined}
            className={`${className}`}>
                {title}
            </button>
    );
};

export default Button;