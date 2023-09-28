import { chat_bot_new_msg } from "../components/ExploreDestination";
import { return_new_rand_msg } from "../chatbot_funcs";

import $ from "jquery";


export function show_login_page(){

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";
    localStorage.removeItem("is_home_page");

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_login_menu_item", "desktop_login_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("help_page").style.display="none";
    document.getElementById("login_page").style.display="block";
}

export function show_home_page(is_from_search=false){
    
    localStorage.setItem("is_home_page", "yes");

    chat_bot_new_msg(return_new_rand_msg());

    if(document.getElementById("selected_ticket_pane"))
        document.getElementById("selected_ticket_pane").style.display="none";
    if($(window).width() > 700)
        if(document.querySelector("header"))
            document.querySelector("header").style.background ="none";
    //document.getElementById("site_main_header").style.display="none";
    if(!is_from_search){
        if($(window).width() > 700)
            if(document.querySelector("header"))
                document.querySelector("header").style.backgroundColor="#000000";
        if(document.getElementById("main_hero_section"))
            document.getElementById("main_hero_section").style.display="block";
        localStorage.removeItem("is_home_page");
    }else{
        if(document.getElementById("main_hero_section"))
            document.getElementById("main_hero_section").style.display="none";
    }

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_search_menu_item");

    //document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("help_page").style.display="none";
    //document.getElementById("home_page").style.display="block";
}

export function show_search_page(){

    localStorage.removeItem("is_home_page");

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_search_menu_item");

    //document.getElementById("home_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("help_page").style.display="none";
    //document.getElementById("search_page").style.display="block";

}

export function show_trips_page(){

    localStorage.removeItem("is_home_page");

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_trips_menu_item", "desktop_trips_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("trips_page").style.display="block";
}

export function show_deals_page(){

    localStorage.removeItem("is_home_page");

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    //change_nav_active_icon("mobile_trips_menu_item", "desktop_trips_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("deals_page").style.display="block";
    document.getElementById("help_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
}

export function show_explore_page(){

    localStorage.removeItem("is_home_page");

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_explore_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("help_page").style.display="none";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("explore_page").style.display="block";
}

export function show_help_page(){

    localStorage.removeItem("is_home_page");

    //toggle_main_page_search_filters()

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    //change_nav_active_icon("mobile_search_menu_item", "desktop_explore_menu_item");

    document.getElementById("search_page").style.display="none";
    document.getElementById("trips_page").style.display="none";
    document.getElementById("deals_page").style.display="none";
    document.getElementById("help_page").style.display="block";
    document.getElementById("login_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("explore_page").style.display="none";
}

export function show_full_search_form(){
    
    /*if(document.getElementById("landing_page_search_filters_container").style.display==="none"){
        //do nothing
    }else{
        toggle_main_page_search_filters();
    }*/

    window.scrollTo(0, 0);

    document.getElementById("site_main_header").style.display="block";
    document.getElementById("main_hero_section").style.display="block";
    if($(window).width() > 700)
        document.querySelector("header").style.backgroundColor="#000000";
    localStorage.removeItem("is_home_page");
}

export function change_nav_active_icon(mobile_id, desktop_id){
    //for mobile
    Array.from(document.getElementsByClassName("header_mobile_menus_item")).forEach(each => {
        each.classList.remove("active");
    });
    //for desktop
    Array.from(document.getElementsByClassName("each-header-menu-item")).forEach(each => {
        each.classList.remove("active");
    });

    //setting current active item
    document.getElementById(mobile_id).classList.add("active");
    document.getElementById(desktop_id).classList.add("active");
}
