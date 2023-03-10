import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../button/Button';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import FormInput from '../login/FormInput';
import './PaymentForm.styles.scss';

function PaymentForm({ amount }) {
    const [cardName, setCardName] = useState(``);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const { clearCart } = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            }
        ).then((res) => res.json());

        const client_secret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: cardName,
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert(`Payment Complete`);
                clearCart();
            }
        }
    };

    return (
        <div className='payment-form-container'>
            <form
                className='stripe-form-container'
                onSubmit={paymentHandler}
            >
                <h2>Credit Card Payment: </h2>
                <FormInput
                    required
                    label='Name on Card'
                    type='text'
                    name='name on card'
                    onChange={(e) => setCardName(e.target.value)}
                    value={cardName}
                />
                <CardElement />
                <div className='payment-button-container'>
                    <Button
                        color='orange-inverted'
                        isLoading={isProcessingPayment}
                    >
                        Pay Now
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default PaymentForm;
