import { markup } from "../../../../helpers/Prices";
import { convert24HTimeToAMPM, calculateTotalTime, ellipsify } from "../../../../helpers/general";

const DuffelOfferItem = (props) => {

    console.log(props);
    const { total_amount, id, owner, slices } = props.flight;
    
    const AIRCRAFT_NAME = slices[0].segments[0].aircraft?.name;
    const OPERATED_BY = slices[0].segments[0].operating_carrier?.name;
    const SEGMENT_LENGTH = slices[0].segments.length;
    const TRIP_START = convert24HTimeToAMPM(slices[0].segments[0].departing_at.split("T")[1]);
    const TRIP_ENDS = convert24HTimeToAMPM(slices[0].segments[(SEGMENT_LENGTH - 1)].arriving_at.split("T")[1]);
    const STOPS_COUNT = (SEGMENT_LENGTH-1);
    const ORIGIN_AIRPORT = `${slices[0].segments[0].origin.name} (${slices[0].segments[0].origin.iata_code})`;
    const DESTINATION_AIRPORT = `${slices[0].segments[(SEGMENT_LENGTH - 1)].destination.name} (${slices[0].segments[(SEGMENT_LENGTH - 1)].destination.iata_code})`;
    let STOPSMARKUP = [];
    if(SEGMENT_LENGTH>1){
        for(let sg=0; sg<SEGMENT_LENGTH-1; sg++){
            let flight_stop_arrival = slices[0].segments[sg].arriving_at;
            let flight_stop_departure = slices[0].segments[sg+1].departing_at;
            const {h:HOURS, m: MINUTES} = calculateTotalTime(flight_stop_arrival.replace("T", " "), flight_stop_departure.replace("T", " "));
            let STOP_DETAILS = (`${HOURS}h ${MINUTES}m in ${ellipsify(slices[0].segments[sg].destination.city_name)} (${slices[0].segments[sg].destination.iata_code})`);
            STOPSMARKUP.push(<p className="tooltip_parent" style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                    {STOP_DETAILS}
                    <div className="tooltip">{`${slices[0].segments[sg].destination.city_name} - ${slices[0].segments[sg].destination.name}`}</div>
                </p>);
        }
    }
    let duration = slices[0].duration.substring(2);
    const HOURS =  duration.split("H")[0];
    const MINUTES = duration.split("H")[1].replace("M","");

    return (
        <div onClick={()=>{global.show_selected_ticket_details_pane(); props.selectFlightOffer(id)}} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        {TRIP_START} - {TRIP_ENDS}</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12,}}>
                    {ORIGIN_AIRPORT} - {DESTINATION_AIRPORT}</p>
                </div>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 5}}>{HOURS}h {MINUTES}m ({(STOPS_COUNT > 0 ? (STOPS_COUNT + (STOPS_COUNT > 1 ? " stops" : " stop")) : "no stops")} )</p>
                    {STOPSMARKUP.map(each=>each)}
                </div>
                <div className="each_ticket_price_display_container">
                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: 1000, fontSize: 27, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        ${(markup(total_amount).new_price).toFixed(2)}</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                </div>
            </div>
            <div style={{marginTop: 5}}>
                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                    <img src={owner.logo_symbol_url/*"./deltaIcon.png"*/} alt={"test"} style={{width: 27, height: "auto", objectFit: "cover", marginRight: 7}} />
                    {owner.name} &#8226; {AIRCRAFT_NAME} {OPERATED_BY && "operated by " + OPERATED_BY}
                </p>
                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                    2 cleaning and safety practices
                </p>
            </div>
        </div>
    );
}

export default DuffelOfferItem;