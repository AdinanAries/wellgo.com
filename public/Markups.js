function show_selected_ticket_details_pane(){
    if($(window).width() <= 700){
        document.body.style.position="fixed";
        document.body.style.width="100vw";
        document.body.style.height="100vh";
    }
    //document.getElementById("selected_ticket_pane").style.display = "block";
}
function hide_selected_ticket_details_pane(){
    document.body.style.position="initial";
      document.body.style.width="auto";
      document.body.style.height="auto";
      //document.getElementById("selected_ticket_pane").style.display="none"
}

var is_itinerary_showing = false;
function toggle_see_ticket_details_itinerary_details(element_id){
    if(is_itinerary_showing){
        window.$("#"+element_id).slideUp("fast");
    }else{
        window.$("#"+element_id).slideDown("fast");
    }
        is_itinerary_showing = !is_itinerary_showing;
}

var is_itinerary_showing_for_bot_list = false;
function bot_toggle_see_ticket_details_itinerary_details(){
    if(is_itinerary_showing_for_bot_list){
        $("#bot_see_ticket_details_itinerary_details").slideUp("fast");
    }else{
        $("#bot_see_ticket_details_itinerary_details").slideDown("fast");
    }
    is_itinerary_showing_for_bot_list = !is_itinerary_showing_for_bot_list;
}

//helpers
let replacement_codes = [
    "@#wellgoqoute#@",
    "@#wellgodoubleqoute#@"
]
function stringify_obj_for_template_strings(obj){
    return JSON.stringify(obj).replaceAll("'", replacement_codes[0]).replaceAll('"', replacement_codes[1]);
}
function parse_obj_for_template_strings(string_p){
    return JSON.parse((string_p.replaceAll(replacement_codes[0], "'").replaceAll(replacement_codes[1], '"')))
}

//markups
function return_each_ticket(item){
    return `
        <div onclick="show_selected_ticket_details_pane()" style="cursor: pointer; background-color: rgba(255,255,255,0.7); border-radius: 9px; margin-bottom: 10px; padding: 15px 10px;">
            <div class="each_ticket_upper_flex" style="flex-direction: row; justify-content: space-between;">
                <div>
                    <p style="color: rgba(0,0,0,0.8); font-weight: bolder; font-size: 16px; font-family: 'Prompt', Sans-serif; marginBottom: 2px;">9:45am - 2:54pm</p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 12px;">Montreal (YUB) - New York (LGA)</p>
                </div>
                <div>
                    <p style="color: rgba(0,0,0,0.8); font-size: 12px;">5h 9m (1 stop)</p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 12px;">2h 1m in Toronto(yyz)</p>
                </div>
                <div class="each_ticket_price_display_container">
                    <p class="each_ticket_price_display" style="color: rgba(0,0,0,0.8); font-weight: 1000; font-size: 27px; font-family: 'Prompt', Sans-serif; margin-bottom: 2px;">
                        $335</p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 12px;">Roundtrip per traveler</p>
                </div>
            </div>
            <div style="margin-top: 5px;">
                <p style="color: rgba(0,0,0,0.8); font-size: 12px; margin-bottom: 10px">
                    <img src="./deltaIcon.png" style="width: 27px; height: auto; objectFit: cover;" />
                    Delta &#8226;
                    Delta 7204 and 7138 operated by WestJet
                </p>
                <p style="color: rgba(0,0,0,0.8); font-size: 12px">
                    2 cleaning and safety practices
                </p>
            </div>
        </div>
    `;
}

