const DateChoosersInit = () => {
    window.$(function() {
        window.$('#departure_return_dates_input').daterangepicker({
          opens: 'left',
          minDate: new Date(),
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(start, end, label) {
      
          setTimeout(()=>{
            if(document.getElementById("departure_return_dates_input"))
                document.getElementById("departure_return_dates_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
          }, 100);
      
          let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
          flight_search_data.itinerary.departure.date = start.format('YYYY-MM-DD');
          flight_search_data.itinerary.arrival.date = end.format('YYYY-MM-DD');
      
          window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
      
          //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
      });
      
      window.$(function() {
        window.$('#sp_departure_return_dates_input').daterangepicker({
          opens: 'left',
          minDate: new Date(),
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(start, end, label) {
      
          setTimeout(()=>{
            if(document.getElementById("sp_departure_return_dates_input"))
                document.getElementById("sp_departure_return_dates_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
          }, 100);
      
          let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
          flight_search_data.itinerary.departure.date = start.format('YYYY-MM-DD');
          flight_search_data.itinerary.arrival.date = end.format('YYYY-MM-DD');
      
          window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));
      
          //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
      });
      window.$(function() {
        window.$('#booking_history_date_range_input').daterangepicker({
          opens: 'left',
          autoUpdateInput: false,
          locale: {
            cancelLabel: 'Clear'
          }
        }, function(start, end, label) {
      
          setTimeout(()=>{
            if(document.getElementById("booking_history_date_range_input"))
                document.getElementById("booking_history_date_range_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
          }, 100);
      
          /*let flight_search_data = JSON.parse(localStorage.getItem("search_obj"));
          flight_search_data.itinerary.departure.date = start.format('YYYY-MM-DD');
          flight_search_data.itinerary.arrival.date = end.format('YYYY-MM-DD');
      
          window.localStorage.setItem("search_obj", JSON.stringify(flight_search_data));*/
      
          //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });
      });
}

export default DateChoosersInit;