import { postLog, logError, logBookingError } from "../services/activityServices";
import CONSTANTS from "../Constants/Constants";
import { return_flight_booking_log_object_props } from "./FlightDataAdapter";
import { markup } from "./Prices"
import { getClient } from "./general";

/**
 * 
 * 
 */
const construct_html_message = (type="", header_text="", body_text="") => {
    return `
        <div style="padding: 10px;">
            <h1>${header_text}</p>
            <p>${body_text}</p>
        </div>
    `;
}

export const getBookingConfirmedLogMessage = (booking, type="flight") => { 
    let initial = "";
    let details = "";
    if(type==="flight") {
        const {
            API_PROVIDER,
            BOOKING_ID,
            TYPE,
            AIRLINE_NAME,
            AIRLINE_IATA,
            TRIP_TYPE,
            TRAVELERS,
            ORIGIN_AIRPORT_NAME,
            TOTAL_AMOUNT,
            TOTAL_CURRENCY,
            ORIGIN_AIRPORT_IATA,
            ORIGIN_CITY_NAME,
            DESTINATION_AIRPORT_NAME,
            DESTINATION_AIRPORT_IATA,
            DESTINATION_CITY_NAME,
            DEPARTURE_DATE,
            RETURN_DATE
        } = return_flight_booking_log_object_props(booking);  
        initial=`Flight from ${ORIGIN_CITY_NAME} - ${ORIGIN_AIRPORT_NAME} to ${DESTINATION_CITY_NAME} - ${DESTINATION_AIRPORT_NAME} has been confirmed!`;
        const SOLD_PRICE=markup(TOTAL_AMOUNT).new_price;
        const MARKUP_AMOUNT=markup(TOTAL_AMOUNT).markup;
        details+="{";
        details+=`"info": "${initial}",`;
        details+=`"booking_id": "${BOOKING_ID}",`;
        details+=`"provider": "${API_PROVIDER}",`;
        details+=`"provider_price": "${TOTAL_AMOUNT}",`;
        details+=`"prices_currency": "${TOTAL_CURRENCY}",`;
        details+=`"sold_price": "${SOLD_PRICE}",`;
        details+=`"profit_amount": "${MARKUP_AMOUNT}"`;
        details+="}";
    }

    return `
        ${details}
    `;
}

const Logger = {
    /**
     * 
     * @param {*} type 
     */
    log_activity: async (
        msgObj={
            title: "",
            body: "",
            resource_id: "",
            resource_type: "",
        }, 
        type=CONSTANTS.log_types.activity
    ) => {
            let res;
            let client = await getClient();
            let post_obj = {
                client: client,
                title: msgObj.title,
                body: msgObj.body,
                resource_id: msgObj.resource_id,
                resource_type: msgObj.resource_type,
            }
            if(type===CONSTANTS.log_types.activity){
                post_obj.type=CONSTANTS.log_types.activity;
                res = await postLog(post_obj);
            }
            if(type===CONSTANTS.log_types.error){
                post_obj.type=CONSTANTS.log_types.error;
                res = await logError(post_obj);
            }
            if(type===CONSTANTS.log_types.booking_error){
                post_obj.type=CONSTANTS.log_types.error;
                res = await logBookingError(post_obj);
            }
            return res;
    },

    /**
     * 
     * 
     */
    alert_by_email: (
        msgObj={
            title: "",
            body: "",
        }, type="", activity_ref=null) => {

    },

    /**
     * 
     * 
     */
    alert_by_text: (
        msgObj={
            title: "",
            body: "",
        }, type="", activity_ref=null) => {

    },
    
}

export default Logger;