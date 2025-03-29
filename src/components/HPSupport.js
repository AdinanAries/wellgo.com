import $, { param } from "jquery";
import HelpSupportChatMessaging from "./HelpSupportChatMessaging";
import HelpSupportChatStartPage from "./HelpSupportChatStartPage";
import botIcon from "../icons/botIcon.svg";
import HelpSupportSettingsPage from "./HelpSupportChatSettingsPage";
import CONSTANTS from "../Constants/Constants";
import BotAuxMsg from "../Constants/BotAuxMsg";
import getBotResponse from "../Constants/BotResponses";
import Weather from "../helpers/Weather";
import Tourism from "../helpers/Tourism";
import Bot_Construction_Site from "../Bot_in_Construction_Site.jpg";
import Bot_In_Server_Room from "../Bot-In-Server-Room.jpg";
import Bot_Mechanic from "../Bot-Mechanic.jpg";
import Bot_Work_In_Progress_1 from "../Bot-Work-In-Progress-1.jpg";
import Bot_Work_In_Progress_2 from "../Bot-Work-In-Progress-2.jpg";
import Bot_Work_In_Progress_3 from "../Bot-Work-In-Progress-3.jpg";
import Bot_Work_In_Progress_4 from "../Bot-Work-In-Progress-4.jpg";
import Tourism_Photo from "../tour-img-2.svg"
import notification_sound from "../audio/livechat.mp3";
import { useEffect, useState } from "react";
import { get_short_date_DAYMMMDD, getUserFriendlyDurationStringFromTotalMunites } from "../helpers/general";
import { markup } from "../helpers/Prices";
import { getPriceMarkupPercentage } from "../services/flightsServices";

let __priceMarkupPercentage=0;

