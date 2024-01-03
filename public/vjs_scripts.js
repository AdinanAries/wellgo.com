for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

window.instantiateSearchObj();

let add_clouds_to_animated_loader = () => {
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
window.add_clouds_to_animated_loader=add_clouds_to_animated_loader;

let show_start_checkout_page = (obj) => {
  if(document.getElementById("booking_start_checkout_page_container")){
    document.getElementById("booking_start_checkout_page_container").innerHTML = window.return_start_checkout_info(obj);
    document.getElementById("booking_start_checkout_page_container").style.display = "block";
  }
}
window.show_start_checkout_page=show_start_checkout_page;

let show_add_ancillaries_container = () => {
  window.$("#add_ancillaries_container").slideDown("fast");
}
window.show_add_ancillaries_container=show_add_ancillaries_container;

let hide_add_ancillaries_container = () => {
  window.$("#add_ancillaries_container").slideUp("fast");
}
window.hide_add_ancillaries_container=hide_add_ancillaries_container;

let start_select_seat_ancillary = () => {
  show_add_ancillaries_container();
  if(document.getElementById("seat_ancillary_settings_container"))
    document.getElementById("seat_ancillary_settings_container").style.display="block";
  if(document.getElementById("meal_ancillary_settings_container"))
    document.getElementById("meal_ancillary_settings_container").style.display="none";
  if(document.getElementById("luggage_ancillary_settings_container"))
    document.getElementById("luggage_ancillary_settings_container").style.display="none";
}
window.start_select_seat_ancillary=start_select_seat_ancillary;

let start_add_luggage_ancillary = () => {
  show_add_ancillaries_container();
  if(document.getElementById("seat_ancillary_settings_container"))
    document.getElementById("seat_ancillary_settings_container").style.display="none";
  if(document.getElementById("meal_ancillary_settings_container"))
    document.getElementById("meal_ancillary_settings_container").style.display="none";
  if(document.getElementById("luggage_ancillary_settings_container"))
    document.getElementById("luggage_ancillary_settings_container").style.display="block";
}
window.start_add_luggage_ancillary=start_add_luggage_ancillary;

let start_add_meal_ancillary = () => {
  show_add_ancillaries_container();
  document.getElementById("seat_ancillary_settings_container").style.display="none";
  document.getElementById("meal_ancillary_settings_container").style.display="block";
  document.getElementById("luggage_ancillary_settings_container").style.display="none";
}
window.start_add_meal_ancillary = start_add_meal_ancillary;

let cancel_add_ancillaries_container = () => {
  hide_add_ancillaries_container();
}
window.cancel_add_ancillaries_container=cancel_add_ancillaries_container;

//search function
if(document.getElementById("home_search_form_submit_btn")){
  document.getElementById("home_search_form_submit_btn").addEventListener("click", e => {
    e.preventDefault();

    if(document.getElementById("search_results_list_items"))
      document.getElementById("search_results_list_items").innerHTML = '';

    add_clouds_to_animated_loader();
    if(document.getElementById("animated_loader"))
      document.getElementById("animated_loader").style.display = "block";
    if(document.getElementById("search_result_important_notice"))
      document.getElementById("search_result_important_notice").innerHTML = window.return_search_results_important_notice_loader();
    if(document.getElementById("search_list_main__settings_section"))
      document.getElementById("search_list_main__settings_section").innerHTML = window.return_search_results_filters_and_sort_loader();
    if(document.getElementById("search_results_mobile_top_itin_display"))
      document.getElementById("search_results_mobile_top_itin_display").innerHTML = window.return_search_results_mobile_top_itin_display_loader();
    for(let i=0; i<6; i++){
      //document.getElementById("search_results_list_items").innerHTML += return_ticket_card_loader();
    }

    //search_submit_function();

  });
}

if(document.getElementById("sp_search_form_submit_btn")){
  document.getElementById("sp_search_form_submit_btn").addEventListener("click", e =>{
    e.preventDefault();

    if(document.getElementById("search_results_list_items"))
      document.getElementById("search_results_list_items").innerHTML = '';

    add_clouds_to_animated_loader();
    if(document.getElementById("animated_loader"))
      document.getElementById("animated_loader").style.display = "block";
    if(document.getElementById("search_result_important_notice"))
      document.getElementById("search_result_important_notice").innerHTML = window.return_search_results_important_notice_loader();
    if(document.getElementById("search_list_main__settings_section"))
      document.getElementById("search_list_main__settings_section").innerHTML = window.return_search_results_filters_and_sort_loader();
    if(document.getElementById("search_results_mobile_top_itin_display"))
      document.getElementById("search_results_mobile_top_itin_display").innerHTML = window.return_search_results_mobile_top_itin_display_loader();
    for(let i=0; i<6; i++){
      if(document.getElementById("search_results_list_items"))
        document.getElementById("search_results_list_items").innerHTML += window.return_ticket_card_loader();
    }

    window.search_submit_function();

  });
}

let show_interapting_message = (msg, scroll_to_bottom, do_typing=true) => {
  if(do_typing){
    if(document.getElementById("hp_support_chat_items"))
      document.getElementById("hp_support_chat_items").innerHTML += window.return_each_bot_chat_message_markup(msg);
  }else{
    if(document.getElementById("hp_support_chat_items"))
      document.getElementById("hp_support_chat_items").innerHTML += window.return_each_bot_chat_message_markup_without_typing(msg);
  }
  if(scroll_to_bottom===true){
    if(document.getElementById("hp_support_chat_items"))
      window.$("#hp_support_chat_items").scrollTop(window.$("#hp_support_chat_items").prop("scrollHeight"));
  }else if(scroll_to_bottom==="none"){
    //do nothing or don't scroll
  }else{
    if(document.getElementById("hp_support_chat_items"))
      document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
}
window.show_interapting_message=show_interapting_message;

let show_pnr_form = (scroll_to_bottom) => {
  if(document.getElementById("hp_support_chat_items"))
    document.getElementById("hp_support_chat_items").innerHTML += window.return_PNR_form();
  if(scroll_to_bottom===true){
    if(document.getElementById("hp_support_chat_items"))
      window.$("#hp_support_chat_items").scrollTop(window.$("#hp_support_chat_items").prop("scrollHeight"));
  }else if(scroll_to_bottom==="none"){
    //do nothing or don't scroll
  }else{
    if(document.getElementById("hp_support_chat_items"))
      document.getElementById("hp_support_chat_items").scrollBy(0, 100);
  }
}
window.show_pnr_form=show_pnr_form;

let show_user_interapting_message = (msg, clear_input) => {
  if(document.getElementById("hp_support_chat_items"))
    document.getElementById("hp_support_chat_items").innerHTML += window.return_each_user_chat_message_markup(msg);
  if(clear_input===true){
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea"))
      document.querySelector("#main_support_chat_user_input_txt_container textarea").value="";
  }else if(clear_input==="passive"){
    if(document.querySelector("#main_support_chat_user_input_txt_container textarea"))
    document.querySelector("#main_support_chat_user_input_txt_container textarea").value="$%#%%%#@@&&&**(*)";
  }else{
    //do nothing for now
  }
}
window.show_user_interapting_message=show_user_interapting_message;

let select_departure_airports_suggested_by_bot = (iata, icao,elemid) => {
  Array.from(document.querySelectorAll(".departure_airport_suggested_by_bot")).forEach(each=>{
    each.style.backgroundColor="rgba(244,0,0,0.1)"
  });
  if(document.getElementById(elemid))
    document.getElementById(elemid).style.backgroundColor="rgba(244,0,0,0.3)";
  window.wellgo_bot.selectedOriginAirport=iata;
  //add_origin_input_airport_to_history(iata)
  let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
  flight_search_data.itinerary.departure.airport = iata;
  //fligh_search_data.origin_iata = iata;

  if(iata === "\\N" || iata === "N"){
    window.wellgo_bot.selectedOriginAirport=icao;
    //add_origin_input_airport_to_history(icao)
    flight_search_data.itinerary.departure.airport = icao;
  }

  window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));

}
window.select_departure_airports_suggested_by_bot=select_departure_airports_suggested_by_bot;

