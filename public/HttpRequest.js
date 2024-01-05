let returned_flights = [1,2,3,4,5];
let search_results_notice = {
    title: "",
    msg: ""
}

function search_submit_function(){
    setTimeout(()=>{
        if(document.getElementById("animated_loader"))
            document.getElementById("animated_loader").style.display = "none";
        if(document.getElementById("search_results_list_items"))
            document.getElementById("search_results_list_items").innerHTML = '';
        if(document.getElementById("search_result_important_notice"))
            document.getElementById("search_result_important_notice").innerHTML = window.return_search_results_important_notice(search_results_notice)
        if(document.getElementById("search_list_main__settings_section"))
            document.getElementById("search_list_main__settings_section").innerHTML = window.return_search_results_filters_and_sort({});
        if(document.getElementById("search_results_mobile_top_itin_display"))
            document.getElementById("search_results_mobile_top_itin_display").innerHTML = window.return_search_results_mobile_top_itin_display({});

        for(let i=0; i<returned_flights.length; i++){
            if(document.getElementById("search_results_list_items"))
                document.getElementById("search_results_list_items").innerHTML += window.return_each_ticket({});
        }
    }, 7000);
}
