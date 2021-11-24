import React, { useRef } from "react";

import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

function SearchPageMain(props){

    const ref = useRef(null);

    return (
        <main>
            <div className="wrapper">
                <div>
                    <SearchResultSearchForm />
                    <ResultsListContainer />
                </div>
            </div>
        </main>
    );
}

export default SearchPageMain;