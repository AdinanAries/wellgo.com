// Weather Icons
import MoonOnly from "../icons/Weather/Moon-Only.png"
import CloudsDouble from "../icons/Weather/Cloud-Double.png";
import CloudSunBehind from "../icons/Weather/Cloud-Sun-Behind.png";
import SunOnly from "../icons/Weather/Sun-Only.png";
import FogOnly from "../icons/Weather/Fog-Only.png";
import { get_short_date_DAYMMMDD } from "./general";

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
            if(weather){
                if(Array.isArray(city) && city?.length>0)
                    weather.city=city[0];
                else
                    weather.city={
                        //city: "..",
                        //iso3: ".."
                    };
                callback(weather);
            }else{
                callback({
                    error: true,
                    message: "Weather was null"
                });
            }
        }, (err) => {
            console.log(err);
            callback({
                error: true,
                ...err
            });
        })

    },
    /**
     * @param {*} lon 
     * @param {*} lat 
     * @param {*} start_date 
     * @param {*} end_date 
     * @param {*} callback 
     */
    getWeather: async (lon, lat, start_date, end_date, callback=()=>{}, relevant_data=null) => {
        let weather = await fetchWeatherData(lon, lat, start_date, end_date);
        let city = await fetchWeatherCity(lon, lat);
        if(weather){
            if(city?.length>0)
                weather.city=city[0];
            else 
                weather.city={
                    //city: "",
                    //iso3: ""
                };
            
            if(relevant_data)
                callback(weather, relevant_data);
            else
                callback(weather);
        }else{
            if(relevant_data)
                callback({
                    error: true,
                    message: "Weather was null"
                }, relevant_data);
            else
                callback({
                    error: true,
                    message: "Weather was null"
                });
            }
    },
    /**
     * 
     * @param {*} currentHour 
     * @param {*} currentWeather 
     */
    getCurrentWeatherIcon: (currentWeather, currentHour) => {
        if(currentHour>17 || currentHour<11){ // Nightly Icons
            if(currentWeather?.weatherCode===3){
                // Mainly clear, partly cloudy and overcast
                return CloudsDouble;
            } else if(currentWeather?.weatherCode===0){
                // clear sky
                return MoonOnly
            } else if(currentWeather?.weatherCode===45){
                // fog
                return FogOnly;
            }
            // clear sky default
            return MoonOnly;
        }else{ // Daily Icons
            if(currentWeather?.weatherCode===3){
                // Mainly clear, partly cloudy and overcast
                return CloudSunBehind;
            } else if(currentWeather?.weatherCode===0){
                // clear sky
                return SunOnly;
            } else if(currentWeather?.weatherCode===45){
                // fog
                return FogOnly;
            }
            // clear sky - default
            return SunOnly;
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
    },

    /**
     * 
     */
    getWeatherPromptMsgDestinationCity: (current_hour_weather)=>{
        let msgs = [
            `Hi... just a heads up... Be aware of the probable weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... cheers...
            `,
            `Hi... Be aware of the probable weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... FYI.
            `,
            `Sup, in ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                I found the weather on ${get_short_date_DAYMMMDD(current_hour_weather.time)}...
            `,
            `Ok... Just wanted to inform you about the expected weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)} ... cool...
            `,
            `Umm... FYI, the weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... Thanks!
            `
        ];

        return msgs[Math.floor(Math.random() * msgs.length)];
    },

    /**
     * 
     * @param {*} current_hour_weather 
     * @returns 
     */
    getWeatherPromptMsgDestinationCityAndSummeries: (current_hour_weather)=>{
        let msgs = [
            `Hi... Prepared some summary for you...
             Also be aware of the probable weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... cheers...
            `,
            `Hi... Be aware of the probable weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... Also I've added some summary for you.. FYI.
            `,
            `Sup, in ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                I found the weather on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... Also see summary below...
            `,
            `Ok... Just wanted to inform you about the expected weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... and some summary ... cool...
            `,
            `Umm... FYI, the weather in 
                ${(current_hour_weather?.city?.city) || "your destination city"}, ${(current_hour_weather?.city?.iso3) || ""}... 
                on ${get_short_date_DAYMMMDD(current_hour_weather.time)}... I added some summary as well... Thanks!
            `
        ];

        return msgs[Math.floor(Math.random() * msgs.length)];
    },

    /**
     * 
     * @param {*} current_hour_weather 
     * @returns 
     */
    getWeatherPromptMsgSummeries: (summeries={})=>{
        let msgs = [
            `Hi... I Prepared some summary for you based on your search...
            `,
            `Hi... I've added some summary for you for this search.. FYI.
            `,
            `Sup, Please see summary for this flight search below...
            `,
            `Just wanted to inform you with some summary ... cool...
            `,
            `Umm... FYI, For this search, I have added some summary below... Thanks!
            `
        ];

        return msgs[Math.floor(Math.random() * msgs.length)];
    },


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