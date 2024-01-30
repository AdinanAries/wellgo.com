import PriceSummary from "./PriceSummary";
import FormErrorCard from "../../../components/FormErrorCard";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OdjZ3An0YMgH2TtyCpkCBN4vDrMuQlwvmFSNKqBl9gJY996OXSpZ9QLz5dBGHLYLsa7QVvwY51I0DcLHErLxW7y00vjEWv9Lc');


const PaymentPage = (props) => {

    const { 
        payments, 
        prices, 
        total_travelers, 
        checkoutConfirmation,
        createOrderOnSubmit,
        startProcessingPayment,
        startProcessingBookingOrderError,
        setCheckoutConfirmation,
        options // For stripe
    } = props;
    
    return (
        <div>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <div style={{padding: 10}}>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder", fontSize: 13, color: "rgba(0,0,0,0.6)"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-credit-card"></i>
                            Payment Method
                        </p>
                        {
                            (options?.clientSecret) && <div style={{marginTop: 10}}>
                                <Elements stripe={stripePromise} options={options}>
                                    <CheckoutForm 
                                        createOrderOnSubmit={createOrderOnSubmit} 
                                        startProcessingPayment={startProcessingPayment}
                                        startProcessingBookingOrderError={startProcessingBookingOrderError}
                                        setCheckoutConfirmation={setCheckoutConfirmation}
                                    />
                                </Elements>
                            </div>
                        }
                        <div style={{padding: 10, marginTop: 10, minHeight: 100, background: "rgba(0,0,0,0.1)"}}>
                            <p style={{marginBottom: 10, fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgba(0,0,0,0.6)"}}>
                                <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                                TEST PAYMENT CARD
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12, textAlign: "center", color: "rgba(0,0,0,0.6)"}}>
                                This app is still in test mode! You may use Card No. Below for Testing
                                <br/>
                                <span style={{color: "blue", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                    Number: 4242 4242 4242 4242
                                </span>
                                <br/>
                                <span style={{color: "blue", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                                    Any valid CVC, Expiration, and Zip Code can be entered for testing...
                                </span>
                            </p>
                        </div>
                    </div>
                    {
                        
                        checkoutConfirmation.isError && <div 
                            style={{backgroundColor: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.1)"}}>
                            <FormErrorCard 
                                fontSize={14}
                                message={checkoutConfirmation.message} 
                                type={checkoutConfirmation.type}
                            />
                            <div style={{padding: 10, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                                <p  style={{marginBottom: 8, color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sanserif", fontWeight: "bolder", fontSize: 13}}>
                                    Emergency Contact</p>
                                <p style={{fontFamily: "'Prompt', Sanserif", fontSize: 13}}>
                                    Call: <span style={{letterSpacing: 1, color: "green",fontFamily: "'Prompt', Sanserif", fontSize: 13}}>
                                        +1 7327999546 </span>
                                </p>
                                <p style={{fontFamily: "'Prompt', Sanserif", fontSize: 13}}>
                                    Email: <span style={{letterSpacing: 1, color: "green",fontFamily: "'Prompt', Sanserif", fontSize: 13}}>
                                    adinanaries@outlook.com </span>
                                 </p>
                                 <div style={{display: "flex", alignItems: "center", marginTop: 10}}>
                                    <div style={{marginRight: 10, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "100%", width: 57, height: 57, backgroundColor: "rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.1)"}}>
                                        <div>
                                            <p style={{textAlign: "center", fontSize: 22, marginTop: -5}}>
                                                <i style={{color: "rgba(0,0,0,0.7)"}} className="fa-solid fa-robot"></i>
                                            </p>
                                            <p style={{fontSize: 9, fontFamily: "'Prompt', Sanserif"}}>
                                                Bot AD</p>
                                        </div>
                                    </div>
                                    <p style={{fontFamily: "'Prompt', Sanserif", fontSize: 13}}>
                                        Hey! we're with you every step of the way. Please reach out...
                                    </p>
                                 </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary 
                        prices={prices} 
                        payments={payments} 
                        buttonFunction={()=>{alert("I dont work")}}//createOrderOnSubmit} 
                        buttonText="" 
                        isPaymentPage={true} 
                        total_travelers={total_travelers}
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;