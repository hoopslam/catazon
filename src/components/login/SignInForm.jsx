import React, { useState } from 'react';
import {
    signInUserWithEmail,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from './FormInput';
import './SignInForm.styles.scss';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '',
};

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGooglePopup();
            setFormFields(defaultFormFields);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInUserWithEmail(email, password);
            setFormFields(defaultFormFields);
            navigate('/');
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.error(error);
            }
        }
    };

    return (
        <div className='sign-up-container'>
            <h2>Email or Google Sign In</h2>
            <span>Use your email or Google account to sign in</span>
            <form onSubmit={handleSubmit}>
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
                <div className='buttons-container'>
                    <Button
                        color='blue'
                        type='submit'
                    >
                        Sign In
                    </Button>
                    <Button
                        type='button'
                        color='inverted'
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle
                            style={{
                                width: `24px`,
                                height: `auto`,
                                margin: `auto`,
                            }}
                        />
                        Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
