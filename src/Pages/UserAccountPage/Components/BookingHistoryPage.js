import PaginationButtons from "../../../components/PaginationButtons";

const BookingHistoryPage = (props) => {
    
    const { toggle_show_booking_history_filters, hide_booking_history_filters, bookings, show_booking_history_more_info_pane, nothing_found_icon } = props;

    return (
        <div className="user_account_page_each_child_container user_account_page_second_child_container" style={{borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
            <div>
                <p style={{fontFamily: "'Prompt', Sans-serif", textAlign: "center", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                    <i style={{marginRight: 10}} className="fa fa-history"></i>
                    Booking History
                </p>
                <div style={{marginTop: 10, position: "relative", backgroundColor: "rgba(0,0,0,0.072)", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <p style={{position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 40, height: 48, borderRadius: "100%"}}>
                        <i style={{color: "rgba(0,0,0,0.7)"}} className="fa fa-calendar"></i>
                    </p>
                    <input id="booking_history_date_range_input" readOnly="true" style={{position: "relative", zIndex: 4, border: "none", borderRadius: 50, fontSize: 14, padding: "14px 10px", backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", width: "calc(100% - 95px)"}} type="text" placeholder="Select date range"/>
                    <p onClick={toggle_show_booking_history_filters} style={{cursor: "pointer", position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 48, height: 48, borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.072)",}}>
                        <i id="toggle_show_booking_history_filters_caret" style={{color: "rgba(0,0,0,0.7)", transition: "all 0.2s ease-in-out"}} className="fa fa-caret-down"></i>
                    </p>
                    <div id="booking_history_filters_container" style={{display: "none", padding: "0 10px", backgroundColor: "rgb(240,240,240)", paddingTop: 70, position: "absolute", top: -10, left: 0, zIndex: 3, width: "calc(100% + 5px)", borderRadius: 20, boxShadow: "0 0 5px rgba(0,0,0,0.33)",}}>
                        <div style={{padding: 10}}>
                            <p style={{fontSize: 13, fontWeight: "bolder", letterSpacing: 1, color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', sans-serif"}}>Filter by:</p>
                            <div style={{marginLeft: 10, marginTop: 10}}>
                                <p style={{fontSize: 13, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                    Cabin type</p>
                                <select style={{marginTop: 5, border: "none", borderRadius: 50, backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", padding: 10, fontSize: 14, width: "100%"}}>
                                    <option>All</option>
                                    <option>Cheapest</option>
                                    <option>Economy</option>
                                    <option>Premium</option>
                                    <option>Business</option>
                                    <option>First</option>
                                </select>
                                <p style={{fontSize: 13, letterSpacing: 1, color: "rgba(0,0,0,0.7)", marginTop: 15, fontFamily: "'Prompt', sans-serif"}}>
                                    Trip type</p>
                                    <select style={{marginTop: 5, border: "none", borderRadius: 50, backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", padding: 10, fontSize: 14, width: "100%"}}>
                                    <option>All</option>
                                    <option>Round-trip</option>
                                    <option>One-way</option>
                                    <option>Multicity</option>
                                </select>
                                <div onClick={hide_booking_history_filters} style={{cursor: "pointer", padding: 10, backgroundColor: "rgba(53,53,86)", color: "white", borderRadius: 50, textAlign: "center", marginTop: 10}}>
                                    Done
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: 10, height: 400, overflowY: "auto"}}>
                {
                    /*
                        id: "001",
                        user_id: "001",
                        airline: "American Airlines",
                        ariline_code: "",
                        trip_type: "round trip",
                        travellers: [{
                            first_name: "MOhammed",
                            last_name: "Adinan",
                            gender: "male",
                            dob: "03-23-1992",
                        }],
                        takeoff_airport: "Laguardia",
                        takeoff_airport_code: "",
                        takeoff_city: "New York",
                        destination_airport: "Kotoka",
                        destination_airport_code: "",
                        destination_city: "Accra",
                        departure_date: "03-23-2023",
                        return_date: "04-09-2023"
                    */
                
                    bookings.map(each =>(
                        <div style={{display: "block", borderBottom: "1px solid rgba(0,0,0,0.1)", padding: 10}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                <i className="fa fa-route" style={{marginRight: 10, color: "rgba(12, 109, 133, 0.5)"}}></i>
                                {each.takeoff_city}, {each.takeoff_airport} - {each.destination_city}, {each.destination_airport}</p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.5)"}}>
                                {each.departure_date} - {each.return_date}</p>
                            <p onClick={show_booking_history_more_info_pane} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "rgba(0,0,0,0.6)"}}>
                                view more ...
                            </p>
                        </div>
                    ))
                }
                <div style={{display: "none", backgroundColor: "rgb(0,0,255,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, fontWeight: "initial", color: "rgba(0,0,0,0.7)"}}>
                            <i className="fa fa-ticket" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                        </span>G030E9S, 2 travelers, economy</p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                        <i className="fa fa-calendar-o" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                        March 22 - March 27</p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                        <i className="fa fa-map-marker" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                        Accra</span></p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                        <i className="fa fa-plane" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                        JFK - Kotoka, Round-trip</p>
                    <p onClick="show_booking_history_more_info_pane" style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "#c751b9"}}>
                        see all ...
                    </p>
                </div>
                <div style={{display: "none", marginBottom: 20, padding: "20px"}}>
                    <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                        Oops nothing found</p>
                </div>
            </div>
            <div style={{marginTop: 30}}>
                <PaginationButtons />
            </div>
        </div>
    )
}

export default BookingHistoryPage