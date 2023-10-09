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
                body: localStorage.getItem("search_obj")
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
            document.getElementById("sp_trip_round_round_trip_chk").checked = true;
            document.getElementById("sp_select_trip_round_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-repeat"></i>
                Round-trip
            `;
            flight_search_data.type = "round-trip";
            flight_search_data.itinerary.cabin = "ECONOMY";
            flight_search_data.itinerary.travelers.adults = 1;
            flight_search_data.itinerary.travelers.children = 0;
            flight_search_data.itinerary.travelers.infants = 0;
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
        })();
    },[])

    //console.log(JSON.parse(localStorage.getItem("search_obj")));

    return (
        <main>
            <div className="wrapper">
                <div style={{paddingTop: 90}}>
                    <SearchResultSearchForm submitFromSearchPage={submitFromSearchPage} />
                    <ResultsListContainer 
                        selectFlightOffer={selectFlightOffer} 
                        flights={flights} loading={loading}
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