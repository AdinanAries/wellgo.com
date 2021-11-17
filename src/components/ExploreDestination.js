//import explore_destination_img from "../explore_destination_img.jpg";

import WillgoLogo from '../WillgoLogo.png';
import search_bar_flight_icon from "../icons/search_bar_flight_icon.png";
import trips_icon from "../icons/trips_icon.png";
import explore_icon from "../icons/explore_icon.png";
import user_account_icon from "../icons/user_account_icon.png";

import { show_login_page, show_full_search_form, show_trips_page, show_explore_page } from '../helpers/PageRoutingFuncs';

import $ from "jquery"

export default function ExploreDestinations(){
    return (
            <div className="explore_destinations_promo_card">
                <div>
                    <div className="wrapper">
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 38}}>
                            Wellgo.com</p>
                        <p style={{marginTop: -9,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 30 }}>
                            cheap flight tickets</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            Our interest is to make travel affordable 
                            because we believe that people should go places...
                        </p>
                        <div style={{position: "relative", cursor: "pointer", textShadow: "none", backgroundColor: "white", height: 50, paddingLeft: 15, maxWidth: 500, margin: "auto", marginTop: 40, display: "flex", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.7)", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div onClick={show_full_search_form} style={{position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <i style={{color: "rgba(0,0,0,0.4)"}} className="fa fa-search"></i>
                            </div>
                            <div onClick={show_full_search_form} style={{fontFamily: "'Prompt', sans-serif", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(100% - 110px)"}}>
                                <p style={{color: "rgba(0,0,0,0.6)"}}>
                                    enter airports, dates, cabin...</p>
                            </div>
                            <div id="landing_page_search_form_show_filters_btn" onClick={toggle_main_page_search_filters} style={{position: "relative", zIndex: 1, borderRadius: 50, padding: "0 15px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <img src={search_bar_flight_icon} style={{width: 26, height: "auto"}} /></p>
                                    <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i id="landing_page_search_form_show_filters_btn_caret" style={{marginLeft: 7, fontSize: 16, color: "rgba(0,0,0,0.4)", transition: "all 0.3s"}} className="fa fa-angle-down"></i></p>
                                </div>
                            </div>

                            <div id="landing_page_search_filters_container" style={{display: "none", fontFamily: "'Prompt', sans-serif", position: "absolute", top: "calc(100% - 25px)", paddingTop: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, left: 0, width: "100%", backgroundColor: "white"}}>
                                <div style={{boxShadow: "1px 2px 3px rgba(0,0,0,0.7)", borderTop: "1px solid rgba(0,0,0,0.1)", borderBottomRightRadius: 25, borderBottomLeftRadius: 25, minHeight: 140, padding: "10px 20px"}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", cursor: "pointer", padding: "10px 0"}}>
                                        <div onClick={show_full_search_form} style={{display: "flex", flexDirection: "column", justifyContent: "center",}}>
                                            <p style={{fontSize: 14, color: "rgba(0,175,23,0.9)", letterSpacing: 1, fontWeight: "bolder", textAlign: "right"}}>
                                                Flights</p>
                                            <p style={{fontSize: 12, marginTop: 5, letterSpacing: 1, color: "rgb(0,175,23)"}}>
                                                <i style={{marginRight: 5, color: "green"}} className="fa fa-check"></i>
                                                Buy cheapest flights here</p>
                                        </div>
                                        <p style={{marginLeft: 10, padding: 7, width: 40, textAlign: "center", borderRadius: 10, backgroundColor: "lightgreen", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)"}}>
                                            <i style={{fontSize: 14, color: "white"}} className="fa fa-plane"></i>
                                        </p>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", cursor: "not-allowed", padding: "10px 0"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center",}}>
                                            <p style={{fontSize: 14, color: "rgba(0,0,0,0.6)", letterSpacing: 1, fontWeight: "bolder", textAlign: "right"}}>
                                                Hotels</p>
                                            <p style={{fontSize: 12, marginTop: 5, letterSpacing: 1, color: "rgba(0,0,0,0.6)"}}>
                                                <i style={{marginRight: 5, color: "orangered"}} className="fa fa-exclamation-triangle"></i>
                                                unavailable at the moment
                                            </p>
                                        </div>
                                        <p style={{marginLeft: 10, padding: 7, width: 40, textAlign: "center", borderRadius: 10, backgroundColor: "skyblue", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)"}}>
                                            <i style={{fontSize: 14, color: "white"}} className="fa fa-bed"></i>
                                        </p>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", cursor: "not-allowed", padding: "10px 0"}}>
                                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center",}}>
                                            <p style={{fontSize: 14, color: "rgba(0,0,0,0.6)", letterSpacing: 1, fontWeight: "bolder", textAlign: "right"}}>
                                                Food Delivery</p>
                                            <p style={{fontSize: 12, marginTop: 5, letterSpacing: 1, color: "rgba(0,0,0,0.6)"}}>
                                                <i style={{marginRight: 5, color: "orangered"}} className="fa fa-exclamation-triangle"></i>
                                                unavailable at the moment
                                            </p>
                                        </div>
                                        <p style={{marginLeft: 10, padding: 7, width: 40, textAlign: "center", borderRadius: 10, backgroundColor: "skyblue", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)"}}>
                                            <i style={{fontSize: 14, color: "white"}} className="fa fa-cutlery"></i>
                                        </p>
                                    </div>
                                    <p style={{textAlign: "center", color: "rgba(0,0,0,0.4)", fontSize: 13, marginTop: 10, padding: 10, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                                        Wellgo.com &copy; 2022, all rights reserved
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{textShadow: "none", height: 50, padding: "0 15px", width: "fit-content", margin: "auto", marginTop: 30, display: "flex", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p onClick={show_trips_page} style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 10.5, marginRight: 20, borderRadius: 20, textAlign: "center", width: 50, backgroundColor: "rgb(255,255,255)", cursor: "pointer", boxShadow: "1px 2px 3px rgba(0,0,0,0.7)"}}>
                                <img src={trips_icon} style={{width: 29, height: "auto"}} />
                            </p>
                            <p onClick={show_explore_page} style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 10.5, marginRight: 20, borderRadius: 20, textAlign: "center", width: 50, backgroundColor: "rgb(255,255,255)", cursor: "pointer", boxShadow: "1px 2px 3px rgba(0,0,0,0.7)"}}>
                                <img src={explore_icon} style={{width: 29, height: "auto"}} />
                            </p>
                            <p onClick={show_login_page} style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 9, marginRight: 20, borderRadius: 20, textAlign: "center", width: 50, backgroundColor: "rgb(255,255,255)", cursor: "pointer", boxShadow: "1px 2px 3px rgba(0,0,0,0.7)"}}>
                                <img src={user_account_icon} style={{width: 32, height: "auto"}} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

let is_landing_page_search_filters_open = false;
export function toggle_main_page_search_filters(){
    if(is_landing_page_search_filters_open){
        $("#landing_page_search_filters_container").slideUp("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(0deg)";
    }else{
        $("#landing_page_search_filters_container").slideDown("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(180deg)";
    }
    is_landing_page_search_filters_open = !is_landing_page_search_filters_open;
}