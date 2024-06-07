import bot_img from "../bot-rand-prompt.png";
import arrow from "../arrrr.png";
import { useState } from "react";

const BotRandPrompt = (props) => {

    const {
        promptMessage,
    } = props;

    const [ isShown, setIsShown] = useState(false);

    const showPrompt = () => {
        setIsShown(true);
    }
    window.__showBotRandPrompt = showPrompt;

    const closePrompt = () => {
        setIsShown(false);
    }

    return <div style={{display: (isShown) ? "block" : "none"}} 
        className="bot-rand-prompt-element popup">
        <img className="bot-rand-prompt-element-avatar" src={bot_img} alt="bot avatar" />
        <img className="bot-rand-prompt-element-arrow bounce" src={arrow} alt="arrow" />
        <p className="bot-rand-prompt-element-msg">
            {promptMessage}</p>
        <div onClick={closePrompt} className="bot-rand-prompt-element-close-btn">
            Close
        </div>
    </div>;
}

export default BotRandPrompt;