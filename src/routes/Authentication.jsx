import React from 'react';
import SignUpForm from '../components/login/SignUpForm';
import './Authentication.styles.scss';
import SignInForm from '../components/login/SignInForm';

function Authentication() {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;
