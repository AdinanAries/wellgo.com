import SelectedTicketItinSegments from "../../SearchPage/Components/SelectedTicketItinSegments";
import { get_short_date_DAYMMMDD, convert24HTimeToAMPM } from "../../../helpers/general";

const OrderCompletedPage = (props) => {

    const { 
        pickAnotherFlightOnclick,
        goHome,
        completedOrderDetails 
    } = props;

    const SEGMENTS = [];
    console.log("Order:", completedOrderDetails);
    completedOrderDetails?.slices?.forEach(slice=>{
        slice.segments.forEach(segment=> {

            let seats="";
            let total_checked_baggages=0;
            let total_carry_on_baggages=0;
            segment.passengers.forEach(passenger=>{
                seats+= passenger.seat ? `${passenger.seat}, ` : "";
                passenger.baggages.forEach(baggage=>{
                    if(baggage.type==="checked"){
                        total_checked_baggages+=parseInt(baggage.quantity);
                    }
                    if(baggage.type==="carry_on"){
                        total_carry_on_baggages+=parseInt(baggage.quantity);
                    }
                });

                completedOrderDetails.passengers.forEach(flight_passenger=>{
                    if(passenger.passenger_id===flight_passenger.id){
                        flight_passenger.extras=passenger;
                    }
                });
            });

            SEGMENTS.push(
                <div style={{display: "flex", paddingBottom: 10, marginRight: 25}}>
                    <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                        <i style={{color: "rgba(0,0,0,0.5)"}}
                                className="fa-solid fa-plane-departure"></i>
                    </div>
                    <div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            {segment.origin.city_name} - {segment.origin.name}
                            <span style={{margin: "0 10px", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.6)"}}>
                                to
                            </span>
                            {segment.destination.city_name} - {segment.destination.name}
                        </p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            {get_short_date_DAYMMMDD(segment.departure_datetime) + " ("}
                            {convert24HTimeToAMPM(segment.departure_datetime.split("T")[1]) + ")"}
                            <span style={{margin: "0 10px", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.6)"}}>
                                to
                            </span>
                            {get_short_date_DAYMMMDD(segment.arrival_datetime) + " ("}
                            {convert24HTimeToAMPM(segment.arrival_datetime.split("T")[1]) + ")"}
                        </p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            This flight is operated by {segment.operating_carrier.name}. Please click <a href={segment.operating_carrier.conditions_of_carriage_url}>
                            here</a> to learn more about the airline conditions
                        </p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            Take off: {convert24HTimeToAMPM(segment.departure_datetime.split("T")[1])}, Aircraft: {segment.aircraft.name}, Checked bags: {total_checked_baggages}, Carry-on bags: {total_carry_on_baggages}
                        </p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            Amenities: wifi, power | Seats: {seats}
                        </p>
                    </div>
                </div>
            )
        })
    });

    // Generating passengers markup
    const PASSENGERS=[];
    completedOrderDetails?.passengers?.forEach(passenger=>{

        let seat=passenger.extras.seat || "unspecified";
        let total_checked_baggages=0;
        let total_carry_on_baggages=0;
        let cabin_class = passenger.extras.cabin_class;
        let email=passenger.email;
        let phone=passenger.phone_number;
        let name = `${passenger.given_name} ${passenger.family_name}`
        passenger.extras.baggages.forEach(baggage=>{
            if(baggage.type==="checked"){
                total_checked_baggages+=parseInt(baggage.quantity);
            }
            if(baggage.type==="carry_on"){
                total_carry_on_baggages+=parseInt(baggage.quantity);
            }
        });

        PASSENGERS.push(
            <div style={{display: "flex", paddingBottom: 10, marginRight: 25}}>
                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                    <i style={{color: "rgba(0,0,0,0.5)"}}
                            className="fa-solid fa-user"></i>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        {name}
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                        {email}, {phone}
                    </p>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                        Seat: {seat}, Cabin: {cabin_class}, Checked bags: {total_checked_baggages}, Carry-on bags: {total_carry_on_baggages}
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div style={{position: "relative"}}>
            <div style={{padding: "20px 0"}}>
                <p className="pop-up-close-btn" onClick={pickAnotherFlightOnclick} 
                    style={{cursor: "pointer", zIndex: 1, color: "rgb(255,0,0)", fontSize: 33, position: "absolute", right: 10, top: 10}}>
                    &times;
                </p>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                    <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                    Reference Number:
                    <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                        {completedOrderDetails.booking_reference}
                    </span>
                </p>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                    <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                    Your booking has been confirmed!
                    <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 14}}>
                        What's next?
                    </span>
                </p>
                <div style={{padding: 10}}>
                    <div style={{display: "flex"}}>
                    <div style={{textAlign: "center", cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plus"></i>
                            add ancillaries
                        </div>
                        <div onClick={pickAnotherFlightOnclick} style={{textAlign: "center", cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plane-departure"></i>
                            pick another flight
                        </div>
                        <div onClick={goHome} style={{textAlign: "center", cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-home"></i>
                            go home
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: "5px 0"}}>
                        See Details Below: <span onClick={window.print} style={{cursor: "pointer", color: "darkslateblue", fontFamily: "'Prompt', Sans-serif", textDecoration: "underline"}}>
                            Click to Print</span></p>
                        <div className="printable" style={{border: "1px dashed rgba(0,0,0,0.1)", padding: 10}}>
                            <div style={{marginBottom: 10}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                                <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                                Reference Number:
                                <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                                    {completedOrderDetails.booking_reference}
                                </span>
                            </p>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                New York 
                                <i style={{margin: "0 10px"}} className="fa-solid fa-arrow-right"></i>
                                Accra
                            </p>
                            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, fontFamily: "'Prompt', Sans-serif", marginTop: 10}}>
                                <img src={completedOrderDetails?.owner?.logo_symbol_url} alt={"todo"} style={{width: 27, height: "auto", marginRight: 10, objectFit: "cover"}} />
                                {completedOrderDetails?.owner?.name}
                            </p>
                            {
                                completedOrderDetails?.slices?.map((each, index) => {
                                    return <div>
                                        <span onClick={()=>global.toggle_see_ticket_details_itinerary_details((index+"_completed_order_details_itinerary_details"))} 
                                            style={{cursor: "pointer", marginLeft: 15, fontSize: 14, color: "green", fontFamily: "'Prompt', Sans-serif"}}>
                                            <i style={{marginRight: 10}} className="fa-solid fa-route"></i>
                                            {each.origin.city_name} to {each.destination.city_name}<i style={{marginLeft: 5, color: "rgba(0,0,0,0.5)"}} className="fa fa-angle-down"></i>
                                        </span>
                                        <SelectedTicketItinSegments element_id={(index+"_completed_order_details_itinerary_details")} segments={each.segments}/>
                                    </div>
                                })
                            }
                        </div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Segments/Stops</h1>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {SEGMENTS.map(each=>each)}
                        </div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Passengers</h1>
                        <div>
                            <div style={{display: "flex", flexWrap: "wrap"}}>
                                {PASSENGERS.map(each=>each)}
                            </div>
                        </div>

                        <div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Airline Details</h1>
                        <div>
                            <div>
                                <p>Sold by: </p>
                                <p>Operatored by: </p>
                            </div>
                        </div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Important Notices</h1>
                            <div style={{display: "flex", padding: 10, marginBottom: 10, backgroundColor: "rgba(0,255,0,0.1)", border: "1px solid rgba(0,255,0,0.1)", borderRadius: 4}}>
                                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                    <i style={{color: "orange"}}
                                            className="fa-solid fa-exclamation-triangle"></i>
                                </div>
                                <div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        Some Random Text for showing disclaimer and notice messages or information to the user. This is important to communicate important matters to the them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

/*
return {
        "type": "instant",
        "total_currency": "USD",
        "total_amount": "404.59",
        "tax_currency": "USD",
        "tax_amount": "61.72",
        "synced_at": "2023-11-23T14:37:38Z",
        "slices": [
            {
                "segments": [
                    {
                        "passengers": [
                            {
                                "seat": null,
                                "passenger_id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                                "cabin_class_marketing_name": "Economy",
                                "cabin_class": "economy",
                                "baggages": [
                                    {
                                        "type": "checked",
                                        "quantity": 1
                                    },
                                    {
                                        "type": "carry_on",
                                        "quantity": 1
                                    }
                                ]
                            }
                        ],
                        "origin_terminal": "2",
                        "origin": {
                            "type": "airport",
                            "time_zone": "Africa/Accra",
                            "name": "Kotoka International Airport",
                            "longitude": -0.167454,
                            "latitude": 5.605642,
                            "id": "arp_acc_gh",
                            "icao_code": "DGAA",
                            "iata_country_code": "GH",
                            "iata_code": "ACC",
                            "iata_city_code": "ACC",
                            "city_name": "Accra",
                            "city": null
                        },
                        "operating_carrier_flight_number": "10",
                        "operating_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "marketing_carrier_flight_number": "10",
                        "marketing_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "id": "seg_0000Ac6K7P3dohp5WA7RQW",
                        "duration": "PT11H32M",
                        "distance": "8221.392679809798",
                        "destination_terminal": "1",
                        "destination": {
                            "type": "airport",
                            "time_zone": "America/New_York",
                            "name": "John F. Kennedy International Airport",
                            "longitude": -73.778519,
                            "latitude": 40.640556,
                            "id": "arp_jfk_us",
                            "icao_code": "KJFK",
                            "iata_country_code": "US",
                            "iata_code": "JFK",
                            "iata_city_code": "NYC",
                            "city_name": "New York",
                            "city": {
                                "type": "city",
                                "time_zone": null,
                                "name": "New York",
                                "longitude": null,
                                "latitude": null,
                                "id": "cit_nyc_us",
                                "icao_code": null,
                                "iata_country_code": "US",
                                "iata_code": "NYC",
                                "iata_city_code": "NYC",
                                "city_name": null
                            }
                        },
                        "departure_terminal": "2",
                        "departure_datetime": "2023-11-29T21:40:00",
                        "departing_at": "2023-11-29T21:40:00",
                        "arriving_at": "2023-11-30T04:12:00",
                        "arrival_terminal": "1",
                        "arrival_datetime": "2023-11-30T04:12:00",
                        "aircraft": {
                            "name": "Airbus A319",
                            "id": "arc_00009VMF8AgpV5sdO0xXAn",
                            "iata_code": "319"
                        }
                    }
                ],
                "origin_type": "airport",
                "origin": {
                    "type": "airport",
                    "time_zone": "Africa/Accra",
                    "name": "Kotoka International Airport",
                    "longitude": -0.167454,
                    "latitude": 5.605642,
                    "id": "arp_acc_gh",
                    "icao_code": "DGAA",
                    "iata_country_code": "GH",
                    "iata_code": "ACC",
                    "iata_city_code": "ACC",
                    "city_name": "Accra",
                    "city": null
                },
                "id": "sli_0000Ac6KEffjaAdhv9NCr2",
                "fare_brand_name": "Basic",
                "duration": "PT11H32M",
                "destination_type": "airport",
                "destination": {
                    "type": "airport",
                    "time_zone": "America/New_York",
                    "name": "John F. Kennedy International Airport",
                    "longitude": -73.778519,
                    "latitude": 40.640556,
                    "id": "arp_jfk_us",
                    "icao_code": "KJFK",
                    "iata_country_code": "US",
                    "iata_code": "JFK",
                    "iata_city_code": "NYC",
                    "city_name": "New York",
                    "city": {
                        "type": "city",
                        "time_zone": null,
                        "name": "New York",
                        "longitude": null,
                        "latitude": null,
                        "id": "cit_nyc_us",
                        "icao_code": null,
                        "iata_country_code": "US",
                        "iata_code": "NYC",
                        "iata_city_code": "NYC",
                        "city_name": null
                    }
                },
                "conditions": {
                    "change_before_departure": {
                        "penalty_currency": null,
                        "penalty_amount": null,
                        "allowed": false
                    }
                },
                "changeable": true
            }
        ],
        "services": [],
        "payment_status": {
            "price_guarantee_expires_at": null,
            "payment_required_by": null,
            "paid_at": "2023-11-23T14:37:38Z",
            "awaiting_payment": false
        },
        "passengers": [
            {
                "type": "adult",
                "title": "mr",
                "phone_number": "+17327999546",
                "loyalty_programme_accounts": [],
                "infant_passenger_id": null,
                "id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                "given_name": "Mohammed",
                "gender": "m",
                "family_name": "Adinan",
                "email": "m.adinan@yahoo.com",
                "born_on": "1992-03-23"
            }
        ],
        "owner": {
            "name": "American Airlines",
            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
            "id": "arl_00009VME7DAGiJjwomhv32",
            "iata_code": "AA",
            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
        },
        "metadata": {},
        "live_mode": false,
        "id": "ord_0000Ac6KEffNbUM7u3CvIm",
        "documents": [
            {
                "unique_identifier": "1",
                "type": "electronic_ticket",
                "passenger_ids": [
                    "pas_0000Ac6K7OtiPbsp1NTVxK"
                ]
            }
        ],
        "created_at": "2023-11-23T14:37:38.485807Z",
        "content": "managed",
        "conditions": {
            "refund_before_departure": {
                "penalty_currency": "GBP",
                "penalty_amount": "50.00",
                "allowed": true
            },
            "change_before_departure": {
                "penalty_currency": null,
                "penalty_amount": null,
                "allowed": false
            }
        },
        "changes": [],
        "cancelled_at": null,
        "cancellation": null,
        "booking_reference": "VXYP4X",
        "base_currency": "USD",
        "base_amount": "342.87",
        "available_actions": [
            "cancel",
            "change",
            "update"
        ],
        "airline_initiated_changes": []
    }
*/

export default OrderCompletedPage;