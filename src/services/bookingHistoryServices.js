import { getApiHost, getUserToken } from "../Constants/Environment";

const API_URL = getApiHost();
const USER_TOKEN = getUserToken();

export const fetchBookingHistory = async ( 
    from_date, to_date, page, limit,
    path=`\\api\\bookings\\all\\`
) => {
    try{
        return await fetch(API_URL+path+`?p=${page}&l=${limit}&from_date=${from_date}&to_date=${to_date}`, {
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
    try{
        return await fetch(API_URL+path, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            data: JSON.stringify(payload)
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