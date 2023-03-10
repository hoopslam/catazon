import React from 'react';
import './Button.styles.scss';

const BUTTON_COLOR = {
    orange: `orange`,
    blue: `blue`,
    inverted: `inverted`,
    orangeInverted: `orange-inverted`,
};

function Button({ children, color = `orange`, isLoading, ...rest }) {
    return (
        <button
            className={`button-container ${BUTTON_COLOR[color]}`}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? <div className='button-loading-spinner' /> : children}
        </button>
    );
}

export default Button;
