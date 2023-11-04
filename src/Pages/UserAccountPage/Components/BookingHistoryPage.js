import PaginationButtons from "../../../components/PaginationButtons";
import BookingHistoryFiltersForm from "./BookingHistoryFiltersForm";
import loading_icon from "../../../icons/loading.svg";
import nothing_found_icon from "../../../icons/nothing_found_icon.svg";

const BookingHistoryPage = (props) => {
    
    const { isLoading, ShowBookingHistory, toggle_show_booking_history_filters, hide_booking_history_filters, bookings, show_booking_history_more_info_pane } = props;

    return (
        <div className="user_account_page_each_child_container user_account_page_second_child_container" style={{borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
            <BookingHistoryFiltersForm
                toggle_show_booking_history_filters={toggle_show_booking_history_filters}
                hide_booking_history_filters={hide_booking_history_filters}
                ShowBookingHistory={ShowBookingHistory}

            />
            {isLoading && 
                <div style={{marginBottom: 20, padding: "20px"}}>
                    <div style={{backgroundImage: `url(${loading_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                        Please wait...</p>
                </div>
            }
            {
                (!isLoading && bookings.isError) && 
                    <div style={{marginBottom: 20, padding: "20px"}}>
                        <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                            <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                            Oop! Error on server</p>
                    </div>
            }
            {
                (!isLoading && !bookings.isError) &&
                <>
                    <div style={{marginTop: 10, height: 400, overflowY: "auto"}}>
                        { 
                            bookings.length < 1 &&
                            <div style={{display: "none", marginBottom: 20, padding: "20px"}}>
                                <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                    <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                    Oops nothing found</p>
                            </div>
                        }{
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
                    </div>
                    <div style={{marginTop: 30}}>
                        <PaginationButtons />
                    </div>
                </>
            }
        </div>
    )
}

export default BookingHistoryPage