import PriceSummary from "./PriceSummary";
import CheckoutInfoSliceCard from "./CheckoutInfoSliceCard";
import { markup } from "../../../helpers/Prices";
import { get_currency_symbol } from "../../../helpers/general";

const CheckoutInfo = (props) => {

    const { flight, prices, adapted_available_services } = props;
    console.log("Checkout Infor", flight);
    console.log("Available Services", adapted_available_services);

    const { total_amount, total_currency, 
            slices, owner, conditions, 
            available_services, passengers 
    } = flight;

    const SLICES = slices.map((each, i)=><CheckoutInfoSliceCard index={i} slice={each} />)

    const BAGGAGES=[];
    for(let i=0; i<adapted_available_services.length; i++){
        /**
         * {
                "type": "baggage",
                "total_currency": "USD",
                "total_amount": "25.40",
                "segment_ids": [
                    "seg_0000AcP2kwhhlQXyvF3U1I"
                ],
                "passenger_ids": [
                    "pas_0000AcP2kwXQNeK8PMFGzq"
                ],
                "metadata": {
                    "type": "checked",
                    "maximum_weight_kg": 23,
                    "maximum_length_cm": null,
                    "maximum_height_cm": null,
                    "maximum_depth_cm": null
                },
                "maximum_quantity": 1,
                "id": "ase_0000AcP2qTyZUEqLYsaIQj"
            }
         */
        if(adapted_available_services[i].type==="baggage"){
            const CURRENCY_SYMBOL = get_currency_symbol(adapted_available_services[i].total_currency);
            const TOTAL_AMOUNT = adapted_available_services[i].total_amount;
            const QUANTITY = adapted_available_services[i]?.maximum_quantity || 0;
            const MAX_WEIGHT_KG = (adapted_available_services[i]?.metadata && adapted_available_services[i]?.metadata?.maximum_weight_kg)
            BAGGAGES.push(
                <div style={{padding: 10, marginBotton: 10, cursor: "pointer", borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                {
                                    QUANTITY && ("Quantity: "+QUANTITY)
                                }
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 14, fontFamily: "'Prompt', Sans-serif", marginBottom: 5}}>
                                {
                                    MAX_WEIGHT_KG && ("Maximum weight: "+MAX_WEIGHT_KG+"kg")
                                }
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontWeight: 1000, fontSize: 14, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                                <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "initial"}}>Each price:</span> <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                                    dangerouslySetInnerHTML={{__html: CURRENCY_SYMBOL}}></span>
                                {(markup(TOTAL_AMOUNT).new_price).toFixed(2)}</p>
                        </div>
                        <div style={{marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 14, fontFamily: "'Prompt', Sans-serif", marginBottom: 10, textAlign: "right"}}>
                                    Total: $0.00
                               </p>
                                <div style={{display: "flex"}}>
                                    <p style={{backgroundColor: "white", fontSize: 20, width: 35, height: 35, borderRadius: "100%", border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        -
                                    </p>
                                    <p style={{fontSize: 14, width: 30, height: 35, borderRadius: "100%", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        0
                                    </p>
                                    <p style={{backgroundColor: "white", fontSize: 16, width: 35, height: 35, borderRadius: "100%", border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        +
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    if(BAGGAGES.length<1){
        BAGGAGES.push(
            <div style={{padding: 10, border: "1px solid rgba(0,0,0,0.1)", display: "flex", backgroundColor: "rgba(255,0,0,0.1)", justifyContent: "center"}}>
                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14, marginRight: 10}}>
                    <i style={{color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                </span>
                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14}}>
                    Checked bags inclusion not available at this time
                </span>
            </div>
        );
    }

    return (
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
                        <div style={{padding: "10px 0"}}>
                            <div style={{padding: 10, border: "1px solid rgba(0,0,0,0.1)", display: "flex", backgroundColor: "rgba(255,0,0,0.1)", justifyContent: "center"}}>
                                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14, marginRight: 10}}>
                                    <i style={{color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                                </span>
                                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14}}>
                                    Seat selection not available at this time
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="meal_ancillary_settings_container" className="each_ancillary_setting_container">
                        <p style={{textAlign: "center", fontSize: 15, letterSpacing: 1, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            Add Meal to Your Trip
                        </p>
                        <div style={{padding: "10px 0"}}>
                            <div style={{padding: 10, border: "1px solid rgba(0,0,0,0.1)", display: "flex", backgroundColor: "rgba(255,0,0,0.1)", justifyContent: "center"}}>
                                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14, marginRight: 10}}>
                                    <i style={{color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                                </span>
                                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", fontSize: 14}}>
                                    Meals inclusion not available at this time
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="luggage_ancillary_settings_container" className="each_ancillary_setting_container">
                        <p style={{fontSize: 14, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)"}}>
                            Include Bags:
                        </p>
                        <div style={{padding: "10px 0"}}>
                            {BAGGAGES.map(each=>each)}
                        </div>
                    </div>
                    <div style={{margin: "10px 0"}}>
                        <p style={{display: "flex"}}>
                            <span style={{color: "rgba(0,0,0,0.7)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                <i style={{marginRight: 5, color: "green"}} className="fa-solid fa-info"></i>
                            </span>
                            <span style={{color: "rgba(0,0,0,0.7)", fontSize: 13, fontFamily: "'Prompt', Sans-serif",}}>
                                FYI, the ancillary services you include here are unbound with the base price. Therefore adding them will cost 
                                extra money.
                            </span>
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
                    total_travelers={flight.passengers.length}
                />
            </div>
        </div>
    );
}

export default CheckoutInfo;