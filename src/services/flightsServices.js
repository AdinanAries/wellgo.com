import CONSTANTS from "../Constants/Constants";
import { FLIGHT_DATA_ADAPTER } from "../helpers/FlightDataAdapter";
import { getApiHost } from "../Constants/Environment";

const API_URL = getApiHost();

export const fetchFlightOffers = async (path="/api/flights") => {
    try{
        return await fetch(API_URL+path, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...JSON.parse(localStorage.getItem(CONSTANTS.local_storage.flight_search_object)),
                currency: localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_curr),
            })
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {data: []};
        });
    } catch (e){
        console.log(e);
        return {data: []};
    }
}

export const getFlightDetail = async (selectedFlightId, path="/api/flights/offers/") => {
    let _path=path+selectedFlightId;
    try{
        return await fetch(API_URL+_path)
        .then(res => res.json())
        .then(data => FLIGHT_DATA_ADAPTER.adapt(data))
        .catch(err => {
            console.log(err);
            return null;
        });
    }catch(e){
        console.log(e);
        return null;
    }
}

export const createFlightOrder = async (payload, path=`/api/flights/orders/create/`) => {
    try{
        return await fetch(API_URL+path, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
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

export const getPriceMarkup = async (path="/api/flights/price-markup/") => {
    try{
        return await fetch(API_URL+path, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {data: []};
        });
    } catch (e){
        console.log(e);
        return {data: []};
    }
}