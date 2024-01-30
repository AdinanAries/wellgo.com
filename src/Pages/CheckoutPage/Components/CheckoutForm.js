import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
<<<<<<< HEAD
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
=======
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button style={{ display: "none",
          color: "white", backgroundColor: "rgb(23, 87, 148)", width: "100%", margin: "10px 0",
          border: "none", fontFamily: "'Prompt', Sans-serif", padding: 10, textAlign: "center"}}
        disabled={!stripe}>Submit</button>
    </form>
  )
>>>>>>> parent of 300e69b... now payment integrates with checkout workflow
};

export default CheckoutForm;