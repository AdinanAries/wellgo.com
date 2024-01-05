//React Component - SearchPageMain
const submitFromSearchPage = async () => {
  setFlights([]);
  setLoading(true);
  let res = await fetchFlightOffers();
  console.log(res);
  if(res.data)
      (res.data.length>0) ? setFlights(res.data) : setFlights([]);
  else
      setFlights([])
  setLoading(false);
}


// Obsolete function for enforcing date format in YYYY/MM/DD
export const validateYYYYMMDDInputDates = (date_string, date_separator="/") => {
    date_string=date_string.trim(); 
    //date_string=date_string.replace(/\D/g, ""); // returning only numbers
    if (date_string==="") {
        return "";
    } else {
        let lastChar = date_string.charAt(date_string.length - 1);
        if(parseInt(lastChar) || lastChar==="0"){
            date_string=date_string.replaceAll(date_separator, "");
            if(date_string.length>3 && date_string.length<=6){
                return date_string.substring(0, 4)+date_separator+date_string.substring(4);
            }else if(date_string.length>6 && date_string.length<=8) {
                let YYYY=date_string.substring(0, 4);
                let MM=date_string.substring(4, 6);
                let DD=date_string.substring(6);
                if(parseInt(MM)>12){
                    MM="12";
                }
                if(parseInt(DD)>31){
                    DD="31"
                }
                if(parseInt(MM)<1){
                    MM="01"
                }
                if(parseInt(DD)<1){
                    DD="01"
                }
                return YYYY+date_separator+MM+date_separator+DD;
            }else if(date_string.length > 8){
                let YYYY=date_string.substring(0, 4);
                let MM=date_string.substring(4, 6);
                let DD=date_string.substring(6, date_string.length-1);
                if(parseInt(MM)>12){
                    MM="12";
                }
                if(parseInt(DD)>31){
                    DD="31"
                }
                if(parseInt(MM)<1){
                    MM="01"
                }
                if(parseInt(DD)<1){
                    DD="01"
                }
                return YYYY+date_separator+MM+date_separator+DD;
            }
        }else if(lastChar===date_separator && date_string.length===5){
            return date_string;
        }else if(lastChar===date_separator && date_string.length===7) {
            return date_string.substring(0, 4)+date_separator+"0"+date_string.substring(5,6)+date_separator;
        }else{
            return date_string.substring(0, date_string.length-1);
        }
    }
}

