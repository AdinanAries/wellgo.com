let returned_flights = [1,2,3,4,5];
let search_results_notice = {
    title: "",
    msg: ""
}

function search_submit_function(){
    setTimeout(()=>{
        document.getElementById("animated_loader").style.display = "none";
        document.getElementById("search_results_list_items").innerHTML = '';
        document.getElementById("search_result_important_notice").innerHTML = return_search_results_important_notice(search_results_notice)

        for(let i=0; i<returned_flights.length; i++){
            document.getElementById("search_results_list_items").innerHTML += return_each_ticket({});
        }
    }, 7000);
}