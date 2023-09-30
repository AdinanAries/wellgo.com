const HeroDropIcon = () => {
     global.toggle_main_page_search_filters = () => {
        if(global.is_landing_page_search_filters_open){
            setTimeout(()=>{
                if(document.getElementById("landing_page_search_form_bar"))
                    document.getElementById("landing_page_search_form_bar").style.backgroundColor = "rgba(0,0,0,0.3)";
                if(document.getElementById("landing_page_search_form_bar"))
                    document.getElementById("landing_page_search_form_bar").style.borderWidth = "1px";
                if(document.getElementById("landing_page_search_input_text_display"))
                    document.getElementById("landing_page_search_input_text_display").style.color = "white";
            }, 200);
            if(document.getElementById("landing_page_search_filters_container"))
                global.$("#landing_page_search_filters_container").slideUp("fast");
            if(document.getElementById("landing_page_search_form_show_filters_btn_caret"))
                document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(0deg)";
        }else{
            if(document.getElementById("landing_page_search_form_bar"))
                document.getElementById("landing_page_search_form_bar").style.backgroundColor = "white";
            if(document.getElementById("landing_page_search_form_bar"))
                document.getElementById("landing_page_search_form_bar").style.borderWidth = "0";
            if(document.getElementById("landing_page_search_input_text_display"))
                document.getElementById("landing_page_search_input_text_display").style.color = "rgba(0,0,0,0.7)";
            if(document.getElementById("landing_page_search_filters_container"))
                global.$("#landing_page_search_filters_container").slideDown("fast");
            if(document.getElementById("landing_page_search_form_show_filters_btn_caret"))
                document.getElementById("landing_page_search_form_show_filters_btn_caret").style.transform = "rotate(180deg)";
        }
        global.is_landing_page_search_filters_open = !global.is_landing_page_search_filters_open;
    }

    if(document.getElementById("landing_page_search_form_show_filters_btn")){
        document.getElementById("landing_page_search_form_show_filters_btn").addEventListener("click", e=>{
            global.toggle_main_page_search_filters()
        });
    }

}

export default HeroDropIcon;