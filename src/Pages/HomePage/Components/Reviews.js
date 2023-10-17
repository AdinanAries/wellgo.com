import { useEffect, useState } from "react";
import { show_full_search_form } from "../../../helpers/PageRoutingFuncs";
import { shuffle_array, ellipsify, get_horizontal_page_size } from "../../../helpers/general";

import reviews_icon from "../../../icons/reviews_icon.svg";
import reviews_icon2 from "../../../icons/reviews_icon2.svg";
import Reviewers from "../../../data/Reviewers";

let reviewers = shuffle_array(Reviewers);
const Reviews = () => {

    const PAGE_SIZE = get_horizontal_page_size(60, 40, 6);
    const [ slice, setSlice ] = useState(0);
    let current_reviewer = slice;
    let current=slice;

    useEffect(()=>{
        document.getElementById("main_all_ratings_dots").innerHTML = return_rating_markup(reviewers[0].rated);
    }, [])
    
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

    function show_selected_review(index){
        let i = index;
        
        let obj = reviewers[i];
        if(((i+PAGE_SIZE) < reviewers.length) && (i > current))
            setSlice(i);
        else if(((i+PAGE_SIZE) >= reviewers.length) && (i >= current))
            setSlice(reviewers.length-PAGE_SIZE-1);
        else if(i>0)
            setSlice((--i));
    
        current = i;

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

    function show_next_reviewer(){
        current_reviewer = slice+1;
        if(current_reviewer >= reviewers.length){
            current_reviewer = (reviewers.length - 1);
            return null
        }
        show_selected_review(current_reviewer);
    }
    function show_previous_reviewer(){
        current_reviewer = slice-1;
        if(current_reviewer < 0){
            current_reviewer = 0;
            return null;
        }
        show_selected_review(current_reviewer);
    }

    return (
        <div className="home_page_reviews_container">
            <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
            >Places Advisors</h1>
            <h1 className="mobile_margin_bottom_20 title_desc" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: "initial", fontFamily: "'Prompt', Sans-serif",}}
            >travelers openions about places</h1>
            <div className="home_page_reviews_wrapper">

                <div onClick={show_full_search_form} style={{display: "none"}} className="home_page_reviews_start_search_btn">
                    <i style={{marginRight: 10, color: "#c751b9"}} className="fa fa-search"></i>
                    Book Yours Today...
                </div>

                <div className="places_reviewers_actions_container">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>
                            <p style={{width: 35, height: 35, borderRadius: "100%", cursor: "pointer", border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i style={{color: "#c751b9", fontSize: 18}} className="fa-solid fa-angle-left"></i>
                            </p>
                        </div>
                        <div style={{display: "flex", marginLeft: 5}}>
                            <p style={{width: 35, height: 35, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i style={{color: "rgba(0,0,0,0.8)", fontSize: 18}} className="fa-regular fa-heart"></i>
                            </p>
                            <p style={{marginLeft: 5, width: 35, height: 35, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i style={{color: "rgba(0,0,0,0.8)", fontSize: 18}} className="fa-solid fa-plane-departure"></i>
                            </p>
                            <p style={{marginLeft: 5,width: 35, height: 35, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i style={{color: "green", fontSize: 18}} className="fa-solid fa-map-location-dot"></i>
                            </p>
                        </div>
                        <div style={{marginLeft: 5}}>
                            <p style={{width: 35, height: 35, borderRadius: "100%", cursor: "pointer", border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <i style={{color: "#c751b9", fontSize: 18}} className="fa-solid fa-angle-right"></i>
                            </p>
                        </div>
                    </div>
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
                                <img id="home_page_reviews_selected_reviewer_img" src={reviewers[slice].img} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}} alt={"to do"}/>
                            </div>
                        </div>
                        <p id="home_page_reviews_selected_reviewer_name" style={{marginTop: 15, fontFamily: "Courgette", color: "#c751b9", fontSize: 17, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                            {reviewers[slice].name}
                        </p>
                        <p  className="mobile_font_13" id="home_page_reviews_selected_reviewer_city" style={{marginBottom: 10,fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,73,0,0.8)'}}>
                            {reviewers[slice].city}
                        </p>
                        <div className="reviews_rating" style={{display: "flex", flexDirection: "row"}}>
                            <div id="main_all_ratings_dots" className="all_ratings_dotes">
                            </div>
                        </div>
                        <p className="reviews_rating_number" style={{marginTop: 8, color: "rgba(0,0,0,0.7)", backgroundColor: "rgb(229, 233, 241)", fontSize: 17, fontFamily: "'Prompt', Sans-serif", padding: "10px", width: "fit-content"}}>
                            <span style={{marginRight: 10}}>
                                <i className="fa-solid fa-city" style={{marginRight: 10, color: "#c751b9"}}></i>
                                London Bridge,
                            </span>
                            <span style={{fontWeight: "initial", color: "green"}}>
                                <span id="main_reviews_rating_number">{parseFloat(reviewers[slice].rated).toFixed(1)}</span>
                                <span>, </span>
                                <span>$50.23</span>
                            </span>
                        </p>
                    </div>
                    <div className="home_page_reviews_each_review_details">
                        <p id="home_page_reviews_selected_reviewer_msg" style={{borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10,fontSize: 19, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(83,0,0,0.8)', letterSpacing: 1}}>
                            <span style={{fontSize: 45, color: "#c751b9", marginRight: 10, fontFamily: "Courgette", position: "relative", zIndex: 3}}>"</span>
                            {reviewers[slice].msg}
                        </p>
                        <p className="mobile_font_13" id="home_page_reviews_selected_reviewer_date" style={{marginTop: 20, fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,73,0,0.8)'}}>
                            {reviewers[slice].date}
                        </p>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 35}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                {
                                    reviewers.slice(slice,slice+PAGE_SIZE).map((each, i) => <div 
                                                key={each.name}
                                                onClick={()=>show_selected_review(slice+i)} style={{margin: "0 7.5px"}} className="home_page_other_reviewer">
                                            <div className="home_page_other_reviewer_bubble speech-bubble-bottom">
                                                <p style={{fontSize: 15, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                                    {each.name}
                                                </p>
                                                <p style={{fontSize: 13, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    {each.date}
                                                </p>
                                                <p style={{fontSize: 13, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                    {each.city}
                                                </p>
                                                <p style={{color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', Sans-serif"}}>
                                                    {each.msg}
                                                </p>
                                            </div>
                                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                                <div style={{width: 60, height: 60, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                                    <img src={each.img} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}} alt={"to do"} />
                                                </div>
                                            </div>
                                            <p style={{marginTop: 15, textAlign: "center", color: "#c751b9", fontSize: 15, fontFamily: "'Prompt', Sans-serif"}}>
                                                {ellipsify(each.name.split(" ")[0], 5)}
                                            </p>
                                            <p style={{fontSize: 14, textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                                {parseFloat(each.rated).toFixed(1)}
                                            </p>
                                        </div>
                                    )
                                }
                                {/*<div onClick={()=>show_selected_review(0)} style={{marginRight: 15}} className="home_page_other_reviewer">
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
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;