import CONSTANTS from "../Constants/Constants";

const DateChoosersInit = (type=CONSTANTS.one_way) => {
  if(document.getElementById("departure_return_dates_input"))
    document.getElementById("departure_return_dates_input").value="";
  window.$(function() {
    window.$('#departure_return_dates_input').daterangepicker({
      singleDatePicker: (type===CONSTANTS.one_way),
      opens: 'left',
      minDate: new Date(),
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        if(document.getElementById("departure_return_dates_input"))
            document.getElementById("departure_return_dates_input").value = start.toString().substring(0,11) + ((type===CONSTANTS.round_trip) ? " - "+ end.toString().substring(0,11) : "");
      }, 100);
  
      let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
      flight_search_data.itinerary.departure.date = start.format('YYYY-MM-DD');
      flight_search_data.itinerary.arrival.date="";
      if(type===CONSTANTS.round_trip){
        flight_search_data.itinerary.arrival.date = end.format('YYYY-MM-DD');
      }
  
      window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
}

export const SpDateChoosersInit = (type=CONSTANTS.one_way, start_date="", end_date="") => {
  if(document.getElementById("sp_departure_return_dates_input"))
    document.getElementById("sp_departure_return_dates_input").value="";
  if(type===CONSTANTS.one_way){
    document.getElementById("sp_departure_return_dates_input").placeholder="departure date";
    if(start_date)
      document.getElementById("sp_departure_return_dates_input").value=start_date;
  }else if(type===CONSTANTS.round_trip){
    document.getElementById("sp_departure_return_dates_input").placeholder="departure - return dates";
    if(start_date && end_date)
      document.getElementById("sp_departure_return_dates_input").value=start_date+" - "+end_date;
  }
  window.$(function() {
    window.$('#sp_departure_return_dates_input').daterangepicker({
      singleDatePicker: (type===CONSTANTS.one_way),
      opens: 'left',
      minDate: new Date(),
      autoUpdateInput: false,
      locale: {
        format: 'YYYY-MM-DD',
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        if(document.getElementById("sp_departure_return_dates_input"))
            document.getElementById("sp_departure_return_dates_input").value = start.toString().substring(0,11) + ((type===CONSTANTS.round_trip) ? " - "+ end.toString().substring(0,11) : "");
      }, 100);
  
      let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
      flight_search_data.itinerary.departure.date = start.format('YYYY-MM-DD');
      flight_search_data.itinerary.arrival.date="";
      if(type===CONSTANTS.round_trip){
        flight_search_data.itinerary.arrival.date = end.format('YYYY-MM-DD');
      }
  
      window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
}

export const BhDateChoosersInit = (type=CONSTANTS.one_way) => {
  if(document.getElementById("booking_history_date_range_input")){
    document.getElementById("booking_history_date_range_input").value="";
    if(type===CONSTANTS.one_way){
      document.getElementById("booking_history_date_range_input").placeholder="departure date"
    }else{
      document.getElementById("booking_history_date_range_input").placeholder="departure - return dates"
    }
  }
  window.$(function() {
    window.$('#booking_history_date_range_input').daterangepicker({
      opens: 'left',
      singleDatePicker: (type===CONSTANTS.one_way),
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        if(document.getElementById("booking_history_date_range_input"))
            document.getElementById("booking_history_date_range_input").value = start.toString().substring(0,11) + ((type===CONSTANTS.round_trip) ? " - "+ end.toString().substring(0,11) : "");
      }, 100);
      
      const _departure = start.format('YYYY-MM-DD');
      const _return = end.format('YYYY-MM-DD');
      global._setFlightHistoryFilterDates(_departure, _return);
  
    });
  });
}

export default DateChoosersInit;