import { getApiHost } from "../Constants/Environment";

const API_URL = getApiHost();

export const fetchRatedPlaces = async (path=`\\api\\rated-places\\`) => {
    try{
        return await fetch(API_URL+path, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return {isError: true};
        })
    } catch (e){
        console.log(e);
        return {isError: true};
    }
}