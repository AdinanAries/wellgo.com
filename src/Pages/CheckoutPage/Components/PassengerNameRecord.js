import { useState } from "react";
import PassengerCard from "./PassengerCard";
import PassengerForm from "./PassengerForm";
import { calculate_age } from "../../../helpers/general";

const PassengerNameRecord = (props) => {
    
    const UNSELECTED_PASSENGER_VALUE = -1;
    const PAGE_TITLES = {
        initial: {
            msg: "Please click on each passenger card below to add their details..",
            icon: "fa-solid fa-info"
        },
        passenger_selected: {
            msg: "Please Provide Passenger Information",
            icon: "fa-solid fa-user"
        }
    }

    const [ selectedPassengertIndex, setSelectedPassengertIndex ] = useState(UNSELECTED_PASSENGER_VALUE);
    const [ pageMsg, setPageMsg ] = useState(PAGE_TITLES.initial);

    const { passengers } = props;

    const selectPassengerCard = (index) => {
        setSelectedPassengertIndex(index);
        setPageMsg(PAGE_TITLES.passenger_selected);
    }

    const unSelectPassengerCard = () => {
        setSelectedPassengertIndex(UNSELECTED_PASSENGER_VALUE);
        setPageMsg(PAGE_TITLES.initial);
    }

    const savePassengerInfo = (new_info_obj, index) => {
        props.savePassengerInfo(new_info_obj, index);
        unSelectPassengerCard();
    }

    return (
        <div>
            <div className="checkout_page_all_info_flex_container">
                <div className="checkout_page_all_info_flex_left">
                    <div style={{marginTop: 10}}>
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                            <i className={pageMsg.icon} style={{marginRight: 10, color: "green"}}></i>
                            {pageMsg.msg}</p>
                        <div style={{padding: "10px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                            
                            { ((selectedPassengertIndex > UNSELECTED_PASSENGER_VALUE) && (selectedPassengertIndex < passengers.length)) ? 
                                <PassengerForm 
                                    index={selectedPassengertIndex}
                                    savePassengerInfo={savePassengerInfo}
                                    passenger={passengers[selectedPassengertIndex]}
                                    unSelectPassengerCard={unSelectPassengerCard}
                                /> :
                                passengers.map((each, i) => {
                                    let age = calculate_age(each.born_on);
                                    return <PassengerCard 
                                        index={i}
                                        age={age}
                                        selectPassengerCard={selectPassengerCard} 
                                        passenger={each} 
                                    />
                                })
                            }
                            
                        </div>
                    </div>
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
                            <div onClick={props.showPaymentPage} className="checkout_page_main_checkout_btn" style={{backgroundColor: "darkslateblue"}}>
                                Continue
                                <span style={{fontSize: 13, color: "rgba(255,255,255,0.4)", marginLeft: 10}}>
                                    (Payment)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassengerNameRecord;