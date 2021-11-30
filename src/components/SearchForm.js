import $, { nodeName } from "jquery";

import { show_search_page, show_home_page } from "../helpers/PageRoutingFuncs";

function SearchForm(){
    return(
        <div className="main-search-form">
            <div className="main_search_from_overall_container">
                <p style={{margin: 15, fontFamily: "'Prompt', Sans-serif", fontWeight: 1000, color: "rgba(0,0,0,0.7)"}}>
                    Search Flights
                </p>
                <div className="two-search-inputs-container">
                    <div className="each_flex-side first">
                        <div className="forms_class_guests_cabin_settings_container">
                            <div id="forms_main_class_guests_cabin_settings_pane" className="forms_class_guests_cabin_settings_pane"  style={{borderRadius: 30}}>
                                <p onClick={()=>document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                                <div id="add_travelers_settings_pane" style={{padding: 15, display: "none"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", fontSize: 17, marginTop: 10, marginBottom: 20}}>
                                        Add Travelers</p>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Adults</div>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                            <div onClick={()=>remove_traveler("adult")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                -</div>
                                            <div id="add_travelers_display_adults_number" style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                1</div>
                                            <div onClick={()=>add_traveler("adult")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                +</div>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10, borderRadius: 30}}>
                                        <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Children
                                            <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>Ages 2 to 17</p>
                                            </div>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                            <div onClick={()=>remove_traveler("child")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                -</div>
                                            <div id="add_travelers_display_children_number" style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                0</div>
                                            <div onClick={()=>add_traveler("child")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                +</div>
                                        </div>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10, borderRadius: 30}}>
                                        <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Infants
                                            <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>Younger than 2</p>
                                        </div>
                                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                            <div onClick={()=>remove_traveler("infant")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                -</div>
                                            <div id="add_travelers_display_infants_number" style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                0</div>
                                            <div onClick={()=>add_traveler("infant")} style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                +</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="select_cabin_settings_pane" style={{padding: 15, display: "none"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                        Select Cabin</p>
                                    <div onClick={()=>select_cabin_type("economy")} style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="select_cabin_economy_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Economy</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_cabin_type_chk" id="select_cabin_economy_chk" style={{width: 20, height: 20}} type="radio" defaultChecked/>
                                        </div>
                                    </div>
                                    <div onClick={()=>select_cabin_type("business")} style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="select_cabin_business_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Business</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_cabin_type_chk" id="select_cabin_business_chk" style={{width: 20, height: 20}} type="radio" />
                                        </div>
                                    </div>
                                    <div onClick={()=>select_cabin_type("first")} style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="select_cabin_first_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            First</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_cabin_type_chk" id="select_cabin_first_chk" style={{width: 20, height: 20}} type="radio" />
                                        </div>
                                    </div>
                                </div>
                                <div id="select_trip_round_settings_pane" style={{padding: 15, display: "none"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                        Select Trip Round</p>
                                    <div onClick={()=>select_trip_round("round-trip")} style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="trip_round_round_trip_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Round-trip</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_trip_round_chk" id="trip_round_round_trip_chk" style={{width: 20, height: 20}} type="radio" defaultChecked/>
                                        </div>
                                    </div>
                                    <div onClick={()=>select_trip_round("one-way")} style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="trip_round_one_way_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            One-way</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_trip_round_chk" id="trip_round_one_way_chk" style={{width: 20, height: 20}} type="radio" />
                                        </div>
                                    </div>
                                    <div onClick={()=>select_trip_round("multi-city")} style={{cursor: "not-allowed", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                        <label htmlFor="trip_round_multi_city_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            Multi-city</div></label>
                                        <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <input className="select_trip_round_chk" id="trip_round_multi_city_chk" style={{width: 20, height: 20}} type="radio" />
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "none"} style={{cursor: "pointer", padding: 10, margin: 10, marginTop: 0, backgroundColor: "rgb(23, 87, 148)", color: "white", textAlign: "center", borderRadius: 50, textAlign: "center"}}>
                                        Done
                                    </div>
                            </div>
                            <div id="select_cabin_type_main_input_display" onClick={show_cabin_settings_pane} className="searchFormChkInputLbl" style={{marginRight: 5, border: "none", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 50}}>
                                <i style={{fontSize: 15, marginRight: 10}} className="fa fa-level-up"></i>
                                Economy
                            </div>
                            <div id="add_travelers_main_input_display" onClick={show_travelers_settings_pane} className="searchFormChkInputLbl" style={{marginRight: 5, border: "none", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 50}}>
                                <i style={{fontSize: 15, marginRight: 10}} className="fa fa-user"></i>
                                1 Adult
                            </div>
                            <div id="select_trip_round_main_input_display" onClick={show_trip_round_settings_pane} className="searchFormChkInputLbl" style={{border: "none", backgroundColor: "rgba(0,0,0,0.07)", borderRadius: 50}}>
                                <i style={{fontSize: 15, marginRight: 10}} className="fa fa-repeat"></i>
                                Round-trip
                            </div>
                            {/*<i style={{marginLeft: 10, color: "rgb(43, 52, 61)"}} className="fa fa-angle-down"></i>*/}
                        </div>
                    </div>
                    <div className="each_flex-side">
                        <div style={{width: "100%"}}>
                            <div className="main-search_txt_input" style={{border: "none", /*backgroundColor: "rgba(0,0,0,0.07)",*/ borderRadius: 50}}>
                                <i style={{fontSize: 20, marginRight: 5}} className="fa fa-calendar-o"></i>
                                <input id="departure_return_dates_input" type="text" readOnly="true" placeholder="departure - return"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="two-search-inputs-container">
                        <div style={{position: "relative"}} className="search_forms_from_where_input_fld_container each_flex-side">
                            <div id="from_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete" style={{borderRadius: 30}}>
                                <p onClick={()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                                <input autoComplete="off" id="from_where_airports_auto_complete_input_fld" 
                                    onBlur={()=>{
                                        setTimeout(()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none",
                                            200);
                                    }} className="airports_auto_complete_input" type="text" placeholder="Where are you leaving from?"/>
                                <div className="airports_auto_complete_list_container">
                                    <ul id="flights_auto_complete_from_where_input_list">
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="main-search_txt_input" style={{border: "none", /*backgroundColor: "rgba(0,0,0,0.07)",*/ borderRadius: 50}}>
                                <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                                <input id="search_forms_from_where_input_fld" onClick={open_from_where_auto_complete_pane} type="text" autoComplete="off" placeholder="from where?" />
                            </div>
                        </div>
                        <div id="main_switch_inputs_btn" className="switchinputsBtn"  style={{border: "none", boxShadow: "0 0 5px rgba(0,0,0,0.3)",}}
                            onClick={switch_airports_input_values}>
                            <p style={{textAlign: "center"}}>
                                <i className="fa fa-exchange"></i>
                            </p>
                        </div>
                        <div className="search_forms_to_where_input_fld_container each_flex-side">
                            <div id="to_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete" style={{borderRadius: 30}}>
                                <p onClick={()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                                <input autoComplete="off" id="to_where_airports_auto_complete_input_fld" 
                                    onBlur={()=>{
                                        setTimeout(()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none",
                                            200);
                                    }} className="airports_auto_complete_input" type="text" placeholder="Where are you going to?"/>
                                <div className="airports_auto_complete_list_container">
                                    <ul id="flights_auto_complete_to_where_input_list">
                                        <li><div style={{padding: 10, display: "flex", flexDirection: "row", cursor: "pointer"}}>
                                            <div style={{height: 35, marginRight: 15, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                                <i className="fa fa-history" style={{color: "rgba(0,0,0,0.3)", fontSize: 22}}></i>
                                            </div>
                                            <div>
                                                <div>
                                                    <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                        New York (LGA - Laguardia)
                                                    </p>
                                                    <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                        United States
                                                    </p>
                                                </div>
                                            </div>
                                        </div></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main-search_txt_input" style={{border: "none", /*backgroundColor: "rgba(0,0,0,0.07)",*/ borderRadius: 50}}>
                                <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                                <input id="search_forms_to_where_input_fld" onClick={open_to_where_auto_complete_pane} type="text" autoComplete="off" placeholder="to where?" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                    <div onClick={()=>show_home_page(true)} className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", borderRadius: 50}}>
                        <i className="fa fa-times" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Close
                    </div>
                    <div onClick={show_search_page} id="home_search_form_submit_btn" className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", borderRadius: 50}}>
                        <i className="fa fa-search" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Search
                    </div>
                </div>
            </div>
            
        </div>
    );
}

let switch_btn_switched = false
function switch_input_rotate_func(){
    if(!switch_btn_switched){
        document.getElementById("main_switch_inputs_btn").style.transform = "rotate(360deg)";
        switch_btn_switched = true;
    }else{
        document.getElementById("main_switch_inputs_btn").style.transform = "rotate(0deg)";
        switch_btn_switched = false;
    }
    
}
function switch_airports_input_values(){
    let from_airport_value = document.getElementById("search_forms_from_where_input_fld").value;
    document.getElementById("search_forms_from_where_input_fld").value = document.getElementById("search_forms_to_where_input_fld").value;
    document.getElementById("search_forms_to_where_input_fld").value = from_airport_value;
    switch_input_rotate_func();

    let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
    let temp_iata = flight_search_data.itinerary.departure.airport;
    flight_search_data.itinerary.departure.airport = flight_search_data.itinerary.arrival.airport;
    flight_search_data.itinerary.arrival.airport = temp_iata;
    window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

}

function open_to_where_auto_complete_pane(){
    document.getElementById("to_where_airports_auto_complete_input").style.display = "block";
    document.getElementById("to_where_airports_auto_complete_input_fld").focus();
}
function open_from_where_auto_complete_pane(){
    document.getElementById("from_where_airports_auto_complete_input").style.display = "block"
    document.getElementById("from_where_airports_auto_complete_input_fld").focus();
}
function show_trip_round_settings_pane(){
    document.getElementById("select_trip_round_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_cabin_settings_pane").style.display = "none";
    document.getElementById("add_travelers_settings_pane").style.display = "none";
}
function show_cabin_settings_pane(){
    document.getElementById("select_cabin_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_trip_round_settings_pane").style.display = "none";
    document.getElementById("add_travelers_settings_pane").style.display = "none";
}
function show_travelers_settings_pane(){
    document.getElementById("add_travelers_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_trip_round_settings_pane").style.display = "none";
    document.getElementById("select_cabin_settings_pane").style.display = "none";
}

function select_cabin_type(type="economy"){

    let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
    
    Array.from(document.getElementsByClassName("select_cabin_type_chk")).forEach( each=> {
        each.checked = false;
    });
    if(type === "economy"){
        document.getElementById("select_cabin_economy_chk").checked = true;
        document.getElementById("select_cabin_type_main_input_display").innerHTML = `
            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-level-up"></i>
            Economy
        `;
        flight_search_data.itinerary.cabin = "ECONOMY";
    }else if(type === "business"){
        document.getElementById("select_cabin_business_chk").checked = true;
        document.getElementById("select_cabin_type_main_input_display").innerHTML = `
            <i style="font-size: 15px; margin-right: 10px" class="fa fa-level-up"></i>
            Business
        `;
        flight_search_data.itinerary.cabin = "BUSINESS";
    }else if(type === "first"){
        document.getElementById("select_cabin_first_chk").checked = true;
        document.getElementById("select_cabin_type_main_input_display").innerHTML = `
            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-level-up"></i>
            First
        `;
        flight_search_data.itinerary.cabin = "FIRST";
    }
    window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}

function select_trip_round(type="round-trip"){

    let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));

    Array.from(document.getElementsByClassName("select_trip_round_chk")).forEach( each=> {
        each.checked = false;
    });
    if(type === "round-trip"){
        document.getElementById("trip_round_round_trip_chk").checked = true;
        document.getElementById("select_trip_round_main_input_display").innerHTML = `
            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-repeat"></i>
            Round-trip
        `;
        flight_search_data.type = "round-trip";
    }else if(type === "one-way"){
        document.getElementById("trip_round_one_way_chk").checked = true;
        document.getElementById("select_trip_round_main_input_display").innerHTML = `
            <i style="font-size: 15px; margin-right: 10px" class="fa fa-repeat"></i>
            One-way
        `;
        flight_search_data.type = "one-way";
    }else if(type === "multi-city"){
        document.getElementById("trip_round_multi_city_chk").checked = true;
        document.getElementById("select_trip_round_main_input_display").innerHTML = `
            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-repeat"></i>
            Multi-city
        `;
        flight_search_data.type = "multi-city";
    }
    window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}

let travelers = {
    adults: 1,
    children: 0,
    infants: 0,
}
function add_traveler(type="adult"){

    if((travelers.adults + travelers.children + travelers.infants) > 14){
        alert("only maximum of 15 travelers allowed")
        return;
    }

    if(type === "adult"){
        travelers.adults += 1;

        if(travelers.adults > 1 && travelers.infants == 0 && travelers.children == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.adults} Adults`;
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                ` : document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults} Adult
                    `
        }

        document.getElementById("add_travelers_display_adults_number").innerHTML = travelers.adults;
    }else if(type === "child"){
        travelers.children += 1;

        if(travelers.children > 1 && travelers.infants == 0 && travelers.adults == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.children} Children`;
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.children} Child
                    `
        }
            document.getElementById("add_travelers_display_children_number").innerHTML = travelers.children;
    }else if(type === "infant"){
        travelers.infants += 1;

        if(travelers.infants > 1 && travelers.children == 0 && travelers.adults == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.infants} Infants`;
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.infants} Infant
            `
        }
        
        document.getElementById("add_travelers_display_infants_number").innerHTML = travelers.infants;
    }

    //adding current travelers setting to local storage
    let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
    flight_search_data.itinerary.travelers.adults = travelers.adults;
    flight_search_data.itinerary.travelers.children = travelers.children;
    flight_search_data.itinerary.travelers.infants = travelers.infants;
    window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}

function remove_traveler(type="adult"){

    if((travelers.adults + travelers.children + travelers.infants) < 2){
        alert("at least one(1) adult or child traveler required")
        return;
    }

    if(type === "adult"){
        travelers.adults -= 1;
        if(travelers.adults > 1 && travelers.infants == 0 && travelers.children == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.adults} Adults`;
        }else if(travelers.adults < 1 && travelers.infants > 0 && travelers.children == 0){
            if(travelers.infants > 1 && travelers.children == 0 && travelers.adults == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.infants} Infants`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.infants} Infant
                `
            }
        }else if(travelers.adults < 1 && travelers.infants == 0 && travelers.children > 0){
            if(travelers.children > 1 && travelers.infants == 0 && travelers.adults == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.children} Children`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                            ${travelers.children} Child
                        `
            }
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                ` : document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults} Adult
                    `
        }

        document.getElementById("add_travelers_display_adults_number").innerHTML = travelers.adults;
    }else if(type === "child"){
        travelers.children -= 1;

        if(travelers.children > 1 && travelers.infants == 0 && travelers.adults == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.children} Children`;
        }else if(travelers.adults == 0 && travelers.infants > 0 && travelers.children < 1){
            if(travelers.infants > 1 && travelers.children == 0 && travelers.adults == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.infants} Infants`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.infants} Infant
                `
            }
        }else if(travelers.adults > 0 && travelers.infants == 0 && travelers.children < 1){
            if(travelers.adults > 1 && travelers.infants == 0 && travelers.children == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults} Adults`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    ` : document.getElementById("add_travelers_main_input_display").innerHTML = `
                            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                            ${travelers.adults} Adult
                        `
            }
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.children} Child
                    `
        }

        document.getElementById("add_travelers_display_children_number").innerHTML = travelers.children;
    }else if(type === "infant"){
        travelers.infants -= 1;

        if(travelers.infants > 1 && travelers.children == 0 && travelers.adults == 0){
            document.getElementById("add_travelers_main_input_display").innerHTML = `
                <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                ${travelers.infants} Infants`;
        }else if(travelers.adults == 0 && travelers.infants < 1 && travelers.children > 0){
            if(travelers.infants > 1 && travelers.children == 0 && travelers.adults == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.infants} Infants`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.infants} Infant
                `
            }
        }else if(travelers.adults > 0 && travelers.infants < 1 && travelers.children == 0){
            if(travelers.adults > 1 && travelers.infants == 0 && travelers.children == 0){
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults} Adults`;
            }else{
                (travelers.adults + travelers.children + travelers.infants) > 1 ?
                    document.getElementById("add_travelers_main_input_display").innerHTML = `
                        <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                        ${travelers.adults + travelers.children + travelers.infants} Travelers
                    ` : document.getElementById("add_travelers_main_input_display").innerHTML = `
                            <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                            ${travelers.adults} Adult
                        `
            }
        }else{
            (travelers.adults + travelers.children + travelers.infants) > 1 ?
                document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.adults + travelers.children + travelers.infants} Travelers
                `: document.getElementById("add_travelers_main_input_display").innerHTML = `
                    <i style="fontSize: 15px; margin-right: 10px" class="fa fa-user"></i>
                    ${travelers.infants} Infant
            `
        }
        
        document.getElementById("add_travelers_display_infants_number").innerHTML = travelers.infants;
    }

    //adding current travelers setting to local storage
    let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
    flight_search_data.itinerary.travelers.adults = travelers.adults;
    flight_search_data.itinerary.travelers.children = travelers.children;
    flight_search_data.itinerary.travelers.infants = travelers.infants;
    window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}

export default SearchForm;