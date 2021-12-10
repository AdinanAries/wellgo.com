import $ from "jquery";

import botIcon from "../icons/botIcon.svg";

export default function HPSupportBtn(){
    return (
        <div className="hp_support_container">
            <div id="support_chat_container" className="support_chat_div_container">
                <p onClick={toggle_show_hp_support_chat_container} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div style={{padding: "20px"}}>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.7)"}}>Help/Support/Assistance</p>
                </div>
                <div style={{padding: 10,}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{backgroundImage: `url('${botIcon}')`, width: 70, height: 50, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                        <div style={{marginLeft: 10, backgroundColor: "rgba(0,0,0,0.07", padding: 5, borderRadius: 5, maxWidth: "calc(100% - 45px)"}}>
                            <p id="chatbot_greenting_message_p" style={{fontFamily: "'Prompt', sans-serif", fontSize: 14}}></p>
                        </div>
                    </div>
                    <div id="chatbot_provided_manual_channels" style={{display: 'none', animation: "pop-in 0.2s ease-out"}}>
                        <div style={{display: "flex", flexDirection: "row", padding: "20px 0"}}>
                            <div style={{cursor: "pointer", marginRight: 10, backgroundColor: "rgba(122,21,112)", padding: 20, borderRadius: 50, boxShadow: "0 0 5px rgba(0,0,0,0.5)"}}>
                                <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: 'white', letterSpacing: 1, fontSize: 12}}>
                                    <i style={{marginRight: 10}} className="fa fa-phone"></i>
                                    Call</p>
                            </div>
                            <div style={{cursor: "pointer", marginRight: 10, backgroundColor: "rgba(21,122,112)", padding: 20, borderRadius: 50, boxShadow: "0 0 5px rgba(0,0,0,0.5)"}}>
                                <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: 'white', letterSpacing: 1, fontSize: 12}}>
                                    <i style={{marginRight: 10}} className="fa fa-envelope"></i>
                                    Email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main_support_chat_user_input_txt_container" className="support_chat_user_input_txt_container">
                    <textarea onFocus={chat_txt_input_focus_func} onBlur={chat_txt_input_blur_func}>
                        type your message here...
                    </textarea>
                    <div className="cht-btn">
                        <i style={{transform: "rotate(49deg)"}} className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </div>
            <div onClick={toggle_show_hp_support_chat_container} id="main_homepage_start_support_btn" className="homepage_start_support_btn">
                <i className="fa fa-comments"></i>
            </div>
            <div id="main_chat_bot_tips_poppup_section" className="chatbot_popup_tip">
                <div onClick={hide_new_chatbot_tip} className="chatbot_popup_tip_close_btn">
                    &times;
                </div>
                <div onClick={toggle_show_hp_support_chat_container} className="chatbot_popup_tip_msg">
                    <p>
                        <i className="fa fa-lightbulb-o"></i>
                        Hey! I'm Bot AD, I'll be your assistant here...
                    </p>
                </div>
                <div onClick={toggle_show_hp_support_chat_container} className="chatbot_popup_tip_img">
                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                </div>
            </div>
        </div>
        
    );
}

var i = 0;
let is_chat_container_shown = false;
export function toggle_show_hp_support_chat_container(){
    if(is_chat_container_shown){
        document.getElementById("chatbot_greenting_message_p").innerHTML = '';
        $("#support_chat_container").slideUp("fast");
        //document.getElementById("support_chat_container").style.display = "none";
        document.getElementById("chatbot_provided_manual_channels").style.display="none";
        document.getElementById("main_support_chat_user_input_txt_container").style.display="none";
        i=0;
    }else{
        hide_new_chatbot_tip();
        typeWriter();
        document.getElementById("support_chat_container").style.display = "block";
        setTimeout(()=>{
            document.getElementById("chatbot_provided_manual_channels").style.display="block";
            document.getElementById("main_support_chat_user_input_txt_container").style.display="flex";
        },1200);
    }
    is_chat_container_shown = !is_chat_container_shown;
}


var txt = `Hey! &#128400; We are currently upgrading some site features...
            I'm sorry I may not be very helpful RN... &#128530;
            Please use our manual channels below. &#128071;`; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
        if(txt.charAt(i) === "&" && txt.charAt(i+1) === "#"){
            document.getElementById("chatbot_greenting_message_p").innerHTML += txt.substring(i, i+8);
            i = i+9;
        }else{
            document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(i); 
            i++;
        }
    //document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(i);
    //i++;
    setTimeout(typeWriter, speed);
  }
}

export function show_new_chatbot_tip(msg){
    document.getElementById("main_chat_bot_tips_poppup_section").style.display="block";
    setTimeout(()=>hide_new_chatbot_tip(),15000);
}

export function hide_new_chatbot_tip(msg){
    $("#main_chat_bot_tips_poppup_section").slideUp("fast");
}

$(document).ready(()=>{
    setTimeout(()=>show_new_chatbot_tip("msg"),10000);
});

function chat_txt_input_focus_func(){
    if($(document).width() <= 700){
        document.getElementById("main_homepage_start_support_btn").style.display = "none";
        document.getElementById("main_support_chat_user_input_txt_container").style.width = "calc(100% - 10px)";
    }
}
function chat_txt_input_blur_func(){
    if($(document).width() <= 700){
        document.getElementById("main_homepage_start_support_btn").style.display = "flex";
        document.getElementById("main_support_chat_user_input_txt_container").style.width = "calc(100% - 90px)";
    }
}