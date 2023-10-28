import { useState } from "react";

import Main from "./Components/Main";
import SearchPage from "../SearchPage/Components/SearchPageMain";

function HomePage(props){
    
   const { siteCurrency, toggle_show_hide_currency_page } = props

    /*if(showSearchPage)
        document.getElementById("landing_page_search_input_text_display").innerHTML="";*/

    return(
        <div id="home_page">
            { !props.showSearchPage ? 
                <Main 
                toggle_show_hide_currency_page={toggle_show_hide_currency_page}
                    siteCurrency={siteCurrency}
                    showSearchForm={props.showSearchForm} 
                    show_search_page={props.show_search_page} /> : 
                <SearchPage begin_checkout={props.begin_checkout}/> }
        </div>
    );
}

export default HomePage;