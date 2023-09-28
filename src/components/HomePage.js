import { useState } from "react";

import Main from "./Main";
import SearchPage from "./SearchPageMain";

function HomePage(){
    const [ showSearchPage, setShowSearchPage ] = useState(false);

    const show_search_page = () => {
        setShowSearchPage(true);
    }

    /*if(showSearchPage)
        document.getElementById("landing_page_search_input_text_display").innerHTML="";*/

    return(
        <div id="home_page">
            { !showSearchPage ? <Main show_search_page={show_search_page}/> : <SearchPage /> }
        </div>
    );
}

export default HomePage;