function return_selected_ticket_item(item){
    let checkout_obj = {name: "anything"}
    return `
        <div id="selected_ticket_main_details_pane">
                <div style="padding: 10px; border-bottom: 1px solid rgba(0,0,0,0.1);">
                    <div style="display: flex; flex-direction: row; justify-content: space-between;">
                        <div>
                            <p style="font-size: 17px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                9:45am - 5:23pm (2 stops)
                            </p>
                            <p style="font-size: 14px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7);">
                                New York
                                <span style="margin: 0 10px; color: rgba(0,0,0,0.4);"><i class="fa fa-exchange"></i></span>
                                Canada
                            </p>
                            <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px;">Nov 25 - Nov 27</p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 12px; margin-top: 10px;">
                                <img src="./deltaIcon.png" style="width: 27px; height: auto; object-fit: cover;" />
                                Delta
                                <span onclick="toggle_see_ticket_details_itinerary_details()" style="cursor: pointer; margin-left: 15px; font-size: 14px; color: #c900b0;">
                                    See details <i style="marginLeft: 5px;" class="fa fa-angle-down"></i>
                                </span>
                            </p>
                            <div id="see_ticket_details_itinerary_details" style="display: none; margin-top: 10px; margin-bottom: 20px;">

                                <!--Take off without stops-->
                                <div style="display: none; border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 20px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -15px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; borderRadius: 100%; position: absolute; bottom: -10px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        9:45am - New York
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px; margin-left: 20px; margin-bottom: 20px;">La Guardia (LGA)</p>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Economy/Coach (T)</p>
                                    </div>
                                    <p style="font-size: 15px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                </div>                            

                                <!--Take off with stops-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 20px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -15px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; border: 3px solid rgba(0,0,0,0.3); position: absolute; bottom: -10px; left: -7px;">

                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        9:45am - New York
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px; margin-left: 20px; margin-bottom: 20px;">La Guardia (LGA)</p>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                </div>

                                <!--Middle Stop Segments-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 10px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -11px; left: -6.5px;">
                                        
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; border: 3px solid rgba(0,0,0,0.3); position: absolute; bottom: -10px; left: -7px;">
                                        
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                    <div style="background-color: rgba(255,0,0,0.1); margin: 10px; width: fit-content; border: 1px solid rgba(255,0,0,0.1); border-radius: 6px; padding: 10px 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">
                                            <i class="fa fa-exclamation-triangle" style="color: rgba(255,0,0,0.7); margin-right: 5px"></i>
                                            Flight Stop
                                        </p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 5px;">1h 35m wait in Toronto</p>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                </div>

                                <!--Arrival with stops-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 10px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; borderRadius: 100%; position: absolute; top: -11px; left: -6.5px;">
                                        
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; bottom: -10px; left: -6.5px">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                    <div style="background-color: rgba(255,0,0,0.1); margin: 10px; width: fit-content; border: 1px solid rgba(255,0,0,0.1); border-radius: 6px; padding: 10px 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">
                                            <i class="fa fa-exclamation-triangle" style="color: rgba(255,0,0,0.7); margin-right: 5px;"></i>
                                            Flight Stop
                                        </p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 5px;">1h 35m wait in Toronto</p>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                    <p style="font-size: 15px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                </div>
                            </div>
                        </div>
                        <p class="pop-up-close-btn" onclick='hide_selected_ticket_details_pane();' style="cursor: pointer; color: rgba(255,0,0,0.6); font-size: 33px; margin-right: 5px;">
                            &times;
                        </p>
                    </div>
                </div>
                <div style="padding: 10px;">
                    <p style="font-size: 22px; font-family: 'Prompt'; Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        $378
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 11px; marginTop: -2px;">
                        rountrip for 1 traveler
                    </p>
                    <p style="font-size: 14px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder">
                        Main Cabin
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                        Economy
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Seat
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                    <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Seat choice included
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Bags
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                        <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Carry-on bag included
                    </p>
                    <p style="margin-top: 10px; display: flex; flex-direction: row; justify-content: space-between;">
                        <span style="color: rgba(0,0,0,0.8); font-size: 13px;">
                            <i class="fa fa-money" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>1st checked bag:
                        </span>
                        <span style="color: rgba(0,0,0,0.8)" fontSize: 13px;">
                            $30
                        </span>
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Flexibility
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                    <i class="fa fa-times" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Cancellation not allowed
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                        <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        No change fees
                    </p>
                </div>
                <div class="selected_ticket_book_btn_container">
                    <div onclick="show_start_checkout_page('${stringify_obj_for_template_strings(checkout_obj)}');" class="selected_ticket_book_btn">
                        <i style="margin-right: 2px; color: rgba(255,255,255,0.5); font-size: 19px;" class="fa fa-check-square-o" aria-hidden="true"></i>
                        Book
                    </div>
                </div>
            </div>

    `;
}

