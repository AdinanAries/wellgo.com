import CONSTANTS from "../Constants/Constants";
import botIcon from "../icons/botIcon.svg";
import { show_support_chat_messaging_container } from "./HPSupport";

function HelpSupportSettingsPage(){
    return (
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
                {
                    (CONSTANTS.disabled_features.bot_aide.settings) && <div style={{background: "rgba(0,0,0,0.07", padding: "40px 10px"}}>
                        <p style={{textAlign: "center", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                            <i className="fa-solid fa-tools" style={{marginRight: 10, color: "red"}}></i>
                            Site Maintenance Notice
                        </p>
                        <p style={{textAlign: "center", marginTop: 10, fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                This feature has been disabled due to ongoing site development work
                            </p>
                        
                    </div>
                }
                {
                    (!CONSTANTS.disabled_features.bot_aide.settings) && <div>
                        To Do: Settings go here
                    </div>
                }
            </div>
        </div>
    );
}

export default HelpSupportSettingsPage;