let select_destination_airports_suggested_by_bot = (iata, icao, elemid) => {
  Array.from(document.querySelectorAll(".destination_airport_suggested_by_bot")).forEach(each=>{
    each.style.backgroundColor="rgba(0,244,0,0.1)"
  });
  if(document.getElementById(elemid))
    document.getElementById(elemid).style.backgroundColor="rgba(0,244,0,0.3)";
  window.wellgo_bot.selectedDestinationAirport=iata
  //add_destination_input_airport_to_history(iata)
  let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
  flight_search_data.itinerary.arrival.airport = iata;
  
  if(iata === "\\N" || iata === "N"){
    window.wellgo_bot.selectedDestinationAirport=icao
    //add_destination_input_airport_to_history(icao)
    flight_search_data.itinerary.arrival.airport = icao;
  }

  window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
}
window.select_destination_airports_suggested_by_bot=select_destination_airports_suggested_by_bot;

let clear_airports_suggested_by_bot_ids = () => {
  Array.from(document.querySelectorAll(".departure_airport_suggested_by_bot")).forEach(each=>{
    each.id="";
  });
  Array.from(document.querySelectorAll(".destination_airport_suggested_by_bot")).forEach(each=>{
    each.id="";
  });
}
window.clear_airports_suggested_by_bot_ids=clear_airports_suggested_by_bot_ids;

