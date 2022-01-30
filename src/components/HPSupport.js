import $ from "jquery";

import botIcon from "../icons/botIcon.svg";

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
                <div className="support_chat_sub_container" id="support_chat_settings_container" style={{display: "none"}}>
                    <div style={{padding: 10}}>
                        <div style={{padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.1)", display: "flex", flexDirection: "row"}}>
                            <div onClick={show_support_chat_messaging_container} className="chat_div_bot_top_profile_section" style={{borderRight: "1px solid rgba(0,0,0,0.1)", marginRight: 20, cursor: "pointer",}}>
                                <div style={{display: "flex", flexDirection: "row",}}>
                                    {/*<div className="chat_div_bot_top_profile_section" style={{padding: "0 10px", marginRight: 10, color: "rgba(0,0,0,0.8)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i style={{fontSize: 19}} className="fa fa-angle-left"></i></div>*/}
                                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginLeft: 10, marginRight: 20}}>
                                        <div id="chat_settings_page_bot_status_display" style={{display: "flex", flexDirection: "row"}}>

                                        </div>
                                    </div>
                                </div>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', sans-serif", marginTop: 1}}>
                                    Bot AD 
                                    <span style={{color: "goldenrod", fontSize: 11, marginRight: "10px"}}> / V1.0.0</span>
                                </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                    Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="support_chat_sub_container" id="support_chat_start_page_container" style={{display: "none"}}>
                    <div style={{padding: "10px"}}>
                        <p style={{padding: "10px 0", borderBottom: "1px solid rgba(0,0,0,0.1)", fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                            <span onClick={show_support_chat_messaging_container} className="chat_div_bot_top_profile_section" style={{padding: "0 10px", marginRight: 20, color: "rgba(0,0,0,0.8)"}}><i style={{fontSize: 19}} className="fa fa-angle-left"></i></span>
                            Help/Support/Assistence</p>
                        <div style={{marginTop: 20}}>
                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 12, color: "rgba(0,0,0,0.6)", fontWeight: "bolder", textAlign: "center", marginBottom: 20, marginTop: 10}}>
                                Recent Chat</p>
                            <div style={{paddingBottom: 20, borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div onClick={show_support_chat_messaging_container} className="chat_div_bot_top_profile_section" style={{cursor: "pointer"}}>
                                        <div style={{display: "flex", flexDirection: "row",}}>
                                            <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat',}}></div>
                                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginLeft: 10, marginRight: 20}}>
                                                <div id="chat_start_page_bot_status_display" style={{display: "flex", flexDirection: "row"}}>

                                                </div>
                                            </div>
                                        </div>
                                        <p style={{fontSize: 13, fontFamily: "'Prompt', sans-serif", marginTop: 1}}>
                                            Bot AD 
                                            <span style={{color: "goldenrod", fontSize: 11, marginRight: "10px"}}> / V1.0.0</span>
                                        </p>
                                    </div>
                                    <div  onClick={show_support_chat_messaging_container} style={{cursor: "pointer", borderRadius: 50, borderTopLeftRadius: 0, padding: "10px 20px", backgroundColor: "rgba(223,134,0,0.2)", boxShadow: "0 0 10px rgba(0,0,0,0.1)"}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                            This place should contain your last chat with the bot...</p>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 11, color: "rgba(84,0,55,0.8)", marginTop: 5, marginLeft: 10}}>
                                            March 23rd, 2022 &#8226; Bot AD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 10}}>
                            <div onClick={show_support_chat_settings_container} style={{padding: "10px", cursor: "pointer",display: "flex", textShadow: "0 0 10px rgba(0,0,0,0.1)", flexDirection: "column", justifyContent: "center"}}>
                                <div className="chat_div_bot_top_profile_section" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <p style={{textAlign: "center"}}><i style={{color: "rgba(0,128,0,0.7)", fontSize: 17, marginRight: 7}} className="fa fa-wrench"></i>
                                    <span style={{color: "rgba(122,128,0,0.7)", fontSize: 14, fontFamily: "'Prompt', sans-serif"}}>settings</span></p>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i style={{fontSize: 19, color: "rgba(0,0,0,0.7)"}} className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: 10, paddingBottom: 10}}>
                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 12, color: "rgba(0,0,0,0.6)", fontWeight: "bolder", textAlign: "center", marginBottom: 20, marginTop: 20}}>
                                Your History</p>
                            <div style={{}}>
                                <div style={{padding: 20, marginBottom: 10, backgroundColor: "rgba(0,0,0,0.1)", boxShadow: "0 0 10px rgba(0,0,0,0.2)", borderRadius: 50}}>
                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                        This place should contain your last chat with the bot...</p>
                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 11, color: "rgba(84,0,55,0.8)", marginTop: 5, marginLeft: 10}}>
                                        March 23rd, 2022 &#8226; Bot AD</p>
                                </div>
                                <div style={{padding: 20, marginBottom: 10, backgroundColor: "rgba(0,0,0,0.1)", boxShadow: "0 0 10px rgba(0,0,0,0.2)", borderRadius: 50}}>
                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                        This place should contain your last chat with the bot...</p>
                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 11, color: "rgba(84,0,55,0.8)", marginTop: 5, marginLeft: 10}}>
                                        March 23rd, 2022 &#8226; Bot AD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="support_chat_sub_container" id="support_chat_messaging_container">
                    <div style={{padding: "10px 20px", display: "flex", flexDirection: "row", borderBottom: "1px solid rgba(0,0,0,0.1)", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "row", paddingTop: 10}}>
                            <div onClick={show_support_chat_start_page_container} className="chat_div_bot_top_profile_section" style={{borderRight: "1px solid rgba(0,0,0,0.1)", marginRight: 20, cursor: "pointer"}}>
                                <div style={{display: "flex", flexDirection: "row",}}>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: 20}}>
                                        <i style={{fontSize: 19}} className="fa fa-angle-left"></i>
                                    </div>
                                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat',}}></div>
                                </div>
                                <p style={{fontSize: 13, fontFamily: "'Prompt', sans-serif", marginTop: 1}}>
                                    Bot AD 
                                    <span style={{color: "goldenrod", fontSize: 11, marginRight: "10px"}}> / V1.0.0</span>
                                </p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.7)",}}>Assistant</p>
                                <div id="main_chat_bot_status_display" style={{display: "flex", flexDirection: "row", width: "100%"}}>
                                    
                                </div>
                            </div>
                        </div>
                        <div onClick={show_support_chat_settings_container} style={{ marginRight: 40, marginLeft: 20, cursor: "pointer",display: "flex", textShadow: "0 0 10px rgba(0,0,0,0.1)", flexDirection: "column", justifyContent: "center"}}>
                            <div className="chat_div_bot_top_profile_section">
                                <p style={{textAlign: "center"}}><i style={{color: "rgba(0,128,0,0.7)", fontSize: 17, marginRight: 7}} className="fa fa-wrench"></i>
                                <span style={{color: "rgba(122,128,0,0.7)", fontSize: 11, fontFamily: "'Prompt', sans-serif"}}>Settings</span></p>
                            </div>
                        </div>
                    </div>
                    <div id="hp_support_chat_items" style={{padding: 10, height: "calc(100% - 140px)", overflowY: "scroll", paddingBottom: 100, overscrollBehavior: "contain"}}>
                        
                    </div>
                    <div id="main_support_chat_user_input_txt_container" className="support_chat_user_input_txt_container">
                        <div className="support_chat_user_input_txt_inner_container">
                            <textarea onFocus={chat_txt_input_focus_func} onBlur={chat_txt_input_blur_func}>
                                type your message here...
                            </textarea>
                            <div id="hp_support_user_submit_chat_btn" className="cht-btn">
                                <i style={{transform: "rotate(49deg)"}} className="fa fa-paper-plane"></i>
                            </div>
                        </div>
                        <div id="suggested_bot_query_display">

                        </div>
                    </div>
                </div>
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
                        Hey! I'm AD, I'll be assisting you around here... cheers... &#127866;
                    </p>
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

