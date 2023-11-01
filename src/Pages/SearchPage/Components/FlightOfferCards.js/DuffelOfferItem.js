import { markup } from "../../../../helpers/Prices";
import { convert24HTimeToAMPM, calculateTotalTime, ellipsify, get_currency_symbol } from "../../../../helpers/general";

const DuffelOfferItem = (props) => {

    console.log(props);
    const { total_amount, total_currency, id, owner, slices } = props.flight;
    
    const CURRENCY_SYMBOL = get_currency_symbol(total_currency);
    const AIRCRAFT_NAME = slices[0].segments[0].aircraft?.name;
    const OPERATED_BY = slices[0].segments[0].operating_carrier?.name;
    const SEGMENT_LENGTH = slices[0].segments.length;
    const TRIP_START = convert24HTimeToAMPM(slices[0].segments[0].departing_at.split("T")[1]);
    const TRIP_ENDS = convert24HTimeToAMPM(slices[0].segments[(SEGMENT_LENGTH - 1)].arriving_at.split("T")[1]);
    const STOPS_COUNT = (SEGMENT_LENGTH-1);
    const ORIGIN_AIRPORT = `${slices[0].segments[0].origin.name} (${slices[0].segments[0].origin.iata_code})`;
    const DESTINATION_AIRPORT = `${slices[0].segments[(SEGMENT_LENGTH - 1)].destination.name} (${slices[0].segments[(SEGMENT_LENGTH - 1)].destination.iata_code})`;
    const ORIGIN_CITY = slices[0].segments[0].origin.city_name;

    let is_one_way=true;
    if(slices.length>1){
        const LAST_SLICE_SEG_LENGTH=slices[(slices.length-1)].segments.length;
        if(ORIGIN_CITY===slices[(slices.length-1)].segments[LAST_SLICE_SEG_LENGTH-1].destination.city_name){
            is_one_way=false;
        }
    }
    let STOPSMARKUP = [];
    if(SEGMENT_LENGTH>1){
        for(let sg=0; sg<SEGMENT_LENGTH-1; sg++){
            let flight_stop_arrival = slices[0].segments[sg].arriving_at;
            let flight_stop_departure = slices[0].segments[sg+1].departing_at;
            const {h: HOURS, m: MINUTES} = calculateTotalTime(flight_stop_arrival.replace("T", " "), flight_stop_departure.replace("T", " "));
            let STOP_DETAILS = (`${HOURS}h ${MINUTES}m in ${ellipsify(slices[0].segments[sg].destination.city_name)} (${slices[0].segments[sg].destination.iata_code})`);
            STOPSMARKUP.push(<p className="tooltip_parent" style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                    {STOP_DETAILS}
                    <div className="tooltip">{`${slices[0].segments[sg].destination.city_name} - ${slices[0].segments[sg].destination.name}`}</div>
                </p>);
        }
    }
    let duration = slices[0]?.duration; // [P1DT2H30M, PT23H45M]
    if(duration?.includes("D")){
        duration=duration?.replace("P","")?.replace("T","")?.replace("D", "d ");
    }else{
        duration = duration?.substring(2);
    }
    const HOURS =  duration?.split("H")[0];
    const MINUTES = duration?.split("H")[1]?.replace("M","");

    return (
        <div onClick={()=>{global.show_selected_ticket_details_pane(); props.selectFlightOffer(id)}} style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        {TRIP_START} - {TRIP_ENDS}</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 5}}>
                    {ORIGIN_AIRPORT} - {DESTINATION_AIRPORT}</p>
                </div>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 5}}>{HOURS}h {MINUTES}m ({(STOPS_COUNT > 0 ? (STOPS_COUNT + (STOPS_COUNT > 1 ? " stops" : " stop")) : "no stops")})</p>
                    {STOPSMARKUP.map(each=>each)}
                </div>
                <div className="each_ticket_price_display_container">
                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: 1000, fontSize: 22, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        <span style={{fontSize: 22, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                            dangerouslySetInnerHTML={{__html: CURRENCY_SYMBOL}}></span>
                        {(markup(total_amount).new_price).toFixed(2)}</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                        <span style={{fontSize: 12}}>
                            {is_one_way?"One-way | ":"Roundtrip | "}
                            <i style={{color: !is_one_way?"green":"orange", fontSize: 12, marginRight: 5}} className={"fa-solid "+(!is_one_way?"fa-check":"fa-exclamation-triangle")}></i>
                            {!is_one_way?"return flight ":"no return flight "}</span>
                        
                    </p>
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