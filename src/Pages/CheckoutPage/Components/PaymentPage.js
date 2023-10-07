import PriceSummary from "./PriceSummary";

const PaymentPage = (props) => {
    return (
        <div>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <p>Payment</p>
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary buttonFunction={()=>alert("here")} buttonText="" isPaymentPage={true} />
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;