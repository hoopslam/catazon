import React from 'react';
import './Button.styles.scss';

const BUTTON_COLOR = {
    orange: `orange`,
    blue: `blue`,
    inverted: `inverted`,
    orangeInverted: `orange-inverted`,
};

function Button({ children, color = `orange`, ...rest }) {
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