export default function HPSupportBtn(){

    // Bot prompt to show
    let PROMPTS = ["weather", "tourist-attraction"];

    const [ currentHourWeather, setCurrentHourWeather ] = useState();
    const [ touristAttraction, setTouristAttraction ] = useState();
    const [TO_SHOW, SET_TO_SHOW] = useState(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);

    const [ PriceMarkupPercentage, setPriceMarkupPercentage ] = useState(0);

    useEffect(()=>{
        (async()=>{
            __priceMarkupPercentage = await getPriceMarkupPercentage();
            setPriceMarkupPercentage(parseInt(__priceMarkupPercentage));
        })();
    }, []);

    useEffect(()=>{
        // Get and Set Weather Data or Tourist Attraction
        const page = window.location.pathname.substring(1);
        if((!page || (CONSTANTS.site_pages.landing===page)) && TO_SHOW==="tourist-attraction"){ // Home page
            Tourism.getTouristAttractionDefaultLocation(touristAttractionCallback);
        }
        let date = new Date();
        date.setDate(date.getDate() - 1); // Hack because javascript is stupid...
        let today_iso_date = new Date(date).toISOString().split("T")[0];
        Weather.getWeatherDetaultLocation(today_iso_date, today_iso_date, weatherCallback); 

    }, []);

    const touristAttractionCallback = (attraction) => {
        console.log("Tourism:", attraction);
        if(attraction?.error){
            // Error handling
            setTouristAttraction({
                isError: true,
            });
            return;
        }
        setTouristAttraction(attraction);
    }

    let is_tourist_attraction_rated=false; // TO DO: Move to state and assign when tourist data has been returned from server
    let ratings_cover=<></>;
    if(!is_tourist_attraction_rated){
        ratings_cover = <div style={{position: "absolute", zIndex: 1, height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid red", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{padding: 10}}>
                <p style={{fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 12}}>
                    <i className="fa-solid fa-exclamation-triangle" 
                    style={{color: "yellow", marginRight: 10}}></i>
                    No ratings found for this place...
                </p>
            </div>
        </div>;
    }

    const weatherCallback = (weatherData) => {
        console.log('Weather', weatherData);
        if(weatherData?.error){
            // Error handling
            setCurrentHourWeather({
                isError: true
            });
            return;
        }
        let current_hour = new Date().toString().split(" ")[4].split(":")[0];
        let current_hour_weather = {};
        let i = parseInt(current_hour);
        current_hour_weather.time = weatherData.hourly.time[i];//.toISOString();
        current_hour_weather.temperature2m=weatherData.hourly.temperature2m[i];
        current_hour_weather.relativeHumidity2m=weatherData.hourly.relativeHumidity2m[i];
        current_hour_weather.dewPoint2m=weatherData.hourly.dewPoint2m[i];
        current_hour_weather.apparentTemperature=weatherData.hourly.apparentTemperature[i];
        current_hour_weather.precipitationProbability=weatherData.hourly.precipitationProbability[i];
        current_hour_weather.precipitation=weatherData.hourly.precipitation[i];
        current_hour_weather.rain=weatherData.hourly.rain[i];
        current_hour_weather.showers=weatherData.hourly.showers[i];
        current_hour_weather.snowfall=weatherData.hourly.snowfall[i];
        current_hour_weather.snowDepth=weatherData.hourly.snowDepth[i];
        current_hour_weather.weatherCode=weatherData.hourly.weatherCode[i];
        current_hour_weather.pressureMsl=weatherData.hourly.pressureMsl[i];
        current_hour_weather.surfacePressure=weatherData.hourly.surfacePressure[i];
        current_hour_weather.cloudCover=weatherData.hourly.cloudCover[i];
        current_hour_weather.cloudCoverLow=weatherData.hourly.cloudCoverLow[i];
        current_hour_weather.cloudCoverMid=weatherData.hourly.cloudCoverMid[i];
        current_hour_weather.cloudCoverHigh=weatherData.hourly.cloudCoverHigh[i];
        current_hour_weather.visibility=weatherData.hourly.visibility[i];
        current_hour_weather.evapotranspiration=weatherData.hourly.evapotranspiration[i];
        current_hour_weather.et0FaoEvapotranspiration=weatherData.hourly.et0FaoEvapotranspiration[i];
        current_hour_weather.vapourPressureDeficit=weatherData.hourly.vapourPressureDeficit[i];
        current_hour_weather.windSpeed10m=weatherData.hourly.windSpeed10m[i];
        current_hour_weather.windSpeed80m=weatherData.hourly.windSpeed80m[i];
        current_hour_weather.windSpeed120m=weatherData.hourly.windSpeed120m[i];
        current_hour_weather.windSpeed180m=weatherData.hourly.windSpeed180m[i];
        current_hour_weather.windDirection10m=weatherData.hourly.windDirection10m[i];
        current_hour_weather.windDirection80m=weatherData.hourly.windDirection80m[i];
        current_hour_weather.windDirection120m=weatherData.hourly.windDirection120m[i];
        current_hour_weather.windDirection180m=weatherData.hourly.windDirection180m[i];
        current_hour_weather.windGusts10m=weatherData.hourly.windGusts10m[i];
        current_hour_weather.temperature80m=weatherData.hourly.temperature80m[i];
        current_hour_weather.temperature120m=weatherData.hourly.temperature120m[i];
        current_hour_weather.temperature180m=weatherData.hourly.temperature180m[i];
        current_hour_weather.soilTemperature0cm=weatherData.hourly.soilTemperature0cm[i];
        current_hour_weather.soilTemperature6cm=weatherData.hourly.soilTemperature6cm[i];
        current_hour_weather.soilTemperature18cm=weatherData.hourly.soilTemperature18cm[i];
        current_hour_weather.soilTemperature54cm=weatherData.hourly.soilTemperature54cm[i];
        current_hour_weather.soilMoisture0To1cm=weatherData.hourly.soilMoisture0To1cm[i];
        current_hour_weather.soilMoisture1To3cm=weatherData.hourly.soilMoisture1To3cm[i];
        current_hour_weather.soilMoisture3To9cm=weatherData.hourly.soilMoisture3To9cm[i];
        current_hour_weather.soilMoisture9To27cm=weatherData.hourly.soilMoisture9To27cm[i];
        current_hour_weather.soilMoisture27To81cm=weatherData.hourly.soilMoisture27To81cm[i];
        current_hour_weather.icon=Weather.getCurrentWeatherIcon(current_hour_weather, current_hour);
        current_hour_weather.city=weatherData?.city;
        current_hour_weather.description=Weather.getWeatherCodeDescription(current_hour_weather?.weatherCode)
        // State Change
        setCurrentHourWeather(current_hour_weather);
        // Showing the Prompt
        const page = window.location.pathname.substring(1);
        if(!page || (CONSTANTS.site_pages.landing===page)){ // Home page
            let duration=50000
            window.show_new_chatbot_tip(duration);
        }
        
    }

    return (
        <div className="hp_support_container">
            <div id="support_chat_container" className="support_chat_div_container">
                <div id="main_bot_view_selected_flights_all_details" className="bot_view_flights_all_details">
                    <div id="ticket_info_pane_for_selected_ticket_from_bot_list" style={{height: "calc(100% - 60px)", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: 10, overflowY: "auto"}}>

                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <p style={{fontSize: 14, marginRight: 10, padding: "10px 20px", fontFamily: "'Prompt', sans-serif"}}>
                                <i style={{fontSize: 17, color: "green", marginRight: 10}} className="fa fa-info"></i>
                                    You've selected this flight</p>
                        </div>
                        <div id="main_bot_view_selected_flights_all_details_cancel_btn" 
                            style={{cursor: "pointer", boxShadow: "0 0 10px rgba(0,0,0,0.2)", padding: 14, color: "white", backgroundColor: "crimson", fontSize: 14, borderRadius: 50}}>
                            <i style={{marginRight: 10}} className="fa fa-times"></i>close
                        </div>
                    </div>
                </div>
                <div id="main_bot_view_flights_all_details" className="bot_view_flights_all_details">
                    <div id="main_bot_view_flights_all_details_selected_cover" style={{display: "none", animation: "pop-in 0.2s ease-out", position: "absolute", top: 0, left: 0, width: "100%", height: "calc(100%)", zIndex: 1, backgroundColor: "rgba(255,255,255,0.9)", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{backgroundColor: "white", margin: 10, borderRadius: 10, padding: 20, boxShadow: "0 0 10px rgba(0,0,0,0.3)"}}>
                            <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', sans-serif"}}>
                                <i className="fa fa-info-circle" style={{marginRight: 10, color: "green"}}></i>
                            You have selected this flight...
                            Please say 'done' to confirm</p>
                            <div style={{marginTop: 20, borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 20}}>
                                <div id="main_bot_view_flights_all_details_deselect_btn" style={{padding: 14, cursor: "pointer", backgroundColor: "crimson", color: "white", fontSize: 14, textAlign: "center", borderRadius: 50}}>
                                    <i className="fa fa-times" style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}}></i>deselect this flight
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="selected_ticket_pane_for_bot_list" style={{height: "calc(100% - 60px)", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: 10, overflowY: "auto"}}>

                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div id="main_bot_view_flights_all_details_cancel_btn" 
                        style={{cursor: "pointer", boxShadow: "0 0 10px rgba(0,0,0,0.2)", padding: 14, color: "white", backgroundColor: "crimson", fontSize: 14, borderRadius: 50}}>
                            <i style={{marginRight: 10}} className="fa fa-times"></i>close</div>
                            <label htmlFor="select_a_ticket_from_bot_list_chck"><div id="main_bot_view_flights_all_details_select_btn" style={{cursor: "pointer", boxShadow: "0 0 10px rgba(0,0,0,0.2)", padding: 14, color: "white", backgroundColor: "darkblue", fontSize: 14, borderRadius: 50}}>
                            <input id="select_a_ticket_from_bot_list_chck" style={{marginRight: 10, width: 12, height: 12}} type="checkbox"/>select</div></label>
                    </div>
                </div>
                <p id="main_chat_hp_support_container_close_btn" className="page-popup-cover-close-btn">
                    &times;
                </p>
                <HelpSupportSettingsPage />
                <HelpSupportChatStartPage />
                <HelpSupportChatMessaging />
            </div>
            <div id="main_homepage_start_support_btn" className="homepage_start_support_btn">
                <i className="fa fa-comments"></i>
            </div>
            <div id="main_chat_bot_tips_poppup_section" className="chatbot_popup_tip">
                <div onClick={hide_new_chatbot_tip} className="chatbot_popup_tip_close_btn">
                    &times;
                </div>
                <div className="chatbot_popup_tip_msg">
                    <div id="main_chatbot_popup_tip_msg">
                        <p>
                            <i className="fa fa-lightbulb-o"></i>
                            {BotAuxMsg.regular[Math.floor(Math.random() * BotAuxMsg.regular.length)] + " "}
                            {getBotResponse(CONSTANTS.bot.responses.introduction_greetings)}
                        </p>
                        { ((!currentHourWeather?.isError && TO_SHOW==="weather")) && <>
                            <div style={{position: "relative", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 10}}>
                                <p style={{position: "absolute", top: 50, left: 20, fontSize: 30, color: "orange", fontFamily: "'Prompt', Sans-serif"}}>
                                    {Math.round(currentHourWeather?.temperature2m)}°F
                                </p>
                                <div style={{display: "flex"}}>
                                    <p style={{color: "orange", marginRight: 5, fontSize: 11, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                                        Now:
                                    </p>
                                    <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif", color: "white", marginTop: 10}}>
                                        {new Date().toString()}
                                    </p>
                                </div>
                                <div style={{position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 1}}>
                                    <p style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif", color: "white"}}>
                                        {currentHourWeather?.description}
                                    </p>
                                </div>
                                <p style={{textAlign: "center", paddingTop: 5, paddingBottom: 25}}>
                                    <img style={{width: 90, height: "auto", marginTop: 10}}
                                        src={currentHourWeather?.icon} 
                                        alt="to do" />
                                </p>
                            </div>
                        </>}
                        { ((!touristAttraction?.isError && TO_SHOW==="tourist-attraction")) && <>
                            <div style={{marginTop: 15, height: 160, backgroundImage: `url('${Tourism_Photo}')`, backgroundSize: "cover", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                                <a href={(touristAttraction?.url) || "#"} target="_blank" rel="noreferrer"  style={{textDecoration: "none"}}>
                                    <div style={{border: "1px solid rgba(255,255,255, 0.2)", backgroundColor: "rgba(0,0,0,0.8)", padding: 10}}>
                                        <div style={{display: "flex"}}>
                                            <p style={{textShadow:  "1px 1px 1px rgba(0,0,0,0.9)", color: "orange", fontSize: 12, fontFamily: "'Prompt', Sans-serif",}}>
                                                <i style={{marginRight: 5, fontSize: 13}} className="fa fa-map-marker" aria-hidden="true" ></i>
                                            </p>
                                            <p style={{textShadow:  "1px 1px 1px rgba(0,0,0,0.9)", color: "orange", fontSize: 12, fontFamily: "'Prompt', Sans-serif",}}>
                                                {touristAttraction?.name} - <span style={{color: "white", fontFamily: "'Prompt', Sans-serif", fontSize: 11}}>
                                                click here to read more about this tourist attraction...</span>
                                            </p>
                                        </div>
                                        <p style={{textShadow: "1px 1px 1px rgba(0,0,0,0.9)", color: "lightblue", fontFamily: "'Prompt', Sans-serif", fontSize: 11, marginLeft: 10}}>
                                            {(touristAttraction?.type || "")} - in/near {(currentHourWeather?.city?.city || "your current city")}
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div style={{position: "relative"}}>
                                {ratings_cover}
                                <div style={{paddingTop: 5}}>
                                    <p style={{color: "white", fontSize: 11, marginBottom: 10}}>
                                        People who have visited rated this place</p>
                                    <div style={{background: "linear-gradient(0.25turn, red, orange, yellow, green)", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", borderRadius: 50}}>
                                        <div style={{height: 4, width: "45%", position: "relative"}} >
                                            <div style={{position: "absolute", top: -6, right: 0, width: 15, height: 15, backgroundColor: "white", borderRadius: "100%", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)"}}></div>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "space-between", marginTop: 7}}>
                                        <p style={{color: "red", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                            0 | 😞</p>
                                        <p style={{color: "orange", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                            33 | 😐</p>
                                        <p style={{color: "yellow", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                            66 | 🙂</p>
                                        <p style={{color: "green", fontSize: 11, fontFamily: "'Prompt', Sans-serif"}} >
                                            99 | 😁</p>
                                    </div>
                                </div>
                            </div>
                        </>}
                    </div>
                    { (!currentHourWeather?.isError) &&
                        <div style={{display: "flex", marginTop: 5, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.1)"}}>
                            <i style={{color: "rgba(255,255,255,0.5)", marginRight: 10, fontSize: 13}}
                                    className="fa-solid fa-temperature-high"></i>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 11}}>
                                {(currentHourWeather?.city?.city) || "Your city"}, {(currentHourWeather?.city?.iso3) || "..."}
                                <span style={{fontFamily: "'Prompt', Sans-serif", margin: "0 10px", color: "orange", fontSize: 11}}>
                                    &#8226;
                                </span>
                                <span style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                    {Math.round(currentHourWeather?.temperature2m)} °F</span>
                                <span style={{fontFamily: "'Prompt', Sans-serif", margin: "0 10px", color: "orange", fontSize: 11}}>
                                    &#8226;
                                </span>
                                <span style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                    AD v1.0.0</span>
                            </p>
                        </div>
                    }
                </div>
                <div id="main_chatbot_popup_tip_img" className="chatbot_popup_tip_img">
                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                </div>
            </div>
        </div>
        
    );
}

const return_bot_chat_status_markup = (status) => {
    //statuses: online, offline, other...
    return `
        <p style="width: 8px; height: 8px; background-color: green; margin-right: 5px; margin-top: 6px; border-radius: 100%;"></p>
        <p style="font-family: 'Prompt', sans-serif; font-size: 13px; color: rgba(0,0,0,0.7);">online</p>
    `
}
const return_bot_chat_loading_markup = () => {
    return `
        <p style="width: 8px; height: 8px; background-color: red; margin-right: 5px; margin-top: 6px; border-radius: 100%;"></p>
        <p style="font-family: 'Prompt', sans-serif; font-size: 13px; color: rgba(0,0,0,0.7);">loading...</p>
    `
}

export function hide_new_chatbot_tip(){
    $("#main_chat_bot_tips_poppup_section").slideUp("fast");
}

export function show_support_chat_messaging_container(){
    document.getElementById("support_chat_messaging_container").style.display="block";
    document.getElementById("support_chat_start_page_container").style.display="none";
    document.getElementById("support_chat_settings_container").style.display="none";
}
export function show_support_chat_start_page_container(){
    document.getElementById("support_chat_messaging_container").style.display="none";
    document.getElementById("support_chat_start_page_container").style.display="block";
    document.getElementById("support_chat_settings_container").style.display="none";
    document.getElementById("chat_start_page_bot_status_display").innerHTML = return_bot_chat_status_markup("online")
}
export function show_support_chat_settings_container(){
    document.getElementById("support_chat_messaging_container").style.display="none";
    document.getElementById("support_chat_start_page_container").style.display="none";
    document.getElementById("support_chat_settings_container").style.display="block";
    document.getElementById("chat_settings_page_bot_status_display").innerHTML = return_bot_chat_status_markup("online")
}

setTimeout(()=>{
    
},1000);

let botPromptHideTimeoutObj;
export function show_prompt_on_Bot_AD_tips_popup(
        msg, 
        type=CONSTANTS.bot.prompt_types.prompt, 
        duration=100000, 
        params={
            image: true, 
            weather: false, 
            data: {
                img_url: "",
                icon_class: "fa-solid fa-tools",
                text: "Work in progress...",
            }
        }
    ){

    let audio = new Audio(notification_sound);
    
    if(botPromptHideTimeoutObj){
        clearTimeout(botPromptHideTimeoutObj);
    }

    document.getElementById("main_chat_bot_tips_poppup_section").style.display="block";
    document.getElementById("main_chatbot_popup_tip_msg").innerHTML=`
        <p style='color: rgba(255,255,255,0.7); font-family: "Prompt", Sans-serif; font-size: 14px;'>    
            <i style="color: orange;" class="fa-regular fa-comment-dots"></i>
            Typing . . .</p>`;
    let randWait = Math.floor(Math.random() * 3000);

    setTimeout(() => {
        if(type===CONSTANTS.bot.prompt_types.prompt)
            document.getElementById("main_chatbot_popup_tip_msg").innerHTML=`<p>
                <i class="fa fa-lightbulb-o"></i>
                ${msg}
            </p>`;
        else if(type===CONSTANTS.bot.prompt_types.warn){
            let message = BotAuxMsg.regular[Math.floor(Math.random() * BotAuxMsg.regular.length)] + " " +
                            BotAuxMsg.bad_mood[Math.floor(Math.random() * BotAuxMsg.bad_mood.length)] + " " +
                            msg + ". " +
                            BotAuxMsg.damage_control[Math.floor(Math.random() * BotAuxMsg.damage_control.length)] + " " +
                            BotAuxMsg.emotions.bad[Math.floor(Math.random() * BotAuxMsg.emotions.bad.length)]
            document.getElementById("main_chatbot_popup_tip_msg").innerHTML=`<p>
                    <i style="color: yellow;" class="fa-solid fa-exclamation-triangle"></i>
                    ${message}
                </p>`;
        }

        // Suggested Places
        if(params?.places){
            document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=getPlacesPromptMarkup(params?.places);
        }

        if(params?.image){

            if(!params?.data?.img_url){
                // Only for mainntenance prompts as default
                let imgs = [
                    Bot_Construction_Site,
                    Bot_In_Server_Room, 
                    Bot_Mechanic,
                    Bot_Work_In_Progress_1,
                    Bot_Work_In_Progress_2,
                    Bot_Work_In_Progress_3,
                    Bot_Work_In_Progress_4
                ];
                params.data.img_url = imgs[Math.floor(Math.random() * imgs.length)];
            }

            document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=`
                <div style="position: relative;">
                    <div style="position: absolute; bottom: 0; left: 0; width: 100%; padding: 10px; z-index: 1;">
                        <p style="font-size: 13px; font-family: 'Prompt', Sans-serif; color: white; text-shadow: 1px 2px 3px rgba(0,0,0,0.8);">
                            <i style="color: orange; margin-right: 5px; font-size: 13px" 
                                class="${params?.data?.icon_class}"></i>    
                            ${params?.data?.text}
                        </p>
                    </div>
                    <p style="text-align: center;">
                        <img style="width: 100%; height: 190px; object-fit: cover; margin-top: 10px; box-shadow: -2px -2px 3px rgba(0,0,0,0.2);"
                            src="${params?.data?.img_url}"
                            alt="to do" />
                    </p>
                </div>
            `;
        }

        if(params?.weather){
            document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=getBotWeatherPromptMarkup(params?.data);
            if(params?.flight_data_summeries){
                /*prices:{
                    min: min_price, 
                    max: max_price,
                    avg: (((total_of_all_prices)/flightsArr.length)),
                    prices_count: pricesCount,
                    popular: 0,
                }*/
                let summeries=params?.flight_data_summeries;
                document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=`
                    <p style="color: orange; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-top: 5px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">
                        Price Summary:
                    </p>
                    <div style="display: flex;">
                        <p style="font-family: 'Prompt', Sans-serif; font-size: 11px;">
                                Min: $${markup(summeries?.prices?.min, __priceMarkupPercentage)?.new_price?.toFixed(0)}
                            <span style="font-family: 'Prompt', Sans-serif; margin: 0 2px; color: orange; font-size: 11px;">
                                |
                            </span>
                            <span style="font-size: 11px; font-family: 'Prompt', Sans-serif;">
                                Max: $${markup(summeries?.prices?.max, __priceMarkupPercentage)?.new_price?.toFixed(0)}</span>
                            <span style="font-family: 'Prompt', Sans-serif; margin: 0 2px; color: orange; font-size: 11px;">
                                |
                            </span>
                            <span style="font-size: 11px; font-family: 'Prompt', Sans-serif;">
                                Average: $${markup(summeries?.prices?.avg, __priceMarkupPercentage)?.new_price?.toFixed(0)}</span>
                            <span style="font-family: 'Prompt', Sans-serif; margin: 0 2px; color: orange; font-size: 11px;">
                                |
                            </span>
                            <span style="font-size: 11px; font-family: 'Prompt', Sans-serif;">
                                Popular: $${markup(summeries?.prices?.popular, __priceMarkupPercentage).new_price.toFixed(0)}</span>
                        </p>
                    </div>
                `;
            }
        }else {
            if(params?.flight_data_summeries){
                let summaries = params?.flight_data_summeries;
                document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=getBotSummariesPromptMarkup(summaries);
            }
        }

        //audio.play();
    }, randWait);

    botPromptHideTimeoutObj = setTimeout(hide_new_chatbot_tip, (duration+randWait));
}

const getBotWeatherPromptMarkup = (currentHourWeather) => {
    return `
        <div style="position: relative; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 10px;">
            <p style="position: absolute; top: 40px; left: 15px; font-size: 25px; color: orange; font-family: 'Prompt', Sans-serif;">
                ${Math.round(currentHourWeather?.temperature2m)}°F
            </p>
            <div style="display: flex;">
                <p style="color: orange; margin-right: 5px; font-size: 11px; font-family: 'Prompt', Sans-serif; margin-top: 10px;">
                    ${get_short_date_DAYMMMDD(currentHourWeather?.time)}, 
                </p>
                <p style="font-size: 11px; font-family: 'Prompt', Sans-serif; color: white; margin-top: 10px;">
                    ${(currentHourWeather?.city?.city) || "..."}, ${(currentHourWeather?.city?.iso3) || "..."}
                </p>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; z-index: 1;">
                <p style="font-size: 11px; font-family: 'Prompt', Sans-serif; color: white;">
                    ${currentHourWeather?.description}
                </p>
            </div>
            <p style="text-align: center; padding-fop: 5px; padding-bottom: 25px">
                <img style="width: 90px; height: auto; margin-top: 10px;"
                    src=${currentHourWeather?.icon} 
                    alt="to do" />
            </p>
        </div>
    `;
}

const getBotSummariesPromptMarkup = (summaries) => {

    // Prices
    let max_price = markup(summaries?.prices?.max, __priceMarkupPercentage)?.new_price?.toFixed(0);
    let avg_price = markup(summaries?.prices.avg, __priceMarkupPercentage)?.new_price?.toFixed(0);
    let min_price = markup(summaries?.prices.min, __priceMarkupPercentage)?.new_price?.toFixed(0);
    let popular_price = markup(summaries?.prices?.popular, __priceMarkupPercentage)?.new_price?.toFixed(0);
    let popular_count = summaries?.prices?.popular_count;
    let items_total = summaries?.prices?.items_total;
    let minPercent = Math.floor(((min_price*100)/max_price));
    let avgPercent = Math.floor(((avg_price*100)/max_price));
    let popularPercent = Math.floor(((popular_count*100)/items_total));

    // Duration
    let max_duration = summaries?.duration?.max;
    let avg_duration = summaries?.duration.avg;
    let min_duration = summaries?.duration.min;
    let popular_duration = summaries?.duration?.popular;
    let dur_popular_count = summaries?.duration?.popular_count;
    let dur_items_total = summaries?.duration?.items_total;
    let dur_minPercent = Math.floor(((min_duration*100)/max_duration));
    let dur_avgPercent = Math.floor(((avg_duration*100)/max_duration));
    let dur_popularPercent = Math.floor(((dur_popular_count*100)/dur_items_total));
    return `
        <div style="padding: 10, border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-top: 5px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">
                Price Summary:
            </p>
            <div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: orange; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        $${min_price} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (min)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${minPercent}%; background: orange;"></div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: orange; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        $${avg_price} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (avg)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${avgPercent}%; background: orange;"></div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: orange; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        $${max_price} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (max)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: 95%; background: orange;"></div>
                    </div>
                </div>
                <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-top: 5px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">
                    Popular Price: <span style="color: orange; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                    $${popular_price}</span>
                </p>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        <span style="color: orange; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            ${popular_count}/${items_total}:</span>
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${popularPercent}%; background: orange;"></div>
                    </div>
                    <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-left: 10px;">
                        ${items_total} flights
                    </p>
                </div>
            </div>
        </div>
            <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-top: 5px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">
                Duration Summary:
            </p>
            <div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: rgb(169, 221, 255); font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        ${getUserFriendlyDurationStringFromTotalMunites(
                            min_duration
                        )} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (min)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${dur_minPercent}%; background: rgb(169, 221, 255);"></div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: rgb(169, 221, 255); font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        ${getUserFriendlyDurationStringFromTotalMunites(
                            Math.ceil(avg_duration)
                        )} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (avg)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${dur_avgPercent}%; background: rgb(169, 221, 255);"></div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <p style="color: rgb(169, 221, 255); font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        ${getUserFriendlyDurationStringFromTotalMunites(
                            max_duration
                        )} <span style="color: white; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            (max)</span>:
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: 95%; background: rgb(169, 221, 255);"></div>
                    </div>
                </div>
                <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-top: 5px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); margin-bottom: 5px;">
                    Popular Duration: <span style="color: rgb(169, 221, 255); font-size: 11px; font-family: 'Prompt', Sans-serif;">
                    ${getUserFriendlyDurationStringFromTotalMunites(
                        popular_duration
                    )}</span>
                </p>
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-right: 10px;">
                        <span style="color: rgb(169, 221, 255); font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            ${dur_popular_count}/${dur_items_total}:</span>
                    </p>
                    <div style="width: 120px; height: 4px; background: rgba(255,255,255,0.2); overflow: hidden; border-radius: 50px; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);">
                        <div style="height: 100%; width: ${dur_popularPercent}%; background: rgb(169, 221, 255);"></div>
                    </div>
                    <p style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-left: 10px;">
                        ${dur_items_total} flights
                    </p>
                </div>
            </div>
        </div>
    `;
}

const getPlacesPromptMarkup = (place) => {
    let rated=false;

    let ratings_cover=``;
    if(!rated){
        ratings_cover = `<div style="position: absolute; z-index: 1; height: 100%; width: 100%; background-color: rgba(0,0,0,0.8);  border: 1px solid red; display: flex; justify-content: space-between; align-items: center;">
            <div style="padding: 10px;">
                <p style="font-family: 'Prompt', Sans-serif; color: white; font-size: 12px;">
                    <i class="fa-solid fa-exclamation-triangle" style="color: yellow; margin-right: 10px;"></i>
                    No ratings found for this place...
                </p>
            </div>
        </div>`
    }

    return `
        <div>
            <div style="margin-top: 15px; height: 160px; background-image: url('${Tourism_Photo}'); background-size: cover; display: flex; flex-direction: column; justify-content: flex-end;">
                <a href=${(place?.url) || "#"} target="_blank" rel="noreferrer" style="text-decoration: none;">    
                    <div style="border: 1px solid rgba(255,255,255, 0.2); background-color: rgba(0,0,0,0.8); padding: 10px;">
                        <p style="text-shadow: 1px 1px 1px rgba(0,0,0,0.9); color: orange; font-size: 12px; font-family: 'Prompt', Sans-serif;">
                            <i style="margin-right: 5px; font-size: 13px;" class="fa fa-map-marker" aria-hidden="true" ></i>    
                            ${place?.name}
                        </p>
                        <p style="text-shadow: 1px 1px 1px rgba(0,0,0,0.9); color: lightblue; font-family: 'Prompt', Sans-serif; font-size: 11px; margin-left: 10px;">
                            in/near ${(place?.city?.city) || "..."}, ${(place?.city?.iso3) || "..."} - <span style="color: white; font-family: 'Prompt', Sans-serif; font-size: 11px;">
                            click here to read more...</span>
                        </p>
                    </div>
                </a>
            </div>
            <div style="position: relative;">
                ${ratings_cover}
                <div style="padding-top: 5px;">
                    <p style="color: white; font-size: 11px; margin-bottom: 10px;">
                        People who have visited rated this place</p>
                    <div style="background: linear-gradient(0.25turn, red, orange, yellow, green); box-shadow: 1px 2px 3px rgba(0,0,0,0.4); border-radius: 50px;">
                        <div style="height: 4px; width: 45%; position: relative;">
                            <div style="position: absolute; top: -6px; right: 0; width: 15px; height: 15px; background-color: white; border-radius: 100%; box-shadow: 1px 2px 3px rgba(0,0,0,0.4);"></div>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 7px;">
                        <p style="color: red; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            0 | 😞</p>
                        <p style="color: orange; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            33 | 😐</p>
                        <p style="color: yellow; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            66 | 🙂</p>
                        <p style="color: green; font-size: 11px; font-family: 'Prompt', Sans-serif;">
                            99 | 😁</p>
                    </div>
                </div>
            </div>
        </div>    
    `;
}

//"https://th.bing.com/th/id/OIP.akTDnK_uV13cS7rXZvLOOgAAAA?pid=ImgDet&w=200&h=149&c=7&dpr=1.3"


