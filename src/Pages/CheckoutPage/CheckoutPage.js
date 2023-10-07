import WillgoLogo from '../../WillgoLogo.png';
import deltaIcon from "../../deltaIcon.png";
import CheckoutInfo from './Components/CheckoutInfo';
import PassengerNameRecord from './Components/PassengerNameRecord';
import PaymentPage from './Components/PaymentPage';
import CONSTANTS from '../../Constants/Constants';
import { create_offer_obj } from "../../test_objects/duffel_objects";

import { useState } from 'react';

export default function CheckoutPage(props){

    const [ activePage, setActivePage ] = useState(CONSTANTS.checkout_pages.info);
    const [ checkoutPayload, setcheckoutPayload ] = useState({
        meta: {},
        data: create_offer_obj
    });

    const showInfoPage = () => {
        setActivePage(CONSTANTS.checkout_pages.info);
    }

    const showPNRPage = () => {
        setActivePage(CONSTANTS.checkout_pages.pnr);
    }

    const showPaymentPage = () => {
        setActivePage(CONSTANTS.checkout_pages.payment);
    }

    const savePassengerInfo = (new_info_obj, index) => {
        let { passengers } = checkoutPayload.data;
        passengers[index] = new_info_obj;
        setcheckoutPayload({
            ...checkoutPayload,
            data: {
                ...checkoutPayload.data,
                passengers
            }
        });
    }

    const setResponsibleAdultForInfant = (e) => {
        const vals = e.target.value.split(CONSTANTS.special_str_separator);
        let { passengers } = checkoutPayload.data;
        //Previous responsible adult
        let prev_adult = passengers.find(passenger=>passenger.infant_passenger_id===vals[0]);
        if(prev_adult){
            delete prev_adult.infant_passenger_id;
        }
        //New responsible adult
        let adult = passengers.find(passenger=>passenger.id===vals[1]);
        let adult_index = passengers.findIndex(passenger=>passenger.id===vals[1]);
        adult.infant_passenger_id=vals[0];
        passengers[adult_index]=adult;
        setcheckoutPayload({
            ...checkoutPayload,
            data: {
                ...checkoutPayload.data,
                passengers
            }
        });
    }

    const nav_separator_style = {
        padding: 10,
        color: "rgba(0,0,0,0.2)"
    }

    return (
        <div id="booking_start_checkout_page_container" style={{display: "block"}}>
            <div className="wrapper">
                <div style={{paddingTop: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <div className="site-logo">
                                <p className="site-logo-img">
                                    <img src={"./WillgoLogo.png"} alt={"to do"} /></p>
                                <div className="site-logo-txt">
                                    <p style={{color: "rgb(23, 87, 148)"}}>
                                        Wellgo<span>.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="pop-up-close-btn" onClick={props.cancel_checkout} 
                            style={{cursor: "pointer", color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                            &times;
                        </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.07)"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <div onClick={showInfoPage} style={{cursor: "pointer", padding: 10, color: (activePage===CONSTANTS.checkout_pages.info) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    <i style={{marginRight: 10, opacity: 0.2}} className='fa-solid fa-plane' aria-hidden="false"></i>
                                    Flight</p>
                            </div>
                            <div style={nav_separator_style}>{">"}</div>
                            <div onClick={showPNRPage} style={{cursor: "pointer", padding: 10, color: (activePage===CONSTANTS.checkout_pages.pnr) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    <i style={{marginRight: 10, opacity: 0.2}} className='fa-solid fa-users' aria-hidden="false"></i>
                                    Passengers</p>
                            </div>
                            <div style={nav_separator_style}>{">"}</div>
                            <div onClick={showPaymentPage} style={{cursor: "pointer", padding: 10, color: (activePage===CONSTANTS.checkout_pages.payment) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    <i style={{marginRight: 10, opacity: 0.2}} className='fa-solid fa-credit-card' aria-hidden="false"></i>
                                    Payment</p>
                            </div>
                        </div>
                        <p style={{fontSize: 13, padding: 10, color: "rgba(0,0,0,0.7)"}}>
                                Total:
                                <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.6)", fontSize: 13, marginLeft: 5}}>
                                    $133.23</span>
                        </p>
                    </div>
                </div>
                {
                    (activePage===CONSTANTS.checkout_pages.info) ?
                        <CheckoutInfo showPNRPage={showPNRPage} /> : ""
                }
                {
                    (activePage===CONSTANTS.checkout_pages.pnr) ?
                        <PassengerNameRecord 
                            setResponsibleAdultForInfant={setResponsibleAdultForInfant}
                            savePassengerInfo={savePassengerInfo}
                            passengers={checkoutPayload.data.passengers} showPaymentPage={showPaymentPage} /> : ""
                }
                {
                    (activePage===CONSTANTS.checkout_pages.payment) ?
                        <PaymentPage /> : ""
                }
            </div>
        </div>
    );
}
