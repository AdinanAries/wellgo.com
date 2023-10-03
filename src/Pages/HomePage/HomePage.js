import { useState } from "react";

import Main from "./Components/Main";
import SearchPage from "../SearchPage/Components/SearchPageMain";

function HomePage(props){
    

    /*if(showSearchPage)
        document.getElementById("landing_page_search_input_text_display").innerHTML="";*/

    return(
        <div id="home_page">
            { !props.showSearchPage ? 
                <Main show_search_page={props.show_search_page}/> : 
                <SearchPage begin_checkout={props.begin_checkout}/> }
        </div>
    );
}

export default HomePage;