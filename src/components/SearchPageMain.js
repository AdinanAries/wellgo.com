import React, { useRef, useState, useEffect } from "react";

import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

function SearchPageMain(props){

    const ref = useRef(null);
    let [ flights, setFlights ] = useState([1,2,3,4,5,6,7]);
    let [ loading, setLoading ] = useState(false);

    const submitFromSearchPage = () => {
        setFlights([]);
            setLoading(true);
        setTimeout(()=>{
            setFlights([1,2,3,4,5,6,7]);
            setLoading(false);
        }, 4000);
    }
    //setFlights([1,2,3,4,5,6,7]);
    //setLoading(false);

    console.log(JSON.parse(localStorage.getItem("search_obj")));

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