import botIcon from "../icons/botIcon.svg";

export default function HPSupportBtn(){
    return (
        <div className="hp_support_container">
            <div id="support_chat_container" className="support_chat_div_container">
                <p onClick={toggle_show_hp_support_chat_container} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div style={{padding: "20px"}}>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.7)"}}>Help/Support</p>
                </div>
                <div style={{padding: 10,}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{backgroundImage: `url('${botIcon}')`, width: 70, height: 50, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                        <div style={{marginLeft: 10, backgroundColor: "rgba(0,0,0,0.07", padding: 5, borderRadius: 5}}>
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
            </div>
            <div onClick={toggle_show_hp_support_chat_container} className="homepage_start_support_btn">
                <i className="fa fa-comments"></i>
            </div>
        </div>
    );
}

let is_chat_container_shown = false;
function toggle_show_hp_support_chat_container(){
    if(is_chat_container_shown){
        document.getElementById("chatbot_greenting_message_p").innerHTML = '';
        document.getElementById("support_chat_container").style.display = "none";
        document.getElementById("chatbot_provided_manual_channels").style.display="none";
    }else{
        typeWriter();
        document.getElementById("support_chat_container").style.display = "block";
        setTimeout(()=>document.getElementById("chatbot_provided_manual_channels").style.display="block",1000);
    }
    is_chat_container_shown = !is_chat_container_shown;
}

var i = 0;
var txt = 'Hey! we are currently upgrading some site features. Please use our manual channels below.'; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}