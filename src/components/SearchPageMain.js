import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";

function SearchPageMain(){
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