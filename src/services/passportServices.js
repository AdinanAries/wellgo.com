import { getApiHost, getUserToken } from "../Constants/Environment";

const API_URL = getApiHost();
const USER_TOKEN = getUserToken();

export const fetchPassports = async (path=`\\api\\passports\\all\\`) => {
    try{
        return await fetch(API_URL+path, {
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
            return {isError: true};
        })
    } catch (e){
        console.log(e);
        return {isError: true};
    }
}

export const deletePassports = async (passport, path=`\\api\\passports\\delete\\`) => {
    try{
        return await fetch(API_URL+path, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${USER_TOKEN}`
            },
            body: JSON.stringify({
                ...passport,
                id: passport._id
            })
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