import React, { useState } from 'react';
import {
    createNewUserAuthWithEmail,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from './FormInput';
import './SignUpForm.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password.normalize() !== confirmPassword.normalize()) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createNewUserAuthWithEmail(email, password);

            await createUserDocumentFromAuth(user, { displayName });

            setFormFields(defaultFormFields);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.error(error);
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up now!</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    required
                    label='Display Name'
                    type='text'
                    name='displayName'
                    onChange={handleChange}
                    value={displayName}
                />
                <FormInput
                    required
                    label='Email'
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    required
                    label='Password'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={password}
                />
                <FormInput
                    required
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <Button
                    color='blue'
                    type='submit'
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default SignUpForm;
