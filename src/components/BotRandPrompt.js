import bot_img from "../bot-rand-prompt.png";
import arrow from "../arrrr.png";
import { useState, useEffect } from "react";

const BotRandPrompt = (props) => {

    const {
        requiredAction,
        promptMessage,
    } = props;

    const [isTyping, setIsTyping] = useState(true);
    const [ isShown, setIsShown] = useState(false);

    const showPrompt = () => {
        setIsShown(true);
        setTimeout(()=>{
            setIsTyping(false);
        }, 2500);
    }
    window.__showBotRandPrompt = showPrompt;

    const closePrompt = () => {
        setIsShown(false);
        setIsTyping(true);
    }

    return <div style={{display: (isShown) ? "block" : "none"}} 
        className="bot-rand-prompt-element popup">
        <img className="bot-rand-prompt-element-avatar" src={bot_img} alt="bot avatar" />
        <img className="bot-rand-prompt-element-arrow bounce" src={arrow} alt="arrow" />
        { isTyping ?
            <p className="bot-rand-prompt-element-msg">
                Typing...</p> :
            <p  onClick={requiredAction} className="bot-rand-prompt-element-msg">
                {promptMessage}</p>
        }
        <div onClick={closePrompt} className="bot-rand-prompt-element-close-btn">
            <i className="fa-solid fa-times" ></i>
        </div>
    </div>;
}

export default BotRandPrompt;