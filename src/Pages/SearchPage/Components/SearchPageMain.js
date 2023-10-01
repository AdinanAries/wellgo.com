import React, { useRef, useState, useEffect } from "react";

import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

import CONSTANTS from "../../../Constants/Constants";
import ENVIRONMENT from "../../../Constants/Environment";
import { error } from "jquery";

function SearchPageMain(props){

    const ref = useRef(null);
    let [ flights, setFlights ] = useState([]);
    let [ loading, setLoading ] = useState(true);

    const submitFromSearchPage = async () => {
        setFlights([]);
        setLoading(true);
        let res = await fetchFlightOffers();
        console.log(res);
        (res.data.length>0) ? setFlights(res.data) : setFlights([]);
        setLoading(false);
    }

    const fetchFlightOffers = async (path="\\api\\flights") => {
        try{
            return await fetch(ENVIRONMENT.wellgo_dev_api_svr+path, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //TODO: body to come from local storage
                body: JSON.stringify({
                    todo: "todo",
                    todoo: "todo"
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

    useEffect(() => {
        (async function go() {
            let res = await fetchFlightOffers();
            console.log(res);
            (res.data.length>0) ? setFlights(res.data) : setFlights([]);
            setLoading(false);
        })();
    },[])

    //console.log(JSON.parse(localStorage.getItem("search_obj")));

    return (
        <main>
            <div className="wrapper">
                <div style={{paddingTop: 90}}>
                    <SearchResultSearchForm submitFromSearchPage={submitFromSearchPage} />
                    <ResultsListContainer flights={flights} loading={loading}/>
                </div>
            </div>
        </main>
    );
}

export default SearchPageMain;