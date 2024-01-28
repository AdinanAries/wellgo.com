import CONSTANTS from "../Constants/Constants";

import $ from "jquery";
const url=window.location.href;
if(url.charAt(url.length-1)==="/"){
    window.history.pushState(null, "", url.substring(0,url.length-1));
}

export function show_login_page(){
    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        if(document.querySelector("header"))
            document.querySelector("header").style.backgroundColor="#000000";
    localStorage.removeItem("is_home_page");

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_login_menu_item", "desktop_login_menu_item");

    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="block";

    global.history.pushState({}, "", CONSTANTS.site_pages.account);
    window.doAwaitingRefresh();
}

export function show_home_page(is_from_search=false){
    
    localStorage.setItem("is_home_page", "yes");

    if(document.getElementById("selected_ticket_pane"))
        document.getElementById("selected_ticket_pane").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        if(document.querySelector("header"))
            document.querySelector("header").style.background ="none";
    //document.getElementById("site_main_header").style.display="none";
    if(!is_from_search){
        if($(window).width() > CONSTANTS.viewport_threshold)
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

    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="block";
    global.history.pushState({}, "", CONSTANTS.site_pages.landing);
    window.doAwaitingRefresh();
}

export function show_search_page(){

    localStorage.removeItem("is_home_page");

    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        if(document.querySelector("header"))
            document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_search_menu_item");

    //if(document.getElementById("home_page"))
        //document.getElementById("home_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="none";
    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="block";
    global.history.pushState({}, "", CONSTANTS.site_pages.search);
    window.doAwaitingRefresh();
}

export function show_trips_page(){

    localStorage.removeItem("is_home_page");

    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_trips_menu_item", "desktop_trips_menu_item");

    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="block";

    global.history.pushState({}, "", CONSTANTS.site_pages.trips);
    window.doAwaitingRefresh();
}

export function show_deals_page(){

    localStorage.removeItem("is_home_page");

    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        if(document.querySelector("header"))
            document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    //change_nav_active_icon("mobile_trips_menu_item", "desktop_trips_menu_item");

    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="block";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";

    global.history.pushState({}, "", CONSTANTS.site_pages.deals);
    window.doAwaitingRefresh();
}

export function show_explore_page(){

    localStorage.removeItem("is_home_page");

    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        if(document.querySelector("header"))
            document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    change_nav_active_icon("mobile_search_menu_item", "desktop_explore_menu_item");

    //if(document.getElementById("search_page"))
        //document.getElementById("search_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="none";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="block";

    global.history.pushState({}, "", CONSTANTS.site_pages.explore);
    window.doAwaitingRefresh();
}

export function show_help_page(){

    localStorage.removeItem("is_home_page");

    //toggle_main_page_search_filters()

    if(document.getElementById("site_main_header"))
        document.getElementById("site_main_header").style.display="block";
    if(document.getElementById("main_hero_section"))
        document.getElementById("main_hero_section").style.display="none";
    if($(window).width() > CONSTANTS.viewport_threshold)
        document.querySelector("header").style.backgroundColor="#000000";

    window.scrollTo(0, 0);
    //change_nav_active_icon("mobile_search_menu_item", "desktop_explore_menu_item");

    if(document.getElementById("search_page"))
        document.getElementById("search_page").style.display="none";
    if(document.getElementById("trips_page"))
        document.getElementById("trips_page").style.display="none";
    if(document.getElementById("deals_page"))
        document.getElementById("deals_page").style.display="none";
    if(document.getElementById("help_page"))
        document.getElementById("help_page").style.display="block";
    if(document.getElementById("login_page"))
        document.getElementById("login_page").style.display="none";
    if(document.getElementById("home_page"))
        document.getElementById("home_page").style.display="none";
    if(document.getElementById("explore_page"))
        document.getElementById("explore_page").style.display="none";

    global.history.pushState({}, "", CONSTANTS.site_pages.support);
    window.doAwaitingRefresh();
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
    if($(window).width() > CONSTANTS.viewport_threshold)
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

window.setAwaitDoRefresh = () =>{
    localStorage.setItem("DO_REFRESH", "1");
}

window.doAwaitingRefresh = () => {
    if(localStorage.getItem("DO_REFRESH")){
        localStorage.removeItem("DO_REFRESH");
        window.location.reload();
    }
}

window.addEventListener('popstate', function(e) {
    UseCurrentPage();
});
const UseCurrentPage = () => {
    let page = window.location.pathname.substring(1);
    if(CONSTANTS.site_pages.account===page){
      show_login_page()
    }
    if(CONSTANTS.site_pages.support===page){
        show_help_page()
    }
    if(CONSTANTS.site_pages.deals===page){
        show_deals_page()
    }
    if(CONSTANTS.site_pages.explore===page){
        show_explore_page()
    }
    if(CONSTANTS.site_pages.trips===page){
        show_trips_page()
    }
    if(CONSTANTS.site_pages.landing===page){
        show_home_page();
        window.__show_home_page__();
    }
    if(CONSTANTS.site_pages.search===page){
        show_search_page();
        window.__show_search_page__();
    }
}

export default UseCurrentPage;