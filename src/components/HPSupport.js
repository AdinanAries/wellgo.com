import $, { param } from "jquery";
import HelpSupportChatMessaging from "./HelpSupportChatMessaging";
import HelpSupportChatStartPage from "./HelpSupportChatStartPage";
import botIcon from "../icons/botIcon.svg";
import HelpSupportSettingsPage from "./HelpSupportChatSettingsPage";
import CONSTANTS from "../Constants/Constants";
import BotAuxMsg from "../Constants/BotAuxMsg";
import getBotResponse from "../Constants/BotResponses";
import Weather from "../helpers/Weather";

import notification_sound from "../audio/livechat.mp3";

export default function HPSupportBtn(){
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
                <div id="main_chatbot_popup_tip_msg" className="chatbot_popup_tip_msg">
                    <p>
                        <i className="fa fa-lightbulb-o"></i>
                        {BotAuxMsg.regular[Math.floor(Math.random() * BotAuxMsg.regular.length)] + " "}
                        {getBotResponse(CONSTANTS.bot.responses.introduction_greetings)} &#127866;
                    </p>
                    <div style={{display: "flex", marginTop: 10, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.1)"}}>
                        <i style={{color: "rgba(255,255,255,0.5)", marginRight: 10, fontSize: 13}}
                                className="fa-solid fa-temperature-high"></i>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 11}}>
                            New York (Thu Mar 23) -
                            <span style={{margin: "0 5px", fontSize: 11, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                56 °F</span>
                            <span style={{fontSize: 11, fontFamily: "'Prompt', Sans-serif"}}>
                                | heavy rain</span>
                        </p>
                    </div>
                </div>
                <div id="main_chatbot_popup_tip_img" className="chatbot_popup_tip_img">
                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                </div>
            </div>
        </div>
        
    );
}

function return_bot_chat_status_markup(status){
    //statuses: online, offline, other...
    return `
        <p style="width: 8px; height: 8px; background-color: green; margin-right: 5px; margin-top: 6px; border-radius: 100%;"></p>
        <p style="font-family: 'Prompt', sans-serif; font-size: 13px; color: rgba(0,0,0,0.7);">online</p>
    `
}
function return_bot_chat_loading_markup(){
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

setTimeout(async()=>{
    const callback = (data) => {
        console.log('Weather', data);
        if(data?.error){
            // Error handling
        }
    }
    // Weather Data
    window.weather = await Weather.getWeatherDetaultLocation("2024-01-23","2024-01-30", callback);

},1000);

let botPromptHideTimeoutObj;
export function show_prompt_on_Bot_AD_tips_popup(msg, type=CONSTANTS.bot.prompt_types.prompt, duration=100000, params={image: true, weather: true, data: {}}) {

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
                ${msg} &#127866;
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

        if(params?.image){
            document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=`
                <div style="position: relative;">
                    <div style="position: absolute; bottom: 0; left: 0; width: 100%; background-color: rgba(0,0,0,0.4); padding: 10px; z-index: 1;">
                        <p style="font-size: 12px; font-family: 'Prompt', Sans-serif; color: white;">
                            This is an overlay
                        </p>
                    </div>
                    <img style="width: 100%; height: auto; margin-top: 10px;"
                        src="https://th.bing.com/th/id/OIP.akTDnK_uV13cS7rXZvLOOgAAAA?pid=ImgDet&w=200&h=149&c=7&dpr=1.3" 
                        alt="to do" />
                </div>
            `;
        }

        document.getElementById("main_chatbot_popup_tip_msg").innerHTML+=`
            <div style="display: flex; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1)">
                <i style="color: rgba(255,255,255,0.5); margin-right: 10px; font-size: 13px;"
                        class="fa-solid fa-temperature-high"></i>
                <p style="font-family: 'Prompt', Sans-serif; font-size: 11px;">
                    California City (Thu Mar 23) -
                    <span style="margin: 0 2px; font-size: 11px; font-family: 'Prompt', Sans-serif; font-weight: bolder">
                        56 °F</span>
                    <span style="font-size: 11px; font-family: 'Prompt', Sans-serif;">
                        | heavy rain</span>
                </p>
            </div>
        `
        //audio.play();
    }, randWait);

    botPromptHideTimeoutObj = setTimeout(hide_new_chatbot_tip, (duration+randWait));
}


