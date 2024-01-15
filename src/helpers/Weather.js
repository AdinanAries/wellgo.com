import { fetchWeatherData } from "../services/weatherServices";

const Weather = {
    /**
     * 
     */
    getWeatherDetaultLocation: async (start_date, end_date, callback=()=>{}) => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log(position);
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let weather = await fetchWeatherData(long, lat, start_date, end_date);
            callback(weather);
        }, (err) => {
            console.log(err);
            callback({
                error: true,
                ...err
            });
        })

    }


}

export default Weather;