let clear_flight_results_showed_by_bot = () => {
  Array.from(document.querySelectorAll(".search_result_by_bot")).forEach(each=>{
    each.innerHTML=`
      <span style="font-size: 14px;">
      <i style="margin-right: 10px; color: red;" class="fa fa-exclamation-triangle"></i> AD deleted a message...</span>
    `;
    each.style.pointerEvents="none";
  });
}
window.clear_flight_results_showed_by_bot=clear_flight_results_showed_by_bot;

let select_a_flight_from_bot_list = () => {
  if(document.getElementById("select_a_ticket_from_bot_list_chck").checked){
    document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="flex";
    window.wellgo_bot.selectedAFlight=true;
  }else{
    document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
    window.wellgo_bot.selectedAFlight=false;
  }
}
window.select_a_flight_from_bot_list=select_a_flight_from_bot_list;

document.getElementById("main_bot_view_flights_all_details_select_btn").addEventListener("click",e=>{
  select_a_flight_from_bot_list();
});

document.getElementById("main_bot_view_flights_all_details_deselect_btn").addEventListener("click",e=>{
  document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
  window.wellgo_bot.selectedAFlight=false;
  document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
});

document.getElementById("main_bot_view_flights_all_details_cancel_btn").addEventListener("click", e=>{
  document.getElementById("main_bot_view_flights_all_details").style.display="none";
  document.getElementById("main_bot_view_flights_all_details_selected_cover").style.display="none";
  window.wellgo_bot.selectedAFlight=false;
  document.getElementById("select_a_ticket_from_bot_list_chck").checked=false;
});

document.getElementById("main_bot_view_selected_flights_all_details_cancel_btn").addEventListener("click", e=>{
  document.getElementById("main_bot_view_selected_flights_all_details").style.display="none";
});

let main_bot_view_flights_all_details_func = () => {
  document.getElementById("main_bot_view_flights_all_details").style.display="block";
}
window.main_bot_view_flights_all_details_func=main_bot_view_flights_all_details_func;

let main_bot_view_selected_flights_all_details_func = () => {
  document.getElementById("main_bot_view_selected_flights_all_details").style.display="block";
}
window.main_bot_view_selected_flights_all_details_func=main_bot_view_selected_flights_all_details_func;

//chat functions
document.getElementById("hp_support_user_submit_chat_btn").addEventListener("click", e=>{
  e.preventDefault();
  window.run_chat_instance();
});

