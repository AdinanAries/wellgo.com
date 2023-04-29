import { useState } from "react";
import botIcon from "../icons/botIcon.svg";
import { show_support_chat_messaging_container, show_support_chat_settings_container } from "./HPSupport";

function HelpSupportChatStartPage(){

    let [chatHistory, setChatHistory] = useState([
        {
            id: "001",
            user_id: "",
            last_date: "",
            MSGs: [
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'user',
                    msg: "Thank you so much for help",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                }
            ]
        },
        {
            id: "001",
            user_id: "",
            last_date: "",
            MSGs: [
                {
                    id: "001",
                    who: 'user',
                    msg: "Thank you so much for help",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
            ]
        },
        {
            id: "001",
            user_id: "",
            last_date: "",
            MSGs: [
                {
                    id: "001",
                    who: 'user',
                    msg: "Thank you so much for help",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
            ]
        },
        {
            id: "001",
            user_id: "",
            last_date: "",
            MSGs: [
                {
                    id: "001",
                    who: 'user',
                    msg: "Thank you so much for help",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
            ]
        },
        {
            id: "001",
            user_id: "",
            last_date: "",
            MSGs: [
                {
                    id: "001",
                    who: 'user',
                    msg: "Thank you so much for help",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
                {
                    id: "001",
                    who: 'Bot AD',
                    msg: "Yes Flights, are way cheaper now",
                    status: "",
                    date: "March 23rd, 2022",
                    time: "7:34 PM"
                },
            ]
        }
    ]);

    return (
        <div className="support_chat_sub_container" id="support_chat_start_page_container" style={{display: "none"}}>
            <div style={{padding: "10px"}}>
                <div style={{display: "flex", borderBottom: "1px solid rgba(0,0,0,0.1)",}}>
                    <p style={{padding: "10px 0", fontFamily: "'Prompt', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                        <span onClick={show_support_chat_messaging_container} className="chat_div_bot_top_profile_section" 
                        style={{padding: "0 10px", marginRight: 5, color: "rgba(0,0,0,0.6)"}}>
                            <i style={{fontSize: 19}} className="fa fa-angle-left"></i></span>
                        Virtual Agent
                    </p>
                    <div style={{marginLeft: 10, borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
                        <div onClick={show_support_chat_settings_container} style={{padding: "10px", cursor: "pointer", textShadow: "0 0 10px rgba(0,0,0,0.1)",}}>
                            <div className="chat_div_bot_top_profile_section" style={{display: "flex",}}>
                                <p style={{textAlign: "center"}}><i style={{color: "rgba(0,128,0,0.7)", fontSize: 17, marginRight: 7}} className="fa fa-wrench"></i>
                                <span style={{color: "rgba(122,128,0,0.7)", fontSize: 14, fontFamily: "'Prompt', sans-serif"}}>settings</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 20}}>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 12, color: "rgba(0,0,0,0.6)", fontWeight: "bolder", textAlign: "center", marginBottom: 20, marginTop: 10}}>
                        Recent Chat</p>
                    <div style={{paddingBottom: 20}}>
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
                
                <div style={{marginTop: 10, paddingBottom: 10}}>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 12, color: "rgba(0,0,0,0.6)", fontWeight: "bolder", textAlign: "center", marginBottom: 20, marginTop: 20}}>
                        Chat History</p>
                    <div style={{height: "calc(100vh - 430px)", overflow: "auto"}}>
                        {
                            chatHistory.map((each, index)=>(
                                <div key={index} style={{padding: 10, cursor: "pointer"}}>
                                    <div style={{position: "relative", padding: 5, marginBottom: 5, width: 200, borderRadius: 10, border: "1px solid rgba(0,0,0,0.1)"}}>
                                        <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                                            {each.MSGs[(each.MSGs.length-2)].msg} &#8226; {(each.MSGs[(each.MSGs.length-2)].who === "user" ? "You" : each.MSGs[(each.MSGs.length-2)].who)}</p>
                                        <p style={{position: "absolute", right: -40, top: "50%", height: "calc(50% + 5px)", width: 40, borderTop: "1px solid rgba(0,0,0,0.1)", borderRight: "1px solid rgba(0,0,0,0.1)", borderTopRightRadius: 20}}>
                                        </p>
                                    </div>
                                    <div style={{border: "1px solid rgba(0,0,0,0.1)", padding: 5, borderRadius: 10}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                            <i className="fa-solid fa-history" style={{marginRight: 10, color: "rgba(0,0,0,0.3)"}}></i>
                                            {each.MSGs[(each.MSGs.length-1)].msg}</p>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 11, color: "rgba(84,0,55,0.8)", marginTop: 5, marginLeft: 10}}>
                                            {each.MSGs[(each.MSGs.length-1)].date} - {each.MSGs[(each.MSGs.length-1)].time} &#8226; {(each.MSGs[(each.MSGs.length-1)].who === "user" ? "You" : each.MSGs[(each.MSGs.length-1)].who)}</p>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpSupportChatStartPage;