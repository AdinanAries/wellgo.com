import { get_date_format_DAYMMMDDYYYY } from "../../../helpers/general"
import HistoryPayloadItem from "./HistoryPayloadItem";

const BookingHistorySelectedItem = (props) => {

    const {
        selectedHistoryItem
    } = props;

    return <div>
        <div style={{padding: 10, display: "flex"}}>
            <p>
                <i className="fa fa-route" style={{marginRight: 10, color: "rgba(0,0,0,0.6)"}}></i>
            </p>
            <div>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                    {selectedHistoryItem.takeoff_city} ({selectedHistoryItem.takeoff_airport_code}) - {selectedHistoryItem.destination_city} ({selectedHistoryItem.destination_airport_code})</p>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.5)"}}>
                    {get_date_format_DAYMMMDDYYYY(selectedHistoryItem.departure_date)} - {get_date_format_DAYMMMDDYYYY(selectedHistoryItem.return_date)}</p>
            </div>
        </div>
        <div>
            <HistoryPayloadItem 
                completedOrderDetails={selectedHistoryItem?.originPayloads[0]}
            />
        </div>
    </div>
}

export default BookingHistorySelectedItem