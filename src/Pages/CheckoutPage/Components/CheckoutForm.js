import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = (props) => {

  const { 
    createOrderOnSubmit,
    startProcessingPayment,
    startProcessingBookingOrderError,
    setCheckoutConfirmation,
    setJustPaid,
    justPaid,
    paymentIntent, 
    setPaymentIntent,
  } = props;

  const stripe = useStripe();
  const elements = useElements();

  const CheckoutOnSubmit = async (event) => {

    event.preventDefault();

    // 1. Processing Payment
    await startProcessingPayment();
    
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    let result;
    if(!justPaid){
        result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
            return_url: "https://willgo-test.herokuapp.com",
        },
        redirect: "if_required",
        });

        if (result?.error && !justPaid) {
        await startProcessingBookingOrderError();
        setCheckoutConfirmation({
            type: "server_error",
            isError: true,
            message: result?.error?.message,
        });
        return;
        } else if (
            (result?.paymentIntent 
            && result?.paymentIntent?.status === "succeeded")
            || justPaid
        ) {
        // 2. To do: Provide logging for payment here
        console.log("Payment Success:", result);
        setJustPaid(true);
        setPaymentIntent(result?.paymentIntent);
        } else {
        await startProcessingBookingOrderError();
        setCheckoutConfirmation({
            type: "server_error",
            isError: true,
            message: "Payment failed",
        });
        return;
        }
    }
    console.log("payment intent", result?.paymentIntent);
    // 3. Creating the Booking Order
    // Security - Server checks payment Status using payment intent before ordering booking
    let pi=((result?.paymentIntent) || paymentIntent)
    createOrderOnSubmit(pi);
  };

  return (
    <form onSubmit={CheckoutOnSubmit}>
      { !justPaid &&
        <PaymentElement />
      }
      <button className='checkout_page_main_checkout_btn'
        style={{width: "100%", margin: "10px 0", border: "none", fontFamily: "'Prompt', Sans-serif"}} disabled={!stripe}>
        {
            justPaid ? <>Re-order Booking</> :
            <><i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>
            Checkout</>
        }
      </button>
    </form>
  )
};

export default CheckoutForm;