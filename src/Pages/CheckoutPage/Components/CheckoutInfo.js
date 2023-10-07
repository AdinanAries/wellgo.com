import PriceSummary from "./PriceSummary";

const CheckoutInfo = (props) => {
    return (
        <>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <div className="checkout-page-ancillary-container" style={{marginTop: 10}}>
                        <div onclick={global.start_select_seat_ancillary} className="checkout-page-each-ancillary">
                            <p><img src={"./flight_seat.png"} alt={"to do"} /></p>
                            <p>Select Seat</p>
                        </div>
                        <div onClick="start_add_meal_ancillary();" className="checkout-page-each-ancillary">
                            <p><img src={"./meal-icon.png"} alt={"to do"}/></p>
                            <p>Add Meal</p>
                        </div>
                        <div onClick={global.start_add_luggage_ancillary} className="checkout-page-each-ancillary">
                            <p><img src={"./luggage_icon.png"} alt={"to do"}/></p>
                            <p>Add Luggage</p>
                        </div>
                    </div>
                    <div id="add_ancillaries_container">
                        <div onClick={global.hide_add_ancillaries_container} style={{backgroundColor: "white", cursor: "pointer", width: 35, height: 35, textAlign: "center", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", position: "absolute", zIndex: 1, top: 10, right: 10, color: "rgba(0,0,0,0.7)", fontSize: 19, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <i className="fa fa-angle-up"></i>
                        </div>
                        <div id="seat_ancillary_settings_container" className="each_ancillary_setting_container">
                            <p style={{textAlign: "center", fontSize: 15, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                Select Your Preferred Seat
                            </p>
                        </div>
                        <div id="meal_ancillary_settings_container" className="each_ancillary_setting_container">
                            <p style={{textAlign: "center", fontSize: 15, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                Add Meal to Your Trip
                            </p>
                        </div>
                        <div id="luggage_ancillary_settings_container" className="each_ancillary_setting_container">
                            <p style={{textAlign: "center", fontSize: 15, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                Include Checked Bags
                            </p>
                        </div>
                        <div style={{margin: "10px 0"}}>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                                <i style={{marginRight: 5, color: "green"}} className="fa-solid fa-info-circle"></i>
                                FYI, the ancillary services you include here are unbound with the base price. Therefore adding them will cost 
                                extra money.
                            </p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20, padding: "10px 0", borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                            <div onClick={global.cancel_add_ancillaries_container} style={{backgroundColor: "white", padding: 10, border: "1px solid rgba(0,0,0,0.1)", fontSize: 14, borderRadius: 50, cursor: "pointer"}}>
                                <i style={{marginRight: 10, color: "orangered"}} className="fa fa-times"></i>
                                Cancel
                            </div>
                            <div style={{backgroundColor: "white", padding: 10, border: "1px solid rgba(0,0,0,0.1)", fontSize: 14, borderRadius: 50, cursor: "pointer"}}>
                                <i style={{marginRight: 10, color: "green"}} className="fa fa-check"></i>
                                Save
                            </div>
                        </div>
                    </div>
                    <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                        <p style={{fontSize: 14, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            Montreal to New York
                        </p>
                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                            <img src={"./deltaIcon.png"} style={{width: 27, height: "auto", objectFit: "conver"}} alt={"to do"} />
                            Delta &#8226; Thu, Nov 25
                        </p>
                        <div style={{marginTop: 20}}>
                            <p style={{fontSize: 15, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                9:45am - 2:54pm
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                5h 9m (1 stop)
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                2h 1m in Toronto (YYZ)
                            </p>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 17, marginTop: 5}}>
                                <i style={{marginRight: 10}} className="fa fa-wifi"></i>
                            </p>
                            <p style={{cursor: "pointer", marginTop: 10, fontSize: 14, color: "#c900b0"}}>
                                See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                    <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                        <p style={{fontSize: 17, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            New York to Montreal
                        </p>
                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                            <img src={"./deltaIcon.png"} style={{width: 27, height: "auto", objectFit: "cover"}} alt={"to do"}/>
                            Delta &#8226; Thu, Nov 25
                        </p>
                        <div style={{marginTop: 20}}>
                            <p style={{fontSize: 15, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                                9:45am - 2:54pm
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                5h 9m (1 stop)
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                2h 1m in Toronto (YYZ)
                            </p>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 17, marginTop: 5}}>
                                <i style={{marginRight: 10}} className="fa fa-wifi"></i>
                            </p>
                            <p style={{cursor: "pointer", marginTop: 10, fontSize: 14, color: "#c900b0"}}>
                                See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary buttonFunction={props.showPNRPage} buttonText="Passengers" />
                </div>
            </div>
        </>
    );
}

export default CheckoutInfo;