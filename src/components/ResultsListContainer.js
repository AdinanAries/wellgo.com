import explore_page_hero from "../explore_page_hero.jpg";

import deltaIcon from "../deltaIcon.png";

import { show_explore_page } from "../helpers/PageRoutingFuncs";
import { show_selected_ticket_details_pane } from "./SelectedTicketPane";

export default function ResultsListContainer(){
    return (
        <div style={{marginTop: 10, minHeight: "calc(100vh - 300px)", padding: 0, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
            <div id="itinerary_and_filter_icon">
                <div>
                    <p style={{fontSize: 16, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        New York
                        <span style={{margin: "0 10px", color: "rgba(0,0,0,0.4)"}}><i className="fa fa-exchange"></i></span>
                        Canada
                    </p>
                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 2}}>Nov 25 - Nov 27</p>
                </div>
                <p onClick={()=>document.getElementById("search_list_main__settings_section").style.display="block"} style={{fontWeight: "bolder", color: "rgb(11, 71, 95)", fontSize: 17}}>
                    <i style={{marginRight: 7}} className="fa fa-sliders" ariaHidden="true"></i>
                    Filters</p>
            </div>
            <div className="search_list_main_flex_container">
                <div id="search_list_main__settings_section" className="search_list_main__settings_section">
                    <div id="mobile_sort_and_filter_title_and_sort">
                        <div style={{height: 50, borderBottom: "1px solid rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    Sort and Filter
                                </p>
                                <p onClick={()=>document.getElementById("search_list_main__settings_section").style.display="none"} id="close_filter_and_sort_btn" style={{color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                                    &times;
                                </p>
                            </div>
                        </div>
                        <div style={{marginTop: "20px", marginBottom: 35}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 17}}>Sort by</p>
                            <select style={{padding: 14, marginTop: 12, width: "100%", border: "1px solid rgba(0,0,0,0.3)", borderRadius: 9, color: "rgba(0,0,0,0.7)",}}>
                                <option>
                                    Price (Lowest)
                                </option>
                            </select>
                        </div>
                    </div>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 17, marginBottom: 30}}>
                        <i style={{marginRight: 7}} className="fa fa-sliders" ariaHidden="true"></i>
                        Filter by</p>

                    <div style={{marginBottom: 30}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Stops</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Nonstop (6)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$143</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>1 Stop (30)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$123</p>
                        </div>
                    </div>

                    <div style={{marginBottom: 20}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Airlines</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Air Canada (22)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$243</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>American Airlines (11)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$133</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>United (5)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$114</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>WestJet (3)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$132</p>
                        </div>
                    </div>

                    <div style={{marginBottom: 30}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Travel and baggage</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Seat choice included</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$143</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Carry-on bag included</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$123</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No cancel fee</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$111</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No change fee</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$371</p>
                        </div>
                    </div>
                </div>
                <div className="search_list_main_tickets_section">
                <div className="search_result_inportant_notice_container">
                    <div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 16, fontFamily: "'Prompt', sans-serif", fontWeight: "bolder", marginBottom: 10}}>
                            <i className="fa fa-info-circle" style={{fontSize: 15, marginRight: 5}}></i>Important Notice
                        </p>
                        <p style={{color: "rgba(0,0,0,0.7)", fontSize: 14}}>
                            Prices displayed include taxes and may change based on availability. 
                            You can review any additional fees before checkout. 
                            Prices are not final until you complete your purchase.
                        </p>
                    </div>
                    {/*<div style={{marginLeft: 10}}>
                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Sort by</p>
                        <select style={{padding: 14, marginTop: 5, backgroundColor: "rgba(255,0,255,0.2)", border: "1px solid rgba(0,0,0,0.3)", borderRadius: 9, color: "rgba(0,0,0,0.7)",}}>
                            <option>
                                Price (Lowest)
                            </option>
                        </select>
                    </div>*/}
                </div>
                    <div id="search_results_list_items">
                        <div onClick={show_selected_ticket_details_pane} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>9:45am - 2:54pm</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>5h 9m (1 stop)</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container">
                                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                                </div>
                            </div>
                            <div style={{marginTop: 5}}>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                                    <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                                    2 cleaning and safety practices
                                </p>
                            </div>
                        </div>
                        <div onClick={show_selected_ticket_details_pane} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>9:45am - 2:54pm</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>5h 9m (1 stop)</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container">
                                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                                </div>
                            </div>
                            <div style={{marginTop: 5}}>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                                    <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                                    2 cleaning and safety practices
                                </p>
                            </div>
                        </div>
                        <div onClick={show_selected_ticket_details_pane} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>9:45am - 2:54pm</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>5h 9m (1 stop)</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container">
                                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                                </div>
                            </div>
                            <div style={{marginTop: 5}}>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                                    <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                                    2 cleaning and safety practices
                                </p>
                            </div>
                        </div>
                        <div onClick={show_selected_ticket_details_pane} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>9:45am - 2:54pm</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>5h 9m (1 stop)</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container">
                                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                                </div>
                            </div>
                            <div style={{marginTop: 5}}>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                                    <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                                    2 cleaning and safety practices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search_list_main_ads_section">
                    <div style={{height: 500, backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 19}}>
                            See the world,</p>
                        <p style={{marginTop: -5,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 17 }}>
                            with a third eye</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            We got you on these amaizing trip ideas that will 
                            make you want to do it over again
                        </p>
                        <div onClick={show_explore_page} style={{textAlign: "center", cursor: "pointer", width:"fit-content", backgroundColor: "#c900b0", fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "white", padding: 14, borderRadius: 9}}>
                            Start exploring
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}