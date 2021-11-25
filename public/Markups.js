function show_selected_ticket_details_pane(){
    document.getElementById("selected_ticket_pane").style.display = "block";
}

var is_itinerary_showing = false;
function toggle_see_ticket_details_itinerary_details(){
    if(is_itinerary_showing){
        $("#see_ticket_details_itinerary_details").slideUp("fast");
    }else{
        $("#see_ticket_details_itinerary_details").slideDown("fast");
    }
        is_itinerary_showing = !is_itinerary_showing;
}

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
                        <p onclick='document.getElementById("selected_ticket_pane").style.display="none"' style="cursor: pointer; color: rgba(255,0,0,0.6); font-size: 33px; margin-right: 5px;">
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
                    <div onclick="show_start_checkout_page()" class="selected_ticket_book_btn">
                        Book
                    </div>
                </div>
            </div>

    `;
}

function return_search_results_important_notice(obj){
    return `
        <div class="search_result_inportant_notice_container">
            <div>
                <p style="color: rgba(0,0,0,0.7); font-size: 16px; font-family: 'Prompt', Sans-serif; font-weight: bolder; margin-bottom: 10px;>
                    <i class="fa fa-info-circle" style="font-size: 15px; margin-right: 5px;"></i>Important Notice
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
                        <p style="color: rgba(0,0,0,0.7); font-weight: bolder; display: flex; flex-direction: column; justify-content: center;">
                            Sort and Filter
                        </p>
                        <p onclick="document.getElementById('search_list_main__settings_section').style.display='none';" id="close_filter_and_sort_btn" style="color: rgba(255,0,0,0.6); font-size: 33px; margin-right: 5px;">
                            &times;
                        </p>
                    </div>
                </div>
                <div style="margin-top: 20px; margin-bottom: 35px;">
                    <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 17px">Sort by</p>
                    <select style="padding: 14px; margin-top: 12px; width: 100%; border: 1px solid rgba(0,0,0,0.3); border-radius: 9px; color: rgba(0,0,0,0.7);">
                        <option>
                            Price (Lowest)
                        </option>
                    </select>
                </div>
            </div>
            <p style="font-weight: bolder; color: rgba(0,0,0,0.7); font-size: 17px; margin-bottom: 30px;">
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

document.getElementById("selected_ticket_pane").innerHTML = return_selected_ticket_item({});