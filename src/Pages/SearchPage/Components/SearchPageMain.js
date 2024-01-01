import React, { useState, useEffect } from "react";
import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";
import CONSTANTS from "../../../Constants/Constants";
import SelectedTicketPane from "./SelectedTicketPane";
import { fetchFlightOffers } from "../../../services/flightsServices";

const SearchPageMain = (props) => {

    let [ flights, setFlights ] = useState([]);
    let [ loading, setLoading ] = useState(true);
    let [ selectedFlightId, setSelectedFlightId] = useState("");

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
        })();
    }, [])

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
        <main style={{background: "white"}}>
            <div className="wrapper search-page-wrapper">
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