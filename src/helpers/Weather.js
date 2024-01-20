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
import CloudsDouble from "../icons/Weather/Cloud-Double.png";
import CloudSunBehind from "../icons/Weather/Cloud-Sun-Behind.png";

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
        if(currentHour>17 || currentHour<11){ // Nightly Icons
            if(currentWeather?.weatherCode===3){
                return CloudsDouble;
            }
            return NightlyQuaterMoonCloudy;
        }else{ // Daily Icons
            if(currentWeather?.weatherCode===3){
                return CloudSunBehind;
            }
            return SunRainCloud;
        }
    },

    /**
     * 
     * @param {*} code 
     */
    getWeatherCodeDescription: (code) => {
        let weather_desc = WEATHER_CODES[`${code}`];
        if(weather_desc)
            return weather_desc
        return "no weather description"
    }


}

const WEATHER_CODES = {
    "0": ["Clear sky"],
    "1, 2, 3": ["Mainly clear", "partly cloudy", "and overcast"],
    "1": ["Mainly clear"],
    "2": ["Mainly clear and partly cloudy"],
    "3": ["Mainly clear, partly cloudy and overcast"],
    "45, 48": ["Fog", "and depositing rime fog"],
    "45": ["Fog"],
    "48": ["Fog and depositing rime fog"],
    "51, 53, 55": ["Drizzle: Light", "moderate", "and dense intensity"],
    "51": ["Light Drizzle"],
    "53": ["Drizzle: Light or moderate"],
    "55": ["Drizzle: Light or moderate and dense intensity"],
    "56, 57": ["Freezing Drizzle: Light", "and dense intensity"],
    "56": ["Light freezing drizzle"],
    "57": ["Freezing Drizzle: Light and dense intensity"],
    "61, 63, 65": ["Rain: Slight", "moderate", "and heavy intensity"],
    "61": ["Slight Rain"],
    "63": ["Rain: Slight or moderate"],
    "65": ["Rain: Slight or moderate and heavy intensity"],
    "66, 67": ["Freezing Rain: Light", "and heavy intensity"],
    "66": ["Light freezing rain"],
    "67": ["Freezing Rain: Light and heavy intensity"],
    "71, 73, 75": ["Snow fall: Slight", "moderate", "and heavy intensity"],
    "71": ["Slight snow fall"],
    "73": ["Snow fall: Slight or moderate"],
    "75": ["Snow fall: Slight or moderate and heavy intensity"],
    "77": ["Snow grains"],
    "80, 81, 82": ["Rain showers: Slight", "moderate", "and violent"],
    "80": ["Slight rain showers"],
    "81": ["Rain showers: Slight or moderate"],
    "82": ["Rain showers: Slight or moderate or violent"],
    "85, 86": ["Snow showers slight", "and heavy"],
    "85": ["Slight snow showers "],
    "86": ["Snow showers slight and heavy"],
    "95":	["Slight thunderstorm"],
    "95 *":	["Thunderstorm: Slight or moderate"],
    "96, 99 *":	["Thunderstorm with slight", "and heavy hail"],
    "96": ["Thunderstorm"],
    "99": ["Thunderstorm with slight hail"],
    "99 *":	["Thunderstorm with slight and heavy hail"],
    // (*) Thunderstorm forecast with hail is only available in Central Europe
}

export default Weather;