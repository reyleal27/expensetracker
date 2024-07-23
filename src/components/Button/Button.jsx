import React from 'react';
import s from './Button.module.css';

const Button = ({ text,isPrimaryButton= true, onClick, isDisabled = false }) => {
    const buttonClass = isPrimaryButton ? s.primaryButton : s.secondaryButton;

    return (
        <button onClick={onClick}
            disabled={isDisabled}
        className={buttonClass}>{text}</button>
    )
};

export default Button;
