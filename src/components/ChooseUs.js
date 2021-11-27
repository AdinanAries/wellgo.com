import securepaymentssvg from '../icons/securepayments.svg';
import bestdealssvg from '../icons/bestdeals.svg';
import customersupportsvg from '../icons/customersupport.svg';
import wellgo_reviewer from '../wellgo_reviewer.jpg';

import DownloadMobileApp from "./DownloadMobileApp";

var ChooseUs = ()=>{
    return (
        <div>
            
                <div style={{marginBottom: 0, padding: "10px 0", marginTop: "calc(100vh)", backgroundColor: "white", boxShadow: "0 0 5px rgba(0,0,0,0.3)"}}>
                   <div className="wrapper"> 
                    
                    <div style={{width: 90, margin: "auto", marginBottom: 40, marginTop: 5, height: 5, backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 500}}></div>
                    
                    
                    <div className="home_page_reviews_container">
                        <h1 style={{textAlign: "center", fontSize: 20, marginBottom: 40, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Reviews From Travelers</h1>
                        <div className="home_page_reviews_wrapper">
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", height: "100%", left: 0}}>
                                <div style={{width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-left"></i>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", height: "100%", right: 0}}>
                                <div style={{width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgb(43, 52, 61)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                                    <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-right"></i>
                                </div>
                            </div>
                            <div className="home_page_reviews_each_review">
                                <div className="home_page_reviews_each_reviewer_pic">
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        <div style={{width: 100, height: 100, overflow: 'hidden', borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.2)", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)"}}>
                                            <img src={wellgo_reviewer} style={{width: 100, height: "auto"}} />
                                        </div>
                                    </div>
                                    <p style={{marginTop: 15, color: "#c751b9", fontSize: 17, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif"}}>
                                        Evelin Grigory
                                    </p>
                                    <p style={{marginBottom: 20, fontSize: 13, textAlign: "center", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.7)'}}>
                                        New York City
                                    </p>
                                </div>
                                <div className="home_page_reviews_each_review_details">
                                    <p style={{fontSize: 19, fontWeight: "bolder", textAlign: "center", fontFamily: "'Prompt', Sans-serif", color: 'rgba(0,83,0,0.6)', letterSpacing: 1}}>
                                        <span style={{fontSize: 45, color: "#c751b9", marginRight: 10, fontFamily: "Courgette"}}>"</span>
                                        This is the actual review message to be displayed for what this traveler is saying 
                                        about how great wellgo.com is in the travel retail market
                                    </p>
                                    <p style={{marginTop: 20, fontSize: 13, textAlign: "center", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: '#c751b9'}}>
                                        March 23rd 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="get_best_deals_container" style={{backgroundColor: "white", padding: "50px 0"}}>
                        <h1 style={{textAlign: "center", fontSize: 20, color: "rgba(0,0,0,0.7)", marginBottom: "10px", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                        >Get the Best Deals!</h1>
                    <p style={{color: "rgba(0,0,0,0.6)", textAlign: "center", margin: "0 5px", fontWeight: "bolder", fontSize: 15}}
                    >We have the cheapest flight tickets</p>
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
                        <div style={{border: "none"}} className="each-choose-us-container">
                            
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