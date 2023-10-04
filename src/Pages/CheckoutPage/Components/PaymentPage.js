const PaymentPage = (props) => {
    return (
        <div>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <p>Payment</p>
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                        <p style={{fontSize: 19, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            Price Summary
                        </p>
                        <div style={{marginTop: 20, borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                                    Traveler: 1 Adult
                                </p>
                                <p style={{fontSize: 14, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                    $133.28
                                </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                                    Flight
                                </p>
                                <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                                    $101.10
                                </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                                    Taxes and fees
                                </p>
                                <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                                    $32.18
                                </p>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                            <div>
                                <p style={{fontSize: 17, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                                    Total
                                </p>
                                <p style={{fontSize: 12, marginTop: 5, color: "rgba(0,0,0,0.7)"}}>
                                    <i style={{marginRight: 5}} className="fa fa-info-circle"></i>
                                    prices are quoted in US dollars
                                </p>
                            </div>
                            <p style={{fontSize: 17, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                $133.28
                            </p>
                        </div>
                        <div className="checkout_page_main_checkout_btn_container">
                            <p className="checkout_page_mobile_button_place_total_price_display">
                                <i style={{marginRight: 5}} className="fa fa-info-circle"></i>
                                The total amout you pay is $133.28. See price summary at the bottom
                            </p>
                            <div className="checkout_page_main_checkout_btn">
                                <i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>Checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;