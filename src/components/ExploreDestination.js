//import explore_destination_img from "../explore_destination_img.jpg";

import WillgoLogo from '../WillgoLogo.png';
import search_bar_flight_icon from "../icons/search_bar_flight_icon.png";
import trips_icon from "../icons/trips_icon.png";
import explore_icon from "../icons/explore_icon.png";
import user_account_icon from "../icons/user_account_icon.png";

import { show_login_page, show_full_search_form, show_trips_page, show_explore_page } from '../helpers/PageRoutingFuncs';

export default function ExploreDestinations(){
    return (
            <div className="explore_destinations_promo_card">
                <div>
                    <div className="wrapper">
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 38}}>
                            Wellgo.com</p>
                        <p style={{marginTop: -9,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 30 }}>
                            cheap flights tickets</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            Our interest is to make travel affordable 
                            because we believe that people should go places...
                        </p>
                        <div onClick={show_full_search_form} style={{cursor: "pointer", textShadow: "none", backgroundColor: "white", height: 50, padding: "0 15px", maxWidth: 500, margin: "auto", marginTop: 40, display: "flex", borderRadius: 50, boxShadow: "1px 2px 3px rgba(0,0,0,0.7)", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <i style={{color: "rgba(0,0,0,0.4)"}} className="fa fa-search"></i>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <p style={{color: "rgba(0,0,0,0.6)"}}>
                                    enter airport, dates, cabin...</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <img src={search_bar_flight_icon} style={{width: 26, height: "auto"}} /></p>
                                    <p  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i style={{marginLeft: 7, fontSize: 16, color: "rgba(0,0,0,0.4)"}} className="fa fa-angle-down"></i></p>
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