/*export function show_new_chatbot_tip(msg){
    document.getElementById("main_chat_bot_tips_poppup_section").style.display="block";
    setTimeout(()=>hide_new_chatbot_tip(),15000);
}*/

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

/*$(document).ready(()=>{
    setTimeout(()=>show_new_chatbot_tip("msg"),10000);
});*/

function chat_txt_input_focus_func(){
    document.getElementById("main_support_chat_user_input_txt_container").style.height = "100px";
    document.getElementById("main_support_chat_user_input_txt_container").style.borderRadius = 0;
    if($(document).width() <= 700){
        setTimeout(()=>{
            document.getElementById("main_support_chat_user_input_txt_container").style.width = "100%";
            document.getElementById("main_support_chat_user_input_txt_container").style.bottom = 0;
            document.getElementById("main_support_chat_user_input_txt_container").style.left=0;
            document.getElementById("main_homepage_start_support_btn").style.display = "none";
        },200);
        document.getElementById("main_homepage_start_support_btn").style.opacity = 0; 
    }
    //console.log(document.querySelector("#main_support_chat_user_input_txt_container textarea").value)
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === "type your message here..."){
        document.querySelector("#main_support_chat_user_input_txt_container textarea").value = "";
    }
}
function chat_txt_input_blur_func(){
    setTimeout(()=>{
        document.getElementById("main_support_chat_user_input_txt_container").style.height = "50px";
        document.getElementById("main_support_chat_user_input_txt_container").style.borderRadius = "50px";
        if($(document).width() <= 700){
            setTimeout(()=>{
                document.getElementById("main_homepage_start_support_btn").style.opacity = 1;
            },400);
            setTimeout(()=>{
                document.getElementById("main_homepage_start_support_btn").style.display = "flex";
            },200);
            document.getElementById("main_support_chat_user_input_txt_container").style.width = "calc(100% - 90px)";
            document.getElementById("main_support_chat_user_input_txt_container").style.bottom = "20px";
            document.getElementById("main_support_chat_user_input_txt_container").style.left = "5px";
            $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"))
        }
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === ""){
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value = "type your message here...";
        }
    },300);
}