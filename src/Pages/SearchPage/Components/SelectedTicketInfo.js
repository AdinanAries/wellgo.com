import { markup } from "../../../helpers/Prices";
import { convert24HTimeToAMPM, get_short_date_MMMDD, get_currency_symbol } from "../../../helpers/general";

import SelectedTicketItinSegments from "./SelectedTicketItinSegments";

const SelectedTicketInfo = (props) => {

    const { data } = props.flight;
    const { total_amount, total_currency, 
            slices, owner, conditions, 
            available_services, passengers 
    } = data;

    const SEGMENT_LENGTH = slices[0].segments.length;
    const TRIP_START = convert24HTimeToAMPM(slices[0].segments[0].departing_at.split("T")[1]);
    const TRIP_ENDS = convert24HTimeToAMPM(slices[0].segments[(SEGMENT_LENGTH - 1)].arriving_at.split("T")[1]);
    const STOPS_COUNT = (SEGMENT_LENGTH-1);
    const ORIGIN_CITY = slices[0].segments[0].origin.city_name;
    const DESTINATION_CITY = slices[0].segments[(SEGMENT_LENGTH - 1)].destination.city_name;
    const CABIN_CLASS = slices[0].segments[0].passengers[0].cabin.marketing_name;
    const DEPARTURE_DATE = get_short_date_MMMDD(slices[0].segments[0].departing_at.replace("T", " "));
    const ARRIVAL_DATE = get_short_date_MMMDD(slices[0].segments[(SEGMENT_LENGTH-1)].arriving_at.replace("T", " "));
    const CURRENCY_SYMBOL = get_currency_symbol(total_currency);

    let is_one_way=true;
    if(slices.length>1){
        const LAST_SLICE_SEG_LENGTH=slices[(slices.length-1)].segments.length;
        if(ORIGIN_CITY===slices[(slices.length-1)].segments[LAST_SLICE_SEG_LENGTH-1].destination.city_name){
            is_one_way=false;
        }
    }

    let BAGGAGES=[];
    let carry_on_bags_count=0;
    let free_checked_bags_count=0;
    //for(let sl=0;sl<slices.length;sl++){
        for(let sg=0;sg<slices[0].segments.length;sg++){
            for(let ps=0; ps<slices[0].segments[sg].passengers.length;ps++){
                for(let bb=0; bb<slices[0].segments[sg].passengers[ps].baggages.length; bb++){
                    if(slices[0].segments[sg].passengers[ps].baggages[bb].type==="carry_on"){
                        carry_on_bags_count+=slices[0].segments[sg].passengers[ps].baggages[bb].quantity;
                    }
                    if(slices[0].segments[sg].passengers[ps].baggages[bb].type==="checked"){
                        free_checked_bags_count+=slices[0].segments[sg].passengers[ps].baggages[bb].quantity;
                    }
                }
            }
        }  
    //}
    if(carry_on_bags_count>0){
        BAGGAGES.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 10}}>
                <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                {carry_on_bags_count} Carry-on {(carry_on_bags_count>1)?"bags":"bag"} included
            </p>
        )
    }
    if(free_checked_bags_count>0){
        BAGGAGES.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 10}}>
                <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                {free_checked_bags_count} free checked {(free_checked_bags_count>1)?"bags":"bag"} included
            </p>
        )
    }
    if(free_checked_bags_count===0 && carry_on_bags_count===0){
        BAGGAGES.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 10}}>
                <i className="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                no bags included
            </p>
        )
    }

    let CANCELLATION_INFO=<p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
            <i class="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
            Cancellation not allowed
        </p>;

    if(conditions.refund_before_departure?.allowed){
        let curr=get_currency_symbol(conditions.refund_before_departure.penalty_currency);
        CANCELLATION_INFO=<>
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                <i class="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                Cancellation allowed with <span dangerouslySetInnerHTML={{__html: curr}}></span>
                {conditions.refund_before_departure.penalty_amount} penalty amount
            </p>
        </>
    }

    let CHANGES_INFO=<p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
            <i class="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
            Changes not allowed
        </p>;

    if(conditions.change_before_departure?.allowed){
        let curr=get_currency_symbol(conditions.change_before_departure.penalty_currency);
        CHANGES_INFO=<>
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                <i class="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                Changes allowed with <span dangerouslySetInnerHTML={{__html: curr}}></span>
                {conditions.change_before_departure.penalty_amount} penalty amount
            </p>
        </>
    }

    let SEATS_SELECTION=[];
    let CHECKED_BAGS=[];
    let additional_checked_bags_count=[];
    let seat_selection_count=[];
    if(available_services.length > 0){
        for(let ss=0;ss<available_services.length;ss++){
            if(available_services[ss].type==="baggage"){
                additional_checked_bags_count.push({
                    total_currency: available_services[ss].total_currency,
                    total_amount: available_services[ss].total_amount
                });
            }
            if(available_services[ss].type==="seat"){
                seat_selection_count.push({
                    item: ""
                });
            }
        }
    }

    if(additional_checked_bags_count.length>0){
        CHECKED_BAGS.push(
            <p style={{marginTop: 10, display: "flex", flexDirection: "row"}}>
                <span style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                    <i className="fa fa-money" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                    {additional_checked_bags_count.length}
                    {" additional purchasable checked "}
                    {additional_checked_bags_count.length>1 ? "bags" : "bag"}:
                </span>
                {
                    additional_checked_bags_count.map((each, i)=>{
                        let curr=get_currency_symbol(each.total_currency);
                        return (
                            <>
                                {i>0 && ","}
                                <span style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginLeft: i<1 ? 15 : 4}}>
                                    <span dangerouslySetInnerHTML={{__html: curr}}></span>
                                    {each.total_amount}
                                </span>
                            </>
                        )
                    })
                }
            </p>
        )
    }

    if(seat_selection_count.length>0){
        SEATS_SELECTION.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                <i className="fa fa-check" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                Seat choice included 
                <span style={{color: "rgba(0,0,0,0.5)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                    {` (${seat_selection_count.length} `}{
                        seat_selection_count.length>1 ? "seats)" : "seat)"
                    }
                </span>
            </p>
        )
    }

    if(CHECKED_BAGS.length===0){
        CHECKED_BAGS.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                <i class="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                can't purchase additional checked bags
            </p>
        );
    }
    if(SEATS_SELECTION.length===0){
        SEATS_SELECTION.push(
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 13, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                <i className="fa fa-times" style={{marginRight: 10, fontSize: 16, color: "rgba(0,0,0,0.5)"}}></i>
                Seat choice not included
            </p>
        );
    }
     

    return (
        <div id="selected_ticket_main_details_pane">
                <div style={{padding: 10, borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div>
                            <p style={{fontSize: 15, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder", marginBottom: 10}}>
                                {TRIP_START} - {TRIP_ENDS} ({(STOPS_COUNT > 0 ? (STOPS_COUNT + (STOPS_COUNT > 1 ? " stops" : " stop")) : "no stops")} )
                            </p>
                            <p style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)"}}>
                                {ORIGIN_CITY}
                                <span style={{margin: "0 10px", color: "rgba(0,0,0,0.4)"}}>
                                    <i className={is_one_way ? "fa-solid fa-arrow-right" : "fa-solid fa-repeat"}></i></span>
                                {DESTINATION_CITY}
                            </p>
                            <p style={{fontSize: 13, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", marginTop: 2}}>
                                {DEPARTURE_DATE} - {ARRIVAL_DATE}</p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                                <img src={owner.logo_symbol_url} alt={"todo"} style={{width: 27, height: "auto", marginRight: 10, objectFit: "cover"}} />
                                {owner.name}
                                <span onClick={()=>global.toggle_see_ticket_details_itinerary_details("see_ticket_details_itinerary_details")} 
                                    style={{cursor: "pointer", marginLeft: 15, fontSize: 14, color: "green", fontFamily: "'Prompt', Sans-serif"}}>
                                    See details <i style={{marginLeft: 5}} className="fa fa-angle-down"></i>
                                </span>
                            </p>
                            <SelectedTicketItinSegments element_id="see_ticket_details_itinerary_details" segments={slices[0].segments}/>
                        </div>
                        <p className="pop-up-close-btn" onClick={()=>{global.hide_selected_ticket_details_pane(); props.unselectFlightOffer();}} style={{cursor: "pointer", color: "rgba(255,0,0,0.6)", fontSize: 33, marginRight: 5}}>
                            &times;
                        </p>
                    </div>
                </div>
                <div style={{padding: 10}}>
                    <p style={{fontSize: 22, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        <span style={{fontSize: 22, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}} 
                            dangerouslySetInnerHTML={{__html: CURRENCY_SYMBOL}}></span>
                        {(markup(total_amount).new_price).toFixed(2)}
                    </p>
                    <p style={{color: "crimson", fontFamily: "'Prompt', Sans-serif", fontSize: 12}}>
                        {is_one_way ? "One-way":"Rountrip"} for {passengers.length>1?(`${passengers.length} travelers`):"1 traveler"}
                    </p>
                    <p style={{fontSize: 14, marginTop: 20, fontFamily: "'Prompt', sans-serif", color: "green"}}>
                        Main Cabin
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginTop: 5}}>
                        {CABIN_CLASS}
                    </p>
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', Sans-serif", color: "green"}}>
                        Seat
                    </p>
                    {SEATS_SELECTION.map(each=>each)}
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', Sans-serif", color: "green"}}>
                        Bags
                    </p>
                    {BAGGAGES.map(each=>each)}
                    {CHECKED_BAGS.map(each=>each)}
                    <p style={{fontSize: 14, marginTop: 25, fontFamily: "'Prompt', Sans-serif", color: "green"}}>
                        Flexibility
                    </p>
                    {CANCELLATION_INFO}
                    {CHANGES_INFO}
                </div>
                <div className="selected_ticket_book_btn_container">
                    <div onClick={()=>{
                            props.begin_checkout(data);
                            setTimeout(()=>{
                                global.__unselectFlightOffer();
                                global.hide_selected_ticket_details_pane();
                            },300);
                        }/*()=>global.show_start_checkout_page(`${global.stringify_obj_for_template_strings(global.checkout_obj)}`)*/} className="selected_ticket_book_btn">
                        <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)", fontSize: 19}} className="fa fa-check-square-o" aria-hidden="true"></i>
                        Book
                    </div>
                </div>
            </div>
    )
}

export default SelectedTicketInfo;