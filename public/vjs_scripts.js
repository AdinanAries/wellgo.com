$(function() {
    $('#departure_return_dates_input').daterangepicker({
      opens: 'left',
      //autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    }, function(start, end, label) {
  
      setTimeout(()=>{
        document.getElementById("departure_return_dates_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
      }, 100);
  
      //fligh_search_data.departure_date = start.format('YYYY-MM-DD');
      //fligh_search_data.return_date = end.format('YYYY-MM-DD');
  
      //window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
  
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });