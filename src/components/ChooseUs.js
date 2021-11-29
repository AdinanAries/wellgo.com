import securepaymentssvg from '../icons/securepayments.svg';
import bestdealssvg from '../icons/bestdeals.svg';
import customersupportsvg from '../icons/customersupport.svg';
import wellgo_reviewer from '../wellgo_reviewer.jpg';
import wellgo_reviewer2 from '../wellgo_reviewer2.jpg';
import wellgo_reviewer3 from '../wellgo_reviewer3.jpg';
import wellgo_reviewer4 from '../wellgo_reviewer4.jpg';
import wellgo_reviewer5 from '../wellgo_reviewer5.jpg';
import wellgo_reviewer6 from '../wellgo_reviewer6.jpg';
import reviews_icon from "../icons/reviews_icon.svg";

import { show_full_search_form } from "../helpers/PageRoutingFuncs";

import DownloadMobileApp from "./DownloadMobileApp";

var ChooseUs = ()=>{
    return (
        <div>
            
                <div style={{marginBottom: 0, padding: "10px 0", marginTop: "calc(100vh)", backgroundColor: "white", boxShadow: "0 0 5px rgba(0,0,0,0.3)"}}>
                   <div className="wrapper"> 
                    
                    <div style={{width: 90, margin: "auto", marginBottom: 0, marginTop: 5, height: 5, backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 500}}></div>
                    
                    
                    <div className="home_page_reviews_container">
                        <h1 style={{textAlign: "center", fontSize: 20, marginBottom: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Reviews</h1>
                        <h1 className="mobile_margin_bottom_20" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Verified reviews from travelers</h1>
                        <div className="home_page_reviews_wrapper">

                            <div onClick={show_full_search_form} className="home_page_reviews_start_search_btn">
                                <i style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}} className="fa fa-search"></i>
                                Search Flights now
                            </div>

                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 100, position: "absolute", zIndex: 1, height: "100%", left: 0}}>
                                <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-left"></i>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 100, position: "absolute", zIndex: 1, height: "100%", right: 0}}>
                                <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-right"></i>
                                </div>
                            </div>
                            <div className="home_page_reviews_each_review">

                                <div className="reviews_watermark_icon" style={{backgroundImage: `url('${reviews_icon}')`}}></div>

                                <div className="home_page_reviews_each_reviewer_pic">
                                    <div className="home_page_reviews_each_reviewer_pic_img_container" style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{width: 110, height: 110, border: "4px solid #c751b9", overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                            <img id="home_page_reviews_selected_reviewer_img" src={wellgo_reviewer} style={{width: 110, height: "auto"}} />
                                        </div>
                                    </div>
                                    <p id="home_page_reviews_selected_reviewer_name" style={{marginTop: 15, fontFamily: "Courgette", color: "#c751b9", fontSize: 17, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                        Evelin Grigory
                                    </p>
                                    <p id="home_page_reviews_selected_reviewer_city" style={{marginBottom: 10,fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                        New York City
                                    </p>
                                    <div className="reviews_rating" style={{display: "flex", flexDirection: "row"}}>
                                        <div className="all_ratings_dotes">
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="half"></div></div>
                                        </div>
                                    </div>
                                    <p className="reviews_rating_number" style={{marginTop: 4, color: "rgba(0,0,0,0.55)", backgroundColor: "#b8d4f5", fontSize: 22, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", padding: "5px 10px", width: "fit-content"}}>
                                        4.5</p>
                                </div>
                                <div className="home_page_reviews_each_review_details">
                                    <p id="home_page_reviews_selected_reviewer_msg" style={{borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10,fontSize: 19, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(83,0,0,0.8)', letterSpacing: 1}}>
                                        <span style={{fontSize: 45, color: "#c751b9", marginRight: 10, fontFamily: "Courgette"}}>"</span>
                                        This is the actual review message to be displayed for what this traveler is saying 
                                        about how great wellgo.com is in the travel retail market
                                    </p>
                                   <p id="home_page_reviews_selected_reviewer_date" style={{marginTop: 20, fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.8)'}}>
                                        March 23rd 2022
                                    </p>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 35}}>
                                        <div style={{display: "flex", flexDirection: "row"}}>
                                            <div onClick={()=>show_selected_review(0)} style={{marginRight: 15}} className="home_page_other_reviewer">
                                                <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                    <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                        Edward Onsoh
                                                    </p>
                                                    <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        Jul 11, 2021
                                                    </p>
                                                    <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        New York City
                                                    </p>
                                                    <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                        This is is each other reviewer message that can be only to some 
                                                        extent. Well add this message later
                                                    </p>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                    <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                        <img src={wellgo_reviewer3} style={{width: 60, height: "auto"}} />
                                                    </div>
                                                </div>
                                                <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                    Edward
                                                </p>
                                                <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    4.6
                                                </p>
                                            </div>
                                            <div onClick={()=>show_selected_review(1)} style={{marginRight: 15}} className="home_page_other_reviewer">
                                                <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                        Naana Agyeman
                                                    </p>
                                                    <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        Mar 23, 2021
                                                    </p>
                                                    <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        New York City
                                                    </p>
                                                    <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                        This is is each other reviewer message that can be only to some 
                                                        extent. Well add this message later
                                                    </p>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                    <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                        <img src={wellgo_reviewer4} style={{width: 60, height: "auto"}} />
                                                    </div>
                                                </div>
                                                <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                    Naana
                                                </p>
                                                <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    4.7
                                                </p>
                                            </div>
                                            <div onClick={()=>show_selected_review(2)} className="mobile_hidden home_page_other_reviewer" style={{marginRight: 15}}>
                                                <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                    <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                        Regina Daniels
                                                    </p>
                                                    <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        Jul 11, 2021
                                                    </p>
                                                    <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        New York City
                                                    </p>
                                                    <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                        This is is each other reviewer message that can be only to some 
                                                        extent. Well add this message later
                                                    </p>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                    <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                        <img src={wellgo_reviewer5} style={{width: 60, height: "auto"}} />
                                                    </div>
                                                </div>
                                                <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                    Regina
                                                </p>
                                                <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    5.0
                                                </p>
                                            </div>
                                            <div onClick={()=>show_selected_review(3)} className="mobile_hidden home_page_other_reviewer" style={{marginRight: 15}}>
                                                <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                    <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                        Setzo Aldavis
                                                    </p>
                                                    <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        Oct 14, 2021
                                                    </p>
                                                    <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        New York City
                                                    </p>
                                                    <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                        This is is each other reviewer message that can be only to some 
                                                        extent. Well add this message later
                                                    </p>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                    <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                        <img src={wellgo_reviewer6} style={{width: 60, height: "auto"}} />
                                                    </div>
                                                </div>
                                                <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                    Setzo
                                                </p>
                                                <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    4.9
                                                </p>
                                            </div>
                                            <div onClick={()=>show_selected_review(4)} className="home_page_other_reviewer">
                                                <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                    <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                        Cecilia Braden
                                                    </p>
                                                    <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        Jan 03, 2021
                                                    </p>
                                                    <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                        New York City
                                                    </p>
                                                    <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                        This is is each other reviewer message that can be only to some 
                                                        extent. Well add this message later
                                                    </p>
                                                </div>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                    <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                        <img src={wellgo_reviewer2} style={{width: 60, height: "auto"}} />
                                                    </div>
                                                </div>
                                                <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                    Cecilia
                                                </p>
                                                <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    5.0
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="get_best_deals_container" style={{backgroundColor: "white", padding: "20px 0"}}>
                        <h1 style={{textAlign: "center", fontSize: 20, color: "rgba(0,0,0,0.7)", marginBottom: "10px", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Get the Best Deals!</h1>
                        <h1 style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >We have the cheapest tickets</h1>
                        <div className="why-choose-us-container" >
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${bestdealssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                                    Best Deals</p>
                                <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                                    This is a place holder text for the description of this info card</p>
                            </div>
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${securepaymentssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                                    Secure Payment</p>
                                <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                                    This is a place holder text for the description of this info card</p>
                            </div>
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${customersupportsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                                    Customer Support</p>
                                <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", fontWeight: "bolder", fontSize: 15}}>
                                    This is a place holder text for the description of this info card</p>
                            </div>
                        </div>
                    </div>
                    <DownloadMobileApp />
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;

let reviewers = [
    {
        name: "Edward Onsoh",
        city: "New York City",
        date: "July 11 2021",
        img: wellgo_reviewer3,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`
    },
    {
        name: "Naana Agyeman",
        city: "New York City",
        date: "March 23 2021",
        img: wellgo_reviewer4,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`
    },
    {
        name: "Regina Daniels",
        city: "New York City",
        date: "July 11 2021",
        img: wellgo_reviewer5,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`
    },
    {
        name: "Setzo Aldavis",
        city: "New York City",
        date: "October 14 2021",
        img: wellgo_reviewer6,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`
    },
    {
        name: "Cecilia Branden",
        city: "New York City",
        date: "January 03 2021",
        img: wellgo_reviewer2,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`
    }
]

function show_selected_review(index){

    let obj = reviewers[index];

    document.getElementById("home_page_reviews_selected_reviewer_name").innerText = obj.name;
    document.getElementById("home_page_reviews_selected_reviewer_date").innerText = obj.date;
    document.getElementById("home_page_reviews_selected_reviewer_msg").innerHTML = `
        <span style="font-size: 45px; color: #c751b9; margin-right: 10px; font-family: Courgette;">"</span>
        ${obj.msg}
    `;
    document.getElementById("home_page_reviews_selected_reviewer_city").innerText = obj.city;
    document.getElementById("home_page_reviews_selected_reviewer_img").src = obj.img;
}