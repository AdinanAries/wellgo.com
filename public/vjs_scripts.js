let search_obj = {
  type: "one-way",
  itinerary: {
    departure: {
      airport: "MAD",
      date: "2022-23-03"
    },
    arrival:{
      airport: "CGD",
      date: "2022-24-03"
    },
    cabin: "ECONOMY",
    travelers: {
      adults: 1,
      children: 0,
      infants: 0
    }
  }
}
if(localStorage.getItem("search_obj")){
  //other code here
}else{
  localStorage.setItem("search_obj", JSON.stringify(search_obj));
}

function add_clouds_to_animated_loader(){
  if(document.getElementById("animated_loader")){
    document.getElementById("animated_loader").innerHTML += `
      <div class="preloader" style="opacity: 1; ">
        <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve" style="opacity: 1; margin-left: 0px; margin-top: 0px;">
          <g>
            <path fill="none" d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path>
            <path fill="none" d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path>
            <path fill="none" d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path>
            <path fill="none" d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path>
                <path fill="none" d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path>
                <path fill="none" d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path>
                <path fill="none" d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path>
                <path fill="none" d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path>
                <path fill="none" d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path>
                <path fill="none" d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path>
                <path fill="none" d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path>
                <path fill="none" d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path>
                <path fill="none" d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"></path>
            </g>
        </svg>

        <svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
          <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
        </svg>
        <svg version="1.1" id="cloud2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
          <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
        </svg>

        <svg version="1.1" id="cloud3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve">
          <path fill="none" d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path>
        </svg>

        <div class="rain">
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
        </div>

      </div>
      <div class="text">
        WE'LL GET YOU THERE IN A SEC...
      </div>
    `;
  }
}

function show_start_checkout_page(obj){
  document.getElementById("booking_start_checkout_page_container").innerHTML = return_start_checkout_info(obj);
  document.getElementById("booking_start_checkout_page_container").style.display = "block";
}

function show_add_ancillaries_container(){
  $("#add_ancillaries_container").slideDown("fast");
}

function hide_add_ancillaries_container(){
  $("#add_ancillaries_container").slideUp("fast");
}

function start_select_seat_ancillary(){
  show_add_ancillaries_container();
  document.getElementById("seat_ancillary_settings_container").style.display="block";
  document.getElementById("meal_ancillary_settings_container").style.display="none";
  document.getElementById("luggage_ancillary_settings_container").style.display="none";
}

function start_add_luggage_ancillary(){
  show_add_ancillaries_container();
  document.getElementById("seat_ancillary_settings_container").style.display="none";
  document.getElementById("meal_ancillary_settings_container").style.display="none";
  document.getElementById("luggage_ancillary_settings_container").style.display="block";
}

function start_add_meal_ancillary(){
  show_add_ancillaries_container();
  document.getElementById("seat_ancillary_settings_container").style.display="none";
  document.getElementById("meal_ancillary_settings_container").style.display="block";
  document.getElementById("luggage_ancillary_settings_container").style.display="none";
}

function cancel_add_ancillaries_container(){
  hide_add_ancillaries_container();
}

//search function
document.getElementById("home_search_form_submit_btn").addEventListener("click", e=>{
  e.preventDefault();

  if(document.getElementById("search_results_list_items"))
    document.getElementById("search_results_list_items").innerHTML = '';

  add_clouds_to_animated_loader();
  if(document.getElementById("animated_loader"))
    document.getElementById("animated_loader").style.display = "block";
  if(document.getElementById("search_result_important_notice"))
    document.getElementById("search_result_important_notice").innerHTML = return_search_results_important_notice_loader();
  if(document.getElementById("search_list_main__settings_section"))
    document.getElementById("search_list_main__settings_section").innerHTML = return_search_results_filters_and_sort_loader();
  if(document.getElementById("search_results_mobile_top_itin_display"))
    document.getElementById("search_results_mobile_top_itin_display").innerHTML = return_search_results_mobile_top_itin_display_loader();
  for(let i=0; i<6; i++){
    //document.getElementById("search_results_list_items").innerHTML += return_ticket_card_loader();
  }

  //search_submit_function();

});
if(document.getElementById("sp_search_form_submit_btn")){
  document.getElementById("sp_search_form_submit_btn").addEventListener("click", e=>{
    e.preventDefault();

    if(document.getElementById("search_results_list_items"))
      document.getElementById("search_results_list_items").innerHTML = '';

    add_clouds_to_animated_loader();
    document.getElementById("animated_loader").style.display = "block";
    document.getElementById("search_result_important_notice").innerHTML = return_search_results_important_notice_loader();
    document.getElementById("search_list_main__settings_section").innerHTML = return_search_results_filters_and_sort_loader();
    document.getElementById("search_results_mobile_top_itin_display").innerHTML = return_search_results_mobile_top_itin_display_loader();
    for(let i=0; i<6; i++){
      if(document.getElementById("search_results_list_items"))
        document.getElementById("search_results_list_items").innerHTML += return_ticket_card_loader();
    }

    search_submit_function();

  });
}

let bot_server_base_url = "http://localhost:5001";
//let bot_server_base_url = "https://wellgo-vta.herokuapp.com";

var get_answer_from_bot = (user_query) => {
  //console.log(user_query)
  //console.log("bot status: ", wellgo_bot.status)
  return $.ajax({
      type: "POST",
      url: `${bot_server_base_url}/query_bot/`,
      data: JSON.stringify({
          bot_status: wellgo_bot.status,
          q: user_query
      }),
      contentType: "application/jSON; charset=utf-8",
      dataType: "json",
      success: res => {
          console.log(res)
          return res
      },
      error: err => {
          console.log(err)
          return {
              msg: "Ohh! I think we have a problem on network. Don't forget the internet is my brain..."
          }
      }
  })
}

