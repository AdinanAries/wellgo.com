import React, { useRef, useState, useEffect } from "react";

import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

function SearchPageMain(props){

    const ref = useRef(null);
    let [ flights, setFlights ] = useState([1,2,3,4,5,6,7]);
    let [ loading, setLoading ] = useState(false);

    
    //setFlights([1,2,3,4,5,6,7]);
    //setLoading(false);

    console.log(JSON.parse(localStorage.getItem("search_obj")));

    return (
        <main>
            <div className="wrapper">
                <div>
                    <SearchResultSearchForm />
                    <ResultsListContainer flights={flights} loading={loading}/>
                </div>
            </div>
        </main>
    );
}

export default SearchPageMain;