import $ from "jquery";

import edit_user_forms_bg from "../../icons/edit_user_forms_bg.svg";
import credit_card_payment from "../../icons/credit_card_payment.svg";
import passport from "../../icons/passport.svg";
import nothing_found_icon from "../../icons/nothing_found_icon.svg";
import card_not_found from "../../icons/card_not_found.svg";
import not_found_icon from "../../icons/not_found_icon.svg";
import PaginationButtons from "../../components/PaginationButtons";
import AccountInfoPage from "./Components/AccountInfoPage";
import PaymentCardsPage from "./Components/PaymentCardsPage";
import PassportsPage from "./Components/PassportsPage";
import EditProfileForm from "./Components/EditProfileForm";
import { useState } from "react";
import BookingHistoryPage from "./Components/BookingHistoryPage";

function UserAccountPage(props){

    let [user, setUser] = useState({
        id: "001",
        first_name: "Mohammedu",
        middle_name: "",
        last_name: "Adinan",
        dob: "03-23-1992",
        email: "m.adinan@yahoo.com",
        mobile: "+1 7327999546",
        gender: "male"
    });
    
    let [passports, setPassports] = useState([
        {
            id: "001",
            user_id: "001",
            passport_number: "3452342",
            issue_date: "02-26-2022",
            exp_date: "02-26-2026",
            city: "New York",
            country: "United States",
            holder_name: "Mohammed Adinan",
            holder_gender: "Male",
            holder_nationality: "American",
            holder_dob: "03-23-1992",
            holder_birth_city: "New York"
        },
        {
            id: "002",
            user_id: "001",
            passport_number: "436373",
            issue_date: "03-19-2021",
            exp_date: "03-19-2025",
            city: "New York",
            country: "United States",
            holder_name: "Salis Munir",
            holder_gender: "Male",
            holder_nationality: "American",
            holder_dob: "03-23-1992",
            holder_birth_city: "New York"
        }
    ]);
    
    let [payments, setPayments] = useState([
        {
            id: "001",
            user_id: "001",
            card_number: "***3424",
            holder_name: "Mohammed Adinan",
            exp_date: "03-23-2025",
            sec_code: "009",
            billing: {
                street: "956 Anderson Ave, 1A",
                city: "Bronx",
                state: "NY",
                country: "United States",
                zip_code: "10453"
            }
        },
        {
            id: "001",
            user_id: "001",
            card_number: "***4532",
            holder_name: "Emmanuel Poku",
            exp_date: "06-19-2025",
            sec_code: "136",
            billing: {
                street: "956 Anderson Ave, 1A",
                city: "Bronx",
                state: "NY",
                country: "United States",
                zip_code: "10453"
            }
        }
    ]);

    let [bookings, setBookings] = useState([
        {
            id: "001",
            user_id: "001",
            airline: "American Airlines",
            ariline_code: "",
            trip_type: "round trip",
            travellers: [{
                first_name: "MOhammed",
                last_name: "Adinan",
                gender: "male",
                dob: "03-23-1992",
            }],
            takeoff_airport: "Laguardia",
            takeoff_airport_code: "",
            takeoff_city: "New York",
            destination_airport: "Kotoka",
            destination_airport_code: "",
            destination_city: "Accra",
            departure_date: "03-23-2023",
            return_date: "04-09-2023"
        },
        {
            id: "001",
            user_id: "001",
            airline: "Virgin Airlines",
            ariline_code: "",
            trip_type: "round trip",
            travellers: [{
                first_name: "Mohammed",
                last_name: "Adinan",
                gender: "male",
                dob: "03-23-1992",
            }],
            takeoff_airport: "JFK",
            takeoff_airport_code: "",
            takeoff_city: "New York",
            destination_airport: "Charles de Gaulle Intl",
            destination_airport_code: "",
            destination_city: "Paris",
            departure_date: "01-20-2023",
            return_date: "02-11-2023"
        }
    ]);

    let [editDOB, setEditDOB] = useState(false);
    let [editGender, setEditGender] = useState(false);

    return (
        <div id="user_account_manager_page" style={{display: "none"}}>
                    <div className="user_account_page_container">
                        <div className="user_account_page_each_child_container">
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 5, marginBottom: 10}}>
                                <div id="user_account_pane_account_menu_item" className="user_account_pane_main_menu_item active" onClick={show_main_account_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-user"></i>
                                        Account</p>
                                </div>
                                <div id="user_account_pane_payment_menu_item" className="user_account_pane_main_menu_item" onClick={show_main_payment_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-credit-card"></i>
                                        Payments</p>
                                </div>
                                <div id="user_account_pane_passport_menu_item" className="user_account_pane_main_menu_item" onClick={show_main_passport_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer",}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-book"></i>
                                        Passports</p>
                                </div>
                            </div>
                            <AccountInfoPage
                                user={user} 
                                show_edit_profile_form={show_edit_profile_form}
                                setEditDOB={setEditDOB}
                                setEditGender={setEditGender}
                                editDOB={editDOB}
                                editGender={editGender} 
                            />
                            <PaymentCardsPage 
                                payments={payments}
                                card_not_found={card_not_found} 
                                show_more_payment_method_info={show_more_payment_method_info}
                                hide_more_payment_method_info={hide_more_payment_method_info}
                                show_add_new_payment_form={show_add_new_payment_form}
                            />
                            <PassportsPage 
                                passports={passports}
                                not_found_icon={not_found_icon}
                                show_more_passport_info={show_more_passport_info}
                                hide_more_passport_info={hide_more_passport_info}
                                show_add_new_passport_form={show_add_new_passport_form}
                            />
                        </div>
                        <BookingHistoryPage
                            toggle_show_booking_history_filters={toggle_show_booking_history_filters}
                            hide_booking_history_filters={hide_booking_history_filters}
                            bookings={bookings}
                            show_booking_history_more_info_pane={show_booking_history_more_info_pane}
                            nothing_found_icon={nothing_found_icon}
                        />
                    </div>
                    <EditProfileForm />
                </div>
    )
}

export default UserAccountPage;


function show_main_account_pane(){

    Array.from(document.getElementsByClassName("user_account_pane_main_menu_item")).forEach(each=>{
        each.classList.remove("active");
    });
    document.getElementById("user_account_pane_account_menu_item").classList.add("active");

    document.getElementById("user_account_main_passports_pane").style.display="none";
    document.getElementById("user_account_main_payment_pane").style.display="none";
    document.getElementById("user_account_main_account_pane").style.display="block";
}

function show_main_payment_pane(){

    Array.from(document.getElementsByClassName("user_account_pane_main_menu_item")).forEach(each=>{
        each.classList.remove("active");
    });
    document.getElementById("user_account_pane_payment_menu_item").classList.add("active");

    document.getElementById("user_account_main_passports_pane").style.display="none";
    document.getElementById("user_account_main_payment_pane").style.display="block";
    document.getElementById("user_account_main_account_pane").style.display="none";
}

function show_main_passport_pane(){

    Array.from(document.getElementsByClassName("user_account_pane_main_menu_item")).forEach(each=>{
        each.classList.remove("active");
    });
    document.getElementById("user_account_pane_passport_menu_item").classList.add("active");

    document.getElementById("user_account_main_passports_pane").style.display="block";
    document.getElementById("user_account_main_payment_pane").style.display="none";
    document.getElementById("user_account_main_account_pane").style.display="none";
}

let is_booking_history_hidden = true;
function toggle_show_booking_history_filters(){
    if(is_booking_history_hidden){
        show_booking_history_filters();
    }else{
        hide_booking_history_filters();
    }
    is_booking_history_hidden = !is_booking_history_hidden;
}
function show_booking_history_filters(){
    document.getElementById("toggle_show_booking_history_filters_caret").style.transform = "rotate(180deg)";
    $("#booking_history_filters_container").slideDown("fast");
}
function hide_booking_history_filters(){
    document.getElementById("toggle_show_booking_history_filters_caret").style.transform = "rotate(0)";
    $("#booking_history_filters_container").slideUp("fast");
}

function show_add_new_payment_form(){
    document.getElementById("account_page_add_payments_form").style.display = "flex";
}

function show_add_new_passport_form(){
    document.getElementById("account_page_add_passport_form").style.display = "flex";
}

function show_edit_profile_form(){
    document.getElementById("account_page_edit_profile_form").style.display = "flex";
    document.getElementById("profile_view_more_options_drop_down").style.display = "none";
}


function show_more_payment_method_info(index){
    document.getElementById("show_more_payment_method_info_btn"+index).style.display = "none";
    $("#show_more_payment_method_info_container"+index).slideDown("fast");
}
function hide_more_payment_method_info(index){
    document.getElementById("show_more_payment_method_info_btn"+index).style.display = "block";
    $("#show_more_payment_method_info_container"+index).slideUp("fast");
}

function show_more_passport_info(index){
    document.getElementById("show_more_passport_info_btn"+index).style.display = "none";
    $("#show_more_passport_info_container"+index).slideDown("fast");
}
function hide_more_passport_info(index){
    document.getElementById("show_more_passport_info_btn"+index).style.display = "block";
    $("#show_more_passport_info_container"+index).slideUp("fast");
}

function show_booking_history_more_info_pane(){
    document.getElementById("booking_history_more_info_pane").style.display = "block";
}