var get_bot_query_autocomplete = (input_q)=>{
  return $.ajax({
    type: "POST", 
    url: `${bot_server_base_url}/q_autocomplete/`,
    data: JSON.stringify({
      bot_status: wellgo_bot.status,
      q: input_q
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: res => {
      //console.log(res);
      return res;
    },
    error: err => {
      console.log(err)
      return err.responseText;
    }
  });
} 

let scroll_chat=true;
let isTripRoundFirstEntered=true;
let isPNRFirstEntered=true;
let isDatesFirstEntered=true;
let isCabinClassFirstEntered=true;
let isSearchingFlightFirstEnter=true;
let isGettingTravelersFirstEntered=true;
let selectedOriginAirport="";
let selectedDestinationAirport=""

let selectedAFlight=false;
let hasBotReturnedResults=true;
function show_interapting_message(msg, scroll_to_bottom, do_typing=true){
  if(do_typing){
    document.getElementById("hp_support_chat_items").innerHTML += return_each_bot_chat_message_markup(msg);
  }else{
    document.getElementById("hp_support_chat_items").innerHTML += return_each_bot_chat_message_markup_without_typing(msg);
  }
  if(scroll_to_bottom===true){
    $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
  }else if(scroll_to_bottom==="none"){
    //do nothing or don't scroll
  }else{
    document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
}
function show_pnr_form(scroll_to_bottom){
  document.getElementById("hp_support_chat_items").innerHTML += return_PNR_form();
  if(scroll_to_bottom===true){
    $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
  }else if(scroll_to_bottom==="none"){
    //do nothing or don't scroll
  }else{
    document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
}

function show_user_interapting_message(msg, clear_input){
  document.getElementById("hp_support_chat_items").innerHTML += return_each_user_chat_message_markup(msg);
  if(clear_input==true){
    document.querySelector("#main_support_chat_user_input_txt_container textarea").value="";
  }else if(clear_input=="passive"){
    document.querySelector("#main_support_chat_user_input_txt_container textarea").value="$%#%%%#@@&&&**(*)";
  }else{
    //do nothing for now
  }
}

function select_departure_airports_suggested_by_bot(iata, icao,elemid){
  Array.from(document.querySelectorAll(".departure_airport_suggested_by_bot")).forEach(each=>{
    each.style.backgroundColor="rgba(244,0,0,0.1)"
  });
  document.getElementById(elemid).style.backgroundColor="rgba(244,0,0,0.3)";
  selectedOriginAirport=iata;
  //add_origin_input_airport_to_history(iata)
  let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
  flight_search_data.itinerary.departure.airport = iata;
  //fligh_search_data.origin_iata = iata;

  if(iata === "\\N" || iata === "N"){
    selectedOriginAirport=icao;
    //add_origin_input_airport_to_history(icao)
    flight_search_data.itinerary.departure.airport = icao;
  }

  window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

}
function select_destination_airports_suggested_by_bot(iata, icao, elemid){
  Array.from(document.querySelectorAll(".destination_airport_suggested_by_bot")).forEach(each=>{
    each.style.backgroundColor="rgba(0,244,0,0.1)"
  });
  document.getElementById(elemid).style.backgroundColor="rgba(0,244,0,0.3)";
  selectedDestinationAirport=iata
  //add_destination_input_airport_to_history(iata)
  let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
  flight_search_data.itinerary.arrival.airport = iata;
  
  if(iata === "\\N" || iata === "N"){
    selectedDestinationAirport=icao
    //add_destination_input_airport_to_history(icao)
    flight_search_data.itinerary.arrival.airport = icao;
  }

  window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}
function clear_airports_suggested_by_bot_ids(){
  Array.from(document.querySelectorAll(".departure_airport_suggested_by_bot")).forEach(each=>{
    each.id="";
  });
  Array.from(document.querySelectorAll(".destination_airport_suggested_by_bot")).forEach(each=>{
    each.id="";
  });
}
function clear_flight_results_showed_by_bot(){
  Array.from(document.querySelectorAll(".search_result_by_bot")).forEach(each=>{
    each.innerHTML=`
      <span style="font-size: 14px;">
      <i style="margin-right: 10px; color: red;" class="fa fa-exclamation-triangle"></i> AD deleted a message...</span>
    `;
    each.style.pointerEvents="none";
    //each.style.height="0";
  });
}
function select_a_flight_from_bot_list(){
  if(document.getElementById("select_a_ticket_from_bot_list_chck").checked){
    document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="flex";
    selectedAFlight=true;
  }else{
    document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
    selectedAFlight=false;
  }
}
document.getElementById("main_bot_view_flights_all_details_select_btn").addEventListener("click",e=>{
  select_a_flight_from_bot_list();
});
document.getElementById("main_bot_view_flights_all_details_deselect_btn").addEventListener("click",e=>{
  document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
  selectedAFlight=false;
  document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
});
document.getElementById("main_bot_view_flights_all_details_cancel_btn").addEventListener("click", e=>{
  document.getElementById("main_bot_view_flights_all_details").style.display="none";
  document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
  selectedAFlight=false;
  document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
});
document.getElementById("main_bot_view_selected_flights_all_details_cancel_btn").addEventListener("click", e=>{
  document.getElementById("main_bot_view_selected_flights_all_details").style.display="none";
  //document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
  //selectedAFlight=false;
  //document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
});
function main_bot_view_flights_all_details_func(){
  document.getElementById("main_bot_view_flights_all_details").style.display="block";
}
function main_bot_view_selected_flights_all_details_func(){
  document.getElementById("main_bot_view_selected_flights_all_details").style.display="block";
}

const BOT_STEPS = {
  TRIP_ROUND: "trip-round",
  ORIGIN_DESTINATION: "origin-destination",
  FLIGHT_SEARCH: "searching-flight",
  TRAVELER_COUNT: "getting-travelers",
  PNR_RECORD: "pnr-recording",
};
const bot_steps_flow=[
  /*{
    step: BOT_STEPS.ORIGIN_DESTINATION,
    msgs: [],
  },*/
  {
    step: BOT_STEPS.TRIP_ROUND,
    msgs: [],
  },
  {
    step: BOT_STEPS.TRAVELER_COUNT,
    msgs: [],
  },
  {
    step: BOT_STEPS.FLIGHT_SEARCH,
    msgs: [],
  },
  {
    step: BOT_STEPS.PNR_RECORD,
    msgs: [],
  }
];
let steps_flow=bot_steps_flow;

async function run_chat_instance(){

  scroll_chat=true;
  if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() !== "")
    document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_loading_markup("loading...")
  //console.log(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim())
  let bot_reply=undefined;
  let bot_reply_msg;
  try{
    bot_reply = await get_answer_from_bot(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim());
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
    
      {
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeairports" 
        || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="startover"
        || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="startagain"){
      
        if(wellgo_bot.step===BOT_STEPS.ORIGIN_DESTINATION){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), true);
          show_interapting_message(`Yab! I should be expecting your airport inputs..
            say something like '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... Else say '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>' so we can do something else...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), true);
          show_interapting_message(`K.. cool.. in order to get the new airports please say something like 
            '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... Else say '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>' so we can do something else...`, "none");
        }
        wellgo_bot.step="origin-destination";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetrip" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetripround"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="addreturnflight")){
      
        if(wellgo_bot.step===BOT_STEPS.TRIP_ROUND){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), true);
          show_interapting_message(`Yab! I should be expecting your  inputs..
            say something like '<span class="support_chat_bot_msg_highlights">
            round trip</span>' to include return flights... or something like'
            <span class="support_chat_bot_msg_highlights">one way</span>' for one way flights`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          //show_interapting_message(`K.. cool..`, "none");
        }
        wellgo_bot.step="trip-round";//steps_flow.splice(Math.floor(Math.random()*steps_flow.length), 1);
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && wellgo_bot.step!=="trip-round" &&
      (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changedates" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changedate"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetraveldates"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetraveldate")){
      
        if(wellgo_bot.step==="departure-return-dates"){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`I got it...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step="departure-return-dates";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && wellgo_bot.step!=="trip-round" && wellgo_bot.step!=="departure-return-dates" &&
      (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changecabinclass" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeflightclass"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeclass"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changecabin")){
      
        if(wellgo_bot.step==="cabin-class"){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`I got it...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step="cabin-class";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && wellgo_bot.step!=="trip-round" && wellgo_bot.step!=="departure-return-dates" && wellgo_bot.step!=="cabin-class" &&
      (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetravelers" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeflighttravelers"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changetraveler"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeflighttraveler")){
      
        if(wellgo_bot.step==="getting-travelers"){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`I got it...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step="getting-travelers";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && wellgo_bot.step!=="trip-round" && wellgo_bot.step!=="departure-return-dates" && wellgo_bot.step!=="cabin-class" && wellgo_bot.step!=="getting-travelers" &&
      (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeflight" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="pickanotherflight"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="chooseanotherflight"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changeflightschedule")){
      
        if(wellgo_bot.step==="searching-flight"){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`I got it...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step="searching-flight";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="wait...";
        //will change this later
        hasBotReturnedResults=true;
        
      }else if(wellgo_bot.step!=="origin-destination" && wellgo_bot.step!=="trip-round" && wellgo_bot.step!=="departure-return-dates" && wellgo_bot.step!=="cabin-class" && wellgo_bot.step!=="searching-flight" && wellgo_bot.step!=="getting-travelers" &&
      (document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changepassengerrecords" 
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="restartpassengerrecords"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changepnr"
      || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="changepassengernamerecord")){
      
        if(wellgo_bot.step==="pnr-recording"){
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`I got it...`, "none");
        }else{
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), "passive");
          show_interapting_message(`OK...`, "none");
        }
        wellgo_bot.step="pnr-recording";
        scroll_chat=true;
        isTripRoundFirstEntered=true;
        isPNRFirstEntered=true;
        isDatesFirstEntered=true;
        isCabinClassFirstEntered=true;
        isSearchingFlightFirstEnter=true;
        isGettingTravelersFirstEntered=true;
        selectedOriginAirport="";
        selectedDestinationAirport="";
        bot_reply_msg="";
        //will change this later
        hasBotReturnedResults=true;

      }
    }

    //----------------------flight booking process---------------------------------------//
    //step one: origin - destination
    {
      if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="origin-destination"){
        let validation = validate_user_airports_input_for_bot(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim());
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          
          //bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          bot_reply_msg=bot_reply.msg;
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";
          if(document.querySelectorAll(".departure_airport_suggested_by_bot"))
            clear_airports_suggested_by_bot_ids()

        }else if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "done"){
          
          if(selectedOriginAirport==="" && selectedDestinationAirport===""){
            bot_reply_msg=`Please select your airports above or enter new ones in the form of airport-name to another-airport-name.. eg. '
            <span class="support_chat_bot_msg_highlights">Kotoka to Laguardia</span>'`
          }else if(selectedOriginAirport===""){
            bot_reply_msg=`umm... You did not select departure airport`
          }else if(selectedDestinationAirport===""){
            bot_reply_msg=`Please select your destination airport`
          }else{
            clear_airports_suggested_by_bot_ids();
            wellgo_bot.step="trip-round";//steps_flow.splice(Math.floor(Math.random()*steps_flow.length), 1);
          }
        }else{
          if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "yes" && wellgo_bot.step==="origin-destination"){
            wellgo_bot.step="trip-round";//steps_flow.splice(Math.floor(Math.random()*steps_flow.length), 1);
          }else{
            wellgo_bot.step="origin-destination";
            if(validation.isValid){
              
              //find airports here;
              //if origin and destination airports contains more that one element, then give you a list using div containers to select from
              //after selection, set wellgo_bot.step="departure-arrival-dates"
              let origin_airpots = filter_airports_array_based_input_value(validation.origin);
              let destination_airports = filter_airports_array_based_input_value(validation.destination);
              console.log(origin_airpots);
              console.log(destination_airports);
              if(origin_airpots.length === 1 && destination_airports.length === 1){

                //origin airport
                //selectedOriginAirport=origin_airpots[0].IATA;
                //add_origin_input_airport_to_history(origin_airpots[0].IATA)
                let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.departure.airport = origin_airpots[0].IATA;
                
                if(origin_airpots[0].IATA === "\\N" || origin_airpots[0].IATA === "N"){
                  //selectedOriginAirport=origin_airpots[0].ICAO;
                  //add_origin_input_airport_to_history(origin_airpots[0].ICAO)
                  flight_search_data.itinerary.departure.airport = origin_airpots[0].ICAO;
                }

                //window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

                //destination airport
                //add_destination_input_airport_to_history(destination_airports[0].IATA)
                //let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.arrival.airport = destination_airports[0].IATA;
                
                if(destination_airports[0].IATA === "\\N" || destination_airports[0].IATA === "N"){
                  //selectedDestinationAirport=icao
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
                clear_airports_suggested_by_bot_ids();
                scroll_chat=false;
                let confirm_msg=[
                  `Cool.. I found a couple airports 🛫, select your departure and destination airports and then say '<span class="support_chat_bot_msg_highlights">
                  done</span>' after that...`,
                  `👍 Please.. look through the following airports 🛫, select your departure and destination and then reply '<span class="support_chat_bot_msg_highlights">
                  done</span>' when you finish`,
                  `Perfect! these 👇 airports 🛫 matched your reply.. Please select yours and reply with '<span class="support_chat_bot_msg_highlights">done</span>' to confirm`,
                  `Great! These airports 👇 were found for your previous reply. Please select yours and reply '<span class="support_chat_bot_msg_highlights">done</span>' to proceed`,
                  `Looking good 🙂... Please select your 🛫 airports from the list below and reply with '<span class="support_chat_bot_msg_highlights">done</span>' so I can confirm` ,
                  `🙂 We're not wasting any of your time 🕐. Please select your airports and 'then say <span class="support_chat_bot_msg_highlights">done</span>' so we can proceed quickly`,
                  `Hey Umm! 🤔 The lists below 👇 have departure and destination airports. Please select yours then reply with '<span class="support_chat_bot_msg_highlights">done</span>', then we will proceed.`,
                  `Got it. 🤔 We found you some airports for depature and destination. You may pick yours and reply saying '<span class="support_chat_bot_msg_highlights">done</span>' to confirm with me`,
                  `😃 You know.. when the prices get good like they are right now, we dont waste any time booking your flight. I have found a couple airports listed below 👇. Please select yours and reply '<span class="support_chat_bot_msg_highlights">done</span>' to proceed quickly`,
                  `Getting there 💪... I have found a couple airports. Please select your departure and destination then reply with '<span class="support_chat_bot_msg_highlights">done</span>' so I can confirm.`,
                ]
                bot_reply_msg = `
                ${confirm_msg[Math.floor(Math.random() * confirm_msg.length)]}
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
              wellgo_bot.status = "begin_air_booking";
            }
          }
          
        }
        

    }
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step===""){
      wellgo_bot.step="origin-destination";
    }

    //step two: trip-round
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="trip-round"){

      let trip_round_init_mgs = [
        `K.. cool 😎... do you want a return flight?... say '<span class="support_chat_bot_msg_highlights">
        round trip</span>' if you do or say '
        <span class="support_chat_bot_msg_highlights">one way</span>' if you dont`,
        `Looking good... 💪 Now do you want a "return flight" as well?...<br/> 
        Say '<span class="support_chat_bot_msg_highlights">
        round trip</span>' if so. Also say '
        <span class="support_chat_bot_msg_highlights">one way</span>' if you want only the departure`,
        `Awsome 🙂...  Are we booking a return flight as well?... If so say '<span class="support_chat_bot_msg_highlights">
        round trip</span>'. For booking only the departure flight say '
        <span class="support_chat_bot_msg_highlights">one way</span>' if you dont`
      ]
      bot_reply_msg = trip_round_init_mgs[Math.floor(Math.random() * trip_round_init_mgs.length)];

      if(!isTripRoundFirstEntered){
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          /*let stop_booking_reply_msgs = [
            "Alright... no promblem",
            "Cool...",
            "Got it..."
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]*/
          bot_reply_msg=bot_reply.msg;
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{

          if((document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "round trip"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "one way"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "one-way"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "oneway"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "roundtrip"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "round-trip") 
              && wellgo_bot.step==="trip-round"){
            wellgo_bot.step="departure-return-dates";
            let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
            if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "one way"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "one-way"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "oneway"){
                flight_search_data.type = "one-way";
            }else if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "round trip"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "round-trip"
              || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "roundtrip"){
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
            wellgo_bot.step="trip-round";

          }
          
        }
      }
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() !== "stop"){
        isTripRoundFirstEntered=false;
      }
    }

    //step three: travel dates
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="departure-return-dates"){
      isTripRoundFirstEntered=true;
      let travel_dates_init_messages =[]
      if(JSON.parse(localStorage.getItem("search_obj")).type==="one-way"){
        travel_dates_init_messages = [
          `Good! Now lets get your travel date 📆. Please Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
          `Getting there 💪🏼... When is your travel. Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
          `👍 OK time to get your traveling date! Please Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
        ]
      }else if(JSON.parse(localStorage.getItem("search_obj")).type==="round-trip"){
        travel_dates_init_messages = [
          `Cool.. Now lets get your departure and return date. Please Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
          `Getting there 💪🏼... When is your travel. Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
          `👍 OK time to get your traveling date! Please Say something like '<span class="support_chat_bot_msg_highlights">
          February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
          February</span> is the month and <span class="support_chat_bot_msg_highlights">
          23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
          2022</span> is the year...`,
        ]
      }
      bot_reply_msg = travel_dates_init_messages[Math.floor(Math.random() * travel_dates_init_messages.length)];
      if(!isDatesFirstEntered){
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          /*let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]*/
          bot_reply_msg=bot_reply.msg;
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{
          let validation = validate_user_dates_input_for_bot(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), JSON.parse(localStorage.getItem("search_obj")).type)
          console.log("date validation: ", validation);
          if(!validation.isValid){
            bot_reply_msg = validation.msg;
          }else if(validation.isValid){
            wellgo_bot.step = "cabin-class";
            bot_reply_msg = validation.msg;
          }
        }
      }
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() !== "stop"){
        isDatesFirstEntered=false;
      }
    }

    //step four: cabin class
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="cabin-class"){
      isDatesFirstEntered=true;
      hasBotReturnedResults=true;
      let travel_cabin_init_messages = [
        `Alright... Almost done. Please provide flight class.. You should say one of the following.. '
        <span class="support_chat_bot_msg_highlights">first class</span>', '<span class="support_chat_bot_msg_highlights">
        economy</span>', '<span class="support_chat_bot_msg_highlights">
        business</span>', '<span class="support_chat_bot_msg_highlights">
        premium</span>', or '<span class="support_chat_bot_msg_highlights">
        cheapest</span>'`,
        `Kk! Flight class next... You should say one of the following.. '
        <span class="support_chat_bot_msg_highlights">first class</span>', '<span class="support_chat_bot_msg_highlights">
        economy</span>', '<span class="support_chat_bot_msg_highlights">
        business</span>', '<span class="support_chat_bot_msg_highlights">
        premium</span>', or '<span class="support_chat_bot_msg_highlights">
        cheapest</span>'`,
        `Perfect 👍... What flight class.. You should say one of the following.. '
        <span class="support_chat_bot_msg_highlights">
        first class</span>', '<span class="support_chat_bot_msg_highlights">
        economy</span>', '<span class="support_chat_bot_msg_highlights">
        business</span>', '<span class="support_chat_bot_msg_highlights">
        premium</span>', or '<span class="support_chat_bot_msg_highlights">
        cheapest</span>'`,
      ]
      
      bot_reply_msg = travel_cabin_init_messages[Math.floor(Math.random() * travel_cabin_init_messages.length)];
      if(!isCabinClassFirstEntered){
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          /*let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]*/
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{

          if(
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "first class" ||
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "economy" ||
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "business" ||
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "premium" ||
            document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "cheapest"
            ){

              //set cabin class here
              wellgo_bot.step = "getting-travelers";

              let num_travelers_msg=[
                `Now... Let's see how may people you're booking for... Say something like '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above, 
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `How many people are getting on the flight... You could say '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above, 
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `How many people are you booking for... You could say '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above, 
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
              ]
              bot_reply_msg = num_travelers_msg[Math.floor(Math.random() * num_travelers_msg.length)];

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
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() !== "stop"){
        isCabinClassFirstEntered=false;
      }
      
    }

    //step five: gettings travlers
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step===BOT_STEPS.TRAVELER_COUNT){
      isCabinClassFirstEntered=true;

      //document.querySelector("#main_support_chat_user_input_txt_container textarea").value = `1 adult, 0 child, 0 infant`;
      //document.querySelector("#main_support_chat_user_input_txt_container textarea").focus();

      if(!isGettingTravelersFirstEntered){
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          /*let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];*/
          //bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          bot_reply_msg=bot_reply.msg;
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{
          let validation = validate_travelers_input_for_bot(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase())
          console.log("validation: ", validation);
          if(!validation.isValid){
            let err_msgs = [
              `You should say something like '<span class="support_chat_bot_msg_highlights">
              1 adult</span>' ... or something like
              '<span class="support_chat_bot_msg_highlights">1 child</span>' 
              ... or '<span class="support_chat_bot_msg_highlights">
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
            wellgo_bot.step = "searching-flight";
            bot_reply_msg = `Great! give me a minute to get you some flight schedules`;
          }
        }
      }
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() !== "stop"){
        isGettingTravelersFirstEntered=false;
      }
    }

    //step six: searching flight schedules
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step===BOT_STEPS.FLIGHT_SEARCH){
      isGettingTravelersFirstEntered=true;
      let interim_msg=[
        `Looking Good! 💪 I found some really good flights for you... please view and select which one you want. And just reply '
        <span class="support_chat_bot_msg_highlights">done</span>' when you finish.`,
        `Aha! 😃 These flights are really good... please view and select which one you want. And then reply '
        <span class="support_chat_bot_msg_highlights">done</span>' so we can proceed.`,
      ]
      setTimeout(()=>{
        if(hasBotReturnedResults){
          scroll_chat=false;
          show_interapting_message(`
          ${interim_msg[Math.floor(Math.random() * interim_msg.length)]}
          <br/><br/>`, false, false);
          let itns = `<p style="font-weight: bolder; font-size: 12px; margin-bottom: 10px;">Flight Schedules</p>`;
          for(i=0;i<5;i++){
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
          show_interapting_message(itns, false, false);
          hasBotReturnedResults=false;
        }
      }, 6000)
      
      if(!isSearchingFlightFirstEnter){
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";
          clear_flight_results_showed_by_bot();

        }else if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "done"){
          
          show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value, false);
          document.querySelector("#main_support_chat_user_input_txt_container textarea").value="";

          if(!selectedAFlight){
            scroll_chat=true;
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
            selectedAFlight=false;
            document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
            clear_flight_results_showed_by_bot();
            $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
            wellgo_bot.step="traveler-details-collection";
            let slctedItn = `Oh nice pick! ... <br/><br/>
                <p id="search_result_by_bot_${i}" class="search_result_by_bot" onclick="main_bot_view_selected_flights_all_details_func()" style="margin-bottom: 5px; background-color: rgba(244,244,0,0.1); cursor: pointer; padding: 20px; font-size: 17px; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; transition: all 0.2s ease-out;">
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
              setTimeout(()=>show_interapting_message(slctedItn,"none", false),2000);
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
              setTimeout(()=>show_interapting_message(repmsg[Math.floor(Math.random() * repmsg.length)],"none"),2000);
            scroll_chat=false;
            wellgo_bot.step="pnr-recording";
            isPNRFirstEntered=true;
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
      if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() !== "stop"){
        isSearchingFlightFirstEnter=false
      }
    }}

    //step seven: pnr recording
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step===BOT_STEPS.PNR_RECORD){
      if(isPNRFirstEntered){
        //setTimeout(()=>show_interapting_message(`So lets do that now...`, "none", false),2000);
        //setTimeout(()=>show_interapting_message(`Please complete the following flight passenger form`, "none", false),2000);
        setTimeout(()=>show_pnr_form("none"),5000);
        bot_reply_msg = "";
      }else{
        if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase() === "stop"){
          /*let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]*/
          bot_reply_msg=bot_reply.msg;
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";
          clear_flight_results_showed_by_bot();

        }else{
          let name_parts = document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().split(" ");
          if(name_parts.length === 2){
            show_user_interapting_message(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim(), true);
            show_interapting_message(`Perfect...`, "none");
            show_interapting_message(`We need your address next, it should look like 
            '<span class="support_chat_bot_msg_highlights">street address, town, city, country zipcode</span>'
            ..eg. '<span class="support_chat_bot_msg_highlights">234 Rector Street, Manhattan, New York, USA 10232</span>'`, "none");
            //bot_reply_msg= "Please enter your address information!";
            scroll_chat=false;
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
      isPNRFirstEntered=false
    }

    //---------------------end of flight booking process-------------------------------------//
  
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim().toLowerCase().replaceAll(" ", "")==="stop" && wellgo_bot.step===""){
      const IdleBotStopMgs=[
        `Stop? 😏 But We're already not doing any booking or cancellation to stop...`,
        `Hey! If we were booking a flight or doing anything at all, that's when saying stop would mean something.`,
        `You got me confused. Sorry, Stop what? 😐`
      ]
      show_interapting_message(IdleBotStopMgs[Math.floor(Math.random() * IdleBotStopMgs.length)],"none")
      //return;
    }

  }else{
    let svr_err_mgs = [
      `Opps! 😒 My server failed. My bad. This one is on me..`,
      `Eh! I think we are having some internet issues. Or Did my server fail? 🤦🏾‍♂️`,
      `Ummm... wait 😕, could it be your internet or my server crushed.
      <br/>I'm unable to help you without my server being online.
      <br/>I'll put in a ticket to alert the technical team.
      <br/>But also make sure its not your internet.`,
      `... I can't reach my server. Please check your internet. I think its not working. 
        <br/>Or Maybe my server crushed`,
      `I can't imagine my life without the server. Oh no! 🤦🏾‍♂️🤦🏾‍♂️🤦🏾‍♂️ my server is not online right now.<br/>
      Please, also make sure that your internet it working.`
    ]
    bot_reply_msg = svr_err_mgs[Math.floor(Math.random() * svr_err_mgs.length)];
  }
  
  if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === "" || document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim() === "type your message here..."){
    //dont add empty input to chat displayed items
    document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
  }else{
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea").value !== "$%#%%%#@@&&&**(*)"){
      document.getElementById("hp_support_chat_items").innerHTML += return_each_user_chat_message_markup(document.querySelector("#main_support_chat_user_input_txt_container textarea").value.trim());
    }
    setTimeout(()=>{
      document.getElementById("hp_support_chat_items").innerHTML += return_each_bot_chat_message_markup(bot_reply_msg);
      if(scroll_chat){
        $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
      }else{
        document.getElementById("hp_support_chat_items").scrollBy(0, 100);
      }
      document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
      document.getElementById("suggested_bot_query_display").innerHTML = "";
    }, 1000)
    
  }
  document.querySelector("#main_support_chat_user_input_txt_container textarea").value = "type your message here...";
  if(scroll_chat){
    $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
  }else{
    document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
  
}

function default_run_chat_instance(msg){
  document.querySelector("#main_support_chat_user_input_txt_container textarea").value = msg;
  setTimeout(run_chat_instance, 300);
}

async function default_run_chat_instance_old(msg){
  scroll_chat=true;
  if(msg.trim()!== "")
    document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_loading_markup("loading...")
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
    {if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="origin-destination"){
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

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else if(msg.trim().toLowerCase() === "done"){
          
          if(selectedOriginAirport==="" && selectedDestinationAirport===""){
            bot_reply_msg=`Please select your airports above or enter new ones in the form of airport-name to another-airport-name.. eg. '
            <span class="support_chat_bot_msg_highlights">Kotoka to Laguardia</span>'`
          }else if(selectedOriginAirport===""){
            bot_reply_msg=`umm... You did not select departure airport`
          }else if(selectedDestinationAirport===""){
            bot_reply_msg=`Please select your destination airport`
          }else{
            clear_airports_suggested_by_bot_ids();
            wellgo_bot.step="trip-round";
          }
        }else{
          if(msg.trim().toLowerCase() === "yes" && wellgo_bot.step==="origin-destination"){
            wellgo_bot.step="trip-round"
          }else{
            wellgo_bot.step="origin-destination";
            if(validation.isValid){
              
              //find airports here;
              //if origin and destination airports contains more that one element, then give you a list using div containers to select from
              //after selection, set wellgo_bot.step="departure-arrival-dates"
              let origin_airpots = filter_airports_array_based_input_value(validation.origin);
              let destination_airports = filter_airports_array_based_input_value(validation.destination);
              console.log(origin_airpots);
              console.log(destination_airports);
              if(origin_airpots.length === 1 && destination_airports.length === 1){

                //origin airport
                //selectedOriginAirport=origin_airpots[0].IATA;
                //add_origin_input_airport_to_history(origin_airpots[0].IATA)
                let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.departure.airport = origin_airpots[0].IATA;
                
                if(origin_airpots[0].IATA === "\\N" || origin_airpots[0].IATA === "N"){
                  //selectedOriginAirport=origin_airpots[0].ICAO;
                  //add_origin_input_airport_to_history(origin_airpots[0].ICAO)
                  flight_search_data.itinerary.departure.airport = origin_airpots[0].ICAO;
                }

                //window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

                //destination airport
                //add_destination_input_airport_to_history(destination_airports[0].IATA)
                //let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
                flight_search_data.itinerary.arrival.airport = destination_airports[0].IATA;
                
                if(destination_airports[0].IATA === "\\N" || destination_airports[0].IATA === "N"){
                  //selectedDestinationAirport=icao
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
                scroll_chat=false;
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
              wellgo_bot.status = "begin_air_booking";
            }
          }
          
        }
        

    }
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step===""){
      wellgo_bot.step="origin-destination";
    }

    //step two: trip-round
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="trip-round"){

      let trip_round_init_mgs = [
        `K.. cool.. do you want a return flight?... say '<span class="support_chat_bot_msg_highlights">
        round trip</span>' if you do or say '<span class="support_chat_bot_msg_highlights">
        one way</span>' if you dont`
      ]
      bot_reply_msg = trip_round_init_mgs[Math.floor(Math.random() * trip_round_init_mgs.length)];

      if(!isTripRoundFirstEntered){
        if(msg.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Alright... no promblem",
            "Cool...",
            "Got it..."
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{

          if((msg.trim().toLowerCase() === "round trip"
              || msg.trim().toLowerCase() === "one-way"
              || msg.trim().toLowerCase() === "oneway"
              || msg.trim().toLowerCase() === "roundtrip"
              || msg.trim().toLowerCase() === "round-trip"
              || msg.trim().toLowerCase() === "one way") 
              && wellgo_bot.step==="trip-round"){
            wellgo_bot.step="departure-return-dates";
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
            wellgo_bot.step="trip-round";

          }
          
        }
      }
      if(msg.trim().toLowerCase() !== "stop"){
        isTripRoundFirstEntered=false;
      }
    }

    //step three: travel dates
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="departure-return-dates"){
      isTripRoundFirstEntered=true;
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
      if(!isDatesFirstEntered){
        if(msg.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{
          let validation = validate_user_dates_input_for_bot(msg.trim(), JSON.parse(localStorage.getItem("search_obj")).type)
          console.log("date validation: ", validation);
          if(!validation.isValid){
            bot_reply_msg = validation.msg;
          }else if(validation.isValid){
            wellgo_bot.step = "cabin-class";
            bot_reply_msg = validation.msg;
          }
        }
      }
      if(msg.trim().toLowerCase() !== "stop"){
        isDatesFirstEntered=false;
      }
    }

    //step four: cabin class
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="cabin-class"){
      isDatesFirstEntered=true;
      let travel_cabin_init_messages = [
        `Alright... Almost done. One last step is to provide flight class.. You should say one of the following.. 
        '<span class="support_chat_bot_msg_highlights">first class</span>', 
        '<span class="support_chat_bot_msg_highlights">economy</span>', 
        '<span class="support_chat_bot_msg_highlights">business</span>', 
        '<span class="support_chat_bot_msg_highlights">premium</span>', or 
        '<span class="support_chat_bot_msg_highlights">cheapest</span>'`
      ]
      
      bot_reply_msg = travel_cabin_init_messages[Math.floor(Math.random() * travel_cabin_init_messages.length)];
      if(!isCabinClassFirstEntered){
        if(msg.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

        }else{

          if(
            msg.trim().toLowerCase() === "first class" ||
            msg.trim().toLowerCase() === "economy" ||
            msg.trim().toLowerCase() === "business" ||
            msg.trim().toLowerCase() === "premium" ||
            msg.trim().toLowerCase() === "cheapest"
            ){

              //set cabin class here
              wellgo_bot.step = "getting-travelers";
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
        isCabinClassFirstEntered=false;
      }
      
    }

    //step five: gettings travlers
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="getting-travelers"){
      isCabinClassFirstEntered=true;
      if(!isGettingTravelersFirstEntered){
        if(msg.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";

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
          wellgo_bot.step = "searching-flight";
          bot_reply_msg = `Great! give me a minute to get you some flight schedules`;
        }
        }
      }
      if(msg.trim().toLowerCase() !== "stop"){
        isGettingTravelersFirstEntered=false;
      }
    }

    //step six: searching flight schedules
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="searching-flight"){
      isGettingTravelersFirstEntered=true;

      setTimeout(()=>{
        if(hasBotReturnedResults){
          scroll_chat=false;
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
          hasBotReturnedResults=false;
        }
      }, 6000);
      
      if(!isSearchingFlightFirstEnter){
        if(msg.trim().toLowerCase() === "stop"){
          let stop_booking_reply_msgs = [
            "Ok cool...",
            "Got it... Let me know...",
            "Sure, no problem"
          ];
          bot_reply_msg = stop_booking_reply_msgs[Math.floor(Math.random() * stop_booking_reply_msgs.length)]
          wellgo_bot.status = "";
          wellgo_bot.step = "";

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";
          clear_flight_results_showed_by_bot();

        }else if(msg.trim().toLowerCase() === "done"){
          
          show_user_interapting_message(msg, true);

          if(!selectedAFlight){
            scroll_chat=true;
            let rpl_msgs = [
              `Please select a flight above then after, say '<span class="support_chat_bot_msg_highlights">done</span>'`,
              `Umm... You haven't selected a flight...`,
              `You should select a flight first, then say '<span class="support_chat_bot_msg_highlights">done</span>' ...`
            ]
            bot_reply_msg=rpl_msgs[Math.floor(Math.random()*rpl_msgs.length)];
          }else{
            document.getElementById("main_bot_view_flights_all_details").style.display="none";
            document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
            selectedAFlight=false;
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
            scroll_chat=false;
            wellgo_bot.step="pnr-recording";
          }
        }else{

          bot_reply_msg = `Please holdon while I search your flight... or say '<span class="support_chat_bot_msg_highlights">
          stop</span>' if we're not doing it anymore...`;
          
        }
      }
      if(msg.trim().toLowerCase() !== "stop"){
        isSearchingFlightFirstEnter=false
      }
    }}

    //step seven: pnr recording
    if(wellgo_bot.status==="begin_air_booking" && wellgo_bot.step==="pnr-recording"){
      if(isPNRFirstEntered){
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

          scroll_chat=true;
          isTripRoundFirstEntered=true;
          isPNRFirstEntered=true;
          isDatesFirstEntered=true;
          isCabinClassFirstEntered=true;
          isSearchingFlightFirstEnter=true;
          isGettingTravelersFirstEntered=true;
          selectedOriginAirport="";
          selectedDestinationAirport="";
          clear_flight_results_showed_by_bot();

        }else{
          let name_parts = msg.trim().split(" ");
          if(name_parts.length === 2){
            show_user_interapting_message(msg, true);
            show_interapting_message(`Perfect...`, "none")
            show_interapting_message(`We need your address next, it should look like 
            '<span class="support_chat_bot_msg_highlights">street address, town, city, country zipcode</span>'
            ..eg. '<span class="support_chat_bot_msg_highlights">234 Rector Street, Manhattan, New York, USA 10232</span>'`, "none");
            //bot_reply_msg= "Please enter your address information!";
            scroll_chat=false;
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
      isPNRFirstEntered=false;
    }

    //---------------------end of flight booking process-------------------------------------//
  

  /*if(bot_reply){
    bot_reply_msg = bot_reply.msg;
    wellgo_bot.status = bot_reply.type;*/
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
      if(scroll_chat){
        $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
      }else{
        document.getElementById("hp_support_chat_items").scrollBy(0, 100);
      }
      document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
    }, 1000)
    
  }
  document.querySelector("#main_support_chat_user_input_txt_container textarea").value = "type your message here...";
  document.getElementById("suggested_bot_query_display").innerHTML = "";
  if(scroll_chat){
    $("#hp_support_chat_items").scrollTop($("#hp_support_chat_items").prop("scrollHeight"));
  }else{
    document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
}

//chat functions
document.getElementById("hp_support_user_submit_chat_btn").addEventListener("click", e=>{
  e.preventDefault();
  run_chat_instance();
});

document.querySelector("#main_support_chat_user_input_txt_container textarea").addEventListener("keyup", e=>{
  e.preventDefault();
  e.which = e.which || e.keyCode;
  if(e.which == 13) {
    run_chat_instance();
    document.querySelector("#main_support_chat_user_input_txt_container textarea").blur();
  }
});

async function get_bot_query_autocomplete_wrapper(e){
  let autocompleted = await get_bot_query_autocomplete(e.target.value);
  //console.log("autocompleted: ", autocompleted.q)
  if(autocompleted.q===""){
    document.getElementById("suggested_bot_query_display").innerHTML = "";
  }else{
    let displayed_q = autocompleted.q.length > 30 ? `${autocompleted.q.substring(0,30)}...` : autocompleted.q;
    document.getElementById("suggested_bot_query_display").innerHTML = `
      <div onclick="default_run_chat_instance('${displayed_q}');" style="cursor: pointer;" class="support_chat_user_input_input_suggestions">
        <p style="color: rgba(0,0,0,0.9); font-size: 14px; font-family: 'Prompt', sans-serif;">
            <i class="fa fa-lightbulb-o" style="margin-right: 5px; color: rgba(0,55,55,0.9);"></i>
            ${displayed_q}</p>
      </div>
    `;
  }
  
}

document.querySelector("#main_support_chat_user_input_txt_container textarea").addEventListener("keyup", e=>{
  if(e.target.value===""){
    document.getElementById("suggested_bot_query_display").innerHTML = "";
    //return;
  }else{
    get_bot_query_autocomplete_wrapper(e)
  }
  
});


var ig = 0;
let is_chat_container_shown = false;
function toggle_show_hp_support_chat_container(){
    document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_loading_markup();
    if(is_chat_container_shown){

      document.body.style.position="initial";
      document.body.style.width="auto";
      document.body.style.height="auto";

      if(wellgo_bot.status===""){
        document.getElementById("chatbot_greenting_message_p").innerHTML = '';
      }
      $("#support_chat_container").slideUp("fast");
      //document.getElementById("support_chat_container").style.display = "none";
      if(document.getElementById("chatbot_provided_manual_channels"))
        document.getElementById("chatbot_provided_manual_channels").style.display="none";
      document.getElementById("main_support_chat_user_input_txt_container").style.display="none";
      ig=0;
    }else{

      if($(window).width() <= 700){
        document.body.style.position="fixed";
        document.body.style.width="100vw";
        document.body.style.height="100vh";
      }

      setTimeout(()=>{
          document.getElementById("main_chat_bot_status_display").innerHTML=return_bot_chat_status_markup("online");
      },1000)
      hide_new_chatbot_tip();
      if(wellgo_bot.status===""){
        typeWriter();
      }
      document.getElementById("support_chat_container").style.display = "block";
      setTimeout(()=>{
        if(document.getElementById("chatbot_provided_manual_channels"))
            document.getElementById("chatbot_provided_manual_channels").style.display="block";
          document.getElementById("main_support_chat_user_input_txt_container").style.display="block";
      },1200);
    }
    is_chat_container_shown = !is_chat_container_shown;
}