document.querySelector("#main_support_chat_user_input_txt_container textarea").addEventListener("keyup", e=>{
  e.preventDefault();
  e.which = e.which || e.keyCode;
  if(e.which === 13) {
    window.run_chat_instance();
    document.querySelector("#main_support_chat_user_input_txt_container textarea").blur();
  }
});

let get_bot_query_autocomplete_wrapper = async (e) =>{
  let autocompleted = await window.get_bot_query_autocomplete(e.target.value);
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
window.get_bot_query_autocomplete_wrapper=get_bot_query_autocomplete_wrapper;

document.querySelector("#main_support_chat_user_input_txt_container textarea").addEventListener("keyup", e=>{
  if(e.target.value===""){
    document.getElementById("suggested_bot_query_display").innerHTML = "";
    //return;
  }else{
    get_bot_query_autocomplete_wrapper(e)
  }
  
});

let ig = 0;
let is_chat_container_shown = false;
let toggle_show_hp_support_chat_container = () => {
    document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_loading_markup();
    if(is_chat_container_shown){

      document.body.style.position="initial";
      document.body.style.width="auto";
      document.body.style.height="auto";

      if(window.wellgo_bot.status===""){
        document.getElementById("chatbot_greenting_message_p").innerHTML = '';
      }
      window.$("#support_chat_container").slideUp("fast");
      if(document.getElementById("chatbot_provided_manual_channels"))
        document.getElementById("chatbot_provided_manual_channels").style.display="none";
      document.getElementById("main_support_chat_user_input_txt_container").style.display="none";
      ig=0;
    }else{

      if(window.$(window).width() <= 700){
        document.body.style.position="fixed";
        document.body.style.width="100vw";
        document.body.style.height="100vh";
      }

      setTimeout(()=>{
          document.getElementById("main_chat_bot_status_display").innerHTML=window.return_bot_chat_status_markup("online");
      },1000)
      hide_new_chatbot_tip();
      if(window.wellgo_bot.status===""){
        typeWriter();
      }
      document.getElementById("support_chat_container").style.display = "block";
      let show_text_fld_wait_time=1200;
      if(window.wellgo_bot.status===""){
        show_text_fld_wait_time=((txt.length*speed)/2);
      }
      setTimeout(()=>{
        if(document.getElementById("chatbot_provided_manual_channels"))
            document.getElementById("chatbot_provided_manual_channels").style.display="block";
        if(document.getElementById("main_support_chat_user_input_txt_container"))
          document.getElementById("main_support_chat_user_input_txt_container").style.display="block";
      }, show_text_fld_wait_time);
    }
    is_chat_container_shown = !is_chat_container_shown;
}
window.toggle_show_hp_support_chat_container=toggle_show_hp_support_chat_container;

let txt = ""; /* The text */
let speed = 20; /* The speed/duration of the effect in milliseconds */

let typeWriter = () => {
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
          nestCount++;
          idxOfClosingTagFirstBraket = txt.indexOf("<", idxOfClosingTagFirstBraket+1);
          indexOfTagClosing_2=txt.indexOf(">", idxOfClosingTagFirstBraket+1);
      }

      for(let i=0; i<nestCount; i++){
          indexOfTagClosing_2 = txt.indexOf(">", indexOfTagClosing_2 + 1);
      }

      document.getElementById("chatbot_greenting_message_p").innerHTML += txt.substring(ig, (indexOfTagClosing_2+1));
        ig = (indexOfTagClosing_2+1);
    }else{
        document.getElementById("chatbot_greenting_message_p").innerHTML += txt.charAt(ig); 
        ig++;
    }
    setTimeout(typeWriter, speed);
  }
}
window.typeWriter=typeWriter;

let show_new_chatbot_tip = (msg) => {
    document.getElementById("main_chat_bot_tips_poppup_section").style.display="block";
    setTimeout(()=>hide_new_chatbot_tip(),15000);
}
window.show_new_chatbot_tip=show_new_chatbot_tip;

