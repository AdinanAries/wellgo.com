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

    if(document.getElementById("landing_page_search_form_bar_bot_img")){
        document.getElementById("landing_page_search_form_bar_bot_img").addEventListener("click", e=>{
            if(global.wellgo_bot.status===""){
              global.show_chat_bot_uprading_message();
            }
            global.toggle_show_hp_support_chat_container()
        });
    }

    if(document.getElementById("landing_page_hero_manu_bar_bot_item")){
        document.getElementById("landing_page_hero_manu_bar_bot_item").addEventListener("click", e=>{
            if(global.wellgo_bot.status===""){
              global.show_chat_bot_uprading_message();
            }
            global.toggle_show_hp_support_chat_container()
        });
    }

    if(document.getElementById("dropdown_landing_page_hero_manu_bar_bot_item")){
        document.getElementById("dropdown_landing_page_hero_manu_bar_bot_item").addEventListener("click", e=>{
            if(global.wellgo_bot.status===""){
              global.show_chat_bot_uprading_message();
            }
            global.toggle_show_hp_support_chat_container()
        });
    }

    if(document.getElementById("landing_page_search_bar_book_w_vta_btn")){
        document.getElementById("landing_page_search_bar_book_w_vta_btn").addEventListener("click", e=>{
            global.start_book_with_vitual_agent();
        });
    }

}

export default HeroDropIcon;