// In vjs_scripts, line: 1283
async function default_run_chat_instance_old(msg){
    wellgo_bot.scroll_chat=true;
    if(msg.trim()!== "")
      document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_loading_markup("loading...")
    let bot_reply=undefined;
    let bot_reply_msg;
    try{
      bot_reply = await get_answer_from_bot(msg);
    }catch(e){
      bot_reply_msg = "Opps! My server failed. My bad...";
    }
    console.log(bot_reply);
    
    if(bot_reply){
      bot_reply_msg = bot_reply.msg;
  
      //if type === "" it means server did not return any valid response for current bot status
      //so don't reset the status unless user says stop
      if(bot_reply.type !== "")
        wellgo_bot.status = bot_reply.type;
      
  
      //----------------------flight booking process---------------------------------------//
      //step one: origin - destination
      {if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION){
          let validation = validate_user_airports_input_for_bot(msg.trim());
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...🤞",
              "Got it... Let me know... 👈",
              "Sure, no problem 👍"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
  
          }else if(msg.trim().toLowerCase() === "done"){
            
            if(wellgo_bot.selectedOriginAirport==="" && wellgo_bot.selectedDestinationAirport===""){
              bot_reply_msg=`Please select your airports above or enter new ones in the form of airport-name to another-airport-name.. eg. '
              <span class="support_chat_bot_msg_highlights">Kotoka to Laguardia</span>'`
            }else if(wellgo_bot.selectedOriginAirport===""){
              bot_reply_msg=`umm... You did not select departure airport`
            }else if(wellgo_bot.selectedDestinationAirport===""){
              bot_reply_msg=`Please select your destination airport`
            }else{
              clear_airports_suggested_by_bot_ids();
              wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
            }
          }else{
            if(msg.trim().toLowerCase() === "yes" && wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION){
              wellgo_bot.step=BOT_STEPS.TRIP_ROUND
            }else{
              wellgo_bot.step=BOT_STEPS.ORIGIN_DESTINATION;
              if(validation.isValid){
                
                //find airports here;
                //if origin and destination airports contains more that one element, then give you a list using div containers to select from
                //after selection, set wellgo_bot.step="departure-arrival-dates"
                let origin_airpots = window.filter_airports_array_based_input_value(validation.origin);
                let destination_airports = window.filter_airports_array_based_input_value(validation.destination);
                console.log(origin_airpots);
                console.log(destination_airports);
                if(origin_airpots.length === 1 && destination_airports.length === 1){
  
                  //origin airport
                  //wellgo_bot.selectedOriginAirport=origin_airpots[0].IATA;
                  //add_origin_input_airport_to_history(origin_airpots[0].IATA)
                  let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                  flight_search_data.itinerary.departure.airport = origin_airpots[0].IATA;
                  
                  if(origin_airpots[0].IATA === "\\N" || origin_airpots[0].IATA === "N"){
                    //wellgo_bot.selectedOriginAirport=origin_airpots[0].ICAO;
                    //add_origin_input_airport_to_history(origin_airpots[0].ICAO)
                    flight_search_data.itinerary.departure.airport = origin_airpots[0].ICAO;
                  }
  
                  //window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
  
                  //destination airport
                  //add_destination_input_airport_to_history(destination_airports[0].IATA)
                  //let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                  flight_search_data.itinerary.arrival.airport = destination_airports[0].IATA;
                  
                  if(destination_airports[0].IATA === "\\N" || destination_airports[0].IATA === "N"){
                    //wellgo_bot.selectedDestinationAirport=icao
                    //add_destination_input_airport_to_history(destination_airports[0].ICAO)
                    flight_search_data.itinerary.arrival.airport = destination_airports[0].ICAO;
                  }
  
                  window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
  
                  let origin_airports_txt = `${origin_airpots[0].city} (${origin_airpots[0].name} - ${origin_airpots[0].country})`;
                  let destination_airports_txt = `${destination_airports[0].city} (${destination_airports[0].name} - ${destination_airports[0].country})`;
                  bot_reply_msg =  `so you said from <span class="support_chat_bot_msg_highlights">
                  ${validation.origin}</span> to <span class="support_chat_bot_msg_highlights">
                  ${validation.destination}</span> and I found <span class="support_chat_bot_msg_highlights">
                  ${origin_airports_txt}</span> to <span class="support_chat_bot_msg_highlights">
                  ${destination_airports_txt}</span> ... Say '<span class="support_chat_bot_msg_highlights">
                  yes</span>' to continue or enter new places or say '<span class="support_chat_bot_msg_highlights">
                  stop</span>' to do something else`;
  
                }else if(origin_airpots.length < 1 && destination_airports.length < 1){
                  bot_reply_msg = `Umm... I didn't find any airports for <span class="support_chat_bot_msg_highlights">
                  '${validation.origin} to ${validation.destination}</span>'... Please let's try to enter valid information. Try again...`;
                }else if(origin_airpots.length < 1){
                  bot_reply_msg = `Umm... I didn't find any airports for '<span class="support_chat_bot_msg_highlights">
                  ${validation.origin}</span>'... Please let's try to enter valid information. Try again...`;
                }else if(destination_airports.length < 1){
                  bot_reply_msg = `Umm... I didn't find any airports for '<span class="support_chat_bot_msg_highlights">
                  ${validation.destination}</span>'... Please let's try to enter valid information. Try again...`;
                }else{
                  clear_airports_suggested_by_bot_ids();
                  wellgo_bot.scroll_chat=false;
                  bot_reply_msg = `
                  So, I found a couple airports, select your departure and destination airports and then say '<span class="support_chat_bot_msg_highlights">
                  done</span>' after that...
                  <br/><br/>
                  <span style="font-weight: bolder; font-size: 13px;">Departure</span><br/>`;
                  for(i=0;i<origin_airpots.length;i++){
                    bot_reply_msg += `
                      <p id="departure_airport_suggested_by_bot_${i}" class="departure_airport_suggested_by_bot" onclick="select_departure_airports_suggested_by_bot('${origin_airpots[i].IATA}', '${origin_airpots[i].ICAO}', 'departure_airport_suggested_by_bot_${i}')" style="margin-bottom: 5px; background-color: rgba(244,0,0,0.1); cursor: pointer; padding: 20px; font-size: 14px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px">
                        ${origin_airpots[i].city} - ${origin_airpots[i].name} - ${origin_airpots[i].country}
                      </p>
                    `;
                    if(i>4)break;
                  }
                  bot_reply_msg += `<br/><span style="font-weight: bolder; font-size: 13px;">Destination</span><br/>`
                  for(i=0;i<destination_airports.length;i++){
                    bot_reply_msg += `
                      <p id="destination_airport_suggested_by_bot_${i}" class="destination_airport_suggested_by_bot" onclick="select_destination_airports_suggested_by_bot('${destination_airports[i].IATA}', '${destination_airports[i].ICAO}', 'destination_airport_suggested_by_bot_${i}')" style="margin-bottom: 5px; background-color: rgba(0,244,0,0.1); cursor: pointer; padding: 20px; font-size: 14px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px">
                      ${destination_airports[i].city} - ${destination_airports[i].name} - ${destination_airports[i].country}
                      </p>
                    `;
                    if(i>4)break;
                  }
  
                  bot_reply_msg += `<br/><span style="font-family: 'Prompt', sans-serif; font-size: 14px">
                    and incase you don't see your airport then re-enter cities or airports. eg. '<span class="support_chat_bot_msg_highlights">
                    New York to Paris</span>' or...</span>`
  
                }
                
                
              }else{
                bot_reply_msg = validation.msg;
                wellgo_bot.status = wellgo_bot.status_names.BEGIN_AIR_BOOKING;
  
              }
            }
            
          }
          
  
      }
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===""){
        wellgo_bot.step=BOT_STEPS.ORIGIN_DESTINATION;
      }
  
      //step two: trip-round
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
  
        let trip_round_init_mgs = [
          `K.. cool.. do you want a return flight?... say '<span class="support_chat_bot_msg_highlights">
          round trip</span>' if you do or say '<span class="support_chat_bot_msg_highlights">
          one way</span>' if you dont`
        ]
        bot_reply_msg = trip_round_init_mgs[Math.floor(Math.random() * trip_round_init_mgs.length)];
  
        if(!wellgo_bot.isTripRoundFirstEntered){
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Alright... no promblem",
              "Cool...",
              "Got it..."
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
  
          }else{
  
            if((msg.trim().toLowerCase() === "round trip"
                || msg.trim().toLowerCase() === "one-way"
                || msg.trim().toLowerCase() === "oneway"
                || msg.trim().toLowerCase() === "roundtrip"
                || msg.trim().toLowerCase() === "round-trip"
                || msg.trim().toLowerCase() === "one way") 
                && wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
              wellgo_bot.step=BOT_STEPS.TRAVEL_DATES;
              let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
              if(msg.trim().toLowerCase() === "one way"
                || msg.trim().toLowerCase() === "one-way"
                || msg.trim().toLowerCase() === "oneway"){
                  flight_search_data.type = "one-way";
              }else if(msg.trim().toLowerCase() === "round trip"
                || msg.trim().toLowerCase() === "round-trip"
                || msg.trim().toLowerCase() === "roundtrip"){
                  flight_search_data.type = "round-trip";
              }
              window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
            }else{
              let stop_trip_round_err_reply_msgs = [
                `I should be expecting you to say either '<span class="support_chat_bot_msg_highlights">
                round trip</span>' or '<span class="support_chat_bot_msg_highlights">
                one way</span>'`,
                `You should say '<span class="support_chat_bot_msg_highlights">
                round trip</span>' to include return flights or say '<span class="support_chat_bot_msg_highlights">
                one way</span>' for only departure flights`,
                `Ummm. You're supposed to say '<span class="support_chat_bot_msg_highlights">
                one way</span>' or '<span class="support_chat_bot_msg_highlights">
                round trip</span>'`
              ];
              bot_reply_msg = stop_trip_round_err_reply_msgs[Math.floor(Math.random() * stop_trip_round_err_reply_msgs.length)]
              wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
  
            }
            
          }
        }
        if(msg.trim().toLowerCase() !== "stop"){
          wellgo_bot.isTripRoundFirstEntered=false;
        }
      }
  
      //step three: travel dates
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.TRAVEL_DATES){
        wellgo_bot.isTripRoundFirstEntered=true;
        let travel_dates_init_messages =[]
        if(JSON.parse(localStorage.getItem("search_obj")).type==="one-way"){
          travel_dates_init_messages = [
            `Good! Now lets get your travel date. Please Say something like '<span class="support_chat_bot_msg_highlights">
            February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
            February</span> is the month and <span class="support_chat_bot_msg_highlights">
            23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
            2022</span> is the year...`
          ]
        }else if(JSON.parse(localStorage.getItem("search_obj")).type==="round-trip"){
          travel_dates_init_messages = [
            `Cool.. Now lets get your departure and return date. Please Say something like '
            <span class="support_chat_bot_msg_highlights">
            February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
            February</span> is the month and <span class="support_chat_bot_msg_highlights">
            23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
            2022</span> is the year...`
          ]
        }
        bot_reply_msg = travel_dates_init_messages[Math.floor(Math.random() * travel_dates_init_messages.length)];
        if(!wellgo_bot.isDatesFirstEntered){
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...",
              "Got it... Let me know...",
              "Sure, no problem"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
  
          }else{
            let validation = validate_user_dates_input_for_bot(msg.trim(), JSON.parse(localStorage.getItem("search_obj")).type)
            console.log("date validation: ", validation);
            if(!validation.isValid){
              bot_reply_msg = validation.msg;
            }else if(validation.isValid){
              wellgo_bot.step = BOT_STEPS.CABIN_CLASS;
              bot_reply_msg = validation.msg;
            }
          }
        }
        if(msg.trim().toLowerCase() !== "stop"){
          wellgo_bot.isDatesFirstEntered=false;
        }
      }
  
      //step four: cabin class
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.CABIN_CLASS){
        wellgo_bot.isDatesFirstEntered=true;
        let travel_cabin_init_messages = [
          `Alright... Almost done. One last step is to provide flight class.. You should say one of the following.. 
          '<span class="support_chat_bot_msg_highlights">first class</span>', 
          '<span class="support_chat_bot_msg_highlights">economy</span>', 
          '<span class="support_chat_bot_msg_highlights">business</span>', 
          '<span class="support_chat_bot_msg_highlights">premium</span>', or 
          '<span class="support_chat_bot_msg_highlights">cheapest</span>'`
        ]
        
        bot_reply_msg = travel_cabin_init_messages[Math.floor(Math.random() * travel_cabin_init_messages.length)];
        if(!wellgo_bot.isCabinClassFirstEntered){
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...",
              "Got it... Let me know...",
              "Sure, no problem"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
  
          }else{
  
            if(
              msg.trim().toLowerCase() === "first class" ||
              msg.trim().toLowerCase() === "economy" ||
              msg.trim().toLowerCase() === "business" ||
              msg.trim().toLowerCase() === "premium" ||
              msg.trim().toLowerCase() === "cheapest"
              ){
  
                //set cabin class here
                wellgo_bot.step = BOT_STEPS.TRAVELER_COUNT;
                bot_reply_msg = `Now... Let's get how may people you're booking for... Say something like 
                '<span class="support_chat_bot_msg_highlights">1 adult</span>'... or something like
                 '<span class="support_chat_bot_msg_highlights">1 child</span>' ... or 
                 '<span class="support_chat_bot_msg_highlights">1 adult, 2 children, 1 infant</span>'... 
                 Note that, only 'adult/adults, child/children, and infant/infants are allowed`;
  
            }else{
              let err_msgs = [
                `Your answer should be one of '<span class="support_chat_bot_msg_highlights">
                first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `You should say either '<span class="support_chat_bot_msg_highlights">
                first class</span>', or '<span class="support_chat_bot_msg_highlights">
                economy</span>', or '<span class="support_chat_bot_msg_highlights">
                business</span>', or '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `Umm... your answer didn't match any of '<span class="support_chat_bot_msg_highlights">
                first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`
              ]
              bot_reply_msg = err_msgs[Math.floor(Math.random()*err_msgs.length)];
            }
            
          }
        }
        if(msg.trim().toLowerCase() !== "stop"){
          wellgo_bot.isCabinClassFirstEntered=false;
        }
        
      }
  
      //step five: gettings travlers
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.TRAVELER_COUNT){
        wellgo_bot.isCabinClassFirstEntered=true;
        if(!wellgo_bot.isGettingTravelersFirstEntered){
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...",
              "Got it... Let me know...",
              "Sure, no problem"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
  
          }else{
          let validation = validate_travelers_input_for_bot(msg.trim().toLowerCase())
          console.log("validation: ", validation);
          if(!validation.isValid){
            let err_msgs = [
              `You should say something like '<span class="support_chat_bot_msg_highlights">
              1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
              1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above, 
              children refer to 2 to 17 years, infants refer to below 2 years, ...
              and only 'adult/adults, child/children, and infant/infants are allowed`,
              `I'm expecting you to say something like '<span class="support_chat_bot_msg_highlights">
              1 adult</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 2 children, 1 infant</span>' ... Adults refer to 18 years and above, 
              children refer to 2 to 17 years, infants refer to below 2 years, ...
              and only 'adult/adults, child/children, and infant/infants are allowed`,
              `Say something like '<span class="support_chat_bot_msg_highlights">
              1 adult</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
              1 adult, 2 children, 1 infant</span>' ... Adults refer to 18 years and above, 
              children refer to 2 to 17 years, infants refer to below 2 years, ...
              and only 'adult/adults, child/children, and infant/infants are allowed`
            ]
            bot_reply_msg = err_msgs[Math.floor(Math.random()*err_msgs.length)];
          }else{
            wellgo_bot.step = BOT_STEPS.FLIGHT_SEARCH;
            bot_reply_msg = `Great! give me a minute to get you some flight schedules`;
          }
          }
        }
        if(msg.trim().toLowerCase() !== "stop"){
          wellgo_bot.isGettingTravelersFirstEntered=false;
        }
      }
  
      //step six: searching flight schedules
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.FLIGHT_SEARCH){
        wellgo_bot.isGettingTravelersFirstEntered=true;
  
        setTimeout(()=>{
          if(wellgo_bot.hasBotReturnedResults){
            wellgo_bot.scroll_chat=false;
            show_interapting_message(`
            I have schedules for you below... please view and select which one you want. And just say '
            <span class="support_chat_bot_msg_highlights">done</span>' when you finish.
            <br/><br/>`, false);
            let itns = `<p style="font-weight: bolder; font-size: 12px; margin-bottom: 10px;">Flight Schedules</p>`;
            for(i=0;i<5;i++){
              itns += `
                <p id="search_result_by_bot_${i}" class="search_result_by_bot" onclick="main_bot_view_flights_all_details_func();" style="margin-bottom: 5px; background-color: rgba(244,0,0,0.1); cursor: pointer; padding: 20px; font-size: 17px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; transition: all 0.2s ease-out; min-width: 270px;">
                  $133.33 
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);"> &#8226; economy </span>
                  <br/>
                  <span style="font-size: 15px;">
                    9:40am - 5:20pm
                    <span style="font-size: 13px; color: rgba(0,51,0,0.8);"> &#8226; 6h 5m(1 stop) </span>
                  </span>
                  <br/>
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);">
                  <i style="margin-right: 5px;" class="fa fa-map-marker"></i>New York to France</span><br/>
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);">
                  <i style="margin-right: 5px;" class="fa fa-plane"></i>America Airline</span><br/>
                  <span style="font-size: 11px; color: rgba(0,0,0,0.7);"> view details...</span><br/>
                </p>
              `;
              if(i>4)break;
            }
            show_interapting_message(itns, false);
            wellgo_bot.hasBotReturnedResults=false;
          }
        }, 6000);
        
        if(!wellgo_bot.isSearchingFlightFirstEnter){
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...",
              "Got it... Let me know...",
              "Sure, no problem"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
            clear_flight_results_showed_by_bot();
  
          }else if(msg.trim().toLowerCase() === "done"){
            
            show_user_interapting_message(msg, true);
  
            if(!wellgo_bot.selectedAFlight){
              wellgo_bot.scroll_chat=true;
              let rpl_msgs = [
                `Please select a flight above then after, say '<span class="support_chat_bot_msg_highlights">done</span>'`,
                `Umm... You haven't selected a flight...`,
                `You should select a flight first, then say '<span class="support_chat_bot_msg_highlights">done</span>' ...`
              ]
              bot_reply_msg=rpl_msgs[Math.floor(Math.random()*rpl_msgs.length)];
            }else{
              document.getElementById("main_bot_view_flights_all_details").style.display="none";
              document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
              wellgo_bot.selectedAFlight=false;
              document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
              clear_flight_results_showed_by_bot();
              $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
              wellgo_bot.step="traveler-details-collection";
              let slctedItn = `Oh nice pick! ... <br/><br/>
                <p id="search_result_by_bot_${i}" class="search_result_by_bot" onclick="main_bot_view_selected_flights_all_details_func()" style="margin-bottom: 5px; background-color: rgba(244,0,0,0.1); cursor: pointer; padding: 20px; font-size: 17px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; transition: all 0.2s ease-out;">
                  $133.33 
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);"> &#8226; economy </span>
                  <br/>
                  <span style="font-size: 15px;">
                    9:40am - 5:20pm
                    <span style="font-size: 13px; color: rgba(0,51,0,0.8);"> &#8226; 6h 5m(1 stop) </span>
                  </span>
                  <br/>
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);">
                  <i style="margin-right: 5px;" class="fa fa-map-marker"></i>New York to France</span><br/>
                  <span style="font-size: 13px; color: rgba(0,51,0,0.8);">
                  <i style="margin-right: 5px;" class="fa fa-plane"></i>America Airline</span><br/>
                  <span style="font-size: 11px; color: rgba(0,0,0,0.7);"> view details...</span><br/>
                </p>`;
  
                setTimeout(()=>show_interapting_message(slctedItn,"none"),2000);
                setTimeout(()=>show_interapting_message(`<p style="font-family: 'Prompt', sans-serif; font-size: 14px">
                In order to finish booking your flight, we'll need to create a record for the traveling passenger(s)......
                </p>`,"none"),2000);
              wellgo_bot.scroll_chat=false;
              wellgo_bot.step=BOT_STEPS.PNR_RECORD;
            }
          }else{
  
            bot_reply_msg = `Please holdon while I search your flight... or say '<span class="support_chat_bot_msg_highlights">
            stop</span>' if we're not doing it anymore...`;
            
          }
        }
        if(msg.trim().toLowerCase() !== "stop"){
          wellgo_bot.isSearchingFlightFirstEnter=false
        }
      }}
  
      //step seven: pnr recording
      if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING 
        && wellgo_bot.step===BOT_STEPS.PNR_RECORD){
        if(wellgo_bot.isPNRFirstEntered){
          setTimeout(()=>show_interapting_message(`So lets do that now...`, "none"),2000);
          setTimeout(()=>show_interapting_message(`Please enter traveler's first and last name like this '<span class="support_chat_bot_msg_highlights">Mohammed Adinan</span>'`, "none"),2000);
          bot_reply_msg = "";
        }else{
          if(msg.trim().toLowerCase() === "stop"){
            let stop_booking_reply_msgs = [
              "Ok cool...",
              "Got it... Let me know...",
              "Sure, no problem"
            ];
            bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
            wellgo_bot.status = "";
            wellgo_bot.step = "";
  
            wellgo_bot.scroll_chat=true;
            wellgo_bot.isTripRoundFirstEntered=true;
            wellgo_bot.isPNRFirstEntered=true;
            wellgo_bot.isDatesFirstEntered=true;
            wellgo_bot.isCabinClassFirstEntered=true;
            wellgo_bot.isSearchingFlightFirstEnter=true;
            wellgo_bot.isGettingTravelersFirstEntered=true;
            wellgo_bot.selectedOriginAirport="";
            wellgo_bot.selectedDestinationAirport="";
            clear_flight_results_showed_by_bot();
  
          }else{
            let name_parts = msg.trim().split(" ");
            if(name_parts.length === 2){
              show_user_interapting_message(msg, true);
              show_interapting_message(`Perfect...`, "none")
              show_interapting_message(`We need your address next, it should look like 
              '<span class="support_chat_bot_msg_highlights">street address, town, city, country zipcode</span>'
              ..eg. '<span class="support_chat_bot_msg_highlights">234 Rector Street, Manhattan, New York, USA 10232</span>'`, "none");
              wellgo_bot.scroll_chat=false;
            }else{
              let err_reply_msgs = [
                "Please name must be in two parts: first and last name",
                "Oops.. name must be a first and last name",
                "Make sure, you've input your first and last name.. try again please"
              ];
              bot_reply_msg = err_reply_msgs[Math.floor(Math.random() * err_reply_msgs.length)]
            }
          }
          
        }
        wellgo_bot.isPNRFirstEntered=false;
      }
  
      //---------------------end of flight booking process-------------------------------------//
  
    }else{
      bot_reply_msg = "Opps! My server failed. My bad...";
    }
    
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === "" || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === "type your message here..."){
      //dont add empty input to chat displayed items
      document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
    }else{
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value !== "$%#%%%#@@&&&**(*)"){
        document.getElementById("hp_support_chat_items").innerHTML += return_each_user_chat_message_markup(msg);
      }
      setTimeout(()=>{
        document.getElementById("hp_support_chat_items").innerHTML += return_each_bot_chat_message_markup(bot_reply_msg);
        if(wellgo_bot.scroll_chat){
          $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
        }else{
          document.getElementById("hp_support_chat_items").scrollBy(0, 100);
        }
        document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
      }, 1000)
      
    }
    document.querySelector("#main_support_chat_user_input_txt_container textarea").value = "type your message here...";
    document.getElementById("suggested_bot_query_display").innerHTML = "";
    if(wellgo_bot.scroll_chat){
      $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
    }else{
      document.getElementById("hp_support_chat_items").scrollBy(0, 100);
    }
  }

