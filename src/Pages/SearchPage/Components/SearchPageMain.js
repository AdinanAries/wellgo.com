import React, { useRef, useState, useEffect } from "react";

import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

import CONSTANTS from "../../../Constants/Constants";
import ENVIRONMENT from "../../../Constants/Environment";
import SelectedTicketPane from "./SelectedTicketPane";

function SearchPageMain(props){

    const ref = useRef(null);
    let [ flights, setFlights ] = useState([]);
    let [ loading, setLoading ] = useState(true);
    let [ selectedFlightId, setSelectedFlightId] = useState("");

    let api_url = (ENVIRONMENT.runtime.env===CONSTANTS.prod) ?
        ENVIRONMENT.wellgo_api_svr : ENVIRONMENT.wellgo_dev_api_svr;

    const submitFromSearchPage = async () => {
        setFlights([]);
        setLoading(true);
        let res = await fetchFlightOffers();
        console.log(res);
        if(res.data)
            (res.data.length>0) ? setFlights(res.data) : setFlights([]);
        else
            setFlights([])
        setLoading(false);
    }

    const fetchFlightOffers = async (path="\\api\\flights") => {
        try{
            return await fetch(api_url+path, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...JSON.parse(localStorage.getItem(CONSTANTS.local_storage.flight_search_object)),
                    currency: localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_curr),
                })
            })
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err);
                return {data: []};
            })
        } catch (e){
            console.log(e);
            return {data: []};
        }
    }

    const selectFlightOffer = (id) => {
        setSelectedFlightId(id);
    }

    const unselectFlightOffer = () => {
        setSelectedFlightId("");
    }

    useEffect(() => {
        (async function go() {
            let res = await fetchFlightOffers();
            console.log(res);
            if(res.data)
                (res.data.length>0) ? setFlights(res.data) : setFlights([]);
            else
                setFlights([]);
            setLoading(false);
            // Rest cabin, round, travelers
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            document.getElementById("sp_select_cabin_economy_chk").checked = true;
            document.getElementById("sp_select_cabin_type_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-level-up"></i>
                Economy
            `;
            document.getElementById("sp_trip_round_one_way_chk").checked = true;
            document.getElementById("sp_select_trip_round_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-repeat"></i>
                One-way
            `;
            flight_search_data.type = "one-way";
            flight_search_data.itinerary.cabin = "ECONOMY";
            flight_search_data.itinerary.travelers.adults = 1;
            flight_search_data.itinerary.travelers.children = 0;
            flight_search_data.itinerary.travelers.infants = 0;
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
        })();
    },[])

    const SEARCH_OBJ=JSON.parse(localStorage.getItem(CONSTANTS.local_storage.flight_search_object));
    if(flights.length>0){
        SEARCH_OBJ.origin_city = flights[0].slices[0].segments[0].origin.city_name;
        SEARCH_OBJ.destination_city = flights[0].slices[0].segments[0].destination.city_name;
    }
    useEffect(()=>{
        global.autoSelectAirportForInputField(SEARCH_OBJ.itinerary.departure.airport, "sp_search_forms_from_where_input_fld");
        global.autoSelectAirportForInputField(SEARCH_OBJ.itinerary.arrival.airport, "sp_search_forms_to_where_input_fld");
    }, []);

    return (
        <main>
            <div className="wrapper">
                <div style={{paddingTop: 90}}>
                    <SearchResultSearchForm submitFromSearchPage={submitFromSearchPage} />
                    <ResultsListContainer 
                        selectFlightOffer={selectFlightOffer} 
                        flights={flights} loading={loading}
                        SEARCH_OBJ={SEARCH_OBJ}
                    />
                    {
                        selectedFlightId ? 
                        <SelectedTicketPane 
                            selectedFlightId={selectedFlightId} 
                            unselectFlightOffer={unselectFlightOffer} 
                            begin_checkout={props.begin_checkout}
                        /> 
                        : ""
                    }
                </div>
            </div>
        </main>
    );
}

export default SearchPageMain;