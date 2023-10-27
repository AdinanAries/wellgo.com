import { convert24HTimeToAMPM, calculateTotalTime } from "../../../helpers/general";

// For testing
import { segs } from "../../../test_objects/duffel_segment";

function extractSegmentDuration (duration) {
    // Duration examples: [P1DT2H30M, PT23H45M]
    if(duration.includes("D")){
        duration=duration.replace("P","").replace("T","").replace("D", "d ");
    }else{
        duration = duration.substring(2);
    }
    const h =  duration.split("H")[0];
    const m = duration.split("H")[1].replace("M","");
    return { h, m }
}

const SelectedTicketItinSegments = (props) => {
    const { segments } = props;
    console.log("segments: ", segments);

    // For testing
    // segments=segs;

    const ORIGIN_CITY = segments[0].origin.city_name;
    const ORIGIN_AIRPORT = `${segments[0].origin.name} (${segments[0].origin.iata_code})`;
    const ORIGIN_TAKEOFF_TIME = convert24HTimeToAMPM(segments[0].departing_at.split("T")[1]);
    const { h: TAKE_OFF_HOURS, m: TAKE_OFF_MINUTES} = extractSegmentDuration(segments[0].duration);
    const TAKE_OFF_CARRIER_OPERATOR = segments[0].operating_carrier.name;
    const TAKE_OFF_CARRIER_AIRCRAFT = segments[0].aircraft.name;
    const TAKE_OFF_CABIN_TYPE = segments[0].passengers[0].cabin.marketing_name;
    
    const DESTINATION_CITY = segments[segments.length-1].destination.city_name;
    const DESTINATION_AIRPORT = `${segments[segments.length-1].destination.name} (${segments[segments.length-1].destination.iata_code})`;
    const DESTINATION_ARRIVAL_TIME = convert24HTimeToAMPM(segments[(segments.length-1)].arriving_at.split("T")[1]);
    
    let seg_markup=[];
    if(segments.length === 1){
        // Only one array item: no-stop flight
        seg_markup.push(
            <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 20, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: "-15px", left: "-6.5px"}}>
                    <i className="fa fa-map-marker" style={{color: "green"}}></i>
                </div>
                <div style={{position: "absolute", left: "-8.5px", backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                    <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                </div>
                <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", bottom: "-10px", left: "-6.5px"}}>
                    <i className="fa fa-map-marker" style={{color: "green"}}></i>
                </div>
                <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                    {ORIGIN_TAKEOFF_TIME} - {ORIGIN_CITY}
                </p>
                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 2, marginLeft: 20, marginBottom: 20}}>
                    {ORIGIN_AIRPORT}</p>
                <div style={{marginLeft: 20}}>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        {TAKE_OFF_HOURS}h {TAKE_OFF_MINUTES}m flight</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        Operated by {TAKE_OFF_CARRIER_OPERATOR}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {TAKE_OFF_CARRIER_AIRCRAFT}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {TAKE_OFF_CABIN_TYPE/*Economy/Coach (T)*/}</p>
                </div>
                <p style={{fontSize: 15, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                    {DESTINATION_ARRIVAL_TIME} - {DESTINATION_CITY}
                </p>
                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>
                    {DESTINATION_AIRPORT}</p>
            </div>
        )
    } else {
        // First array item (departure airport)
        
        const { h: LAST_ROUND_HOURS, m: LAST_ROUND_MINUTES} = extractSegmentDuration(segments[(segments.length-1)].duration);
        const LAST_ROUND_CARRIER_OPERATOR = segments[(segments.length-1)].operating_carrier.name;
        const LAST_ROUND_CARRIER_AIRCRAFT = segments[(segments.length-1)].aircraft.name;
        const LAST_ROUND_CABIN_TYPE = segments[(segments.length-1)].passengers[0].cabin.marketing_name;

        const LAST_STOP_CITY = segments[segments.length-1].origin.city_name;
        const LAST_STOP_AIRPORT = `${segments[segments.length-1].origin.name} (${segments[segments.length-1].origin.iata_code})`;
        const LAST_STOP_TAKEOFF_TIME = convert24HTimeToAMPM(segments[(segments.length-1)].departing_at.split("T")[1]);

        const LAST_STOP_ARRIVAL_TIME = convert24HTimeToAMPM(segments[(segments.length-2)].arriving_at.split("T")[1]);
        const {h: LAST_STOP_WAIT_TIME_HOURS, m: LAST_STOP_WAIT_TIME_MINUTES} = calculateTotalTime(
                                                                    segments[(segments.length-2)].arriving_at.replace("T", " "), 
                                                                    segments[(segments.length-1)].departing_at.replace("T", " "));

        seg_markup.push(
            <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 20, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: "-15px", left: "-6.5px"}}>
                    <i className="fa fa-map-marker" style={{color: "green"}}></i>
                </div>
                <div style={{position: "absolute", left: "-8.5px", backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                    <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                </div>
                <div style={{width: 10, height: 10, borderRadius: "100%", border: "3px solid crimson", position: "absolute", bottom: "-10px", left: "-7px"}}>

                </div>
                <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "green"}}>
                    {ORIGIN_TAKEOFF_TIME} - {ORIGIN_CITY}
                </p>
                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 2, marginLeft: 20, marginBottom: 20}}>
                    {ORIGIN_AIRPORT}</p>
                <div style={{marginLeft: 20}}>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        {TAKE_OFF_HOURS}h {TAKE_OFF_MINUTES}m flight</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        Operated by {TAKE_OFF_CARRIER_OPERATOR}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {TAKE_OFF_CARRIER_AIRCRAFT}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {TAKE_OFF_CABIN_TYPE/*Economy/Coach (T)*/}</p>
                </div>
            </div>
        );

        // Middile array items: flight stops
        for(let i=1;i<(segments.length-1);i++){

            const _STOP_CITY = segments[i].origin.city_name;
            const _STOP_AIRPORT = `${segments[i].origin.name} (${segments[i].origin.iata_code})`;
            const _STOP_ARRIVAL_TIME = convert24HTimeToAMPM(segments[i-1].arriving_at.split("T")[1]);
            const _STOP_TAKEOFF_TIME = convert24HTimeToAMPM(segments[i].departing_at.split("T")[1]);
            const { h: _STOP_TRAVEL_HOURS, m: _STOP_TRAVEL_MINUTES} = extractSegmentDuration(segments[i].duration);
            const _STOP_TRAVEL_CARRIER_OPERATOR = segments[i].operating_carrier.name;
            const _STOP_TRAVEL_CARRIER_AIRCRAFT = segments[i].aircraft.name;
            const _STOP_TRAVEL_CABIN_TYPE = segments[i].passengers[0].cabin.marketing_name;
            
            const {h: STOP_WAIT_TIME_HOURS, m: STOP_WAIT_TIME_MINUTES} = calculateTotalTime(
                                                                        segments[i-1].arriving_at.replace("T", " "), 
                                                                        segments[i].departing_at.replace("T", " "));

            seg_markup.push(
                <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 10, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                    <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: "-11px", left: "-6.5px"}}>
                        
                    </div>
                    <div style={{position: "absolute", left: "-8.5px", backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                        <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                    </div>
                    <div style={{width: 10, height: 10, borderRadius: "100%", border: "3px solid crimson", position: "absolute", bottom: "-10px", left: "-7px"}}>
                        
                    </div>
                    <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "crimson"}} >
                        {_STOP_ARRIVAL_TIME} - {_STOP_TAKEOFF_TIME} in {_STOP_CITY}
                    </p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>
                        {_STOP_AIRPORT}</p>
                    <div style={{backgroundColor: "rgba(255,0,0,0.1)", margin: 10, width: "fit-content", border: "1px solid rgba(255,0,0,0.1)", borderRadius: 6, padding: "10px 20px"}}>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                            <i className="fa fa-exclamation-triangle" style={{color: "rgba(255,0,0,0.7)", marginRight: 5}}></i>
                            Flight Stop
                        </p>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 5}}>
                            {STOP_WAIT_TIME_HOURS}h {STOP_WAIT_TIME_MINUTES}m wait in Toronto</p>
                    </div>
                    <div style={{marginLeft: 20}}>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                            {_STOP_TRAVEL_HOURS}h {_STOP_TRAVEL_MINUTES}m flight</p>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                            {_STOP_TRAVEL_CARRIER_OPERATOR}</p>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                            {_STOP_TRAVEL_CARRIER_AIRCRAFT}</p>
                        <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                            {_STOP_TRAVEL_CABIN_TYPE}</p>
                    </div>
                </div>
            );
        }

        // Last array item: Travel Destination
        seg_markup.push(
            <div style={{borderLeft: "3px dashed rgba(0,0,0,0.2)", marginTop: 10, padding: "5px 10px", paddingRight: 0, position: "relative"}}>
                <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", top: "-11px", left: "-6.5px"}}>
                    
                </div>
                <div style={{position: "absolute", left: "-8.5px", backgroundColor: "white", top: "calc(50% - 20px)", borderRadius: "100%"}}>
                    <i style={{color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                </div>
                <div style={{width: 10, height: 10, borderRadius: "100%", position: "absolute", bottom: "-10px", left: "-6.5px"}}>
                    <i className="fa fa-map-marker" style={{color: "green"}}></i>
                </div>
                <p style={{fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "crimson"}}>
                    {LAST_STOP_ARRIVAL_TIME} - {LAST_STOP_TAKEOFF_TIME} in {LAST_STOP_CITY}
                </p>
                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>
                    {LAST_STOP_AIRPORT}</p>
                <div style={{backgroundColor: "rgba(255,0,0,0.1)", margin: 10, width: "fit-content", border: "1px solid rgba(255,0,0,0.1)", borderRadius: 6, padding: "10px 20px"}}>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        <i className="fa fa-exclamation-triangle" style={{color: "rgba(255,0,0,0.7)", marginRight: 5}}></i>
                        Flight Stop
                    </p>
                    <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 5}}>{LAST_STOP_WAIT_TIME_HOURS}h {LAST_STOP_WAIT_TIME_MINUTES}m wait in {LAST_STOP_CITY}</p>
                </div>
                <div style={{marginLeft: 20}}>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                        {LAST_ROUND_HOURS}h {LAST_ROUND_MINUTES}m flight</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        Operated by {LAST_ROUND_CARRIER_OPERATOR}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {LAST_ROUND_CARRIER_AIRCRAFT}</p>
                    <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 4}}>
                        {LAST_ROUND_CABIN_TYPE}</p>
                </div>
                <p style={{fontSize: 15, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "green"}}>
                    {DESTINATION_ARRIVAL_TIME} - {DESTINATION_CITY}
                </p>
                <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginLeft: 20, marginTop: 2}}>
                    {DESTINATION_AIRPORT}</p>
            </div>
        );
    }

    return (
        <div id="see_ticket_details_itinerary_details" style={{display: "none", marginTop: 10, marginBottom: 20}}>
            {seg_markup.map(seg=>seg)}            
        </div>
    )
}

export default SelectedTicketItinSegments;