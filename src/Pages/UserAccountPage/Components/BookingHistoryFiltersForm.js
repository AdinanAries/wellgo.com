const BookingHistoryFiltersForm = (props) => {

    const { ShowBookingHistory, toggle_show_booking_history_filters, hide_booking_history_filters } = props;

    const searchFiltersOnsubmit = () => {
        ShowBookingHistory(new Date().toISOString(), new Date(new Date().getDay()+6).toISOString());
    }

    return (
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
                            <div onClick={()=>{hide_booking_history_filters();searchFiltersOnsubmit()}} style={{cursor: "pointer", padding: 10, backgroundColor: "rgba(53,53,86)", color: "white", borderRadius: 50, textAlign: "center", marginTop: 10}}>
                                Done
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingHistoryFiltersForm;