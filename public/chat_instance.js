let wellgo_bot = window.virtual_assistant.state;
const BOT_STEPS = window.virtual_assistant.steps.names;
//let bot_server_base_url = "http://localhost:5001";
let bot_server_base_url = "https://wellgo-vta.herokuapp.com";
window.BOT_STEPS=BOT_STEPS;
window.wellgo_bot=wellgo_bot;


//----------------------to remove--------------------------------
/**
 * To Do: Always try to construct a perfect query for the UI
 */
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
//------------------------------------------------------

let get_answer_from_bot = (user_query) => {
    //console.log(user_query)
    //console.log("bot status: ", wellgo_bot.status)
    return window.$.ajax({
        type: "POST",
        url: `${bot_server_base_url}/query_bot/`,
        data: JSON.stringify({
            bot_status: wellgo_bot.status,
            q: user_query
        }),
        contentType: "application/jSON; charset=utf-8",
        dataType: "json",
        success: res => {
            return res
        },
        error: err => {
            console.log(err)
            const networkErrorMessages = [
              "Ohh! I think we have a problem on network. Don't forget the internet is my brain...",
              "Ummm... Looks like I cannot reach my brain! - the internet. Please check your internet connection",
              "My server is unreachable! I cannot reach it. Hope your internet is working!",
              "Looks like an internet problem, I cannot talk with my server to get you any pertinent responses!",
              "Please check your internet, ensure it's working. I cannot connect to my brain from the internet!"
            ]
            return {
                msg: networkErrorMessages[
                  Math.floor(Math.random() * networkErrorMessages.length)
                ]
            }
        }
    })
}
window.get_answer_from_bot=get_answer_from_bot;

let get_bot_query_autocomplete = (input_q)=>{
    return window.$.ajax({
      type: "POST",
      url: `${bot_server_base_url}/q_autocomplete/`,
      data: JSON.stringify({
        bot_status: wellgo_bot.status,
        q: input_q
      }),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: res => {
        return res;
      },
      error: err => {
        console.log(err)
        return err.responseText;
      }
    });
}
window.get_bot_query_autocomplete=get_bot_query_autocomplete;