var txt = ""; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (ig < txt.length) {

    if(txt.substring(ig, ig+5).toLowerCase() === "<br/>"){
      document.getElementById("chatbot_greenting_message_p").innerHTML += txt.substring(ig, ig+5);
      ig = ig+5;
    }else if(txt.charAt(ig) === "&" && txt.charAt(ig+1) === "#"){
        document.getElementById("chatbot_greenting_message_p").innerHTML += txt.substring(ig, ig+8);
        ig = ig+9;
    }else if(
      txt.charAt(ig) === "<"
      && (txt.substring(ig+1, ig+5).toLowerCase() === "span"
          || txt.substring(ig+1, ig+2).toLowerCase() === "p"
      )

    ){
      let indexOfTagClosing_1 = txt.indexOf(">", ig); // opening tag
      let indexOfTagClosing_2 = txt.indexOf(">", indexOfTagClosing_1 + 1); //closing tag

      //making sure its not a nested tag
      let idxOfClosingTagFirstBraket = txt.indexOf("<", indexOfTagClosing_1+1);
      let nestCount=0
      for(;txt.substring(idxOfClosingTagFirstBraket+1, idxOfClosingTagFirstBraket+2)!=="/";){
          //console.warn(txt.substring(idxOfClosingTagFirstBraket+1, idxOfClosingTagFirstBraket+2))
          nestCount++;
          idxOfClosingTagFirstBraket = txt.indexOf("<", idxOfClosingTagFirstBraket+1);
          indexOfTagClosing_2=txt.indexOf(">", idxOfClosingTagFirstBraket+1);
      }

      for(let i=0; i<nestCount; i++){
          indexOfTagClosing_2 = txt.indexOf(">", indexOfTagClosing_2 + 1);
      }

      //console.warn('tag: ', txt.substring(ig, (indexOfTagClosing_2+1)));
      document.getElementById("chatbot_greenting_message_p").innerHTML += txt.substring(ig, (indexOfTagClosing_2+1));
        ig = (indexOfTagClosing_2+1);
    }else{
        document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(ig); 
        ig++;
    }
    //document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(i);
    //i++;
    setTimeout(typeWriter, speed);
  }
}

function show_new_chatbot_tip(msg){
    document.getElementById("main_chat_bot_tips_poppup_section").style.display="block";
    setTimeout(()=>hide_new_chatbot_tip(),15000);
}

function hide_new_chatbot_tip(){
    $("#main_chat_bot_tips_poppup_section").slideUp("fast");
}

$(document).ready(()=>{
  setTimeout(()=>show_new_chatbot_tip("msg"),10000);
  setTimeout(()=>toggle_main_page_search_filters(), 3500);
});

function show_chat_bot_uprading_message(){
  document.getElementById("hp_support_chat_items").innerHTML = `
      <div class="support_chat_bot_sent_msg_container">
        <div class="support_chat_bot_sent_msg_inner_container">
            <p id="chatbot_greenting_message_p" style="font-family: 'Prompt', sans-serif; font-size: 15px;"></p>
        </div>
      </div>
      <div id="chatbot_provided_manual_channels" style="display: none; animation: pop-in 0.2s ease-out;">
        <div style="display: flex; flex-direction: row; padding: 20px 0;">
          <div style="cursor: pointer; margin-right: 10px; background-color: rgba(122,21,112); padding: 20px; border-radius: 50px; box-shadow: 0 0 5px rgba(0,0,0,0.5);">
              <p style="font-weight: bolder; font-family: 'Prompt', Sans-serif; color: white; letter-spacing: 1px; font-size: 12px;">
                  <i style="margin-right: 10px" class="fa fa-phone"></i>
                  Call</p>
          </div>
          <div style="cursor: pointer; margin-right: 10px; background-color: rgba(21,122,112); padding: 20px; border-radius: 50px; box-shadow: 0 0 5px rgba(0,0,0,0.5);">
              <p style="font-weight: bolder; font-family: 'Prompt', Sans-serif; color: white; letter-spacing: 1px; font-size: 12px;">
                  <i style="margin-right: 10px;" class="fa fa-envelope"></i>
                  Email</p>
          </div>
        </div>
      </div>
    `;
    let bot_name='Alien Dough'
    let all_txt=[
      `Hey! &#128400; ${bot_name} is my name.<br/>
      FYI, we are currently upgrading some site features...
      I'm only helpful for certain things like booking a flight RN... &#128530;
      Please, for all other things I'm unable to help you with,<br/>
      you may call or email our helpdesk using buttons provided below. &#128071; <br/>
      However, if you needed to book a flight, say something like, 
      <span class="support_chat_bot_msg_highlights">"I want to book a flight"</span>`,
      `Greetings! 😃 <br/>
      Due to some upgrades we are currently doing on this site,<br/>
      I may not be able to do some things yet for you...
      But sure, booking a flight is certainly something I'm able to help with.
      Please call or email our helpdesk using links below. &#128071; <br/>
      If you want to book a flight however, just reply with 
      <span class="support_chat_bot_msg_highlights">"I want to book a flight"</span>`,
      `Sup! ✌️. My Name is ${bot_name}. I can certainly help you book a flight.<br/>
      But for some things, I reccommend calling or texting our helpdesk using buttons provided below.<br/>
      Reason is, we are upgrading some site features so, I'm not fully functional right now.<br/>
      But if you needed to book a flight, just reply with 
      <span class="support_chat_bot_msg_highlights">"I want to book a flight"</span>, 
      and I'll be able to get 
      you through that.`
    ]
    txt = all_txt[Math.floor(Math.random() * all_txt.length)];
}