function return_selected_ticket_item_from_bot_list(item){
    let checkout_obj = {name: "anything"}
    return `
        <div>
                <div style="padding: 10px; border-bottom: 1px solid rgba(0,0,0,0.1);">
                    <div style="display: flex; flex-direction: row; justify-content: space-between;">
                        <div>
                            <p style="font-size: 17px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                9:45am - 5:23pm (2 stops)
                            </p>
                            <p style="font-size: 14px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7);">
                                New York
                                <span style="margin: 0 10px; color: rgba(0,0,0,0.4);"><i class="fa fa-exchange"></i></span>
                                Canada
                            </p>
                            <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px;">Nov 25 - Nov 27</p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 12px; margin-top: 10px;">
                                <img src="./deltaIcon.png" style="width: 27px; height: auto; object-fit: cover;" />
                                Delta
                                <span onclick="bot_toggle_see_ticket_details_itinerary_details()" style="cursor: pointer; margin-left: 15px; font-size: 14px; color: #c900b0;">
                                    See details <i style="marginLeft: 5px;" class="fa fa-angle-down"></i>
                                </span>
                            </p>
                            <div id="bot_see_ticket_details_itinerary_details" style="display: none; margin-top: 10px; margin-bottom: 20px;">

                                <!--Take off without stops-->
                                <div style="display: none; border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 20px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -15px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; borderRadius: 100%; position: absolute; bottom: -10px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        9:45am - New York
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px; margin-left: 20px; margin-bottom: 20px;">La Guardia (LGA)</p>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); marginTop: 4px;">Economy/Coach (T)</p>
                                    </div>
                                    <p style="font-size: 15px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                </div>                            

                                <!--Take off with stops-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 20px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -15px; left: -6.5px;">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; border: 3px solid rgba(0,0,0,0.3); position: absolute; bottom: -10px; left: -7px;">

                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        9:45am - New York
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px; margin-left: 20px; margin-bottom: 20px;">La Guardia (LGA)</p>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                </div>

                                <!--Middle Stop Segments-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 10px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; top: -11px; left: -6.5px;">
                                        
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: "rgba(0,0,0,0.3)", transform: "rotate(135deg)"}} className="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; border: 3px solid rgba(0,0,0,0.3); position: absolute; bottom: -10px; left: -7px;">
                                        
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                    <div style="background-color: rgba(255,0,0,0.1); margin: 10px; width: fit-content; border: 1px solid rgba(255,0,0,0.1); border-radius: 6px; padding: 10px 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">
                                            <i class="fa fa-exclamation-triangle" style="color: rgba(255,0,0,0.7); margin-right: 5px"></i>
                                            Flight Stop
                                        </p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 5px;">1h 35m wait in Toronto</p>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                </div>

                                <!--Arrival with stops-->
                                <div style="border-left: 3px dashed rgba(0,0,0,0.2); margin-top: 10px; padding: 5px 10px; padding-right: 0; position: relative;">
                                    <div style="width: 10px; height: 10px; borderRadius: 100%; position: absolute; top: -11px; left: -6.5px;">
                                        
                                    </div>
                                    <div style="position: absolute; left: -8.5px; background-color: white; top: calc(50% - 20px); border-radius: 100%;">
                                        <i style="color: rgba(0,0,0,0.3); transform: rotate(135deg);" class="fa fa-plane"></i>
                                    </div>
                                    <div style="width: 10px; height: 10px; border-radius: 100%; position: absolute; bottom: -10px; left: -6.5px">
                                        <i class="fa fa-map-marker" style="color: rgba(0,0,0,0.3);"></i>
                                    </div>
                                    <p style="font-size: 15px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                    <div style="background-color: rgba(255,0,0,0.1); margin: 10px; width: fit-content; border: 1px solid rgba(255,0,0,0.1); border-radius: 6px; padding: 10px 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">
                                            <i class="fa fa-exclamation-triangle" style="color: rgba(255,0,0,0.7); margin-right: 5px;"></i>
                                            Flight Stop
                                        </p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 5px;">1h 35m wait in Toronto</p>
                                    </div>
                                    <div style="margin-left: 20px;">
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7);">1h 35m flight</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Operated by WestJet Encore</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Dehavilland DHC-8 400</p>
                                        <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 4px;">Economy/Coach (T)</p>
                                    </div>
                                    <p style="font-size: 15px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                                        11:20am - Toronto
                                    </p>
                                    <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-left: 20px; margin-top: 2px;">Pearson Intl. (YYZ)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="padding: 10px;">
                    <p style="font-size: 22px; font-family: 'Prompt'; Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        $378
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 11px; marginTop: -2px;">
                        rountrip for 1 traveler
                    </p>
                    <p style="font-size: 14px; margin-top: 20px; font-family: 'Prompt', sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder">
                        Main Cabin
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                        Economy
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Seat
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                    <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Seat choice included
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Bags
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                        <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Carry-on bag included
                    </p>
                    <p style="margin-top: 10px; display: flex; flex-direction: row; justify-content: space-between;">
                        <span style="color: rgba(0,0,0,0.8); font-size: 13px;">
                            <i class="fa fa-money" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>1st checked bag:
                        </span>
                        <span style="color: rgba(0,0,0,0.8)" fontSize: 13px;">
                            $30
                        </span>
                    </p>
                    <p style="font-size: 14px; margin-top: 25px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                        Flexibility
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                    <i class="fa fa-times" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        Cancellation not allowed
                    </p>
                    <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                        <i class="fa fa-check" style="margin-right: 10px; font-size: 16px; color: rgba(0,0,0,0.5);"></i>
                        No change fees
                    </p>
                </div>
            </div>

    `;
}

function return_search_results_important_notice(obj){
    return `
        <div class="search_result_inportant_notice_container">
            <div>
                <p style="color: rgba(105,0,0,0.7); font-size: 16px; font-family: 'Prompt', Sans-serif; margin-bottom: 10px;">
                    <i class="fa fa-info-circle" style="font-size: 15px; color: orangered; margin-right: 5px;"></i>Important Notice
                </p>
                <p style="color: rgba(0,0,0,0.7); font-size: 14px">
                    Prices displayed include taxes and may change based on availability. 
                    You can review any additional fees before checkout. 
                    Prices are not final until you complete your purchase.
                </p>
            </div>
        </div>
    `;
}
function return_search_results_filters_and_sort(obj){
    return `
        <div>
            <div id="mobile_sort_and_filter_title_and_sort">
                <div style="height: 50px; border-bottom: 1px solid rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center;">
                    <div style="display: flex; flex-direction: row; justify-content: space-between;">
                        <p style="color: rgba(0,0,0,0.5); font-weight: bolder; display: flex; flex-direction: column; justify-content: center;">
                            Sort and Filter
                        </p>
                        <p onclick="document.getElementById('search_list_main__settings_section').style.display='none';" id="close_filter_and_sort_btn" style="color: rgba(255,0,0,0.6); font-size: 33px; margin-right: 5px;">
                            &times;
                        </p>
                    </div>
                </div>
                <div style="margin-top: 20px; margin-bottom: 35px;">
                    <p style="color: rgba(0,0,0,0.5); font-size: 17px">Sort by</p>
                    <select style="padding: 14px; margin-top: 12px; width: 100%; border: 1px solid rgba(0,0,0,0.15); border-radius: 9px; color: rgba(0,0,0,0.7);">
                        <option>
                            Price (Lowest)
                        </option>
                    </select>
                </div>
            </div>
            <p style="color: rgba(0,0,0,0.5); font-size: 17px; margin-bottom: 30px;">
                <i style="margin-right: 7px;" class="fa fa-sliders" aria-hidden="true"></i>
                Filter by</p>

            <div style="margin-bottom: 30px;">
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 15px">
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">Stops</p>
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">From</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">Nonstop (6)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px">$143</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">1 Stop (30)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$123</p>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 15px;">
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">Airlines</p>
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">From</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">Air Canada (22)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); fontSize: 15px;">$243</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">American Airlines (11)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$133</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">United (5)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$114</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">WestJet (3)</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); fontSize: 15px;">$132</p>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 15px;">
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">Travel and baggage</p>
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 14px;">From</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); fontSize: 15px;">Seat choice included</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); fontSize: 15px;">$143</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">Carry-on bag included</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$123</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">No cancel fee</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$111</p>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: space-between; margin-bottom: 10px;">
                    <div style="display: flex; flex-direction: row;">
                        <input style="width: 19px; height: 19px; margin-right: 5px;" type="checkbox" />
                        <p style="color: rgba(0,0,0,0.7); font-size: 15px;">No change fee</p>
                    </div>
                    <p style="color: rgba(0,0,0,0.7); font-size: 15px;">$371</p>
                </div>
            </div>
        </div>
    `;
}
function return_search_results_mobile_top_itin_display(obj){
    return `
        <div id="itinerary_and_filter_icon">
            <div>
                <p style="font-size: 16px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7); font-weight: bolder;">
                    New York
                    <span style="margin: 0 10px; color: rgba(0,0,0,0.4);"><i class="fa fa-exchange"></i></span>
                    Canada
                </p>
                <p style="font-size: 13px; color: rgba(0,0,0,0.7); margin-top: 2px;">Nov 25 - Nov 27</p>
            </div>
            <p onclick="document.getElementById('search_list_main__settings_section').style.display='block';" style="font-weight: bolder; color: rgb(11, 71, 95); font-size: 17px;">
                <i style="margin-right: 7px;" class="fa fa-sliders" aria-hidden="true"></i>
                Filters</p>
        </div>
    `;
}
function return_start_checkout_info(json_obj){

    let js_obj = parse_obj_for_template_strings(json_obj);
    console.log(js_obj);

    return `
        <div class="wrapper">
            <div style="padding: 10px; display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div>
                        <div class="site-logo">
                            <p class="site-logo-img">
                                <img src="./WillgoLogo.png"/></p>
                            <div class="site-logo-txt">
                                <p style="color: rgb(23, 87, 148);">
                                    Wellgo<span>.com</span>
                                </p>
                            </div>
                        </div>
                        <p style="fontSize: 13px; margin-top: 10px; color: rgba(0,0,0,0.7); marginLeft: 10px;">
                            <i style="margin-right: 5px; font-size: 19px; color: rgba(0,0,0,0.4);" class="fa fa-shopping-cart" aria-hidden="true"></i>
                            Checkout total:
                            <span style="font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.6); fontSize: 13px; font-weight: bolder; margin-left: 10px;">$133.23</span>
                        </p>
                    </div>
                    <p class="pop-up-close-btn" onclick="document.getElementById('booking_start_checkout_page_container').style.display='none';" style="cursor: pointer; color: rgba(255,0,0,0.6); font-size: 33px; margin-right: 5px;">
                        &times;
                    </p>
                </div>
            </div>
            <div class="checkout_page_all_info_flex_container">
                <div class="checkout_page_all_info_flex_left">
                    <div class="checkout-page-ancillary-container">
                        <div onclick="start_select_seat_ancillary();" class="checkout-page-each-ancillary">
                            <p><img src="./flight_seat.png"/></p>
                            <p>Select Seat</p>
                        </div>
                        <div onclick="start_add_meal_ancillary();" class="checkout-page-each-ancillary">
                            <p><img src="./meal-icon.png"/></p>
                            <p>Add Meal</p>
                        </div>
                        <div onclick="start_add_luggage_ancillary();" class="checkout-page-each-ancillary">
                            <p><img src="./luggage_icon.png"/></p>
                            <p>Add Luggage</p>
                        </div>
                    </div>
                    <div id="add_ancillaries_container">
                        <div onclick="hide_add_ancillaries_container();" style="background-color: white; cursor: pointer; width: 35px; height: 35px; text-align: center; border: 1px solid rgba(0,0,0,0.1); border-radius: 100%; position: absolute; z-index: 1; top: 10px; right: 10px; color: rgba(0,0,0,0.7); font-size: 19px; display: flex; flex-direction: column; justify-content: center;">
                            <i class="fa fa-angle-up"></i>
                        </div>
                        <div id="seat_ancillary_settings_container" class="each_ancillary_setting_container">
                            <p style="text-align: center; font-size: 15px; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                Select Your Preferred Seat
                            </p>
                        </div>
                        <div id="meal_ancillary_settings_container" class="each_ancillary_setting_container">
                            <p style="text-align: center; font-size: 15px; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                Add Meal to Your Trip
                            </p>
                        </div>
                        <div id="luggage_ancillary_settings_container" class="each_ancillary_setting_container">
                            <p style="text-align: center; font-size: 15px; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                Include Checked Bags
                            </p>
                        </div>
                        <div style="margin: 10px 0;">
                            <p style="color: rgba(0,0,0,0.7); font-size: 13px;">
                                <i style="margin-right: 5px; color: green;" class="fa fa-info-circle"></i>
                                FYI, the ancillary services you include here are unbound with the base price. Therefore adding them will cost 
                                extra money.
                            </p>
                        </div>
                        <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 20px; padding: 10px 0; border-top: 1px solid rgba(0,0,0,0.1)">
                            <div onclick="cancel_add_ancillaries_container();" style="background-color: white; padding: 10px; border: 1px solid rgba(0,0,0,0.1); font-size: 14px; border-radius: 50px; cursor: pointer;">
                                <i style="margin-right: 10px; color: orangered;" class="fa fa-times"></i>
                                Cancel
                            </div>
                            <div style="background-color: white; padding: 10px; border: 1px solid rgba(0,0,0,0.1); font-size: 14px; border-radius: 50px; cursor: pointer;">
                                <i style="margin-right: 10px; color: green;" class="fa fa-check"></i>
                                Save
                            </div>
                        </div>
                    </div>
                    <div style="border: 1px solid rgba(0,0,0,0.1); border-radius: 9px; padding: 10px; margin: 10px;">
                        <p style="font-size: 14px; letter-spacing: 1; font-weight: bolder; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                            Montreal to New York
                        </p>
                        <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                            <img src="./deltaIcon.png" style="width: 27px; height: auto; object-fit: conver;" />
                            Delta &#8226; Thu, Nov 25
                        </p>
                        <div style="margin-top: 20px;">
                            <p style="font-size: 15px; letter-spacing: 1; font-weight: bolder; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                9:45am - 2:54pm
                            </p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                                5h 9m (1 stop)
                            </p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                                2h 1m in Toronto (YYZ)
                            </p>
                            <p style="color: rgba(0,0,0,0.7); font-size: 17px; margin-top: 5px;">
                                <i style="margin-right: 10px;" class="fa fa-wifi"></i>
                            </p>
                            <p style="cursor: pointer; margin-top: 10px; font-size: 14px; color: #c900b0;">
                                See details <i style="margin-left: 5px;" class="fa fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                    <div style="border: 1px solid rgba(0,0,0,0.1); border-radius: 9px; padding: 10px; margin: 10px;">
                        <p style="font-size: 17px; letter-spacing: 1; font-weight: bolder; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                            New York to Montreal
                        </p>
                        <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 10px;">
                            <img src="./deltaIcon.png" style="width: 27px; height: auto; object-fit: cover;" />
                            Delta &#8226; Thu, Nov 25
                        </p>
                        <div style="margin-top: 20px;">
                            <p style="font-size: 15px; letter-spacing: 1; font-weight: bolder; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                9:45am - 2:54pm
                            </p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                                5h 9m (1 stop)
                            </p>
                            <p style="color: rgba(0,0,0,0.8); font-size: 13px; margin-top: 5px;">
                                2h 1m in Toronto (YYZ)
                            </p>
                            <p style="color: rgba(0,0,0,0.7); font-size: 17px; margin-top: 5px;">
                                <i style="margin-right: 10px;" class="fa fa-wifi"></i>
                            </p>
                            <p style="cursor: pointer; margin-top: 10px; font-size: 14px; color: #c900b0;">
                                See details <i style="margin-left: 5px;" class="fa fa-angle-down"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="checkout_page_all_info_flex_right">
                    <div style="border: 1px solid rgba(0,0,0,0.1); border-radius: 9px; padding: 10px; margin: 10px;">
                        <p style="font-size: 19px; letter-spacing: 1; font-weight: bolder; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                            Price Summary
                        </p>
                        <div style="margin-top: 20px; border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 10px;">
                            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                                <p style="font-size: 14px; letter-spacing: 1; color: rgba(0,0,0,0.8); font-weight: bolder;">
                                    Traveler: 1 Adult
                                </p>
                                <p style="font-size: 14px; font-weight: bolder; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                    $133.28
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 10px;">
                                <p style="font-size: 14px; letter-spacing: 1; color: rgba(0,0,0,0.7);">
                                    Flight
                                </p>
                                <p style="font-size: 14px; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7);">
                                    $101.10
                                </p>
                            </div>
                            <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 10px;">
                                <p style="font-size: 14px; letter-spacing: 1; color: rgba(0,0,0,0.7);">
                                    Taxes and fees
                                </p>
                                <p style="font-size: 14px; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.7);">
                                    $32.18
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 20px;">
                            <div>
                                <p style="font-size: 17px; letter-spacing: 1; color: rgba(0,0,0,0.8); font-weight: bolder;">
                                    Total
                                </p>
                                <p style="font-size: 12px; margin-top: 5px; color: rgba(0,0,0,0.7);">
                                    <i style="margin-right: 5px;" class="fa fa-info-circle"></i>
                                    prices are quoted in US dollars
                                </p>
                            </div>
                            <p style="font-size: 17px; font-weight: bolder; letter-spacing: 1; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.8);">
                                $133.28
                            </p>
                        </div>
                        <div class="checkout_page_main_checkout_btn_container">
                            <p class="checkout_page_mobile_button_place_total_price_display">
                                <i style="margin-right: 5px;" class="fa fa-info-circle"></i>
                                The total amout you pay is $133.28. See price summary at the bottom
                            </p>
                            <div class="checkout_page_main_checkout_btn">
                                <i style="margin-right: 5px; color: rgba(255,255,255,0.5);" class="fa fa-credit-card"></i>Checkout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function return_each_user_chat_message_markup(msg){
    return `
        <div class="support_chat_user_sent_msg_container">
            <div class="support_chat_user_sent_msg_inner_container">
                <p>${msg}</p>
            </div>
        </div>
    `;
}

function typingFunc(txt, speed, ig, para_id) {
    if (ig < txt.length) {
          /*if(txt.charAt(ig) === "&" && txt.charAt(ig+1) === "#"){
              document.getElementById(para_id).innerHTML += txt.substring(ig, ig+8);
              ig = ig+9;
          }*/
          if(txt.substring(ig, ig+5).toLowerCase() === "<br/>"){
            document.getElementById(para_id).innerHTML += txt.substring(ig, ig+5);
            ig = ig+5;
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
                //console.warn(txt.substring(idxOfClosingTagFirstBraket+1, idxOfClosingTagFirstBraket+2))
                nestCount++;
                idxOfClosingTagFirstBraket = txt.indexOf("<", idxOfClosingTagFirstBraket+1);
                indexOfTagClosing_2=txt.indexOf(">", idxOfClosingTagFirstBraket+1);
            }

            for(let i=0; i<nestCount; i++){
                indexOfTagClosing_2 = txt.indexOf(">", indexOfTagClosing_2 + 1);
            }

            //console.warn('tag: ', txt.substring(ig, (indexOfTagClosing_2+1)));
            document.getElementById(para_id).innerHTML += txt.substring(ig, (indexOfTagClosing_2+1));
              ig = (indexOfTagClosing_2+1);
          }else{
              document.getElementById(para_id).innerHTML += txt.charAt(ig); 
              ig++;
          }
      setTimeout(()=>typingFunc(txt, speed, ig, para_id), speed);
    }
  }

let bot_reply_inner_p_id_counter=-1;
function return_each_bot_chat_message_markup(bot_reply){
    console.warn('reply', bot_reply);
    bot_reply_inner_p_id_counter++;
    setTimeout(()=>typingFunc(bot_reply, 10, 0, `bot_reply_chat_inner_p${bot_reply_inner_p_id_counter}`), 50);
    return `
        <div class="support_chat_bot_sent_msg_container">
            <div class="support_chat_bot_sent_msg_inner_container">
                <p id="bot_reply_chat_inner_p${bot_reply_inner_p_id_counter}"></p>
            </div>
        </div>
    `;
}

function return_each_bot_chat_message_markup_without_typing(bot_reply){
    return `
        <div class="support_chat_bot_sent_msg_container">
            <div class="support_chat_bot_sent_msg_inner_container">
                <p>${bot_reply}</p>
            </div>
        </div>
    `;
}

function return_PNR_form(){
    return `
     <div style="border: 1px solid rgba(0,0,0,0.1); padding: 5px; margin-bottom: 10px; background-color: rgba(0,0,0,0.1)">
        <p style="text-align: center; font-weight: bolder; color: rgba(0,0,0,0.8); font-size: 14px;">
            Passenger Name Record Form</p>
        <div style="padding: 10px 0; margin-top: 10px; border-top: 1px solid rgba(0,0,0,0.1);">
            <p style="color: (0,0,0,0.7); font-size: 13px; color: red;">Traveler 1</p>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">First Name: </p>
                    <input style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;" type="text" placeholder="First Name" />
                </div>
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">Last Name: </p>
                    <input style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">Title: </p>
                    <select style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;">
                        <option>Mr</option>
                    </select>
                </div>
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">Date of Birth: </p>
                    <input style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;" type="text" placeholder="Date of Birth" />
                </div>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">Email: </p>
                    <input style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;" type="email" placeholder="email" />
                </div>
                <div style="width: calc(50% - 3px);">
                    <p style="font-size: 13px; margin-top: 9px; margin-bottom: 4px;">Phone: </p>
                    <input style="border: 1px solid rgba(0,0,0,0.2); width: 100%; padding: 10px;" type="text" placeholder="phone eg. +1 732 372 4728" />
                </div>
            </div>
        </div>
     </div>
    `
}

function return_bot_chat_status_markup(status){
    //statuses: online, offline, other...
    return `
        <p style="width: 8px; height: 8px; background-color: green; margin-right: 5px; margin-top: 6px; border-radius: 100%;"></p>
        <p style="font-family: 'Prompt', sans-serif; font-size: 13px; color: rgba(0,0,0,0.7);">online</p>
    `
}

//loaders
function return_search_results_important_notice_loader(){
    return `
        <div style="animation: item_slide_down 0.5s ease-in; marginBottom: 20" class="search_result_inportant_notice_container">
            <div>
                <p  class="info_item_loader" style="color: rgba(0,0,0,0); font-size: 16px; font-family: 'Prompt', Sans-serif; width: fit-content; font-weight: bolder; margin-bottom: 10px;">
                    <i class="fa fa-info-circle" style="fontSize: 15px; margin-right: 5px;"></i>Important Notice
                </p>
                <p class="info_item_loader" style="color: rgba(0,0,0,0); font-size: 14px;">
                    Prices displayed include taxes and may change based on availability. 
                    You can review any additional fees before checkout. 
                    Prices are not final until you complete your purchase.
                </p>
            </div>
        </div>
    `;
}
function return_ticket_card_loader(){
    return `
        <div style="cursor: pointer; background-color: rgba(255,255,255,0.7); border-radius: 9px; margin-bottom: 20px; padding: 15px 10px; animation: item_slide_down 0.5s ease-in;">
            <div class="each_ticket_upper_flex" style="flex-direction: row; justify-content: space-between;">
                <div class="ticket_loader_info_1">
                    <p class="info_item_loader" style="borderRadius: 50px; font-size: 12px; height: 40px;">Montreal (YUB) - New York (LGA)</p>
                </div>
                <div class="ticket_loader_info_2">
                    <p class="info_item_loader" style="font-size: 12, height: 40px;">2h 1m in Toronto(yyz)</p>
                </div>
                <div class="each_ticket_price_display_container  ticket_loader_info_3">
                    <p class="each_ticket_price_display info_item_loader" style="font-weight: 1000; font-size: 27px; font-family: 'Prompt', Sans-serif; margin-bottom: 2px;">
                        $335</p>
                </div>
            </div>
            <div class="ticket_loader_info_4" style="margin-top: 5px;">
                <p class="info_item_loader" style="color: rgba(0,0,0,0); font-size: 12px; height: 30px;">
                    Delta &#8226;
                    Delta 7204 and 7138 operated by WestJet
                </p>
            </div>
        </div>
    `;
}
function return_search_results_filters_and_sort_loader(){
    return `
        <div style="margin-top: 20px;">
            <div style="margin-bottom: 40px;">
                <p  class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 16px; font-family: 'Prompt', Sans-serif; width: fit-content; font-weight: bolder; margin-bottom: 10px;">
                    Important Notice
                </p>
                <p class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 14px; width: 200px;">
                    Prices displayed include taxes
                </p>
            </div>
            <div style="margin-bottom: 40px;">
                <p  class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 16px; font-family: 'Prompt', Sans-serif; width: fit-content; font-weight: bolder; margin-bottom: 10px;">
                    Important Notice
                </p>
                <p class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 14px; width: 200px;">
                    Prices displayed include taxes
                </p>
            </div>
            <div style="margin-bottom: 40px;">
                <p  class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 16px; font-family: 'Prompt', Sans-serif; width: fit-content; font-weight: bolder; margin-bottom: 10px;">
                    Important Notice
                </p>
                <p class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 14px; width: 200px;">
                    Prices displayed include taxes
                </p>
            </div>
            <div style="margin-bottom: 40px;">
                <p  class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 16px; font-family: 'Prompt', Sans-serif; width: fit-content; font-weight: bolder; margin-bottom: 10px;">
                    Important Notice
                </p>
                <p class="info_item_loader" style="color: rgba(0,0,0,0); height: 30px; font-size: 14px; width: 200px;">
                    Prices displayed include taxes
                </p>
            </div>
        </div>
    `;
}
function return_search_results_mobile_top_itin_display_loader(){
    return `
        <div style="animation: item_slide_down 0.5s ease-in;" id="itinerary_and_filter_icon">
            <div>
                <p class="info_item_loader" style="font-size: 16px; font-family: 'Prompt', Sans-serif; color: rgba(0,0,0,0.0); font-weight: bolder;">
                    New York
                    <span style="margin: 0 10px; color: rgba(0,0,0,0.0);"><i class="fa fa-exchange"></i></span>
                    Canada
                </p>
                <p class="info_item_loader"  style="fontSize: 13px; color: rgba(0,0,0,0.0); margin-top: 2px;">Nov 25 - Nov 27</p>
            </div>
            <p class="info_item_loader" style="font-weight: bolder; font-size: 17px;">
                <i style="marginRight: 7px;" class="fa fa-sliders" aria-hidden="true"></i>
                Filters</p>
        </div>
    `;
}
function return_bot_chat_loading_markup(type="loading"){
    return `
        <p style="font-family: 'Prompt', sans-serif; font-size: 13px; color: rgba(0,0,0,0.7);">${type}...</p>
    `
}

//document.getElementById("selected_ticket_pane").innerHTML = return_selected_ticket_item({});
document.getElementById("selected_ticket_pane_for_bot_list").innerHTML = return_selected_ticket_item_from_bot_list({});
document.getElementById("ticket_info_pane_for_selected_ticket_from_bot_list").innerHTML = return_selected_ticket_item_from_bot_list({});