let run_chat_instance = async (input_txt_fld="#main_support_chat_user_input_txt_container textarea") => {

  document.getElementById("main_support_chat_user_input_txt_container").style.opacity=0;
  document.getElementById("main_support_chat_user_input_txt_wait_while_loading_status").style.display="block";

  const TEXT_ELE=document.querySelector(input_txt_fld);

  wellgo_bot.scroll_chat=true;
  if(TEXT_ELE.value.trim() !== "")
    document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_loading_markup("loading...");
  let bot_reply=undefined;
  let bot_reply_msg;
  try{
    bot_reply = await get_answer_from_bot(TEXT_ELE.value.trim());
  }catch(e){
    bot_reply_msg = window.virtual_assistant_functions.return_server_failed_error();
  }

  if(bot_reply){
    bot_reply_msg = bot_reply.msg;

    // If type === "" it means server did not return any valid response for current bot status
    // So don't reset the status unless user says stop
    if(bot_reply.type !== "")
      wellgo_bot.status = bot_reply.type;

    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      || bot_reply.type===wellgo_bot.status_names.BEGIN_AIR_BOOKING
    ){
      //----------------------change requests - flight booking process---------------------------------------//
      bot_reply_msg=window.virtual_assistant_flight_booking_change_values_assessment(
        TEXT_ELE, bot_reply_msg
      )

      //----------------------flight booking process---------------------------------------//
      let flight_eval_res=window.virtual_assistant_flight_booking_values_assessment(
        TEXT_ELE, bot_reply_msg, bot_reply
      )
      bot_reply_msg=flight_eval_res.bot_reply_msg;
      bot_reply=flight_eval_res.bot_reply;

      // Saying stop when flight booking has started yet no bot step has been set
      if(!wellgo_bot.step
        && window.virtual_assistant_functions
              .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())
      ){
        bot_reply_msg=window.virtual_assistant_functions.get_in_activity_stop_command_reponse();
        window.virtual_assistant_functions.reset_bot_status();
      }
    }
    // if bot does not have any status yet user says stop
    else if(
      !bot_reply.type
      && window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())
    ){
      bot_reply_msg=window.virtual_assistant_functions
        .get_idle_bot_stop_current_activity_response(TEXT_ELE.value.trim());
    }
    // Last condition for bot status - if server did not return an aswer with status
    else if(
        !bot_reply.type
        && !window.virtual_assistant_functions
              .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())
    ){
      bot_reply_msg=window.virtual_assistant_functions.return_no_bot_status_message();
    }
    //---------------------end of flight booking process-------------------------------------//

  } else {
    bot_reply_msg = window.virtual_assistant_functions.return_server_failed_error();
  }

  // Handle Third-Party Responses Here
  if(!wellgo_bot.status && bot_reply.sec_type==="third_pary_response"){
    bot_reply_msg=bot_reply.msg;
  }

  if(TEXT_ELE.value.trim() === "" || TEXT_ELE.value.trim() === "type your message here..."){
    //dont add empty input to chat displayed items
    document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_status_markup("online");
  }else{
    if(TEXT_ELE.value !== "$%#%%%#@@&&&**(*)"){
      document.getElementById("hp_support_chat_items").innerHTML
        += window.return_each_user_chat_message_markup(TEXT_ELE.value.trim());
    }
    setTimeout(()=>{
      document.getElementById("hp_support_chat_items").innerHTML
        += window.return_each_bot_chat_message_markup(bot_reply_msg);
      if(wellgo_bot.scroll_chat){
        window.$("#hp_support_chat_items").scrollTop(
          window.$("#hp_support_chat_items").prop("scrollHeight")
        );
      }else{
        document.getElementById("hp_support_chat_items").scrollBy(0, 100);
      }
      document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_status_markup("online");
      document.getElementById("suggested_bot_query_display").innerHTML = "";
    }, 1000)

  }
  TEXT_ELE.value = "type your message here...";
  if(wellgo_bot.scroll_chat){
    window.$("#hp_support_chat_items").scrollTop(
      window.$("#hp_support_chat_items").prop("scrollHeight")
    );
  }else{
    document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }

  document.getElementById("main_support_chat_user_input_txt_container").style.opacity=1;
  document.getElementById("main_support_chat_user_input_txt_wait_while_loading_status").style.display="none";

}
window.run_chat_instance=run_chat_instance;

let default_run_chat_instance = (msg="") => {
    if(msg)
      document.querySelector("#main_support_chat_user_input_txt_container textarea").value = msg;
    setTimeout(run_chat_instance, 300);
}
// Making default run chat instance function global
window.default_run_chat_instance=default_run_chat_instance;

