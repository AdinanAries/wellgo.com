import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { getApiHost } from '../../../Constants/Environment';

const CheckoutForm = (props) => {

  const { 
    createOrderOnSubmit,
    startProcessingPayment,
    startProcessingBookingOrderError,
    checkoutConfirmation,
    setCheckoutConfirmation,
    paymentIntent, 
    setPaymentIntent,
    bookingIntent, 
    setBookingIntent,
    checkoutPayload,
  } = props;

  const API_HOST=getApiHost();

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
    let bi;
    if(!paymentIntent?.id){
        result = await stripe.confirmPayment({
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
        } else if (result?.paymentIntent && result?.paymentIntent?.status === "requires_capture")    
        {
          // Creating booking intent with payment
          let bookingItent = {
            payment_intent: result?.paymentIntent,
            booking_order: checkoutPayload,
          }
          bi = await fetch((API_HOST+'/api/activities/booking-intent/'), {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingItent)
          }).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
          setBookingIntent(bi);
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
    
    // 3. Creating the Booking Order
    // Security - Server checks payment Status using payment intent before ordering booking
    let pi=((result?.paymentIntent) || paymentIntent);
    let _bi=(bi?._id || bookingIntent);
    createOrderOnSubmit(pi, _bi);
  };

  return (
    <form onSubmit={CheckoutOnSubmit}>
      { (!paymentIntent?.id) &&
        <PaymentElement />
      }
      { paymentIntent?.id &&
        <div style={{padding: 10, border: "1px solid rgba(0,255,0,0.1)", background: "rgba(0,255,0,0.1)"}}>
          
          <div>
            <div style={{display: "flex", alignItems: "center",}}>
              <p style={{fontSize: 12}}> 
                <i style={{fontSize: 12, marginRight: 10, color: "green"}} className="fa-solid fa-info"></i>
              </p>
              <p style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                <span style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                  Important Notice:</span> We 
                have captured your payment details, You only need to re-submit the order at this point
              </p>
            </div>
            { checkoutConfirmation?.isError &&
              <div style={{marginTop: 10, borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: 10}}>
                <p style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                  The server returned the following error message: 
                  <span style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif", padding: "0 5px", margin: 5, backgroundColor: "crimson", color: "white"}}>
                    "{checkoutConfirmation.message}".</span>
                  <b/>
                    Please go back one step and check your passenger details by clicking on 
                    <span style={{fontSize: 12, fontFamily: "'Prompt', Sans-serif", padding: "0 5px", margin: 5, backgroundColor: "crimson", color: "white"}}>
                      "Passengers"</span> at the top.
                  <b/> Then open the passenger forms to confirm their details are correct
                </p>
              </div>
            }
          </div>
        </div>
      }
      <button className='checkout_page_main_checkout_btn'
        style={{width: "100%", margin: "10px 0", border: "none", fontFamily: "'Prompt', Sans-serif"}} disabled={!stripe}>
        {
            (paymentIntent?.id) ? <>Submit Order</> :
            <><i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>
            Checkout</>
        }
      </button>
    </form>
  )
};

export default CheckoutForm;