// Last lines of vjs_scripts
const NAME_TO_DO_CURRENCY_SYMBOLS = [
  {
    "currency": "Albania Lek",
    "abbreviation": "ALL",
    "symbol": "&#76;&#101;&#107;"
  },
  {
    "currency": "Afghanistan Afghani",
    "abbreviation": "AFN",
    "symbol": "&#1547;"
  },
  {
    "currency": "Argentina Peso",
    "abbreviation": "ARS",
    "symbol": "&#36;"
  },
  {
    "currency": "Aruba Guilder",
    "abbreviation": "AWG",
    "symbol": "&#402;"
  },
  {
    "currency": "Australia Dollar",
    "abbreviation": "AUD",
    "symbol": "&#36;"
  },
  {
    "currency": "Azerbaijan New Manat",
    "abbreviation": "AZN",
    "symbol": "&#1084;&#1072;&#1085;"
  },
  {
    "currency": "Bahamas Dollar",
    "abbreviation": "BSD",
    "symbol": "&#36;"
  },
  {
    "currency": "Barbados Dollar",
    "abbreviation": "BBD",
    "symbol": "&#36;"
  },
  {
    "currency": "Belarus Ruble",
    "abbreviation": "BYR",
    "symbol": "&#112;&#46;"
  },
  {
    "currency": "Belize Dollar",
    "abbreviation": "BZD",
    "symbol": "&#66;&#90;&#36;"
  },
  {
    "currency": "Bermuda Dollar",
    "abbreviation": "BMD",
    "symbol": "&#36;"
  },
  {
    "currency": "Bolivia Boliviano",
    "abbreviation": "BOB",
    "symbol": "&#36;&#98;"
  },
  {
    "currency": "Bosnia and Herzegovina Convertible Marka",
    "abbreviation": "BAM",
    "symbol": "&#75;&#77;"
  },
  {
    "currency": "Botswana Pula",
    "abbreviation": "BWP",
    "symbol": "&#80;"
  },
  {
    "currency": "Bulgaria Lev",
    "abbreviation": "BGN",
    "symbol": "&#1083;&#1074;"
  },
  {
    "currency": "Brazil Real",
    "abbreviation": "BRL",
    "symbol": "&#82;&#36;"
  },
  {
    "currency": "Brunei Darussalam Dollar",
    "abbreviation": "BND",
    "symbol": "&#36;"
  },
  {
    "currency": "Cambodia Riel",
    "abbreviation": "KHR",
    "symbol": "&#6107;"
  },
  {
    "currency": "Canada Dollar",
    "abbreviation": "CAD",
    "symbol": "&#36;"
  },
  {
    "currency": "Cayman Islands Dollar",
    "abbreviation": "KYD",
    "symbol": "&#36;"
  },
  {
    "currency": "Chile Peso",
    "abbreviation": "CLP",
    "symbol": "&#36;"
  },
  {
    "currency": "China Yuan Renminbi",
    "abbreviation": "CNY",
    "symbol": "&#165;"
  },
  {
    "currency": "Colombia Peso",
    "abbreviation": "COP",
    "symbol": "&#36;"
  },
  {
    "currency": "Costa Rica Colon",
    "abbreviation": "CRC",
    "symbol": "&#8353;"
  },
  {
    "currency": "Croatia Kuna",
    "abbreviation": "HRK",
    "symbol": "&#107;&#110;"
  },
  {
    "currency": "Cuba Peso",
    "abbreviation": "CUP",
    "symbol": "&#8369;"
  },
  {
    "currency": "Czech Republic Koruna",
    "abbreviation": "CZK",
    "symbol": "&#75;&#269;"
  },
  {
    "currency": "Denmark Krone",
    "abbreviation": "DKK",
    "symbol": "&#107;&#114;"
  },
  {
    "currency": "Dominican Republic Peso",
    "abbreviation": "DOP",
    "symbol": "&#82;&#68;&#36;"
  },
  {
    "currency": "East Caribbean Dollar",
    "abbreviation": "XCD",
    "symbol": "&#36;"
  },
  {
    "currency": "Egypt Pound",
    "abbreviation": "EGP",
    "symbol": "&#163;"
  },
  {
    "currency": "El Salvador Colon",
    "abbreviation": "SVC",
    "symbol": "&#36;"
  },
  {
    "currency": "Estonia Kroon",
    "abbreviation": "EEK",
    "symbol": "&#107;&#114;"
  },
  {
    "currency": "Euro Member Countries",
    "abbreviation": "EUR",
    "symbol": "&#8364;"
  },
  {
    "currency": "Falkland Islands (Malvinas) Pound",
    "abbreviation": "FKP",
    "symbol": "&#163;"
  },
  {
    "currency": "Fiji Dollar",
    "abbreviation": "FJD",
    "symbol": "&#36;"
  },
  {
    "currency": "Ghana Cedis",
    "abbreviation": "GHC",
    "symbol": "&#162;"
  },
  {
    "currency": "Gibraltar Pound",
    "abbreviation": "GIP",
    "symbol": "&#163;"
  },
  {
    "currency": "Guatemala Quetzal",
    "abbreviation": "GTQ",
    "symbol": "&#81;"
  },
  {
    "currency": "Guernsey Pound",
    "abbreviation": "GGP",
    "symbol": "&#163;"
  },
  {
    "currency": "Guyana Dollar",
    "abbreviation": "GYD",
    "symbol": "&#36;"
  },
  {
    "currency": "Honduras Lempira",
    "abbreviation": "HNL",
    "symbol": "&#76;"
  },
  {
    "currency": "Hong Kong Dollar",
    "abbreviation": "HKD",
    "symbol": "&#36;"
  },
  {
    "currency": "Hungary Forint",
    "abbreviation": "HUF",
    "symbol": "&#70;&#116;"
  },
  {
    "currency": "Iceland Krona",
    "abbreviation": "ISK",
    "symbol": "&#107;&#114;"
  },
  {
    "currency": "India Rupee",
    "abbreviation": "INR",
    "symbol": null
  },
  {
    "currency": "Indonesia Rupiah",
    "abbreviation": "IDR",
    "symbol": "&#82;&#112;"
  },
  {
    "currency": "Iran Rial",
    "abbreviation": "IRR",
    "symbol": "&#65020;"
  },
  {
    "currency": "Isle of Man Pound",
    "abbreviation": "IMP",
    "symbol": "&#163;"
  },
  {
    "currency": "Israel Shekel",
    "abbreviation": "ILS",
    "symbol": "&#8362;"
  },
  {
    "currency": "Jamaica Dollar",
    "abbreviation": "JMD",
    "symbol": "&#74;&#36;"
  },
  {
    "currency": "Japan Yen",
    "abbreviation": "JPY",
    "symbol": "&#165;"
  },
  {
    "currency": "Jersey Pound",
    "abbreviation": "JEP",
    "symbol": "&#163;"
  },
  {
    "currency": "Kazakhstan Tenge",
    "abbreviation": "KZT",
    "symbol": "&#1083;&#1074;"
  },
  {
    "currency": "Korea (North) Won",
    "abbreviation": "KPW",
    "symbol": "&#8361;"
  },
  {
    "currency": "Korea (South) Won",
    "abbreviation": "KRW",
    "symbol": "&#8361;"
  },
  {
    "currency": "Kyrgyzstan Som",
    "abbreviation": "KGS",
    "symbol": "&#1083;&#1074;"
  },
  {
    "currency": "Laos Kip",
    "abbreviation": "LAK",
    "symbol": "&#8365;"
  },
  {
    "currency": "Latvia Lat",
    "abbreviation": "LVL",
    "symbol": "&#76;&#115;"
  },
  {
    "currency": "Lebanon Pound",
    "abbreviation": "LBP",
    "symbol": "&#163;"
  },
  {
    "currency": "Liberia Dollar",
    "abbreviation": "LRD",
    "symbol": "&#36;"
  },
  {
    "currency": "Lithuania Litas",
    "abbreviation": "LTL",
    "symbol": "&#76;&#116;"
  },
  {
    "currency": "Macedonia Denar",
    "abbreviation": "MKD",
    "symbol": "&#1076;&#1077;&#1085;"
  },
  {
    "currency": "Malaysia Ringgit",
    "abbreviation": "MYR",
    "symbol": "&#82;&#77;"
  },
  {
    "currency": "Mauritius Rupee",
    "abbreviation": "MUR",
    "symbol": "&#8360;"
  },
  {
    "currency": "Mexico Peso",
    "abbreviation": "MXN",
    "symbol": "&#36;"
  },
  {
    "currency": "Mongolia Tughrik",
    "abbreviation": "MNT",
    "symbol": "&#8366;"
  },
  {
    "currency": "Mozambique Metical",
    "abbreviation": "MZN",
    "symbol": "&#77;&#84;"
  },
  {
    "currency": "Namibia Dollar",
    "abbreviation": "NAD",
    "symbol": "&#36;"
  },
  {
    "currency": "Nepal Rupee",
    "abbreviation": "NPR",
    "symbol": "&#8360;"
  },
  {
    "currency": "Netherlands Antilles Guilder",
    "abbreviation": "ANG",
    "symbol": "&#402;"
  },
  {
    "currency": "New Zealand Dollar",
    "abbreviation": "NZD",
    "symbol": "&#36;"
  },
  {
    "currency": "Nicaragua Cordoba",
    "abbreviation": "NIO",
    "symbol": "&#67;&#36;"
  },
  {
    "currency": "Nigeria Naira",
    "abbreviation": "NGN",
    "symbol": "&#8358;"
  },
  {
    "currency": "Korea (North) Won",
    "abbreviation": "KPW",
    "symbol": "&#8361;"
  },
  {
    "currency": "Norway Krone",
    "abbreviation": "NOK",
    "symbol": "&#107;&#114;"
  },
  {
    "currency": "Oman Rial",
    "abbreviation": "OMR",
    "symbol": "&#65020;"
  },
  {
    "currency": "Pakistan Rupee",
    "abbreviation": "PKR",
    "symbol": "&#8360;"
  },
  {
    "currency": "Panama Balboa",
    "abbreviation": "PAB",
    "symbol": "&#66;&#47;&#46;"
  },
  {
    "currency": "Paraguay Guarani",
    "abbreviation": "PYG",
    "symbol": "&#71;&#115;"
  },
  {
    "currency": "Peru Nuevo Sol",
    "abbreviation": "PEN",
    "symbol": "&#83;&#47;&#46;"
  },
  {
    "currency": "Philippines Peso",
    "abbreviation": "PHP",
    "symbol": "&#8369;"
  },
  {
    "currency": "Poland Zloty",
    "abbreviation": "PLN",
    "symbol": "&#122;&#322;"
  },
  {
    "currency": "Qatar Riyal",
    "abbreviation": "QAR",
    "symbol": "&#65020;"
  },
  {
    "currency": "Romania New Leu",
    "abbreviation": "RON",
    "symbol": "&#108;&#101;&#105;"
  },
  {
    "currency": "Russia Ruble",
    "abbreviation": "RUB",
    "symbol": "&#1088;&#1091;&#1073;"
  },
  {
    "currency": "Saint Helena Pound",
    "abbreviation": "SHP",
    "symbol": "&#163;"
  },
  {
    "currency": "Saudi Arabia Riyal",
    "abbreviation": "SAR",
    "symbol": "&#65020;"
  },
  {
    "currency": "Serbia Dinar",
    "abbreviation": "RSD",
    "symbol": "&#1044;&#1080;&#1085;&#46;"
  },
  {
    "currency": "Seychelles Rupee",
    "abbreviation": "SCR",
    "symbol": "&#8360;"
  },
  {
    "currency": "Singapore Dollar",
    "abbreviation": "SGD",
    "symbol": "&#36;"
  },
  {
    "currency": "Solomon Islands Dollar",
    "abbreviation": "SBD",
    "symbol": "&#36;"
  },
  {
    "currency": "Somalia Shilling",
    "abbreviation": "SOS",
    "symbol": "&#83;"
  },
  {
    "currency": "South Africa Rand",
    "abbreviation": "ZAR",
    "symbol": "&#82;"
  },
  {
    "currency": "Korea (South) Won",
    "abbreviation": "KRW",
    "symbol": "&#8361;"
  },
  {
    "currency": "Sri Lanka Rupee",
    "abbreviation": "LKR",
    "symbol": "&#8360;"
  },
  {
    "currency": "Sweden Krona",
    "abbreviation": "SEK",
    "symbol": "&#107;&#114;"
  },
  {
    "currency": "Switzerland Franc",
    "abbreviation": "CHF",
    "symbol": "&#67;&#72;&#70;"
  },
  {
    "currency": "Suriname Dollar",
    "abbreviation": "SRD",
    "symbol": "&#36;"
  },
  {
    "currency": "Syria Pound",
    "abbreviation": "SYP",
    "symbol": "&#163;"
  },
  {
    "currency": "Taiwan New Dollar",
    "abbreviation": "TWD",
    "symbol": "&#78;&#84;&#36;"
  },
  {
    "currency": "Thailand Baht",
    "abbreviation": "THB",
    "symbol": "&#3647;"
  },
  {
    "currency": "Trinidad and Tobago Dollar",
    "abbreviation": "TTD",
    "symbol": "&#84;&#84;&#36;"
  },
  {
    "currency": "Turkey Lira",
    "abbreviation": "TRY",
    "symbol": null
  },
  {
    "currency": "Turkey Lira",
    "abbreviation": "TRL",
    "symbol": "&#8356;"
  },
  {
    "currency": "Tuvalu Dollar",
    "abbreviation": "TVD",
    "symbol": "&#36;"
  },
  {
    "currency": "Ukraine Hryvna",
    "abbreviation": "UAH",
    "symbol": "&#8372;"
  },
  {
    "currency": "United Kingdom Pound",
    "abbreviation": "GBP",
    "symbol": "&#163;"
  },
  {
    "currency": "United States Dollar",
    "abbreviation": "USD",
    "symbol": "&#36;"
  },
  {
    "currency": "Uruguay Peso",
    "abbreviation": "UYU",
    "symbol": "&#36;&#85;"
  },
  {
    "currency": "Uzbekistan Som",
    "abbreviation": "UZS",
    "symbol": "&#1083;&#1074;"
  },
  {
    "currency": "Venezuela Bolivar",
    "abbreviation": "VEF",
    "symbol": "&#66;&#115;"
  },
  {
    "currency": "Viet Nam Dong",
    "abbreviation": "VND",
    "symbol": "&#8363;"
  },
  {
    "currency": "Yemen Rial",
    "abbreviation": "YER",
    "symbol": "&#65020;"
  },
  {
    "currency": "Zimbabwe Dollar",
    "abbreviation": "ZWD",
    "symbol": "&#90;&#36;"
  }
]

let ttt={};

for(let ll=0;ll<NAME_TO_DO_CURRENCY_SYMBOLS.length;ll++){
  ttt[NAME_TO_DO_CURRENCY_SYMBOLS[ll].abbreviation] = NAME_TO_DO_CURRENCY_SYMBOLS[ll].symbol;
}

console.log(ttt);