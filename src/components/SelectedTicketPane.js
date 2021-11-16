import deltaIcon from "../deltaIcon.png";

import $ from "jquery";

import { show_start_checkout_page } from "./CheckoutPage";

export default function SelectedTicketPane(){
    return (
        <div id="selected_ticket_pane" className="display_more_info_pane">
            <div id="selected_ticket_main_details_pane">
                <div style={{padding: "10px", borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <p style={{fontSize: 17, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                9:45am - 5:23pm (2 stops)
                            </p>
                            <p style={{fontSize: 14, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)",}}>
                                New York
                                <span style={{margin: "0 10px", color: "rgba(0,0,0,0.4)"}}><i className="fa fa-exchange"></i></span>
                                Canada
                            </p>
                            <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 2}}>Nov 25 - Nov 27</p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginTop: 10}}>
                                <img src={deltaIcon} style={{width: 27, height: "auto", objectFit: "conver"}} />
                                Delta
                                <span onClick={toggle_see_ticket_details_itinerary_details} style={{cursor: "pointer", marginLeft: 15, fontSize: 14, color: "#c900b0"}}>
                                    See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                                </span>
                            </p>
                            <div id="see_ticket_details_itinerary_details" style={{display: "none", marginTop: 10, marginBottom: 20}}>

                                {/*Take off without stops*/}
                                <div style={{display: "none", borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 20, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: -15, left: -6.5}}>
                                        <i className="fa fa-map-marker" style={{color: "rgba(0,0,0,0.3)"}}></i>
                                    </div>
                                    <div style={{position: "absolute", left: -8.5, backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                                        <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", bottom: -10, left: -6.5}}>
                                        <i className="fa fa-map-marker" style={{color: "rgba(0,0,0,0.3)"}}></i>
                                    </div>
                                    <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        9:45am - New York
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 2, marginLeft: 20, marginBottom: 20}}>La Guardia (LGA)</p>
                                    <div style={{marginLeft: 20}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>1h 35m flight</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Operated by WestJet Encore</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Dehavilland DHC-8 400</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Economy/Coach (T)</p>
                                    </div>
                                    <p style={{fontSize: 15, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        11:20am - Toronto
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>Pearson Intl. (YYZ)</p>
                                </div>                            

                                {/*Take off with stops*/}
                                <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 20, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: -15, left: -6.5}}>
                                        <i className="fa fa-map-marker" style={{color: "rgba(0,0,0,0.3)"}}></i>
                                    </div>
                                    <div style={{position: "absolute", left: -8.5, backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                                        <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", border: "3px solid rgba(0,0,0,0.3)", position: "absolute", bottom: -10, left: -7}}>

                                    </div>
                                    <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        9:45am - New York
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 2, marginLeft: 20, marginBottom: 20}}>La Guardia (LGA)</p>
                                    <div style={{marginLeft: 20}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>1h 35m flight</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Operated by WestJet Encore</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Dehavilland DHC-8 400</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Economy/Coach (T)</p>
                                    </div>
                                </div>

                                {/*Middle Stop Segments*/}
                                <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 10, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: -11, left: -6.5}}>
                                        
                                    </div>
                                    <div style={{position: "absolute", left: -8.5, backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                                        <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", border: "3px solid rgba(0,0,0,0.3)", position: "absolute", bottom: -10, left: -7}}>
                                        
                                    </div>
                                    <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        11:20am - Toronto
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>Pearson Intl. (YYZ)</p>
                                    <div style={{backgroundColor: "rgba(255,0,0,0.1)", margin: 10, width: "fit-content", border: "1px solid rgba(255,0,0,0.1)", borderRadius: 6, padding: "10px 20px"}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                            <i className="fa fa-exclamation-triangle" style={{color: "rgba(255,0,0,0.7)", marginRight: 5}}></i>
                                            Flight Stop
                                        </p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 5}}>1h 35m wait in Toronto</p>
                                    </div>
                                    <div style={{marginLeft: 20}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>1h 35m flight</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Operated by WestJet Encore</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Dehavilland DHC-8 400</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Economy/Coach (T)</p>
                                    </div>
                                </div>

                                {/*Arrival with stops*/}
                                <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 10, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: -11, left: -6.5}}>
                                        
                                    </div>
                                    <div style={{position: "absolute", left: -8.5, backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                                        <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", bottom: -10, left: -6.5}}>
                                        <i className="fa fa-map-marker" style={{color: "rgba(0,0,0,0.3)"}}></i>
                                    </div>
                                    <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        11:20am - Toronto
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>Pearson Intl. (YYZ)</p>
                                    <div style={{backgroundColor: "rgba(255,0,0,0.1)", margin: 10, width: "fit-content", border: "1px solid rgba(255,0,0,0.1)", borderRadius: 6, padding: "10px 20px"}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                            <i className="fa fa-exclamation-triangle" style={{color: "rgba(255,0,0,0.7)", marginRight: 5}}></i>
                                            Flight Stop
                                        </p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 5}}>1h 35m wait in Toronto</p>
                                    </div>
                                    <div style={{marginLeft: 20}}>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)"}}>1h 35m flight</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Operated by WestJet Encore</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Dehavilland DHC-8 400</p>
                                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 4}}>Economy/Coach (T)</p>
                                    </div>
                                    <p style={{fontSize: 15, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        11:20am - Toronto
                                    </p>
                                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>Pearson Intl. (YYZ)</p>
                                </div>
                            </div>
                        </div>
                        <p onClick={()=>document.getElementById("selected_ticket_pane").style.display="none"} style={{cursor: "pointer", color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                            &times;
                        </p>
                    </div>
                </div>
                <div style={{padding: 10}}>
                    <p style={{fontSize: 22, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        $378
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 11, marginTop: -2}}>
                        rountrip for 1 traveler
                    </p>
                    <p style={{fontSize: 14, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Main Cabin
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 5}}>
                        Economy
                    </p>
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Seat
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                    <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                        Seat choice included
                    </p>
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Bags
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                        <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                        Carry-on bag included
                    </p>
                    <p style={{marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <span style={{color: "rgba(0,0,0,0.8)", fontSize: 13,}}>
                            <i className="fa fa-money" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>1st checked bag:
                        </span>
                        <span style={{color: "rgba(0,0,0,0.8)", fontSize: 13}}>
                            $30
                        </span>
                    </p>
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Flexibility
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                    <i className="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                        Cancellation not allowed
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, marginTop: 10}}>
                        <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                        No change fees
                    </p>
                </div>
                <div className="selected_ticket_book_btn_container">
                    <div onClick={show_start_checkout_page} className="selected_ticket_book_btn">
                        Book
                    </div>
                </div>
            </div>
        </div>
    );
}

export function show_selected_ticket_details_pane(){
    document.getElementById("selected_ticket_pane").style.display = "block";
}

var is_itinerary_showing = false;
function toggle_see_ticket_details_itinerary_details(){
    if(is_itinerary_showing){
        $("#see_ticket_details_itinerary_details").slideUp("fast");
    }else{
        $("#see_ticket_details_itinerary_details").slideDown("fast");
    }
    is_itinerary_showing = !is_itinerary_showing;
}