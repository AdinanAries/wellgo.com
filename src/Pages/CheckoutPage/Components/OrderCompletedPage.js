import SelectedTicketItinSegments from "../../SearchPage/Components/SelectedTicketItinSegments";
import { get_short_date_DAYMMMDD, convert24HTimeToAMPM } from "../../../helpers/general";
import { markup } from "../../../helpers/Prices";
import { get_currency_symbol } from "../../../helpers/general";
import { verifyUserToken } from "../../../services/sessionServices";
import { loginPost } from "../../../services/accountServices";
import { useEffect, useState } from "react";
import CONSTANTS from "../../../Constants/Constants";
import { show_prompt_on_Bot_AD_tips_popup } from "../../../components/HPSupport";
import getBotResponse from "../../../Constants/BotResponses";
import loading_icon from "../../../icons/loading.svg";
import FormErrorCard from "../../../components/FormErrorCard";
import { updateFlightBookingLogId } from "../../../services/bookingHistoryServices";
import BotLogin from "../../../Bot-Login.jpg";
import BotLogin2 from "../../../Bot-Login-2.jpg";
import BotLogin3 from "../../../Bot-Login-3.jpg";

const OrderCompletedPage = (props) => {

    const { 
        pickAnotherFlightOnclick,
        goHome,
        completedOrderDetails,
        prices,
        LogMeIn,
        bookingID
    } = props;

    // Use this flag to remind user to login so booking can be saved to their account
    const [isLoggedIn, setIsLoggedIn ] = useState(false); 
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });
    const [ formValidation, setFormValidation ] = useState({
        type: "warning",
        isError: false,
        message: "",
    });

    const continueToDetails = () => {
        setShowBookingDetails(true);
        //setIsLoggedIn(true);
    }

    useEffect(()=>{
        (async function go(){
            let verify_res = await verifyUserToken();
            if(verify_res.valid){
                // User is logged in
                const user=verify_res.data;
                setShowBookingDetails(true);
                setIsLoggedIn(true);
            }else{
                // User is not logged in
                setShowBookingDetails(false);
                setIsLoggedIn(false);

                const BOT_IMGs = [BotLogin, BotLogin3, BotLogin2]
                show_prompt_on_Bot_AD_tips_popup(
                    getBotResponse(CONSTANTS.bot.responses.not_logged_in_on_checkout_complete),
                    CONSTANTS.bot.prompt_types.warn, 
                    500000,
                    {
                        image: true,
                        data: {
                            img_url: BOT_IMGs[Math.floor(Math.random() * BOT_IMGs.length)],
                            icon_class: "fa-solid fa-sign-in-alt",
                            text: "Login to save the booking...",
                        }
                    }
                );
            }
            setIsLoading(false);
        })()
    }, []);

    const emailOnInput = (e) => {
        setFormValidation({
            type: "warning",
            isError: false,
            message: "",
        });
        setFormData({
            ...formData,
            email: e.target.value
        });
    }

    const passwordOnInput = (e) => {
        setFormValidation({
            type: "warning",
            isError: false,
            message: "",
        });
        setFormData({
            ...formData,
            password: e.target.value
        });
    }

    const login_onclick = async () => {
        setIsLoading(true);
        if(!formData.email) {
            setFormValidation({
                type: "error",
                isError: true,
                message: "please enter email",
            });
            setIsLoading(false);
            return
        }
        if(!formData.password) {
            setFormValidation({
                type: "error",
                isError: true,
                message: "please enter password",
            });
            setIsLoading(false)
            return
        }
        let res = await loginPost(formData);
        if(res.token){
            localStorage.setItem("user_token", res.token);
            window.setAwaitDoRefresh();
            await updateFlightBookingLogId(bookingID, res.token);
            LogMeIn();
            setIsLoggedIn(true);
            setShowBookingDetails(true);
        }else{
            setFormValidation({
                type: "error",
                isError: true,
                message: res.message,
            });
            setIsLoggedIn(false);
            setShowBookingDetails(false);
        }
        setIsLoading(false);
        
    }

    const FIRST_SLICE_ORIGIN_IATA=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[0].segments 
        && completedOrderDetails?.slices[0].segments[0].origin?.iata_code
    );
    const FIRST_SLICE_CITY_NAME=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[0].segments 
        && completedOrderDetails?.slices[0].segments[0].origin?.city_name
    );
    const LAST_SLICE_DESTINATION_IATA=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)].segments 
        && completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)]
        .segments[(completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)]?.segments?.length - 1)].destination?.iata_code
    );
    const LAST_SLICE_CITY_NAME=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)].segments 
        && completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)]
        .segments[(completedOrderDetails?.slices[(completedOrderDetails?.slices?.length - 1)]?.segments?.length - 1)].destination?.city_name
    );

    const DESTINATION_IATA=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[0].segments 
        && completedOrderDetails?.slices[0].segments[0].destination?.iata_code
    );
    const DESTINATION_CITY_NAME=(
        completedOrderDetails?.slices 
        && completedOrderDetails?.slices[0].segments 
        && completedOrderDetails?.slices[0].segments[0].destination?.city_name
    );;

    const SLICES_LENGHT = completedOrderDetails?.slices?.length;
    let is_one_way=(SLICES_LENGHT<2);
    let is_round_trip=(
        SLICES_LENGHT===2 
        && (FIRST_SLICE_ORIGIN_IATA===LAST_SLICE_DESTINATION_IATA)
    );

    const _date_time=(
        completedOrderDetails?.slices
        && completedOrderDetails?.slices[0]?.segments
        && completedOrderDetails?.slices[0]?.segments[0]?.departure_datetime
    )
    const FLIGHT_DATE=(get_short_date_DAYMMMDD((_date_time || "")));
    const _time=(
        completedOrderDetails?.slices
        && completedOrderDetails?.slices[0]?.segments
        && completedOrderDetails?.slices[0]?.segments[0]?.departure_datetime.split("T")[1]
    );
    const TAKE_OFF_TIME=convert24HTimeToAMPM((_time || ""));

    const SEGMENTS = [];
    completedOrderDetails?.slices?.forEach((slice, index)=>{

        SEGMENTS.push(<div style={{marginBottom: 10}}>
            <span onClick={()=>global.toggle_see_ticket_details_itinerary_details((index+"_completed_order_details_itinerary_details"))} 
                style={{cursor: "pointer", fontSize: 14, color: "green", fontFamily: "'Prompt', Sans-serif"}}>
                <i style={{marginRight: 10}} className="fa-solid fa-route"></i>
                {slice.origin.city_name} to {slice.destination.city_name}
                <span style={{color: "brown", textDecoration: "underline", fontSize: 14, fontFamily: "'Prompt', Sans-serif", marginLeft: 10}}>
                    show route</span>
            </span>
            <div style={{paddingLeft: 20, paddingTop: 5, paddingBottom: 5, backgroundColor: "rgba(0,0,0,0.1)"}}>
                <SelectedTicketItinSegments element_id={(index+"_completed_order_details_itinerary_details")} segments={slice.segments}/>
            </div>
        </div>);

        slice.segments.forEach(segment=> {

            let seats="";
            let total_checked_baggages=0;
            let total_carry_on_baggages=0;
            segment.passengers.forEach(passenger=>{
                seats+= passenger.seat ? `${passenger.seat}, ` : "_";
                passenger.baggages.forEach(baggage=>{
                    if(baggage.type==="checked"){
                        total_checked_baggages+=parseInt(baggage.quantity);
                    }
                    if(baggage.type==="carry_on"){
                        total_carry_on_baggages+=parseInt(baggage.quantity);
                    }
                });

                completedOrderDetails.passengers.forEach(flight_passenger=>{
                    if(passenger.passenger_id===flight_passenger.id){
                        flight_passenger.extras=passenger;
                    }
                });
            });

            SEGMENTS.push(
                <div style={{display: "flex", paddingBottom: 13, paddingLeft: 20}}>
                    <div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            {segment.origin.iata_code}, {segment.origin.city_name}
                            <span style={{margin: "0 10px", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.6)"}}>
                                to
                            </span>
                            {segment.destination.iata_code}, {segment.destination.city_name}
                        </p>
                        <div style={{paddingLeft: 10}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                {segment.origin.name}
                                <span style={{margin: "0 10px", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.6)"}}>
                                    to
                                </span>
                                {segment.destination.name}
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                {get_short_date_DAYMMMDD(segment.departure_datetime) + " ("}
                                {convert24HTimeToAMPM(segment.departure_datetime.split("T")[1]) + ")"}
                                <span style={{margin: "0 10px", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.6)"}}>
                                    to
                                </span>
                                {get_short_date_DAYMMMDD(segment.arrival_datetime) + " ("}
                                {convert24HTimeToAMPM(segment.arrival_datetime.split("T")[1]) + ")"}
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                This flight is operated by {segment.operating_carrier.name}. {segment.operating_carrier.conditions_of_carriage_url && <a href={segment.operating_carrier.conditions_of_carriage_url} rel="noreferrer" target="_blank">
                                Please click here to learn more about the airline conditions</a>}
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                <span style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    Take off: {convert24HTimeToAMPM(segment.departure_datetime.split("T")[1])}
                                </span>, Aircraft: {segment.aircraft.name}, Checked bags: {total_checked_baggages}, Carry-on bags: {total_carry_on_baggages}
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                Seat: {seats}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    });

    // Generating passengers markup
    const PASSENGERS=[];
    completedOrderDetails?.passengers?.forEach(passenger=>{

        let seat=passenger.extras.seat || "unspecified";
        let total_checked_baggages=0;
        let total_carry_on_baggages=0;
        let cabin_class = passenger.extras.cabin_class;
        let email=passenger.email;
        let phone=passenger.phone_number;
        let name = `${passenger.given_name} ${passenger.family_name}`
        passenger.extras.baggages.forEach(baggage=>{
            if(baggage.type==="checked"){
                total_checked_baggages+=parseInt(baggage.quantity);
            }
            if(baggage.type==="carry_on"){
                total_carry_on_baggages+=parseInt(baggage.quantity);
            }
        });

        PASSENGERS.push(
            <div style={{display: "flex", paddingBottom: 10, marginRight: 25}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "rgba(0,0,0,0.5)"}}
                            className="fa-solid fa-user"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        {name}
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                        {email}, {phone}
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                        Seat: {seat}, Cabin: {cabin_class}, Checked bags: {total_checked_baggages}, Carry-on bags: {total_carry_on_baggages}
                    </p>
                </div>
            </div>
        );
    });

    const IMPORTANT_NOTICES=[];
    if(completedOrderDetails?.conditions?.refund_before_departure?.allowed){
        const CURRENCY_SYMBOL=get_currency_symbol(completedOrderDetails?.conditions?.refund_before_departure?.penalty_currency);
        IMPORTANT_NOTICES.push(
            <div style={{display: "flex"}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "green"}}
                            className="fa-solid fa-check"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                        Refund allowed with penalty amount of 
                        <span style={{marginLeft: 5, fontFamily: "'Prompt', Sans-serif", fontSize: 13}} 
                            dangerouslySetInnerHTML={{__html: CURRENCY_SYMBOL}}></span>
                            {(markup(completedOrderDetails?.conditions?.refund_before_departure?.penalty_amount).new_price).toFixed(2)}
                    </p>
                </div>
            </div>
        );
    }else{
        IMPORTANT_NOTICES.push(
            <div style={{display: "flex"}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "orange"}}
                            className="fa-solid fa-exclamation-triangle"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                        No refunds available for this flight
                    </p>
                </div>
            </div>
        );
    }

    if(completedOrderDetails?.conditions?.change_before_departure?.allowed){
        const CURRENCY_SYMBOL=get_currency_symbol(completedOrderDetails?.conditions?.change_before_departure?.penalty_currency);
        IMPORTANT_NOTICES.push(
            <div style={{display: "flex"}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "green"}}
                            className="fa-solid fa-check"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                        Changes allowed with penalty amount of
                        <span style={{marginLeft: 5, fontFamily: "'Prompt', Sans-serif", fontSize: 13}} 
                            dangerouslySetInnerHTML={{__html: CURRENCY_SYMBOL}}></span>
                            {(markup(completedOrderDetails?.conditions?.change_before_departure?.penalty_amount).new_price).toFixed(2)}
                    </p>
                </div>
            </div>
        );
    }else{
        IMPORTANT_NOTICES.push(
            <div style={{display: "flex"}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "orange"}}
                            className="fa-solid fa-exclamation-triangle"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                        Changes are not allowed for this flight
                    </p>
                </div>
            </div>
        );
    }

    let overallTotal = parseFloat(prices.total_amount);
    const { extras } = prices;
    const EXTRAS_MARKUP = [];
    extras.forEach(each=>{
        overallTotal=(overallTotal+each.total);
        EXTRAS_MARKUP.push(
            <div>
                <p style={{fontSize: 13, letterSpacing: 1, color: "rgba(0,0,0,0.9)"}}>
                    {each.name} ({each.quantity}):
                    <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginLeft: 5}} 
                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.base_currency)}}></span>
                    {(markup(each.total).new_price).toFixed(2)}
                </p>
            </div>
        );
    });

    return (
        <div style={{position: "relative"}}>
            <div style={{padding: "20px 0"}}>
                <div style={{padding: "0 10px"}}>
                    <p className="pop-up-close-btn" onClick={pickAnotherFlightOnclick} 
                        style={{cursor: "pointer", zIndex: 1, color: "rgb(255,0,0)", fontSize: 33, position: "absolute", right: 10, top: 10}}>
                        &times;
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                        <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                        Reference Number:
                        <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                            {completedOrderDetails.booking_reference}
                        </span>
                    </p>
                    <p style={{display: "none", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                        <i style={{color: "rgba(0,0,0,0.5)", marginRight: 10}}
                            className="fa-solid fa-temperature-high"></i>
                        New York (Thu Mar 23) -
                        <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                            56°</span>
                        <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                            | heavy rain</span>
                    </p>
                </div>
                {
                    isLoading && 
                        <div style={{marginTop: 10, padding: "20px", maxWidth: 250, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 8}}>
                            <div style={{backgroundImage: `url(${loading_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 90, height: 90, margin: "auto"}}></div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                Please wait...</p>
                        </div>
                }
                {
                    ((!showBookingDetails && !isLoggedIn) && !isLoading) ? <div style={{paddingTop: 10}}>
                        <div style={{padding: "0 10px"}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder", color: "crimson"}}>
                                <i style={{marginRight: 10, color: "red"}} className="fa-solid fa-exclamation-triangle"></i>
                                You are not logged in!
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                If you have an account, logging in will ensure that this booking is saved to your account
                                <br/><span style={{fontFamily: "'Prompt', Sans-serif", color: "blue", fontSize: 14}}>
                                    You may login and continue or may continue without logging in
                                </span>
                            </p>
                        </div>
                        <div style={{paddingTop: 5}}>
                            <div style={{display: "flex", padding: "0 10px"}}>
                                <div onClick={continueToDetails} style={{textAlign: "center", cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                    continue without logging in
                                    <i style={{marginLeft: 10, color: "yellow"}} className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div style={{marginTop: 10, maxWidth: 450, borderRadius: 8, border: "1px solid rgba(0,0,0,0.1)", padding: 10}}>
                                <p style={{paddingBottom: 5, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 16, fontWeight: "bolder", letterSpacing: 1, marginBottom: 10,}}>
                                    Login & Continue</p>
                                <div>
                                    <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                            <i className="fa-solid fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                            Email</p>
                                        <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                            <input
                                                onInput={emailOnInput} 
                                                value={formData.email}
                                                type="email" placeholder="type here..."
                                                style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                            <i className="fa-solid fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                            Password</p>
                                        <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                            <input 
                                                onInput={passwordOnInput} 
                                                value={formData.password}
                                                type="password" placeholder="type here..."
                                                style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                                        </div>
                                    </div>
                                    {
                                        formValidation.isError && <FormErrorCard 
                                            message={formValidation.message} 
                                            type={formValidation.type}
                                        />
                                    }
                                    <div onClick={login_onclick} style={{textAlign: "center", cursor: "pointer", padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7, marginTop: 5}}>
                                        <i style={{marginRight: 10, color: "white"}} className="fa-solid fa-sign-in"></i>
                                        Login
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    (showBookingDetails && !isLoading) && <div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: 10}}>
                            <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                            Your booking has been confirmed!
                            <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 14}}>
                                What's next?
                            </span>
                        </p>
                        <div style={{padding: 10}}>
                            <div style={{display: "flex"}}>
                                <div onClick={pickAnotherFlightOnclick} style={{textAlign: "center", cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                    <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plane-departure"></i>
                                    book another flight
                                </div>
                                <div onClick={goHome} style={{textAlign: "center", cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                                    <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-home"></i>
                                    go home
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                !isLoggedIn && <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, backgroundColor: "rgba(255,0,0,0.2)", border: "1px solid rgba(255,0,0,0.2)", borderRadius: 4, maxWidth: 230, padding: "5px 10px"}}>
                                    <i style={{marginRight: 10, color: "red"}} className="fa-solid fa-exclamation-triangle"></i>
                                    You are not logged in...
                                </p>
                            }
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: 10}}>
                                See Details Below: <span onClick={window.print} style={{cursor: "pointer", color: "darkslateblue", fontFamily: "'Prompt', Sans-serif", textDecoration: "underline"}}>
                                    Click to Print</span></p>
                                <div className="printable" style={{border: "1px dashed rgba(0,0,0,0.1)", padding: 10}}>
                                    <div style={{marginBottom: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                        {FIRST_SLICE_CITY_NAME} - {FIRST_SLICE_ORIGIN_IATA}
                                        {is_one_way && <i style={{margin: "0 10px"}} className="fa-solid fa-arrow-right"></i>}
                                        {is_round_trip && <i style={{margin: "0 10px"}} className="fa-solid fa-rotate"></i>}
                                        {DESTINATION_CITY_NAME} - {DESTINATION_IATA}
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                        <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                                        Your booking reference is
                                        <span style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.9)", fontSize: 13}}>
                                            {completedOrderDetails.booking_reference}
                                        </span>
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Please remember your flight is on
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, margin: "0 10px", color: "black", fontWeight: "bolder"}}>
                                            {FLIGHT_DATE}</span>
                                        and takes off at
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, margin: "0 10px", color: "black", fontWeight: "bolder"}}>
                                            {TAKE_OFF_TIME}</span>
                                    </p>
                                </div>
                                <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 25}}>
                                    Flights</h1>
                                <div>
                                    {SEGMENTS.map(each=>each)}
                                </div>
                                <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 15}}>
                                    Passengers</h1>
                                <div>
                                    <div style={{display: "flex", flexWrap: "wrap"}}>
                                        {PASSENGERS.map(each=>each)}
                                    </div>
                                </div>

                                <div>
                                <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 15}}>
                                    Sold by</h1>
                                <div>
                                    <div style={{marginBottom: 10}}>
                                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                                            <img src={completedOrderDetails?.owner?.logo_symbol_url} alt={"todo"} style={{width: 27, height: "auto", marginRight: 10, objectFit: "cover"}} />
                                            {completedOrderDetails?.owner?.name}
                                        </p>
                                        {
                                            completedOrderDetails?.owner?.conditions_of_carriage_url ?
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                                <a href={completedOrderDetails?.owner?.conditions_of_carriage_url}  rel="noreferrer" target="_blank">
                                                    read more at {completedOrderDetails?.owner?.conditions_of_carriage_url}
                                                </a>
                                            </p> : 
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                                <i style={{color: "orange", marginRight: 10}} className="fa-solid fa-exclamation-triangle"></i>
                                                Airline website not found
                                            </p>
                                        }
                                    </div>
                                </div>
                                <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 25}}>
                                    Payment Details</h1>
                                <div style={{marginBottom: 10, paddingLeft: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        Base Amount: <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.base_currency)}}></span>
                                            {(markup(prices.base_amount).new_price).toFixed(2)}</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        Tax Amount: <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.tax_currency)}}></span>
                                            {(markup(prices.tax_amount).new_price).toFixed(2)}</p>
                                    {EXTRAS_MARKUP.map(each=>each)}
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                                        Total Paid: <span style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}} 
                                            dangerouslySetInnerHTML={{__html: get_currency_symbol(prices.total_currency)}}></span>
                                        {(markup(overallTotal).new_price).toFixed(2)}</p>
                                </div>
                                <h1 style={{display: "none", fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 25}}>
                                    Weather</h1>
                                <div style={{display: "flex", display: "none", paddingBottom: 10, marginRight: 25}}>
                                    <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                        <i style={{color: "rgba(0,0,0,0.5)"}}
                                                className="fa-solid fa-temperature-high"></i>
                                    </div>
                                    <div>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                            New York (Thu Mar 23) -
                                            <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                                56°</span>
                                            <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                                | heavy rain</span>
                                            | please hold an umbrella
                                        </p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                            Accra (Thu Mar 23) -
                                            <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                                78°</span>
                                            <span style={{margin: "0 5px", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                                | sunny</span>
                                            | please avoid heavy coats
                                        </p>
                                    </div>
                                </div>
                                <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10, marginTop: 25}}>
                                    Important Notices</h1>
                                    <div style={{padding: 10, marginBottom: 10, backgroundColor: "rgba(0,255,0,0.1)", border: "1px solid rgba(0,255,0,0.1)", borderRadius: 4}}>
                                        {IMPORTANT_NOTICES.map(each=>each)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );

}

/*
return {
        "type": "instant",
        "total_currency": "USD",
        "total_amount": "404.59",
        "tax_currency": "USD",
        "tax_amount": "61.72",
        "synced_at": "2023-11-23T14:37:38Z",
        "slices": [
            {
                "segments": [
                    {
                        "passengers": [
                            {
                                "seat": null,
                                "passenger_id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                                "cabin_class_marketing_name": "Economy",
                                "cabin_class": "economy",
                                "baggages": [
                                    {
                                        "type": "checked",
                                        "quantity": 1
                                    },
                                    {
                                        "type": "carry_on",
                                        "quantity": 1
                                    }
                                ]
                            }
                        ],
                        "origin_terminal": "2",
                        "origin": {
                            "type": "airport",
                            "time_zone": "Africa/Accra",
                            "name": "Kotoka International Airport",
                            "longitude": -0.167454,
                            "latitude": 5.605642,
                            "id": "arp_acc_gh",
                            "icao_code": "DGAA",
                            "iata_country_code": "GH",
                            "iata_code": "ACC",
                            "iata_city_code": "ACC",
                            "city_name": "Accra",
                            "city": null
                        },
                        "operating_carrier_flight_number": "10",
                        "operating_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "marketing_carrier_flight_number": "10",
                        "marketing_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "id": "seg_0000Ac6K7P3dohp5WA7RQW",
                        "duration": "PT11H32M",
                        "distance": "8221.392679809798",
                        "destination_terminal": "1",
                        "destination": {
                            "type": "airport",
                            "time_zone": "America/New_York",
                            "name": "John F. Kennedy International Airport",
                            "longitude": -73.778519,
                            "latitude": 40.640556,
                            "id": "arp_jfk_us",
                            "icao_code": "KJFK",
                            "iata_country_code": "US",
                            "iata_code": "JFK",
                            "iata_city_code": "NYC",
                            "city_name": "New York",
                            "city": {
                                "type": "city",
                                "time_zone": null,
                                "name": "New York",
                                "longitude": null,
                                "latitude": null,
                                "id": "cit_nyc_us",
                                "icao_code": null,
                                "iata_country_code": "US",
                                "iata_code": "NYC",
                                "iata_city_code": "NYC",
                                "city_name": null
                            }
                        },
                        "departure_terminal": "2",
                        "departure_datetime": "2023-11-29T21:40:00",
                        "departing_at": "2023-11-29T21:40:00",
                        "arriving_at": "2023-11-30T04:12:00",
                        "arrival_terminal": "1",
                        "arrival_datetime": "2023-11-30T04:12:00",
                        "aircraft": {
                            "name": "Airbus A319",
                            "id": "arc_00009VMF8AgpV5sdO0xXAn",
                            "iata_code": "319"
                        }
                    }
                ],
                "origin_type": "airport",
                "origin": {
                    "type": "airport",
                    "time_zone": "Africa/Accra",
                    "name": "Kotoka International Airport",
                    "longitude": -0.167454,
                    "latitude": 5.605642,
                    "id": "arp_acc_gh",
                    "icao_code": "DGAA",
                    "iata_country_code": "GH",
                    "iata_code": "ACC",
                    "iata_city_code": "ACC",
                    "city_name": "Accra",
                    "city": null
                },
                "id": "sli_0000Ac6KEffjaAdhv9NCr2",
                "fare_brand_name": "Basic",
                "duration": "PT11H32M",
                "destination_type": "airport",
                "destination": {
                    "type": "airport",
                    "time_zone": "America/New_York",
                    "name": "John F. Kennedy International Airport",
                    "longitude": -73.778519,
                    "latitude": 40.640556,
                    "id": "arp_jfk_us",
                    "icao_code": "KJFK",
                    "iata_country_code": "US",
                    "iata_code": "JFK",
                    "iata_city_code": "NYC",
                    "city_name": "New York",
                    "city": {
                        "type": "city",
                        "time_zone": null,
                        "name": "New York",
                        "longitude": null,
                        "latitude": null,
                        "id": "cit_nyc_us",
                        "icao_code": null,
                        "iata_country_code": "US",
                        "iata_code": "NYC",
                        "iata_city_code": "NYC",
                        "city_name": null
                    }
                },
                "conditions": {
                    "change_before_departure": {
                        "penalty_currency": null,
                        "penalty_amount": null,
                        "allowed": false
                    }
                },
                "changeable": true
            }
        ],
        "services": [],
        "payment_status": {
            "price_guarantee_expires_at": null,
            "payment_required_by": null,
            "paid_at": "2023-11-23T14:37:38Z",
            "awaiting_payment": false
        },
        "passengers": [
            {
                "type": "adult",
                "title": "mr",
                "phone_number": "+17327999546",
                "loyalty_programme_accounts": [],
                "infant_passenger_id": null,
                "id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                "given_name": "Mohammed",
                "gender": "m",
                "family_name": "Adinan",
                "email": "m.adinan@yahoo.com",
                "born_on": "1992-03-23"
            }
        ],
        "owner": {
            "name": "American Airlines",
            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
            "id": "arl_00009VME7DAGiJjwomhv32",
            "iata_code": "AA",
            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
        },
        "metadata": {},
        "live_mode": false,
        "id": "ord_0000Ac6KEffNbUM7u3CvIm",
        "documents": [
            {
                "unique_identifier": "1",
                "type": "electronic_ticket",
                "passenger_ids": [
                    "pas_0000Ac6K7OtiPbsp1NTVxK"
                ]
            }
        ],
        "created_at": "2023-11-23T14:37:38.485807Z",
        "content": "managed",
        "conditions": {
            "refund_before_departure": {
                "penalty_currency": "GBP",
                "penalty_amount": "50.00",
                "allowed": true
            },
            "change_before_departure": {
                "penalty_currency": null,
                "penalty_amount": null,
                "allowed": false
            }
        },
        "changes": [],
        "cancelled_at": null,
        "cancellation": null,
        "booking_reference": "VXYP4X",
        "base_currency": "USD",
        "base_amount": "342.87",
        "available_actions": [
            "cancel",
            "change",
            "update"
        ],
        "airline_initiated_changes": []
    }
*/

export default OrderCompletedPage;