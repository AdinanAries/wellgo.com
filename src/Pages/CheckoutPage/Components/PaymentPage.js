import PriceSummary from "./PriceSummary";
import FormErrorCard from "../../../components/FormErrorCard";

const PaymentPage = (props) => {
    const { 
        payments, 
        prices, 
        total_travelers, 
        checkoutConfirmation,
        createOrderOnSubmit 
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
                        <div style={{padding: 10, marginTop: 10, minHeight: 100, background: "rgba(0,0,0,0.1)"}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgba(0,0,0,0.6)"}}>
                                This app is still in test mode, you may process without adding card details...
                            </p>
                            <p style={{marginTop: 10, fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgba(0,0,0,0.6)"}}>
                                <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                                PAYMENT FORM DISABLED
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
                        </div>
                    }
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary 
                        prices={prices} 
                        payments={payments} 
                        buttonFunction={createOrderOnSubmit} 
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