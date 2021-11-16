import WillgoLogo from '../WillgoLogo.png';
import deltaIcon from "../deltaIcon.png";

export default function CheckoutPage(){
    return (
        <div id="booking_start_checkout_page_container">
            <div className="wrapper">
                <div style={{padding: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <div className="site-logo">
                                <p className="site-logo-img">
                                    <img src={WillgoLogo}/></p>
                                <div className="site-logo-txt">
                                    <p>
                                        Wellgo
                                        <span>.com</span>
                                    </p>
                                </div>
                            </div>
                            <p style={{fontSize: 13, marginTop: 10, color: "rgba(0,0,0,0.7)", marginLeft: 10}}>
                                <i style={{marginRight: 5, fontSize: 19, color: "rgba(0,0,0,0.4)"}} class="fa fa-shopping-cart" aria-hidden="true"></i>
                                Checkout total:
                                <span style={{fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.6)", fontSize: 13, fontWeight: "bolder", marginLeft: 10}}>$133.23</span>
                            </p>
                        </div>
                        <p onClick={()=>document.getElementById("booking_start_checkout_page_container").style.display="none"} style={{cursor: "pointer", color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                            &times;
                        </p>
                    </div>
                </div>
                <div className="checkout_page_all_info_flex_container">
                    <div className="checkout_page_all_info_flex_left">
                        <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                            <p style={{fontSize: 17, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                Montreal to New York
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                                <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                Delta &#8226; Thu, Nov 25
                            </p>
                            <div style={{marginTop: 20}}>
                                <p style={{fontSize: 15, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                    9:45am - 2:54pm
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                    5h 9m (1 stop)
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                    2h 1m in Toronto (YYZ)
                                </p>
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 17, marginTop: 5}}>
                                    <i style={{marginRight: 10}} className="fa fa-wifi"></i>
                                </p>
                                <p style={{cursor: "pointer", marginTop: 10, fontSize: 14, color: "#c900b0"}}>
                                    See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                                </p>
                            </div>
                        </div>
                        <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                            <p style={{fontSize: 17, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                New York to Montreal
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                                <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                Delta &#8226; Thu, Nov 25
                            </p>
                            <div style={{marginTop: 20}}>
                                <p style={{fontSize: 15, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                    9:45am - 2:54pm
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                    5h 9m (1 stop)
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                                    2h 1m in Toronto (YYZ)
                                </p>
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 17, marginTop: 5}}>
                                    <i style={{marginRight: 10}} className="fa fa-wifi"></i>
                                </p>
                                <p style={{cursor: "pointer", marginTop: 10, fontSize: 14, color: "#c900b0"}}>
                                    See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="checkout_page_all_info_flex_right">
                        <div style={{border: "1px solid rgba(0,0,0,0.1)", borderRadius: 9, padding: 10, margin: 10}}>
                            <p style={{fontSize: 19, letterSpacing: 1, fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                Price Summary
                            </p>
                            <div style={{marginTop: 20, borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 10}}>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                                        Traveler: 1 Adult
                                    </p>
                                    <p style={{fontSize: 14, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                        $133.28
                                    </p>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                                        Flight
                                    </p>
                                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)",}}>
                                        $101.10
                                    </p>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                    <p style={{fontSize: 14, letterSpacing: 1, color: "rgba(0,0,0,0.7)"}}>
                                        Taxes and fees
                                    </p>
                                    <p style={{fontSize: 14, letterSpacing: 1, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)"}}>
                                        $32.18
                                    </p>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                                <div>
                                    <p style={{fontSize: 17, letterSpacing: 1, color: "rgba(0,0,0,0.8)", fontWeight: "bolder"}}>
                                        Total
                                    </p>
                                    <p style={{fontSize: 12, marginTop: 5, color: "rgba(0,0,0,0.7)"}}>
                                        <i style={{marginRight: 5}} className="fa fa-info-circle"></i>
                                        prices are quoted in US dollars
                                    </p>
                                </div>
                                <p style={{fontSize: 17, fontWeight: "bolder", letterSpacing: 1, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.8)",}}>
                                    $133.28
                                </p>
                            </div>
                            <div className="checkout_page_main_checkout_btn_container">
                                <p className="checkout_page_mobile_button_place_total_price_display">
                                    <i style={{marginRight: 5}} className="fa fa-info-circle"></i>
                                    The total amout you pay is $133.28. See price summary at the bottom
                                </p>
                                <div className="checkout_page_main_checkout_btn">
                                    <i style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}} className="fa fa-credit-card"></i>Checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function show_start_checkout_page(){
    document.getElementById("booking_start_checkout_page_container").style.display = "block";
}