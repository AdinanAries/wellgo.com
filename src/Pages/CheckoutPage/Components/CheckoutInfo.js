import PriceSummary from "./PriceSummary";
import CheckoutInfoSliceCard from "./CheckoutInfoSliceCard";

const CheckoutInfo = (props) => {

    const { flight, prices } = props;
    console.log("Checkout Infor", flight);

    const { total_amount, total_currency, 
            slices, owner, conditions, 
            available_services, passengers 
    } = flight;

    const SLICES = slices.map((each, i)=><CheckoutInfoSliceCard index={i} slice={each} />)

    return (
        <>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <div className="checkout-page-ancillary-container" style={{marginTop: 10}}>
                        <div onClick={global.start_select_seat_ancillary} className="checkout-page-each-ancillary">
                            <p><img src={"./flight_seat.png"} alt={"to do"} /></p>
                            <p>Select Seat</p>
                        </div>
                        <div onClick={global.start_add_meal_ancillary} className="checkout-page-each-ancillary">
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
                    {SLICES}
                </div>
                <div className="checkout_page_all_info_flex_right">
                    <PriceSummary 
                        buttonFunction={props.showPNRPage} 
                        buttonText="Passengers" 
                        prices={prices}
                    />
                </div>
            </div>
        </>
    );
}

export default CheckoutInfo;