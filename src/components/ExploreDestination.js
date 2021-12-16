//import explore_destination_img from "../explore_destination_img.jpg";

import WillgoLogo from '../WillgoLogo.png';
import search_bar_flight_icon from "../icons/search_bar_flight_icon.png";
import deals_icon from "../icons/deals_icon.png";
import explore_icon from "../icons/explore_icon.png";
import user_account_icon from "../icons/user_account_icon.png";

import botIcon from "../icons/botIcon.svg";

import { show_login_page, show_full_search_form, show_trips_page, show_deals_page, show_help_page, show_explore_page } from '../helpers/PageRoutingFuncs';
import { toggle_show_hp_support_chat_container } from "./HPSupport";

import $ from "jquery"

export default function ExploreDestinations(){
    return (
            <div className="explore_destinations_promo_card">
                <div>
                    <div className="wrapper">
                        <div className="landing_page_jumb_text" style={{marginBottom: 20}}>
                            <p style={{color: "white", animation: "fade_and_pop 0.5s 0.5s ease-in", transition: "all 2s", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 28, textAlign: "center"}}>
                                Cheap Flights</p>
                            <p style={{color: "white", animation: "fade_and_pop 0.5s 0.5s ease-in", transition: "all 2s", fontFamily: "'Prompt', sans-serif", fontSize: 15, textAlign: "center"}}>
                                &#8226; Virtual Agent &#8226;</p>
                        </div>
                        <div>
                            <div id="landing_page_search_form_bar" style={{position: "relative", cursor: "pointer", textShadow: "none", backgroundColor: "rgba(0,0,0,0.3)",border: "1px solid rgba(255,255,255,0.5)", height: 70, maxWidth: 550, margin: "auto", display: "flex", borderRadius: 50, /*boxShadow: "1px 2px 3px rgba(0,0,0,0.3)",*/ display: "flex", flexDirection: "row", justifyContent: "space-between", zIndex: 5}}>
                                <div onClick={toggle_show_hp_support_chat_container} style={{position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white", margin: 10, width: 55, height: 50, borderRadius: "100%"}}>
                                    {/*<i style={{color: "rgba(0,0,0,0.5)"}} className="fa fa-search"></i>*/}
                                    <div style={{backgroundImage: `url('${botIcon}')`, width: 30, height: 30, backgroundSize: "contain", backgroundRepeat: 'no-repeat'}}></div>
                                </div>

                                <div onClick={show_full_search_form} style={{position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(100% - 110px)"}}>
                                    <p id="landing_page_search_input_text_display" className="static_search_bar_text" style={{color: "white", fontFamily: "'Prompt', sans-serif", textAlign: "left"}}>
                                        &#128400; Hey...</p>
                                </div>
                                <div id="landing_page_search_form_show_filters_btn" onClick={toggle_main_page_search_filters} style={{position: "relative", zIndex: 2, borderRadius: "100%", display: "flex", flexDirection: "column", justifyContent: "center", width: 55, height: 50, margin: 10, boxShadow: "0 0 5px rgba(0,0,0,0.5)"}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        {/*<p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <img src={search_bar_flight_icon} style={{width: 26, height: "auto"}} /></p>*/}
                                        <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i id="landing_page_search_form_show_filters_btn_caret" style={{/*marginLeft: 7,*/ fontSize: 16, color: "rgba(0,0,0,0.7)", transition: "all 0.3s"}} className="fa fa-angle-down"></i></p>
                                    </div>
                                </div>

                                <div id="landing_page_search_filters_container" style={{display: "none", fontFamily: "'Prompt', sans-serif", position: "absolute", zIndex: 1, top: "calc(100% - 32px)", paddingTop: 32, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, left: 0, width: "100%", backgroundColor: "white"}}>
                                    <div style={{boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderTop: "1px solid rgba(0,0,0,0.1)", borderBottomRightRadius: 40, borderBottomLeftRadius: 40,}}>
                                        <div style={{padding: "10px 0", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                            <div style={{display: "flex", flexDirection: "row",}}>
                                                <div onClick={show_full_search_form} className="searchBtn" style={{marginRight: 10, boxShadow: "0 0 5px rgba(0,0,0,0.5)", fontFamily: "'Prompt', sans-serif", border: "none", borderRadius: 50, marginLeft: 10, fontSize: 14}}>
                                                    <i className="fa fa-search" style={{marginRight: 10, color: "rgba(255,255,255,0.4)"}}></i>Search Flight
                                                </div>
                                                <div onClick={show_help_page} className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.5)", backgroundColor: "#ae6500", fontFamily: "'Prompt', sans-serif", border: "none", borderRadius: 50, marginRight: 10, fontSize: 14}}>
                                                    <i className="fa fa-question" style={{marginRight: 10, color: "rgba(255,255,255,0.4)"}}></i>Get Help
                                                </div>
                                            </div>
                                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(0,0,0,0.1)", paddingLeft: 10}}>
                                                <div onClick={start_call_from_search_filters} className="searchBtn" style={{boxShadow: "none", background: "none", fontFamily: "'Prompt', sans-serif", borderRadius: 0, marginRight: 10, fontSize: 14}}>
                                                    <i className="fa fa-phone" style={{color: "rgb(46, 46, 46)", fontSize: 19, textShadow: "1px 2px 3px rgba(0,0,0,0.33)"}}></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{padding: 5}}>
                                            <div onClick={start_book_with_vitual_agent} style={{borderRadius: 40, borderTopRightRadius: 10, borderTopLeftRadius: 10, padding: 16, border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "#eee"}}>
                                                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontFamily: "'Prompt', sans-serif", fontSize: 14}}>
                                                <i className="fa fa-commenting" style={{marginRight: 10, fontSize: 19, color: "rgb(23, 87, 148)"}}></i>
                                                Book with Vitual Agent</p>
                                                <p style={{fontSize: 11, marginTop: 3, textAlign: "center", color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                                    Bot AD &#8226; <span style={{color: "goldenrod", fontSize: 11}}>V1.0.0</span> &#8226; powered by wellgo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{textShadow: "none", height: 50, padding: "0 15px", width: "fit-content", margin: "auto", marginTop: 30, display: "flex", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div className="landing_page_hero_menu_items" onClick={show_deals_page}>
                                        <img src={deals_icon} style={{width: 29, height: "auto"}} />
                                        <p className="landing_page_hero_menu_item_tooltip">
                                            Deals
                                        </p>
                                    </div>
                                    <div className="landing_page_hero_menu_items" onClick={show_explore_page}>
                                        <img src={explore_icon} style={{width: 29, height: "auto"}} />
                                        <p className="landing_page_hero_menu_item_tooltip">
                                            Explore
                                        </p>
                                    </div>
                                    <div className="landing_page_hero_menu_items" onClick={show_login_page} style={{paddingLeft: 9}}>
                                        <img src={user_account_icon} style={{width: 32, height: "auto"}} />
                                        <p className="landing_page_hero_menu_item_tooltip">
                                            Account
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="landing_page_scroll_down_indicator">
                    <i className="fa fa-arrow-down"></i>
                </div>
            </div>
        
    );
}

let is_landing_page_search_filters_open = false;
export function toggle_main_page_search_filters(){
    if(is_landing_page_search_filters_open){
        setTimeout(()=>{
            document.getElementById("landing_page_search_form_bar").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("landing_page_search_form_bar").style.borderWidth = "1px";
            document.getElementById("landing_page_search_input_text_display").style.color = "white";
        }, 200);
        $("#landing_page_search_filters_container").slideUp("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(0deg)";
    }else{
        document.getElementById("landing_page_search_form_bar").style.backgroundColor = "white";
        document.getElementById("landing_page_search_form_bar").style.borderWidth = "0";
        document.getElementById("landing_page_search_input_text_display").style.color = "rgba(0,0,0,0.7)";
        $("#landing_page_search_filters_container").slideDown("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(180deg)";
    }
    is_landing_page_search_filters_open = !is_landing_page_search_filters_open;
}

var i = 0;
var txt = "Greetings! &#128400; Search flights or get help, below &#128071;"; /*The text click to start search...*/
var speed = 30; /* The speed/duration of the effect in milliseconds */

export function chat_bot_new_msg(txt_p){
    document.getElementById("landing_page_search_input_text_display").innerHTML="";
    i=0;
    txt=txt_p;
    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {

        if(txt.charAt(i) === "&" && txt.charAt(i+1) === "#"){
            document.getElementById("landing_page_search_input_text_display").innerHTML += txt.substring(i, i+8);
            i = i+9;
        }else{
           document.getElementById("landing_page_search_input_text_display").innerHTML += txt.charAt(i); 
           i++;
        }

        setTimeout(typeWriter, speed);
  }
}

$(document).ready(()=>{
    setTimeout(()=>{
        document.getElementById("landing_page_search_input_text_display").innerHTML = '';
        i = 0;
        typeWriter();
    }, 1000);

    setTimeout(()=>toggle_main_page_search_filters(), 2000);
});

function start_book_with_vitual_agent(){
    toggle_show_hp_support_chat_container();
    toggle_main_page_search_filters();
}

function start_call_from_search_filters(){
    alert("placing your call now");
    toggle_main_page_search_filters();
}