
//Array filter method wrapped in function to improve code reuse
function filter_airports_array_based_input_value(elem_value){

    return AirportsData.filter(each => {
        return (
           each.city.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", "")) 
        || each.name.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || each.IATA.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || each.country.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.country + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.country + each.city + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.name + each.city + each.country + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.name + each.IATA + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.name + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.city + each.name + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.city + each.country + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.country + each.city + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        )
    });

}

document.getElementById("from_where_airports_auto_complete_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_from_where_input_list").innerHTML = "";
    let flights = [];

    //if backspace has been pressed, don't auto-complete on input
    if(!evnt.data){
        return null;
    }

    if(evnt.target.value){

        flights = filter_airports_array_based_input_value(evnt.target.value);

        flights = flights.map(elem => {
                counter++;
                return counter < 6 && `
                    <li><div onclick="changeAirportsFromInput('${elem.city} - ${elem.name} (${elem.IATA})', '${elem.IATA}', '${elem.ICAO}');" class="autocomplete_list_each_item_container">
                        <div>
                            <p class="autocomplete_list_airport_city_name">
                                <i class="fa fa-plane"></i>
                                ${elem.city} (${elem.IATA} - ${elem.name})
                            </p>
                            <p class="autocomplete_list_country_name">
                                ${elem.country}
                            </p>
                        </div>
                    </div></li>`;
                
            })
    }
    //console.log(flights);
    document.getElementById("flights_auto_complete_from_where_input_list").innerHTML = flights.join('').replaceAll("false","");
})


function changeAirportsFromInput(airport, iata, icao){
    document.getElementById("from_where_airports_auto_complete_input_fld").value = airport;
    document.getElementById("search_forms_from_where_input_fld").value = airport;
    //fligh_search_data.origin_iata = iata;

    if(iata === "\\N" || iata === "N"){
        //fligh_search_data.origin_iata = icao;
        document.getElementById("from_where_airports_auto_complete_input_fld").value = airport.split("(")[0] + " (" + icao + ")";
        document.getElementById("search_forms_from_where_input_fld").value = airport.split("(")[0] + " (" + icao + ")";
    }

    //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
}

//Destination Airports Auto Completion

document.getElementById("to_where_airports_auto_complete_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_to_where_input_list").innerHTML = "";
    let flights = [];

    //if backspace has been pressed, don't auto-complete on input
    if(!evnt.data){
        return null;
    }

    if(evnt.target.value){

        flights = filter_airports_array_based_input_value(evnt.target.value);

        flights = flights.map(elem => {
            counter++;
            return counter < 6 && `
                    <li><div onclick="changeAirportsToInput('${elem.city} - ${elem.name} (${elem.IATA})', '${elem.IATA}', '${elem.ICAO}');" class="autocomplete_list_each_item_container">
                        <div>
                            <p class="autocomplete_list_airport_city_name">
                                <i class="fa fa-plane"></i>
                                ${elem.city} (${elem.IATA} - ${elem.name})
                            </p>
                            <p class="autocomplete_list_country_name">
                                ${elem.country}
                            </p>
                        </div>
                    </div></li>`;
            
        });
    }
    //console.log(flights);
    document.getElementById("flights_auto_complete_to_where_input_list").innerHTML = flights.join('').replaceAll("false","");
})


function changeAirportsToInput(airport, iata, icao){
    document.getElementById("to_where_airports_auto_complete_input_fld").value = airport;
    document.getElementById("search_forms_to_where_input_fld").value = airport;
    //fligh_search_data.destination_iata = iata;

    if(iata === "\\N" || iata === "N"){
        //fligh_search_data.destination_iata = icao;
        document.getElementById("to_where_airports_auto_complete_input_fld").value = airport.split("(")[0] + " (" + icao + ")";
        document.getElementById("search_forms_to_where_input_fld").value =  airport.split("(")[0] + " (" + icao + ")";
    }

    //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
}



/*function *filter(array, condition, maxSize) {
    if (!maxSize || maxSize > array.length) {
      maxSize = array.length;
    }
    let count = 0;
    let i = 0;
    while ( count< maxSize && i < array.length ) {
      if (condition(array[i])) {
        yield array[i];
        count++;
      }
      i++;
    }
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  console.log( Array.from( filter(array, i => i % 2 === 0, 2 ) ) );*/