document.getElementById("main_homepage_start_support_btn").addEventListener("click", e=>{
  if(wellgo_bot.status===""){
    show_chat_bot_uprading_message();
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chatbot_popup_tip_msg").addEventListener("click", e=>{
  if(wellgo_bot.status===""){
    show_chat_bot_uprading_message();
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chatbot_popup_tip_img").addEventListener("click", e=>{
  if(wellgo_bot.status===""){
    show_chat_bot_uprading_message()
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chat_hp_support_container_close_btn").addEventListener("click", e=>{
  toggle_show_hp_support_chat_container();
});

document.getElementById("landing_page_search_form_bar_bot_img").addEventListener("click", e=>{
  if(wellgo_bot.status===""){
    show_chat_bot_uprading_message();
  }
  toggle_show_hp_support_chat_container()
});

let is_landing_page_search_filters_open = false;


function start_book_with_vitual_agent(){

  if(wellgo_bot.status===""){
    //reseting everything
    wellgo_bot.status = "";
    wellgo_bot.step = "";

    scroll_chat=true;
    isTripRoundFirstEntered=true;
    isPNRFirstEntered=true;
    isDatesFirstEntered=true;
    isCabinClassFirstEntered=true;
    isSearchingFlightFirstEnter=true;
    isGettingTravelersFirstEntered=true;
    selectedOriginAirport="";
    selectedDestinationAirport="";
    if(document.querySelectorAll(".departure_airport_suggested_by_bot"))
      clear_airports_suggested_by_bot_ids()

    document.getElementById("hp_support_chat_items").innerHTML = `
      <div class="support_chat_bot_sent_msg_container">
        <div class="support_chat_bot_sent_msg_inner_container">
            <p id="chatbot_greenting_message_p" style="font-family: 'Prompt', sans-serif; font-size: 15px;"></p>
        </div>
      </div>
    `;
    let start_air_booking_intro = [
      `Hey! &#128400;... We're only 4 steps away...
          please tell me from where you are traveling and to where you are going. You should say something like 
          '<span class="support_chat_bot_msg_highlights">New York to Paris</span>',
            or something like '<span class="support_chat_bot_msg_highlights">
            United States to France</span>'...
            , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
      `Sup! &#128400; kk.. let's dive right in... To start with, please tell me your departure and arrival places. You should say something like 
      '<span class="support_chat_bot_msg_highlights">New York to Paris</span>'
            , or something like '<span class="support_chat_bot_msg_highlights">United States to France</span>'
              , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
      `Hi... We'll start with by collecting some information from you... So tell me from where you are traveling and to where you are going. You should say something like 
      '<span class="support_chat_bot_msg_highlights">New York to Paris</span>'
            , or something like '<span class="support_chat_bot_msg_highlights">United States to France</span>'
              , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
    ]
    txt = "";
    document.getElementById("chatbot_greenting_message_p").innerHTML = start_air_booking_intro[Math.floor(Math.random()*start_air_booking_intro.length)];
  }
  toggle_show_hp_support_chat_container();
  toggle_main_page_search_filters();
  wellgo_bot.status = "begin_air_booking";
  wellgo_bot.step = "origin-destination";
}

document.getElementById("landing_page_search_bar_call_btn").addEventListener("click", e=>{
  alert("placing your call now");
  toggle_main_page_search_filters();
});

document.getElementById("landing_page_search_bar_show_main_search_form_btn").addEventListener("click", e=>{
  toggle_main_page_search_filters()
});
document.getElementById("landing_page_search_bar_help_pg_btn").addEventListener("click", e=>{
  toggle_main_page_search_filters()
});
document.getElementById("landing_page_search_bar_book_w_vta_btn").addEventListener("click", e=>{
  start_book_with_vitual_agent();
});
//console.log(document.getElementById("hp_support_user_submit_chat_btn"))


/*if($(document).width() > 700){
  document.querySelector("header").style.backgroundColor="#000000";
  document.querySelector("").style.color = "";
}*/

window.onscroll = function() {
  if(localStorage.getItem("is_home_page")){
    if (window.pageYOffset > 200) { 

      if($(window).width() > 1000){
        document.querySelector("header").style.backgroundColor="#000000";
      }
      
    } else { 
      
      if($(window).width() > 1000){
        document.querySelector("header").style.background="none";
      }

    }
  }
}
/*const fixChatBotHeight = () => {
  const div = document.getElementById("support_chat_container");
  div.style.setProperty("--app-height", `${window.innerHeight}px`);
}
window.addEventListener("resize", fixChatBotHeight)
fixChatBotHeight();
window.addEventListener('touchmove', function(e) {
  if(document.getElementById('support_chat_container').style.display==="none"){
    //scroll page
  }else {
    e.preventDefault();
  }
  
}, false);

window.addEventListener('scroll', function(e) {
  if(document.getElementById('support_chat_container').style.display==="none"){
    //scroll page
  }else{
    e.preventDefault();
  }
  
}, false);*/