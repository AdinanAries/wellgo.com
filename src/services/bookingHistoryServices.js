import { getApiHost, getUserToken, getAnonymousID } from "../Constants/Environment";
import { verifyUserToken } from "./sessionServices";

const API_URL = getApiHost();
const USER_TOKEN = getUserToken();

export const fetchBookingHistory = async ( 
    departure_date="", return_date="", trip_type="", cabin_type="", page=1, limit=100,
    path=`\\api\\bookings\\all\\`
) => {
    try{
        return await fetch(API_URL+path+`?p=${page}&l=${limit}&departure_date=${departure_date}&trip_type=${trip_type}&cabin_type=${cabin_type}&return_date=${return_date}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {isError: true, message: err.message};
        })
    } catch (e){
        console.log(e);
        return {isError: true, message: e.message};
    }
}

export const logFlightBooking = async (payload, path=`\\api\\bookings\\add\\`) => {
    let res={};
    const verify_res = await verifyUserToken();
    if(verify_res.valid){
        res = await postFlightBookingLog(payload, (API_URL+path), USER_TOKEN);
    }else{
        const url = (API_URL+"\\api\\bookings\\anonymous-user\\add\\")
        payload.anonymous_id = getAnonymousID();
        res = await postFlightBookingLog(payload, url);
    }
    return res;
}

const postFlightBookingLog = async (payload, url, user_token="") => {
    try{
        return await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user_token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {isError: true, message: err.message};
        })
    } catch (e){
        console.log(e);
        return {isError: true, message: e.message};
    }
}

export const updateFlightBookingLogId = async (booking_id, path=`\\api\\bookings\\set-user-id\\`) => {
    try{
        return await fetch(API_URL+path+`${booking_id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {isError: true, message: err.message};
        })
    } catch (e){
        console.log(e);
        return {isError: true, message: e.message};
    }
}