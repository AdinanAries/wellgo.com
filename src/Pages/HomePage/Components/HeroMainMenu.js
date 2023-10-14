import { useState } from 'react';
import { show_login_page, show_full_search_form, show_trips_page, show_deals_page, show_help_page, show_explore_page } from '../../../helpers/PageRoutingFuncs';
import { show_prompt_on_Bot_AD_tips_popup } from "../../../components/HPSupport";
import CONSTANTS from '../../../Constants/Constants';
import BotAuxMsg from '../../../Constants/BotAuxMsg';

const HeroMainMenu = (props) => {

    const [showDropDown, setShowDropDown] = useState(false);

    const showDropDownMenu = () => {
        setShowDropDown(!showDropDown);
    }

    return (
        <div style={{position: "relative", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, marginBottom: 40}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className="flights_hero_menu_item main" onClick={show_full_search_form} style={{cursor: "pointer", textAlign: "center", color: "#d66aca", fontSize: 14, borderBottom: "3px solid #d66aca", padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-plane-departure"></i>
                    Flights</div>
                <div className="stays_hero_menu_item main" 
                        onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                "We can't book hotels for now", 
                                CONSTANTS.bot.prompt_types.warn)}
                        style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-hotel"></i>
                    Stays</div>
                <div className="cars_hero_menu_item main" 
                        onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                "We can't rent cars at the moment",
                                CONSTANTS.bot.prompt_types.warn)}
                        style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-car"></i>
                    Cars</div>
                <div className="packages_hero_menu_item main" 
                        onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                "We have no packages at the moment", 
                                CONSTANTS.bot.prompt_types.warn)}
                        style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-box-open"></i>
                    Packages</div>
                <div className="agent_hero_menu_item main" id="landing_page_hero_manu_bar_bot_item" style={{cursor: "pointer", textAlign: "center", color: "rgba(169, 221, 255, 0.8)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-robot"></i>
                    Agent</div>
                <div className="currency_hero_menu_item main" 
                        onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                            "We plan to make multiple currencies available in the future",
                            CONSTANTS.bot.prompt_types.warn)}
                        style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-globe"></i>
                    USD</div>
                <div className="language_hero_menu_item main" 
                        onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                            "We are working on including multiple languages at the moment. Only English is available righ now",
                            CONSTANTS.bot.prompt_types.warn)}
                        style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-language"></i>
                    English</div>
                <div className="more_hero_menu_item main" style={{position: "relative"}}>
                    <div onClick={showDropDownMenu} style={{cursor: "pointer", textAlign: "center", color: "rgba(169, 221, 255, 0.8)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10}} className="fa-solid fa-bars"></i>
                        More
                    </div>
                    <div style={{display: showDropDown ? "block" : "none", position: "absolute", zIndex: 10, width: 150, padding: 10, top: "80%", boxShadow: "1px 2px 3px rgba(0,0,0,0.4)", right: 0, backgroundColor: "rgb(43, 52, 61)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10}}>
                        <div className="cars_hero_menu_item dropdown" 
                                onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                    "We can't rent cars at the moment",
                                    CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-car"></i>
                            Cars</div>
                        <div className="packages_hero_menu_item dropdown" 
                                onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                    "We dont have any Packages at the moment",
                                    CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-box-open"></i>
                            Packages</div>
                        <div className="agent_hero_menu_item dropdown" id="landing_page_hero_manu_bar_bot_item" style={{cursor: "pointer", textAlign: "initial", color: "rgba(169, 221, 255, 0.8)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-robot"></i>
                            Agent</div>
                        <div className="currency_hero_menu_item dropdown" 
                            onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                "Only US Dollars available at the moment",
                                CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-globe"></i>
                            USD</div>
                        <div className="language_hero_menu_item dropdown" 
                                onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                    "Only English available at the moment",
                                    CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-language"></i>
                            English</div>
                        <div className="feedback_hero_menu_item dropdown" 
                                onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                    "Feedback feature is in maintenance",
                                    CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                            <i style={{marginRight: 10}} className="fa-solid fa-comment-dots"></i>
                            Feedback</div>
                            <div className="feedback_hero_menu_item dropdown" 
                                onClick={()=>show_prompt_on_Bot_AD_tips_popup(
                                    "Support Feature is in maintenance",
                                    CONSTANTS.bot.prompt_types.warn)}
                                style={{cursor: "not-allowed", textAlign: "initial", color: "rgba(255,255,255,0.4)", fontSize: 14, padding: "10px", fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10}} className="fa-solid fa-headset"></i>
                            Support</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default HeroMainMenu;