let virtual_assistant_flight_booking_change_values_assessment = (TEXT_ELE, bot_reply_msg) => {
    // eslint-disable-next-line no-lone-blocks
    {
      /* Initial round to handle change requests */
      if(window.virtual_assistant_functions
        .is_airports_change_values_command(
          TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", ""))){

        if(wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), true);
          const IN_ORIGIN_DESTINATION_STAGE=true;
          window.window.show_interapting_message(window.virtual_assistant_functions.get_start_over_message(IN_ORIGIN_DESTINATION_STAGE), "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), true);
          window.show_interapting_message(window.virtual_assistant_functions.get_start_over_message(), "none");
        }
        wellgo_bot.step=BOT_STEPS.ORIGIN_DESTINATION;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && (window.virtual_assistant_functions
          .is_trip_round_change_values_command(
            TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")
          ))
      ){
        if(wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), true);
          window.show_interapting_message(`Yab! I should be expecting your  inputs..
            say something like '<span class="support_chat_bot_msg_highlights">
            round trip</span>' to include return flights... or something like'
            <span class="support_chat_bot_msg_highlights">one way</span>' for one way flights`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
        }
        wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;
      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && wellgo_bot.step!==BOT_STEPS.TRIP_ROUND
        && (window.virtual_assistant_functions
          .is_travel_dates_change_values_command(
            TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")))
      ){
        if(wellgo_bot.step===BOT_STEPS.TRAVEL_DATES){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`I got it...`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step=BOT_STEPS.TRAVEL_DATES;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && wellgo_bot.step!==BOT_STEPS.TRIP_ROUND
        && wellgo_bot.step!==BOT_STEPS.TRAVEL_DATES
        && (window.virtual_assistant_functions
          .is_cabin_class_change_values_command(
            TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")))
      ){
        if(wellgo_bot.step===BOT_STEPS.CABIN_CLASS){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`I got it...`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step=BOT_STEPS.CABIN_CLASS;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && wellgo_bot.step!==BOT_STEPS.TRIP_ROUND
        && wellgo_bot.step!==BOT_STEPS.TRAVEL_DATES
        && wellgo_bot.step!==BOT_STEPS.CABIN_CLASS
        && (window.virtual_assistant_functions
            .is_travelers_change_values_command(
              TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")))
      ){
        if(wellgo_bot.step===BOT_STEPS.TRAVELER_COUNT){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`I got it...`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step=BOT_STEPS.TRAVELER_COUNT;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && wellgo_bot.step!==BOT_STEPS.TRIP_ROUND
        && wellgo_bot.step!==BOT_STEPS.TRAVEL_DATES
        && wellgo_bot.step!==BOT_STEPS.CABIN_CLASS
        && wellgo_bot.step!==BOT_STEPS.TRAVELER_COUNT
        && (window.virtual_assistant_functions
            .is_flight_search_change_values_command(
              TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")))
      ){
        if(wellgo_bot.step===BOT_STEPS.FLIGHT_SEARCH){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`I got it...`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          window.show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step=BOT_STEPS.FLIGHT_SEARCH;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="wait...";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }else if(wellgo_bot.step!==BOT_STEPS.ORIGIN_DESTINATION
        && wellgo_bot.step!==BOT_STEPS.TRIP_ROUND
        && wellgo_bot.step!==BOT_STEPS.TRAVEL_DATES
        && wellgo_bot.step!==BOT_STEPS.CABIN_CLASS
        && wellgo_bot.step!==BOT_STEPS.FLIGHT_SEARCH
        && wellgo_bot.step!==BOT_STEPS.TRAVELER_COUNT
        && (window.virtual_assistant_functions
            .is_pnr_change_values_command(
              TEXT_ELE.value.trim().toLowerCase().replaceAll(" ", "")))
      ){
        if(wellgo_bot.step===BOT_STEPS.PNR_RECORD){
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          // eslint-disable-next-line no-undef
          window.show_interapting_message(`I got it...`, "none");
        }else{
          window.show_user_interapting_message(TEXT_ELE.value.trim(), "passive");
          // eslint-disable-next-line no-undef
          window.show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step=BOT_STEPS.PNR_RECORD;
        wellgo_bot.scroll_chat=true;
        wellgo_bot.isTripRoundFirstEntered=true;
        wellgo_bot.isPNRFirstEntered=true;
        wellgo_bot.isDatesFirstEntered=true;
        wellgo_bot.isCabinClassFirstEntered=true;
        wellgo_bot.isSearchingFlightFirstEnter=true;
        wellgo_bot.isGettingTravelersFirstEntered=true;
        wellgo_bot.selectedOriginAirport="";
        wellgo_bot.selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        wellgo_bot.hasBotReturnedResults=true;

      }
    }

    return bot_reply_msg;
}
window.virtual_assistant_flight_booking_change_values_assessment
=virtual_assistant_flight_booking_change_values_assessment;

let virtual_assistant_flight_booking_values_assessment = (TEXT_ELE, bot_reply_msg, bot_reply) => {
  // eslint-disable-next-line no-lone-blocks
  {
    // Step one: origin - destination
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION){
        let validation = window.validate_user_airports_input_for_bot(TEXT_ELE.value.trim());
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg=bot_reply.msg;
          window.virtual_assistant_functions.reset_bot_status();
          if(document.querySelectorAll(".departure_airport_suggested_by_bot"))
            window.clear_airports_suggested_by_bot_ids()

        }else if(window.virtual_assistant_functions
            .is_selected_airports_confirmation_command(
              TEXT_ELE.value.trim().toLowerCase())
        ){
          if(wellgo_bot.selectedOriginAirport==="" && wellgo_bot.selectedDestinationAirport===""){
            bot_reply_msg=`Please select your airports above or enter new ones in the form of airport-name to another-airport-name.. eg. '
            <span class="support_chat_bot_msg_highlights">Kotoka to Laguardia</span>'`
          }else if(wellgo_bot.selectedOriginAirport===""){
            bot_reply_msg=`umm... You did not select departure airport`
          }else if(wellgo_bot.selectedDestinationAirport===""){
            bot_reply_msg=`Please select your destination airport`
          }else{
            window.clear_airports_suggested_by_bot_ids();
            wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
          }
        }else{
          if(window.virtual_assistant_functions
            .is_saying_yes_command(TEXT_ELE.value.trim().toLowerCase())
            && wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION
          ){
            if(wellgo_bot.selectedOriginAirport==="" && wellgo_bot.selectedDestinationAirport===""){
              bot_reply_msg=`Please select your airports above or enter new ones in the form of airport-name to another-airport-name.. eg. '
              <span class="support_chat_bot_msg_highlights">Kotoka to Laguardia</span>'`
            }else if(wellgo_bot.selectedOriginAirport===""){
              bot_reply_msg=`umm... You did not select departure airport`
            }else if(wellgo_bot.selectedDestinationAirport===""){
              bot_reply_msg=`Please select your destination airport`
            }else{
              wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
            }
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
                // Origin airport
                // Code: wellgo_bot.selectedOriginAirport=origin_airpots[0].IATA;
                // Code: add_origin_input_airport_to_history(origin_airpots[0].IATA)
                let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.departure.airport = origin_airpots[0].IATA;

                if(origin_airpots[0].IATA === "\\N" || origin_airpots[0].IATA === "N"){
                  // Code: wellgo_bot.selectedOriginAirport=origin_airpots[0].ICAO;
                  // Code: add_origin_input_airport_to_history(origin_airpots[0].ICAO)
                  flight_search_data.itinerary.departure.airport = origin_airpots[0].ICAO;
                }

                // Code: window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

                // Destination airport
                // Code: add_destination_input_airport_to_history(destination_airports[0].IATA)
                // Code: let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.arrival.airport = destination_airports[0].IATA;

                if(destination_airports[0].IATA === "\\N" || destination_airports[0].IATA === "N"){
                  // Code: wellgo_bot.selectedDestinationAirport=icao
                  // Code: add_destination_input_airport_to_history(destination_airports[0].ICAO)
                  flight_search_data.itinerary.arrival.airport = destination_airports[0].ICAO;
                }

                window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

                let origin_airports_txt = `${origin_airpots[0].city} (${origin_airpots[0].name} - ${origin_airpots[0].country})`;
                let destination_airports_txt = `${destination_airports[0].city} (${destination_airports[0].name} - ${destination_airports[0].country})`;
                bot_reply_msg =  `so you said from <span class="support_chat_bot_msg_highlights">
                ${validation.origin}</span> to <span class="support_chat_bot_msg_highlights">
                ${validation.destination}</span> and I found <span class="support_chat_bot_msg_highlights">
                ${origin_airports_txt}</span> to <span class="support_chat_bot_msg_highlights">
                ${destination_airports_txt}</span>... Say '<span class="support_chat_bot_msg_highlights">
                yes</span>' to continue or enter new places or say '<span class="support_chat_bot_msg_highlights">
                stop</span>' to do something else`;

              }else if(origin_airpots.length < 1 && destination_airports.length < 1){
                bot_reply_msg = `Umm... I didn't find any airports for '
                <span class="support_chat_bot_msg_highlights">${validation.origin} to ${validation.destination}</span>
                '... Please let's try to enter valid information. Try again...`;
              }else if(origin_airpots.length < 1){
                bot_reply_msg = `Umm... I didn't find any airports for '
                <span class="support_chat_bot_msg_highlights">${validation.origin}'</span>
                ... Please let's try to enter valid information. Try again...`;
              }else if(destination_airports.length < 1){
                bot_reply_msg = `Umm... I didn't find any airports for '<span class="support_chat_bot_msg_highlights">${validation.destination}'</span>
                ... Please let's try to enter valid information. Try again...`;
              }else{
                window.clear_airports_suggested_by_bot_ids();
                wellgo_bot.scroll_chat=false;
                let confirm_msg=window.virtual_assistant_functions.get_airports_found_confirmation_message();
                bot_reply_msg = `
                ${confirm_msg}
                <br/><br/>
                <span style="font-weight: bolder; font-size: 13px;">Departure</span><br/>`;
                for(let i=0;i<origin_airpots.length;i++){
                  bot_reply_msg += `
                    <p id="departure_airport_suggested_by_bot_${i}" class="departure_airport_suggested_by_bot" onclick="select_departure_airports_suggested_by_bot('${origin_airpots[i].IATA}', '${origin_airpots[i].ICAO}', 'departure_airport_suggested_by_bot_${i}')" style="margin-bottom: 5px; background-color: rgba(244,0,0,0.1); cursor: pointer; padding: 20px; font-size: 14px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px">
                      ${origin_airpots[i].city} - ${origin_airpots[i].name} - ${origin_airpots[i].country}
                    </p>
                  `;
                  if(i>4)break;
                }
                bot_reply_msg += `<br/><span style="font-weight: bolder; font-size: 13px;">Destination</span><br/>`
                for(let i=0;i<destination_airports.length;i++){
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

    // Step two: trip-round
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
      bot_reply_msg = window.virtual_assistant_functions.get_trip_round_start_message();
      if(!wellgo_bot.isTripRoundFirstEntered){
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg=bot_reply.msg;
          window.virtual_assistant_functions.reset_bot_status();
        }else{

          if(window.virtual_assistant_functions.verify_trip_round_if_query_accepted(
              TEXT_ELE.value.trim().toLowerCase())
              && wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
            wellgo_bot.step=BOT_STEPS.TRAVEL_DATES;
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            if(TEXT_ELE.value.trim().toLowerCase() === "one way"
              || TEXT_ELE.value.trim().toLowerCase() === "one-way"
              || TEXT_ELE.value.trim().toLowerCase() === "oneway"){
                flight_search_data.type = "one-way";
            }else if(TEXT_ELE.value.trim().toLowerCase() === "round trip"
              || TEXT_ELE.value.trim().toLowerCase() === "round-trip"
              || TEXT_ELE.value.trim().toLowerCase() === "roundtrip"){
                flight_search_data.type = "round-trip";
            }
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
          }else{
            bot_reply_msg = window.virtual_assistant_functions.get_trip_round_input_validation_error_message();
            wellgo_bot.step=BOT_STEPS.TRIP_ROUND;
          }
        }
      }
      if(!window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
        wellgo_bot.isTripRoundFirstEntered=false;
      }
    }

    // Step three: travel dates
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.TRAVEL_DATES){
      wellgo_bot.isTripRoundFirstEntered=true;
      let travel_dates_init_message="";
      if(JSON.parse(localStorage.getItem("search_obj")).type==="one-way"){
        travel_dates_init_message =
          window.virtual_assistant_functions.get_travel_dates_start_message("one-way");
      }else if(JSON.parse(localStorage.getItem("search_obj")).type==="round-trip"){
        travel_dates_init_message =
          window.virtual_assistant_functions.get_travel_dates_start_message("round-trip");
      }
      bot_reply_msg = travel_dates_init_message;
      if(!wellgo_bot.isDatesFirstEntered){
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg=bot_reply.msg;
          window.virtual_assistant_functions.reset_bot_status();
        }else{
          let validation = window.validate_user_dates_input_for_bot(
            TEXT_ELE.value.trim(),
            JSON.parse(localStorage.getItem("search_obj")).type
          )
          console.log("date validation: ", validation);
          if(!validation.isValid){
            bot_reply_msg = validation.msg;
          }else if(validation.isValid){
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            if(JSON.parse(localStorage.getItem("search_obj")).type==="one-way"){
              flight_search_data.itinerary.departure.date = validation.date.split("T")[0];
              flight_search_data.itinerary.arrival.date = validation.date.split("T")[0];
            }else if(JSON.parse(localStorage.getItem("search_obj")).type==="round-trip"){
              flight_search_data.itinerary.departure.date = validation.dep_date.split("T")[0];
              flight_search_data.itinerary.arrival.date = validation.arr_date.split("T")[0];
            }
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
            wellgo_bot.step = BOT_STEPS.CABIN_CLASS;
            bot_reply_msg = validation.msg;
          }
        }
      }
      if(!window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
        wellgo_bot.isDatesFirstEntered=false;
      }
    }

    // Step four: cabin class
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.CABIN_CLASS){
      wellgo_bot.isDatesFirstEntered=true;
      wellgo_bot.hasBotReturnedResults=true;
      bot_reply_msg = window.virtual_assistant_functions.get_cabin_class_input_start_message();
      if(!wellgo_bot.isCabinClassFirstEntered){
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          window.virtual_assistant_functions.reset_bot_status();
        }else{
          if( window.virtual_assistant_functions
              .verify_cabin_class_if_query_accepted(
                TEXT_ELE.value.trim().toLowerCase()
              )
          ){
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            // Allowed Values -> "first class", "first-class", "firstclass", "first", "economy", "business", "premium", "cheapest"
            if(TEXT_ELE.value.trim().toLowerCase() === "first class"
                || TEXT_ELE.value.trim().toLowerCase() === "first-class"
                || TEXT_ELE.value.trim().toLowerCase() === "firstclass"
                || TEXT_ELE.value.trim().toLowerCase() === "first"
            ){
              flight_search_data.itinerary.cabin = "FIRST"
            } else {
              flight_search_data.itinerary.cabin = TEXT_ELE.value.trim().toUpperCase();
            }
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
            wellgo_bot.step = BOT_STEPS.TRAVELER_COUNT;
            bot_reply_msg = window.virtual_assistant_functions.get_travelers_input_start_message();
          }else{
            bot_reply_msg = window.virtual_assistant_functions.get_cabin_class_input_validation_error_message();
          }
        }
      }
      if(!window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
        wellgo_bot.isCabinClassFirstEntered=false;
      }

    }

    //step five: gettings travlers
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.TRAVELER_COUNT){
      wellgo_bot.isCabinClassFirstEntered=true;

      //TEXT_ELE.value = `1 adult, 0 child, 0 infant`;
      //TEXT_ELE.focus();

      if(!wellgo_bot.isGettingTravelersFirstEntered){
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg=bot_reply.msg;
          window.virtual_assistant_functions.reset_bot_status();
        }else{
          let validation = window.validate_travelers_input_for_bot(TEXT_ELE.value.trim().toLowerCase())
          console.log("validation: ", validation);
          if(!validation.isValid){
            bot_reply_msg = window.virtual_assistant_functions.get_travelers_input_validation_error_message();
          }else{
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            flight_search_data.itinerary.travelers.adults = validation.adults;
            flight_search_data.itinerary.travelers.children = validation.children;
            flight_search_data.itinerary.travelers.infants = validation.infants;
            window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
            wellgo_bot.step = BOT_STEPS.FLIGHT_SEARCH;
            bot_reply_msg = `Great! give me a minute to get you some flight schedules`;
          }
        }
      }
      if(!window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
        wellgo_bot.isGettingTravelersFirstEntered=false;
      }
    }

    //step six: searching flight schedules
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.FLIGHT_SEARCH){

      // Go to search page - temporary solution

      setTimeout(()=>{
        window.location = `${window.location.origin}/search`;
      }, 5000);  
      // Above code to be removed

      wellgo_bot.isGettingTravelersFirstEntered=true;
      let interim_msg=[
        `Looking Good! 💪 I found some really good flights for you... please view and select which one you want. And just reply '
        <span class="support_chat_bot_msg_highlights">done</span>' when you finish.`,
        `Aha! 😃 These flights are really good... please view and select which one you want. And then reply '
        <span class="support_chat_bot_msg_highlights">done</span>' so we can proceed.`,
      ]
      setTimeout(()=>{
        if(wellgo_bot.hasBotReturnedResults){
          wellgo_bot.scroll_chat=false;
          window.show_interapting_message(`
          ${interim_msg[Math.floor(Math.random() * interim_msg.length)]}
          <br/><br/>`, false, false);
          let itns = `<p style="font-weight: bolder; font-size: 12px; margin-bottom: 10px;">Flight Schedules</p>`;
          for(let i=0;i<5;i++){
            itns += `
              <p id="search_result_by_bot_${i}" class="search_result_by_bot" onclick="main_bot_view_flights_all_details_func()" style="margin-bottom: 5px; background-color: rgba(244,0,0,0.1); cursor: pointer; padding: 20px; font-size: 17px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; transition: all 0.2s ease-out; min-width: 270px;">
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
          window.show_interapting_message(itns, false, false);
          wellgo_bot.hasBotReturnedResults=false;
        }
      }, 6000)

      if(!wellgo_bot.isSearchingFlightFirstEnter){
        if(window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg = window.virtual_assistant_functions.get_in_activity_stop_command_reponse();
          window.virtual_assistant_functions.reset_bot_status();
          window.clear_flight_results_showed_by_bot();
        }else if(window.virtual_assistant_functions
            .is_selected_a_flight_confirmation_command(
              TEXT_ELE.value.trim().toLowerCase()
            )
        ){
          window.show_user_interapting_message(TEXT_ELE.value, false);
          TEXT_ELE.value="";
          if(!wellgo_bot.selectedAFlight){
            wellgo_bot.scroll_chat=true;
            let rpl_msgs = [
              `Please select a flight above then after, say '<span class="support_chat_bot_msg_highlights">
              done</span>'`,
              `Umm... You have'nt selected a flight...`,
              `You should select a flight first, then say '<span class="support_chat_bot_msg_highlights">
              done</span>' ...`
            ]
            bot_reply_msg=rpl_msgs[Math.floor(Math.random()*rpl_msgs.length)];
          }else{
            document.getElementById("main_bot_view_flights_all_details").style.display="none";
            document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
            wellgo_bot.selectedAFlight=false;
            document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
            window.clear_flight_results_showed_by_bot();
            window.$("#hp_support_chat_items").scrollTop(window.$("#hp_support_chat_items").prop("scrollHeight"));
            wellgo_bot.step="traveler-details-collection";
            let slctedItn = `Oh nice pick! ... <br/><br/>
                <p id="search_result_by_bot_{i}" class="search_result_by_bot" onclick="main_bot_view_selected_flights_all_details_func()" style="margin-bottom: 5px; background-color: rgba(244,244,0,0.1); cursor: pointer; padding: 20px; font-size: 17px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; transition: all 0.2s ease-out;">
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
              setTimeout(()=>window.show_interapting_message(slctedItn,"none", false),2000);
              let repmsg=[
                `<span style="font-family: 'Prompt', sans-serif; font-size: 14px">
                  Perfect! 👏🏼 Now time to save your flight, <br/>
                  In order to do that lets put the traveler(s) on profile...<br/>
                  If you look below, you will see the Form I'm about to send over.
                  Please fill out the form and then say done once you finish.
                </span>`,
                `<span style="font-family: 'Prompt', sans-serif; font-size: 14px">
                  In order to finish booking your flight, we'll need a record for the travelers...
                  Please fill out the Form I'm about to send over.Its down below 👇🏼 ...
                </span>`
              ]
              setTimeout(()=>window.show_interapting_message(repmsg[Math.floor(Math.random() * repmsg.length)],"none"),2000);
              wellgo_bot.scroll_chat=false;
            wellgo_bot.step=BOT_STEPS.PNR_RECORD;
            wellgo_bot.isPNRFirstEntered=true;
          }
        }else{

          let interim_msg=[
            `✋🏿 Please holdon while I search your flight... or say '<span class="support_chat_bot_msg_highlights">
              stop</span>' if we're not doing it anymore...`,
            `Please wait ✋🏿, it takes time to get good deals out here... or say '<span class="support_chat_bot_msg_highlights">
              stop</span>' incase you wanted to stop...`,
          ]
          bot_reply_msg = interim_msg[Math.floor(Math.random() * interim_msg.length)];

        }
      }
      if(!window.virtual_assistant_functions
            .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
        wellgo_bot.isSearchingFlightFirstEnter=false
      }
    }

    //step seven: pnr recording
    if(wellgo_bot.status===wellgo_bot.status_names.BEGIN_AIR_BOOKING
      && wellgo_bot.step===BOT_STEPS.PNR_RECORD){
      if(wellgo_bot.isPNRFirstEntered){
        //setTimeout(()=>window.show_interapting_message(`So lets do that now...`, "none", false),2000);
        //setTimeout(()=>window.show_interapting_message(`Please complete the following flight passenger form`, "none", false),2000);
        setTimeout(()=>window.show_pnr_form("none"),5000);
        bot_reply_msg = "";
      }else{
        if(window.virtual_assistant_functions
          .is_stop_current_activity_command(TEXT_ELE.value.trim().toLowerCase())){
          bot_reply_msg=bot_reply.msg;
          window.virtual_assistant_functions.reset_bot_status();
          window.clear_flight_results_showed_by_bot();

        }else{
          let name_parts = TEXT_ELE.value.trim().split(" ");
          if(name_parts.length === 2){
            window.show_user_interapting_message(TEXT_ELE.value.trim(), true);
            window.show_interapting_message(`Perfect...`, "none");
            window.show_interapting_message(`We need your address next, it should look like
            '<span class="support_chat_bot_msg_highlights">street address, town, city, country zipcode</span>'
            ..eg. '<span class="support_chat_bot_msg_highlights">234 Rector Street, Manhattan, New York, USA 10232</span>'`, "none");
            //bot_reply_msg= "Please enter your address information!";
            wellgo_bot.scroll_chat=false;
          }else{
            let err_reply_msgs = [
              "Please name must be in two parts: first and last name",
              "Oops.. name must be a first and last name",
              "Make sure, you've input your first and last name.. try again please"
            ];
            bot_reply_msg = err_reply_msgs[Math.floor(Math.random() * err_reply_msgs.length)]
          }
          //alert("pnr recording");
        }
      }
      wellgo_bot.isPNRFirstEntered=false
    }
  }
  return {
    bot_reply, bot_reply_msg
  }
}
window.virtual_assistant_flight_booking_values_assessment
=virtual_assistant_flight_booking_values_assessment