let hide_new_chatbot_tip = () => {
    window.$("#main_chat_bot_tips_poppup_section").slideUp("fast");
}
window.hide_new_chatbot_tip=hide_new_chatbot_tip;

window.$(document).ready(()=>{
  setTimeout(()=>show_new_chatbot_tip("msg"),10000);
  setTimeout(()=>window.toggle_main_page_search_filters(), 3500);
});

let show_chat_bot_uprading_message = () => {
  document.getElementById("hp_support_chat_items").innerHTML = `
      <div class="support_chat_bot_sent_msg_container">
        <div class="support_chat_bot_sent_msg_container_bot_profile_pic">
          <i class="fa-solid fa-robot"></i>
        </div>
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
window.show_chat_bot_uprading_message=show_chat_bot_uprading_message;

document.getElementById("main_homepage_start_support_btn").addEventListener("click", e=>{
  if(window.wellgo_bot.status===""){
    show_chat_bot_uprading_message();
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chatbot_popup_tip_msg").addEventListener("click", e=>{
  if(window.wellgo_bot.status===""){
    show_chat_bot_uprading_message();
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chatbot_popup_tip_img").addEventListener("click", e=>{
  if(window.wellgo_bot.status===""){
    show_chat_bot_uprading_message()
  }
  toggle_show_hp_support_chat_container();
});

document.getElementById("main_chat_hp_support_container_close_btn").addEventListener("click", e=>{
  toggle_show_hp_support_chat_container();
});

let is_landing_page_search_filters_open = false;
window.is_landing_page_search_filters_open=is_landing_page_search_filters_open;

let start_book_with_vitual_agent = () => {

  if(window.wellgo_bot.status===""){
    //reseting everything
    window.virtual_assistant_functions.reset_bot_status();
    
    if(document.querySelectorAll(".departure_airport_suggested_by_bot"))
      clear_airports_suggested_by_bot_ids()
    document.getElementById("hp_support_chat_items").innerHTML = `
      <div class="support_chat_bot_sent_msg_container">
        <div class="support_chat_bot_sent_msg_container_bot_profile_pic">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="support_chat_bot_sent_msg_inner_container">
            <p id="chatbot_greenting_message_p" style="font-family: 'Prompt', sans-serif; font-size: 15px;"></p>
        </div>
      </div>
    `;
    txt = window.virtual_assistant_functions.get_starter_message(
      window.wellgo_bot.status_names.BEGIN_AIR_BOOKING);
    
    /*document.getElementById("chatbot_greenting_message_p").innerHTML
    = window.virtual_assistant_functions.get_starter_message(
          window.wellgo_bot.status_names.BEGIN_AIR_BOOKING);*/
  }
  toggle_show_hp_support_chat_container();
  window.toggle_main_page_search_filters();
  window.wellgo_bot.status = window.wellgo_bot.status_names.BEGIN_AIR_BOOKING;

  window.wellgo_bot.step = window.BOT_STEPS.ORIGIN_DESTINATION;
}
window.start_book_with_vitual_agent=start_book_with_vitual_agent;
//global.start_book_with_vitual_agent=start_book_with_vitual_agent;

document.getElementById("landing_page_search_bar_call_btn").addEventListener("click", e=>{
  alert("placing your call now");
  window.toggle_main_page_search_filters();
});

document.getElementById("landing_page_search_bar_show_main_search_form_btn").addEventListener("click", e=>{
  window.toggle_main_page_search_filters();
});
document.getElementById("landing_page_search_bar_help_pg_btn").addEventListener("click", e=>{
  window.toggle_main_page_search_filters();
});

window.onscroll = function() {
  if(localStorage.getItem("is_home_page")){
    if (window.pageYOffset > 40) { 

      if(window.$(window).width() > 1000){
        document.querySelector("header").style.backgroundColor="#000000";
      }
      
    } else { 
      
      if(window.$(window).width() > 1000){
        document.querySelector("header").style.background="none";
      }else{
        // Do nothing
      }

    }
  }
}

//alert("here");