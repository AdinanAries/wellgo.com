import PriceSummary from "./PriceSummary";

const PaymentPage = (props) => {
    const { payments, prices, total_travelers } = props;
    console.log("Prices:", prices);
    return (
        <div>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <p>Payment</p>
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary 
                        prices={prices} 
                        payments={payments} 
                        buttonFunction={()=>alert("here")} 
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