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
                        <div className="landing_page_jumb_text" style={{marginBottom: 60}}>
                            <p style={{color: "white", animation: "fade_and_pop 0.5s 0.5s ease-in", transition: "all 2s", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 28 }}>
                                Cheap Flight Tickets</p>
                        </div>
                        <div>
                            <div id="landing_page_search_form_bar" style={{position: "relative", cursor: "pointer", textShadow: "none", backgroundColor: "rgba(255, 255, 255, 0.87)", height: 60, paddingLeft: 15, maxWidth: 550, margin: "auto", display: "flex", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div onClick={show_full_search_form} style={{position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <i style={{color: "rgba(0,0,0,0.5)"}} className="fa fa-search"></i>
                                </div>
                                <div onClick={show_full_search_form} style={{fontFamily: "'Prompt', sans-serif", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", width: "calc(100% - 110px)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "left"}}>
                                        click here to start search...</p>
                                </div>
                                <div id="landing_page_search_form_show_filters_btn" onClick={toggle_main_page_search_filters} style={{position: "relative", zIndex: 2, borderRadius: 50, padding: "0 15px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 60}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        {/*<p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <img src={search_bar_flight_icon} style={{width: 26, height: "auto"}} /></p>*/}
                                        <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i id="landing_page_search_form_show_filters_btn_caret" style={{/*marginLeft: 7,*/ fontSize: 16, color: "rgba(0,0,0,0.7)", transition: "all 0.3s"}} className="fa fa-angle-down"></i></p>
                                    </div>
                                </div>

                                <div id="landing_page_search_filters_container" style={{display: "none", fontFamily: "'Prompt', sans-serif", position: "absolute", zIndex: 1, top: "calc(100% - 27px)", paddingTop: 25, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, left: 0, width: "100%", backgroundColor: "white"}}>
                                    <div style={{boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderTop: "1px solid rgba(0,0,0,0.1)", borderBottomRightRadius: 25, borderBottomLeftRadius: 25, padding: "10px 0", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div onClick={show_full_search_form} style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "33%", borderRight: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", padding: "15px 0"}}>
                                            {/*<p style={{textAlign: "center", marginRight: 10}}>
                                                <i style={{fontSize: 18, color: "slateblue"}} className="fa fa-plane"></i>
                                            </p>*/}
                                            <div style={{marginRight: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <div style={{width: 8, height: 8, borderRadius: "100%", background: "linear-gradient(35deg, darkslateblue, rgba(255,255,255))"}}></div>
                                            </div>
                                            <div style={{display: "flex", flexDirection: "column"}}>
                                                <p style={{fontSize: 15, color: "rgba(0,0,0,0.7)", letterSpacing: 1, fontWeight: 'bolder'}}>
                                                    Search</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "33%", borderRight: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", padding: "15px 0"}}>
                                            {/*<p style={{textAlign: "center", marginRight: 10}}>
                                                <i style={{fontSize: 18, color: "rgba(0,0,0,0.6)"}} className="fa fa-bed"></i>
                                            </p>*/}
                                            <div style={{display: "flex", flexDirection: "column",}}>
                                                <p style={{fontSize: 15, color: "rgba(0,0,0,0.7)", letterSpacing: 1}}>
                                                    Deals</p>
                                            </div>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "33%", cursor: "pointer", padding: "15px 0"}}>
                                            {/*<p style={{textAlign: "center", marginRight: 10}}>
                                                <i style={{fontSize: 18, color: "rgba(0,0,0,0.6)"}} className="fa fa-car"></i>
                                            </p>*/}
                                            <div style={{display: "flex", flexDirection: "column",}}>
                                                <p style={{fontSize: 15, color: "rgba(0,0,0,0.7)", letterSpacing: 1}}>
                                                    Help</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div style={{textShadow: "none", height: 50, padding: "0 15px", width: "fit-content", margin: "auto", marginTop: 30, display: "flex", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div className="landing_page_hero_menu_items" onClick={show_trips_page}>
                                        <img src={trips_icon} style={{width: 29, height: "auto"}} />
                                        <p className="landing_page_hero_menu_item_tooltip">
                                            Trips
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
            document.getElementById("landing_page_search_form_bar").style.backgroundColor = "rgba(255, 255, 255, 0.87)";
        }, 200);
        $("#landing_page_search_filters_container").slideUp("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(0deg)";
    }else{
        document.getElementById("landing_page_search_form_bar").style.backgroundColor = "white";
        $("#landing_page_search_filters_container").slideDown("fast");
        document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(180deg)";
    }
    is_landing_page_search_filters_open = !is_landing_page_search_filters_open;
}