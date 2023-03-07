import React from 'react';
import './Button.styles.scss';

const BUTTON_COLOR = {
    blue: `blue`,
    inverted: `inverted`,
};

function Button({ children, color, ...rest }) {
    return (
        <button
            className={`button-container ${BUTTON_COLOR[color]}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
