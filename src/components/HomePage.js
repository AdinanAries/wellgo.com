import { useState } from "react";

import Main from "./Main";
import SearchPage from "./SearchPageMain";

function HomePage(props){
    

    /*if(showSearchPage)
        document.getElementById("landing_page_search_input_text_display").innerHTML="";*/

    return(
        <div id="home_page">
            { !props.showSearchPage ? <Main show_search_page={props.show_search_page}/> : <SearchPage /> }
        </div>
    );
}

export default HomePage;