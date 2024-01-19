// Weather Icons
import CloudExtremeWindy from "../icons/Weather/Cloud-Extreme-Windy.png";
import CloudRain from "../icons/Weather/Cloud-Rain.png";
import CloudRainbow from "../icons/Weather/Cloud-Rainbow.png";
import CloudSnow from "../icons/Weather/Cloud-Snow.png";
import CloudThunder from "../icons/Weather/Cloud-Thunder.png";
import Cloud from "../icons/Weather/Cloud.png";
import DarkClouds from "../icons/Weather/Dark-Clouds.png";
import DoubleCloudSunBetween from "../icons/Weather/Double-Cloud-Sun-Between.png";
import NightlyFullMoonClear from "../icons/Weather/Nightly-Full-Moon_Clear.png";
import NightlyFullMoonCloudy from "../icons/Weather/Nightly-Full-Moon-Cloudy.png";
import NightlyQuaterMoonCloudy from "../icons/Weather/Nightly-Quater-Moon-Cloudy.png";
import NightlyLightRain from "../icons/Weather/Nightly-Light-Rain.png";
import NightlyNoMoonClear from "../icons/Weather/Nightly-No-Moon-Clear.png";
import NightlyQuaterMoonClear from "../icons/Weather/Nightly-Quater-Moon-Clear.png";
import SunCloud from "../icons/Weather/Sun-Cloud.png";
import SunDoubleCloud from "../icons/Weather/Sun-Double-Cloud.png";
import SunRainCloud from "../icons/Weather/Sun-Rain-Cloud.png";
import SunnyCloudy from "../icons/Weather/Sunny-Cloudy.png";

import { fetchWeatherData, fetchWeatherCity } from "../services/weatherServices";

const Weather = {
    /**
     * @param {*} currentHour 
     * @param {*} currentWeather 
     */
    getWeatherDetaultLocation: async (start_date, end_date, callback=()=>{}) => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let weather = await fetchWeatherData(long, lat, start_date, end_date);
            let city = await fetchWeatherCity(long, lat);
            weather.city=city[0];
            callback(weather);
        }, (err) => {
            console.log(err);
            callback({
                error: true,
                ...err
            });
        })

    },
    /**
     * 
     * @param {*} currentHour 
     * @param {*} currentWeather 
     */
    getCurrentWeatherIcon: (currentWeather, currentHour) => {
        if(currentHour>17){ // Nightly Icons
            return NightlyQuaterMoonCloudy;
        }else{ // Daily Icons
            return SunRainCloud;
        }
    }


}

export default Weather;