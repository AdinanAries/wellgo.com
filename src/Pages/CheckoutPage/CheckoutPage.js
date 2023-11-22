import CheckoutInfo from './Components/CheckoutInfo';
import PassengerNameRecord from './Components/PassengerNameRecord';
import PaymentPage from './Components/PaymentPage';
import CONSTANTS from '../../Constants/Constants';
import getBotResponse from '../../Constants/BotResponses';
import { obj_has_empty_prop, calculate_age } from "../../helpers/general";
import { FLIGHT_DATA_ADAPTER } from "../../helpers/FlightDataAdapter";
import { show_prompt_on_Bot_AD_tips_popup } from '../../components/HPSupport';
import { createFlightOrder } from '../../services/flightsServices';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function CheckoutPage(props){

    const { payload, cancel_checkout } = props;

    const [ activePage, setActivePage ] = useState(CONSTANTS.checkout_pages.info);
    const [ isBookingConfirmed, setIsBookingConfirmed] = useState(false);
    const [ checkoutPayload, setcheckoutPayload ] = useState({
        meta: {},
        data: FLIGHT_DATA_ADAPTER.prepareCheckout(payload)
    });

    const TOTAL_PRICE=checkoutPayload.data.payments[0].amount;
    const PRICES=FLIGHT_DATA_ADAPTER.adaptPriceProps(payload);

    const showInfoPage = () => {
        setActivePage(CONSTANTS.checkout_pages.info);
    }

    const showPNRPage = () => {
        setActivePage(CONSTANTS.checkout_pages.pnr);
    }

    const showPaymentPage = () => {
        if(is_passenger_data_all_set())
            setActivePage(CONSTANTS.checkout_pages.payment);
        else
            show_prompt_on_Bot_AD_tips_popup(
                getBotResponse(CONSTANTS.bot.responses.uncompleted_pnr),
                CONSTANTS.bot.prompt_types.warn, 
                10000
            );
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
        // vals = [infant_id, adult_id] after split function
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

        //Assigning adults phone and email to the infant
        let infant = passengers.find(passenger=>passenger.id===vals[0]);
        let infant_index = passengers.findIndex(passenger=>passenger.id===vals[0]);
        infant.phone_number=adult.phone_number;
        infant.email=adult.email;
        passengers[infant_index]=infant;

        setcheckoutPayload({
            ...checkoutPayload,
            data: {
                ...checkoutPayload.data,
                passengers
            }
        });
    }

    const is_passenger_data_all_set = () => {
        const { passengers } = checkoutPayload.data;
        let has_all_data = true;
        let all_infants_have_responsible_adults=true;
        for(let i=0; i<passengers.length; i++){
            if(obj_has_empty_prop(passengers[i])){
                has_all_data=false;
            }
            //Infant passengers
            if(calculate_age(passengers[i].born_on) <= CONSTANTS.infant_age_threshold){
                let id_found=false;
                for(let j=0; j < passengers.length; j++){
                    if(passengers[j]?.infant_passenger_id===passengers[i].id)
                        id_found=true;
                }
                if(!id_found)
                    all_infants_have_responsible_adults=false;
            }
        }
        if(!has_all_data){
            toast("Please complete all passenger forms to continue");
            return false;
        }
        if(!all_infants_have_responsible_adults){
            toast("All infant passengers must have responsible adults");
            return false;
        }

        return true;
    }

    const createOrderOnSubmit = async () => {
        let res=await createFlightOrder(checkoutPayload);
        console.log("Flight Order:", res);
        setIsBookingConfirmed(true);
    }

    const pickAnotherFlightOnclick = () => {
        setIsBookingConfirmed(false);
        cancel_checkout();
        global.__unselectFlightOffer();
        global.hide_selected_ticket_details_pane();
    }

    const goHome = () => {
        window.location.href="/"
    }

    const nav_separator_style = {
        padding: 10,
        color: "rgba(0,0,0,0.2)"
    }

    console.log("checkout payload:", checkoutPayload);

    return (
        <div id="booking_start_checkout_page_container" style={{display: "block"}}>
            <div className="wrapper">
                
                {
                    isBookingConfirmed ?
                    <div style={{position: "relative"}}>
                        <div style={{padding: "20px 0"}}>
                            <p className="pop-up-close-btn" onClick={props.cancel_checkout} 
                                style={{cursor: "pointer", color: "rgb(255,0,0)", fontSize: 33, position: "absolute", right: 10, top: 10}}>
                                &times;
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                                <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                                Reference Number:
                                <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                                    X2BG213Y2
                                </span>
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                                Your booking has been confirmed!
                                <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 14}}>
                                    What's next?
                                </span>
                            </p>
                            <div style={{padding: 10}}>
                                <div style={{display: "flex"}}>
                                <div style={{cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                        <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plus"></i>
                                        add ancillaries
                                    </div>
                                    <div onClick={pickAnotherFlightOnclick} style={{cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                        <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plane-departure"></i>
                                        pick another flight
                                    </div>
                                    <div onClick={goHome} style={{cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                        <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-home"></i>
                                        go home
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    See Details Below:</p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <>
                        <div style={{paddingTop: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="checkout_page_site_logo">
                                    <div className="site-logo">
                                        <p className="site-logo-img">
                                            <img src={"./WillgoLogo.png"} alt={"to do"} /></p>
                                        <div style={{display: "none"}} className="site-logo-txt">
                                            <p style={{color: "rgb(23, 87, 148)"}}>
                                                Wellgo<span>.com</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="pop-up-close-btn" onClick={props.cancel_checkout} 
                                    style={{cursor: "pointer", color: "rgb(255,0,0)", fontSize: 33, marginRight: 5}}>
                                    &times;
                                </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.07)"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div onClick={showInfoPage} style={{cursor: "pointer", padding: 10, color: (activePage===CONSTANTS.checkout_pages.info) ? "rgb(201, 0, 176)" : "rgba(0,0,0,0.6)"}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                            <i style={{marginRight: 10, opacity: 0.2}} className='fa-solid fa-plane-departure' aria-hidden="false"></i>
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
                                <p className="checkout_page_header_price_total" style={{fontSize: 13, padding: 10, color: "rgba(0,0,0,0.7)"}}>
                                        Total:
                                        <span style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.6)", fontSize: 13, marginLeft: 5}}>
                                            ${TOTAL_PRICE}</span>
                                </p>
                            </div>
                        </div>
                        {
                            (activePage===CONSTANTS.checkout_pages.info) ?
                                <CheckoutInfo 
                                    flight={payload}
                                    showPNRPage={showPNRPage}
                                    prices={PRICES}
                                /> : ""
                        }
                        {
                            (activePage===CONSTANTS.checkout_pages.pnr) ?
                                <PassengerNameRecord 
                                    setResponsibleAdultForInfant={setResponsibleAdultForInfant}
                                    savePassengerInfo={savePassengerInfo}
                                    passengers={checkoutPayload.data.passengers} 
                                    showPaymentPage={showPaymentPage}
                                    prices={PRICES}
                                /> : ""
                        }
                        {
                            (activePage===CONSTANTS.checkout_pages.payment) ?
                                <PaymentPage 
                                    payments={checkoutPayload.data.payments}
                                    prices={PRICES}
                                    createOrderOnSubmit={createOrderOnSubmit}
                                    total_travelers={checkoutPayload.data.passengers.length}
                                /> : ""
                        }
                    </>
                }
            </div>
        </div>
    );
}
