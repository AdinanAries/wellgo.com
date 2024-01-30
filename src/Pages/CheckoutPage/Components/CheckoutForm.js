import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {

  const { 
    createOrderOnSubmit,
    startProcessingPayment,
    startProcessingBookingOrderError,
    setCheckoutConfirmation,
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

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://willgo-test.herokuapp.com",
      },
      redirect: "if_required",
    });

    if (result?.error) {
      await startProcessingBookingOrderError();
      setCheckoutConfirmation({
          type: "server_error",
          isError: true,
          message: result?.error?.message,
      });
      return;
    } else if (result?.paymentIntent && result?.paymentIntent?.status === "succeeded") {
      // 2. To do: Provide logging for payment here
      console.log("Payment Success:", result);
    } else {
      await startProcessingBookingOrderError();
      setCheckoutConfirmation({
          type: "server_error",
          isError: true,
          message: "Payment failed",
      });
      return;
    }

    // 3. Creating the Booking Order
    createOrderOnSubmit();
  };

  return (
    <form onSubmit={CheckoutOnSubmit}>
      <PaymentElement />
      <button className='checkout_page_main_checkout_btn'
        style={{width: "100%", margin: "10px 0", border: "none", fontFamily: "'Prompt', Sans-serif"}} disabled={!stripe}>
        <i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>
        Checkout
      </button>
    </form>
  )
};

export default CheckoutForm;