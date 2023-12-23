import $ from "jquery";
import botIcon from "../icons/botIcon.svg";
import { show_support_chat_start_page_container,  show_support_chat_settings_container} from "./HPSupport"

function HelpSupportChatMessaging(){
    return (
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
                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.7)",}}>Booking Agent</p>
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
            <div id="main_support_chat_user_input_txt_wait_while_loading_status" style={{display: "none", padding: "0 10px", paddingTop: 10, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center"}}>
                    <i style={{marginRight: 10, color: "orange"}} class="fa-solid fa-brain"></i>
                    Please wait while bot is thinking...</p>
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
    )
}

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

export default HelpSupportChatMessaging;