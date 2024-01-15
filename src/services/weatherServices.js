//import { getApiHost } from "../Constants/Environment";

const API_URL="https://wellgo-backend-a2628ce79736.herokuapp.com";//getApiHost();

export const fetchWeatherData = async (long, lat, start_date, end_date, path="/api/weather") => {
    try{
        return await fetch(`${API_URL+path}/${long}/${lat}/${start_date}/${end_date}`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            console.log(err);
            return null;
        });
    }catch(e){
        console.log(e);
        return null;
    }
}