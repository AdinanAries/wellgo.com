import { useState, useEffect } from "react";

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
import reviews_icon2 from "../icons/reviews_icon2.svg";
import citiesIcon from "../icons/citiesIcon.svg";
import smart_phone_img from "../smart_phone_img.jpg";

//cities imgs
import LondonImg from "../citiesImg/London.jpg";
import AccraImg from "../citiesImg/AccraGhana.jpg";
import LAImg from "../citiesImg/LA_US.jpg";
import ParisImg from "../citiesImg/Paris.jpg";
import NewYorkImg from "../citiesImg/NewYork.jpg";
import CairoImg from "../citiesImg/Cairo.jpg";
import RomeImg from "../citiesImg/Rome.jpg";

import { show_full_search_form } from "../helpers/PageRoutingFuncs";

import DownloadMobileApp from "./DownloadMobileApp";
import { cloneElement } from 'react';
import PaginationButtons from './PaginationButtons';

var ChooseUs = ()=>{

    const [data, setData] = useState({
        exploreCities: {
            pagination: {
                currentPage: 1,
                numberPerPage: 4,
                numberOfPages: 0,
            },
            cities: [
                {
                    country: "United Kingdom",
                    city: "London",
                    picture: LondonImg
                },
                {
                    country: "Ghana",
                    city: "Accra",
                    picture: AccraImg
                },
                {
                    country: "United States",
                    city: "Los Angeles",
                    picture: LAImg
                },
                {
                    country: "France",
                    city: "Paris",
                    picture: ParisImg
                },
                {
                    country: "United States",
                    city: "New York",
                    picture: NewYorkImg
                },
                {
                    country: "Italy",
                    city: "Rome",
                    picture: RomeImg
                },
                {
                    country: "Egypt",
                    city: "Cairo",
                    picture: CairoImg
                },
            ]
        }
    });

    function nextPage() {
        if(
            (((data.exploreCities.pagination.currentPage - 1) * data.exploreCities.pagination.numberPerPage)+data.exploreCities.pagination.numberPerPage)
            > data.exploreCities.cities.length
        )return;
        ++data.exploreCities.pagination.currentPage;
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination
                }
            }
        })
    }

    function prevPage() {
        if((data.exploreCities.pagination.currentPage-1) < 1)return;
        --data.exploreCities.pagination.currentPage;
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination
                }
            }
        })
    }

    function setPage(num) {
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination,
                    currentPage: num,
                }
            }
        });
    }

    useEffect(() => {
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    currentPage: 1,
                    numberPerPage: 4,
                    numberOfPages: Math.ceil(data.exploreCities.cities.length / data.exploreCities.pagination.numberPerPage),
                }
            }
        })
    }, []);

    let begin = ((data.exploreCities.pagination.currentPage - 1) * data.exploreCities.pagination.numberPerPage);
    let end = begin + data.exploreCities.pagination.numberPerPage;
    return (
        <div>
            <div style={{marginBottom: 0, padding: "10px 0", backgroundColor: "rgb(229, 233, 241)",}}>
                <div className="wrapper">
                    <div className='between-jumbotron-and-subsections'>
                        <div className="between-jumbotron-and-subsections_icon" style={{backgroundImage: `url('${smart_phone_img}')`}}></div>
                        <div style={{height: "100%", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}}>
                            <p style={{fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 38}}>
                                Get The App!</p>
                            <p style={{marginTop: -9,fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 30 }}>
                                get better deals.</p>
                            <p style={{maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                                plus awsome user experience...
                            </p>
                            <div style={{paddingTop: 10, paddingLeft: 15, paddingBottom: 5}}>
                                <i style={{color: "darkslateblue"}} className='fa-solid fa-earth-americas'></i>
                                <select style={{border: "none", marginLeft: 5, color: "rgba(0,0,0,0.7)"}}>
                                    <option value="1">(+1) United States</option>
                                </select>
                            </div>
                            <div style={{marginTop: 5, border: "1px solid rgba(0,0,0,0.1)", maxWidth: 300, paddingLeft: 15, borderRadius: 50}}>
                                <i style={{color: "darkslateblue"}} className="fa-solid fa-phone"></i>
                                <input style={{border: "none", padding: 15, width: "calc(100% - 20px)", background: "none"}} type="number" placeholder="Enter phone number"/>
                            </div>
                            <div style={{backgroundColor: "darkslateblue", textAlign: "center", boxShadow: "0 0 5px rgba(0,0,0,0.4)", padding: 14, color: "white", fontFamily: "'Prompt', sans-serif", cursor: "pointer", marginTop: 5, maxWidth: 300, borderRadius: 50}}>
                                Send Link to Phone
                            </div>
                        </div>
                    </div> 
                    <div style={{width: 90, margin: "auto", marginBottom: 0, marginTop: 5, height: 5, backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 500}}></div>
                    
                    <div className="home_page_reviews_container">
                        <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Customer Satisfaction</h1>
                        <h1 className="mobile_margin_bottom_20 title_desc" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: "initial", fontFamily: "'Prompt', Sans-serif",}}
                        >get the luxury of cheap travel</h1>
                        <div className="home_page_reviews_wrapper">

                            <div onClick={show_full_search_form} className="home_page_reviews_start_search_btn">
                                <i style={{marginRight: 10, color: "#c751b9"}} className="fa fa-search"></i>
                                Book Yours Today...
                            </div>

                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 100, position: "absolute", zIndex: 1, height: "100%", left: 0}}>
                                <div onClick={show_previous_reviewer} style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-left"></i>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 100, position: "absolute", zIndex: 1, height: "100%", right: 0}}>
                                <div onClick={show_next_reviewer} style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-right"></i>
                                </div>
                            </div>
                            <div className="home_page_reviews_each_review">

                                <div className="reviews_watermark_icon" style={{backgroundImage: `url('${reviews_icon}')`}}></div>
                                <div className="reviews_watermark_icon2" style={{backgroundImage: `url('${reviews_icon2}')`}}></div>

                                <div className="home_page_reviews_each_reviewer_pic">
                                    <div className="home_page_reviews_each_reviewer_pic_img_container" style={{display: "flex", flexDirection: "row"}}>
                                        <div style={{width: 110, height: 110, border: "4px solid #c751b9", overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                            <img id="home_page_reviews_selected_reviewer_img" src={wellgo_reviewer} style={{width: 110, height: "auto"}} />
                                        </div>
                                    </div>
                                    <p id="home_page_reviews_selected_reviewer_name" style={{marginTop: 15, fontFamily: "Courgette", color: "#c751b9", fontSize: 17, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                                        Evelin Grigory
                                    </p>
                                    <p  className="mobile_font_13" id="home_page_reviews_selected_reviewer_city" style={{marginBottom: 10,fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,73,0,0.8)'}}>
                                        New York City
                                    </p>
                                    <div className="reviews_rating" style={{display: "flex", flexDirection: "row"}}>
                                        <div id="main_all_ratings_dots" className="all_ratings_dotes">
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="full"></div></div>
                                            <div className="rating_dot"><div className="half"></div></div>
                                        </div>
                                    </div>
                                    <p id="main_reviews_rating_number" className="reviews_rating_number" style={{marginTop: 4, color: "rgba(0,0,0,0.55)", backgroundColor: "rgb(229, 233, 241)", /*backgroundColor: "#b8d4f5",*/ fontSize: 22, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", padding: "5px 10px", width: "fit-content"}}>
                                        4.5</p>
                                </div>
                                <div className="home_page_reviews_each_review_details">
                                    <p id="home_page_reviews_selected_reviewer_msg" style={{borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10,fontSize: 19, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(83,0,0,0.8)', letterSpacing: 1}}>
                                        <span style={{fontSize: 45, color: "#c751b9", marginRight: 10, fontFamily: "Courgette", position: "relative", zIndex: 3}}>"</span>
                                        This is the actual review message to be displayed for what this traveler is saying 
                                        about how great wellgo.com is in the travel retail market
                                    </p>
                                   <p className="mobile_font_13" id="home_page_reviews_selected_reviewer_date" style={{marginTop: 20, fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,73,0,0.8)'}}>
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

                    <div className="home_page_most_visited_cities" style={{paddingTop: 10}}>
                        <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                            >Popular Cities</h1>
                        <h1 className="mobile_margin_bottom_20 title_desc" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: "initial", fontFamily: "'Prompt', Sans-serif",}}
                            >see some of most visited cities</h1>
                        <div className="home_page_most_visited_cities_list">
                            {
                                data.exploreCities.cities.slice(0,3).map(each=>
                                    (
                                        <div  className="home_page_each_most_visited_cities">
                                            <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${each.picture}')`}} >
            
                                            </div>
                                            <div className="home_page_each_most_visited_cities_btn">
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>{each.city}</p>
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                    {each.country}</p>
                                                
                                            </div>
                                            <div className="home_page_each_most_visited_cities_bottom">
                                                
                                            </div>
                                        </div>
                                    )
                                )
                            }
                            {/*<div  className="home_page_each_most_visited_cities">
                                <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${LondonImg}')`}}>

                                </div>
                                <div className="home_page_each_most_visited_cities_btn">
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>London</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                        United Kingdom</p>
                                    
                                </div>
                                <div className="home_page_each_most_visited_cities_bottom">
                                    
                                </div>
                            </div>
                            <div  className="home_page_each_most_visited_cities">
                                <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${AccraImg}')`}}>

                                </div>
                                <div className="home_page_each_most_visited_cities_btn">
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                        Accra</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                        Ghana</p>
                                    
                                </div>
                                <div className="home_page_each_most_visited_cities_bottom">
                                    
                                </div>
                            </div>
                            <div  className="home_page_each_most_visited_cities">
                                <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${LAImg}')`}}>

                                </div>
                                <div className="home_page_each_most_visited_cities_btn">
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                        Los Angeles</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                        United States</p>
                                    
                                </div>
                                <div className="home_page_each_most_visited_cities_bottom">
                                    
                                </div>
                            </div>*/}
                        </div>
                        <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, marginTop: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                            >More To Explore</h1>
                        <div style={{position: "relative", borderTop: "4px solid orange", padding: "15px", background: "rgba(255,255,255)"}}>
                            <div className="more_popular_cities_svg_img" style={{height: 150, width: 150, backgroundImage: `url('${citiesIcon}')`, backgroundRepeat: "no-repeat", backgroundSize: "contain", position: "absolute", top: -50, left: 20, zIndex: 1}}>
                            </div>
                            <div style={{position: "relative", maxWidth: 500, margin: "auto"}}>
                                <div onClick={prevPage} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", zIndex: 1, height: "100%", left: 0}}>
                                    <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "#db7fd0", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                        <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-left"></i>
                                    </div>
                                </div>
                                <div onClick={nextPage} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", zIndex: 1, height: "100%", right: 0}}>
                                    <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "#db7fd0", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                        <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                {
                                    
                                    data.exploreCities.cities.slice(begin, end).map(each=>
                                    (
                                        <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", maxWidth: "300px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", fontWeight: "bolder", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                                        <div className="each_more_popular_city_popup">
                                            <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                                <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${each.picture}')`}}>

                                                </div>
                                                <div className="home_page_each_most_visited_cities_btn">
                                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                                        {each.city}</p>
                                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                        {each.country}</p>
                                                    
                                                </div>
                                                <div className="home_page_each_most_visited_cities_bottom">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        {each.city} - {each.country}</div>
                                    )
                                )}
                                {/*<div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", width: "160px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", fontWeight: "bolder", paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                                    <div className="each_more_popular_city_popup">
                                        <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                            <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${ParisImg}')`}}>

                                            </div>
                                            <div className="home_page_each_most_visited_cities_btn">
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                                    Paris</p>
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                    France</p>
                                                
                                            </div>
                                            <div className="home_page_each_most_visited_cities_bottom">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    Paris - France</div>
                                <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", width: "160px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", fontWeight: "bolder", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                                    <div className="each_more_popular_city_popup">
                                        <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                            <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${NewYorkImg}')`}}>

                                            </div>
                                            <div className="home_page_each_most_visited_cities_btn">
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                                    New York</p>
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                    United States</p>
                                                
                                            </div>
                                            <div className="home_page_each_most_visited_cities_bottom">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    New York - US</div>
                                <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", width: "160px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", fontWeight: "bolder", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                                    <div className="each_more_popular_city_popup">
                                        <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                            <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${RomeImg}')`}}>

                                            </div>
                                            <div className="home_page_each_most_visited_cities_btn">
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                                    Rome</p>
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                    Italy</p>
                                                
                                            </div>
                                            <div className="home_page_each_most_visited_cities_bottom">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    Rome - Italy</div>
                                <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", width: "160px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", fontWeight: "bolder", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                                    <div className="each_more_popular_city_popup">
                                        <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                            <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${CairoImg}')`}}>

                                            </div>
                                            <div className="home_page_each_most_visited_cities_btn">
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                                    Cairo</p>
                                                <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                                    Egypt</p>
                                                
                                            </div>
                                            <div className="home_page_each_most_visited_cities_bottom">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    Cairo - Egypt</div>*/}
                            </div>
                            <div style={{paddingTop: 20}}>
                                <PaginationButtons 
                                    pageSize={data.exploreCities.pagination.numberPerPage} 
                                    currentPage={data.exploreCities.pagination.currentPage} 
                                    totalItems={data.exploreCities.cities.length}
                                    nextPage={nextPage}
                                    prevPage={prevPage}
                                    setPage={setPage}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="get_best_deals_container" style={{padding: "20px 0"}}>
                        <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginTop: 10, color: "rgba(0,0,0,0.7)", marginBottom: "10px", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Get the best deals at the best prices!</h1>
                        <h1 className="title_desc" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        ></h1>
                        <div className="why-choose-us-container" >
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${bestdealssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 5, fontFamily: "Courgette", fontFamily: "'Prompt', Sans-serif"}}>
                                    Best Deals</p>
                                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 15, fontFamily: "'Prompt', sans-serif"}}>
                                    This is a place holder text for the description of this info card</p>
                            </div>
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${securepaymentssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 5, fontFamily: "Courgette", fontFamily: "'Prompt', Sans-serif"}}>
                                    Secure Payment</p>
                                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 15, fontFamily: "'Prompt', sans-serif"}}>
                                    This is a place holder text for the description of this info card</p>
                            </div>
                            <div className="each-choose-us-container">
                                
                                <div style={{backgroundImage: `url('${customersupportsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                                    height: 150, marginTop: 5, marginBottom: 5}}>

                                </div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", textAlign: "center", marginBottom: 5, fontFamily: "Courgette", fontFamily: "'Prompt', Sans-serif"}}>
                                    Customer Support</p>
                                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 15, fontFamily: "'Prompt', sans-serif"}}>
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
        service`,
        rated: 4.6
    },
    {
        name: "Naana Agyeman",
        city: "New York City",
        date: "March 23 2021",
        img: wellgo_reviewer4,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`,
        rated: 4.7
    },
    {
        name: "Regina Daniels",
        city: "New York City",
        date: "July 11 2021",
        img: wellgo_reviewer5,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`,
        rated: 5
    },
    {
        name: "Setzo Aldavis",
        city: "New York City",
        date: "October 14 2021",
        img: wellgo_reviewer6,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`,
        rated: 4.9
    },
    {
        name: "Cecilia Branden",
        city: "New York City",
        date: "January 03 2021",
        img: wellgo_reviewer2,
        msg: `This is is each other reviewer message that can be only to some 
        extent. Well add this message later. Lets see what Edward has said about our
        service`,
        rated: 5
    }
]

function show_selected_review(index){

    let obj = reviewers[index];

    document.getElementById("home_page_reviews_selected_reviewer_name").innerText = obj.name;
    document.getElementById("home_page_reviews_selected_reviewer_date").innerText = obj.date;
    document.getElementById("home_page_reviews_selected_reviewer_msg").innerHTML = `
        <span style="font-size: 45px; color: #c751b9; margin-right: 10px; font-family: Courgette; position: relative; z-index: 3;">"</span>
        ${obj.msg}
    `;
    document.getElementById("home_page_reviews_selected_reviewer_city").innerText = obj.city;
    document.getElementById("home_page_reviews_selected_reviewer_img").src = obj.img;
    document.getElementById("main_all_ratings_dots").innerHTML = return_rating_markup(obj.rated);
    document.getElementById("main_reviews_rating_number").innerText = (obj.rated.toFixed(1));
}

function return_rating_markup(rating_num){
    if(rating_num === 5){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
        `
    }else if(rating_num < 5 && rating_num >= 4.5){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="half"></div></div>
        `
    }else if(rating_num < 4.5 && rating_num >= 4){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 4 && rating_num >= 3.5){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="half"></div></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 3.5 && rating_num >= 3){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 3 && rating_num >= 2.5){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="half"></div></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 2.5 && rating_num >= 2){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 2 && rating_num >= 1.5){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"><div class="half"></div></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
        `
    }else if(rating_num < 1.5 && rating_num >= 1){
        return `
            <div class="rating_dot"><div class="full"></div></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
            <div class="rating_dot"></div>
        `
    }
}

let current_reviewer = 1
function show_next_reviewer(){
    current_reviewer = current_reviewer + 1;
    if(current_reviewer >= reviewers.length){
        current_reviewer = (reviewers.length - 1);
        return null
    }
    show_selected_review(current_reviewer);
}
function show_previous_reviewer(){
    current_reviewer = current_reviewer - 1;
    if(current_reviewer < 0){
        current_reviewer = 0;
        return null;
    }
    show_selected_review(current_reviewer);
}
/*setTimeout(()=>{
    document.getElementById("main_all_ratings_dots").innerHTML = return_rating_markup(3.9);
}, 500)*/
