import explore_page_hero from "../explore_page_hero.jpg";

import deltaIcon from "../deltaIcon.png";
import airplane from "../icons/airplane.svg";

import { show_explore_page } from "../helpers/PageRoutingFuncs";

export default function ResultsListContainer(props){

    return (
        <div style={{marginTop: 10, minHeight: "calc(100vh - 300px)", padding: 0, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
            
            <div id="search_results_mobile_top_itin_display">

            </div>
            <div className="search_list_main_flex_container">
                <div id="search_list_main__settings_section" className="search_list_main__settings_section">
                    
                </div>
                <div className="search_list_main_tickets_section">
                    <div id="animated_loader" style={{position: "relative", height: 190}}>
                        <div style={{backgroundImage: `url('${airplane}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: 120, height: 120, position: "absolute", left: "calc(50% - 80px)", zIndex: 2, animation: "the_moving_plane 15s ease-in-out infinite"}}></div>
                    </div>

                    <div id="search_result_important_notice">

                    </div>
                    
                    <div id="search_results_list_items">
                        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 20, padding: "15px 10px", animation: "item_slide_down 0.5s ease-in"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="ticket_loader_info_1">
                                    <p className="info_item_loader" style={{borderRadius: 50, fontSize: 12, height: 40}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div className="ticket_loader_info_2">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container  ticket_loader_info_3">
                                    <p className="each_ticket_price_display info_item_loader" style={{fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                </div>
                            </div>
                            <div className="ticket_loader_info_4" style={{marginTop: 5}}>
                                <p className="info_item_loader" style={{color: "rgba(0,0,0,0)", fontSize: 12, height: 30}}>
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                            </div>
                        </div>
                        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 20, padding: "15px 10px", animation: "item_slide_down 0.5s ease-in"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="ticket_loader_info_1">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div className="ticket_loader_info_2">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container  ticket_loader_info_3">
                                    <p className="each_ticket_price_display info_item_loader" style={{fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                </div>
                            </div>
                            <div className="ticket_loader_info_4" style={{marginTop: 5}}>
                                <p className="info_item_loader" style={{color: "rgba(0,0,0,0)", fontSize: 12, height: 30}}>
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                            </div>
                        </div>
                        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 20, padding: "15px 10px", animation: "item_slide_down 0.5s ease-in"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="ticket_loader_info_1">
                                    <p className="info_item_loader" style={{borderRadius: 50, fontSize: 12, height: 40}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div className="ticket_loader_info_2">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container  ticket_loader_info_3">
                                    <p className="each_ticket_price_display info_item_loader" style={{fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                </div>
                            </div>
                            <div className="ticket_loader_info_4" style={{marginTop: 5}}>
                                <p className="info_item_loader" style={{color: "rgba(0,0,0,0)", fontSize: 12, height: 30}}>
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                            </div>
                        </div>
                        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 20, padding: "15px 10px", animation: "item_slide_down 0.5s ease-in"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="ticket_loader_info_1">
                                    <p className="info_item_loader" style={{borderRadius: 50, fontSize: 12, height: 40}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div className="ticket_loader_info_2">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container  ticket_loader_info_3">
                                    <p className="each_ticket_price_display info_item_loader" style={{fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                </div>
                            </div>
                            <div className="ticket_loader_info_4" style={{marginTop: 5}}>
                                <p className="info_item_loader" style={{color: "rgba(0,0,0,0)", fontSize: 12, height: 30}}>
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                            </div>
                        </div>
                        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 20, padding: "15px 10px", animation: "item_slide_down 0.5s ease-in"}}>
                            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <div className="ticket_loader_info_1">
                                    <p className="info_item_loader" style={{borderRadius: 50, fontSize: 12, height: 40}}>Montreal (YUB) - New York (LGA)</p>
                                </div>
                                <div className="ticket_loader_info_2">
                                    <p className="info_item_loader" style={{fontSize: 12, height: 40}}>2h 1m in Toronto(yyz)</p>
                                </div>
                                <div className="each_ticket_price_display_container  ticket_loader_info_3">
                                    <p className="each_ticket_price_display info_item_loader" style={{fontWeight: "1000", fontSize: 27, fontFamily: "'Prompt', sans-serif", marginBottom: 2}}>
                                        $335</p>
                                </div>
                            </div>
                            <div className="ticket_loader_info_4" style={{marginTop: 5}}>
                                <p className="info_item_loader" style={{color: "rgba(0,0,0,0)", fontSize: 12, height: 30}}>
                                    Delta &#8226;
                                    Delta 7204 and 7138 operated by WestJet
                                </p>
                            </div>
                        </div>
                        <div style={{display: "none", cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
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
                        <div style={{display: "none", cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
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
                        <div style={{display: "none", cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
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
                        <div style={{display: "none", cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
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
                    <div style={{height: 500, backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", position: "relative", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{fontSize: 12, backgroundColor: "white", width: 40, textAlign: "center", borderRadius: 20, padding: 5, fontWeight: "bolder", position: "absolute", top: 10, right: 10}}>AD</p>
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 19}}>
                            See the world,</p>
                        <p style={{marginTop: -5,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 17 }}>
                            with a third eye</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            We got you on these amaizing trip ideas that will 
                            make you want to do it over again
                        </p>
                        <div onClick={show_explore_page} style={{textAlign: "center", cursor: "pointer", width:"fit-content", backgroundColor: "#c900b0", fontSize: 14, fontFamily: "'Prompt', sans-serif", color: "white", padding: 14, borderRadius: 50}}>
                            <i className="fa fa-globe" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>
                            Explore now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
