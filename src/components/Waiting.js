import { useEffect, useState } from "react";
import bot_img from "../bot-rand-prompt.png";
import getBotResponse from "../Constants/BotResponses";
import CONSTANTS from "../Constants/Constants";

const Waiting = (props) => {

    const [isTyping, setIsTyping] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsTyping(false)
        }, 2000);
    })

    return <div style={{border: "3px solid darkslateblue", borderRadius: 9, padding: "30px 10px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)",
            display: "flex", flexDirection: "column", alignItems: "center", background: "black", position: "relative"}}>
        <img style={{left: "calc(50% - 25px)", width: 60, top: -35}} className="bot-rand-prompt-element-avatar" src={bot_img} alt="bot avatar" />
        { isTyping ? <>
                <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "lightblue", marginBottom: 60}}>
                    <i className="fa-regular fa-comment-dots" style={{marginRight: 10, color: "orange"}}></i>
                    Typing...
                </p>
            </> : <>
                <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "lightblue"}}>
                    <i className="fa-solid fa-exclamation-triangle" style={{marginRight: 10, color: "yellow"}}></i>
                    Fetching Data
                </p>
                <p style={{color: "white", fontSize: 14, marginBottom: 60, marginTop: 10}}>
                {
                    getBotResponse(CONSTANTS.bot.responses.wait_while_loading)
                }</p>
            </>
        }
        <div className="waiting"></div>
        <p style={{color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 55, marginBottom: 5, textAlign: "center"}}>
            <span style={{color: "red", fontWeight: "bolder", fontSize: 14, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                    Byte the Code LLC
            </span>
            <br/>&copy; {new Date().getFullYear()}, all rights reserved
        </p>
    </div>
}

export default Waiting;