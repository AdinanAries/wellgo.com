import $ from "jquery";

import edit_user_forms_bg from "../../icons/edit_user_forms_bg.svg";
import credit_card_payment from "../../icons/credit_card_payment.svg";
import passport from "../../icons/passport.svg";
import loading_icon from "../../icons/loading.svg";
import nothing_found_icon from "../../icons/nothing_found_icon.svg";
import card_not_found from "../../icons/card_not_found.svg";
import AccountInfoPage from "./Components/AccountInfoPage";
import PaymentCardsPage from "./Components/PaymentCardsPage";
import PassportsPage from "./Components/PassportsPage";
import EditProfileForm from "./Components/EditProfileForm";
import { useState, useEffect } from "react";
import BookingHistoryPage from "./Components/BookingHistoryPage";

//Services
import { fetchAccountInfo } from "../../services/accountServices";
import { fetchPassports, deletePassport, addPassport, editPassport } from "../../services/passportServices";
import { fetchPaymentCards, deletePaymentCard, addPaymentCard, editPaymentCard } from "../../services/paymentCardsServices";
import { fetchBookingHistory } from "../../services/bookingHistoryServices";

function UserAccountPage(props){

    const { isLoggedIn, LogMeOut } = props;
    
    let [ user, setUser ] = useState({});
    let [ isLoading, setIsLoading ] = useState(true);
    
    let [ passports, setPassports ] = useState([]);
    let [ isPassportsLoading, setIsPassportsLoading ] = useState(true);
    
    let [ payments, setPayments ] = useState([]);
    let [ isPaymentCardsLoading, setIsPaymentCardsLoading ] = useState(true);

    let [bookings, setBookings] = useState([]);
    let [ isBookingHistoryLoading, setIsBookingHistoryLoading ] = useState(true);

    let [editDOB, setEditDOB] = useState(false);
    let [editGender, setEditGender] = useState(false);

    const logoutOnclick = () => {
        LogMeOut();
    }

    useEffect(() => {
        (async function go(){
            // User Account
            let _user=await fetchAccountInfo();
            console.log("User Account: ", _user);
            setUser(_user);
            setIsLoading(false);
            // Bookings History
            let _bookings = ShowBookingHistory(new Date().toISOString(), new Date(new Date().getDay()+6).toISOString());
            setBookings(_bookings);
        })();
    }, []);

    const ShowPassports = async () => {
        setIsPassportsLoading(true);
        let _passports=await fetchPassports();
        console.log("User Passports: ", _passports);
        setPassports(_passports);
        setIsPassportsLoading(false);
    }

    const DeletePassport = async (passport) => {
        let res = await deletePassport(passport);
        if(res.acknowledged){
            ShowPassports();
        }else{
            alert("Error");
        }
    }

    const AddPassport = async (passport) => {
        let res = await addPassport(passport);
        if(res._id){
            ShowPassports();
        }else{
            alert(res.message);
        }
    }

    const SubmitEditPassport = async (passport) => {
        let res = await editPassport(passport);
        if(res._id){
            ShowPassports();
        }else{
            alert(res.message);
        }
    }

    const ShowPaymentCards = async () => {
        setIsPaymentCardsLoading(true);
        let _payment_cards=await fetchPaymentCards();
        console.log("User Payment Cards: ", _payment_cards);
        setPayments(_payment_cards);
        setIsPaymentCardsLoading(false);
    }

    const DeletePaymentCard = async (card) => {
        let res = await deletePaymentCard(card);
        if(res.acknowledged){
            ShowPassports();
        }else{
            alert("Error");
        }
    }

    const AddPaymentCard = async (card) => {
        let res = await addPaymentCard(card);
        if(res._id){
            ShowPaymentCards();
        }else{
            alert(res.message);
        }
    }

    const SubmitEditPaymentCard = async (card) => {
        let res = await editPaymentCard(card);
        if(res._id){
            ShowPaymentCards();
        }else{
            alert(res.message);
        }
    }

    const ShowBookingHistory = async (from_date, to_date, page="1", limit="10", type="all", cabin="all") => {
        setIsBookingHistoryLoading(true);
        let _booking_history=await fetchBookingHistory(from_date, to_date, page, limit);
        console.log("User Booking History: ", _booking_history);
        setBookings(_booking_history);
        setIsBookingHistoryLoading(false);
    }

    return (
        <div id="user_account_manager_page" style={{display: (!isLoggedIn ? "none" : "block")}}>
            {
                isLoading && <div className="user_account_page_container" style={{padding: "40px 20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{marginBottom: 20, padding: "20px"}}>
                        <div style={{backgroundImage: `url(${loading_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                            Please wait...</p>
                    </div>
                </div>
            }
            {
                !isLoading &&
                <>
                    {
                    user.isError ? 
                        <div className="user_account_page_container" style={{padding: "40px 20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{marginBottom: 20, padding: "20px"}}>
                                <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                    <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                    Something Went Wrong</p>
                            </div>
                        </div> :
                        <div className="user_account_page_container">
                            <div className="user_account_page_each_child_container">
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 5, marginBottom: 10}}>
                                    <div id="user_account_pane_account_menu_item" className="user_account_pane_main_menu_item active" onClick={show_main_account_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                        <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                            <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-user"></i>
                                            Account</p>
                                    </div>
                                    <div id="user_account_pane_payment_menu_item" className="user_account_pane_main_menu_item" onClick={()=>{show_main_payment_pane();ShowPaymentCards();}} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                        <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                            <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-credit-card"></i>
                                            Payments</p>
                                    </div>
                                    <div id="user_account_pane_passport_menu_item" className="user_account_pane_main_menu_item" onClick={()=>{show_main_passport_pane();ShowPassports();}} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer",}}>
                                        <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                            <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-book"></i>
                                            Passports</p>
                                    </div>
                                </div>
                                <AccountInfoPage
                                    logoutOnclick={logoutOnclick}
                                    user={user} 
                                    show_edit_profile_form={show_edit_profile_form}
                                    setEditDOB={setEditDOB}
                                    setEditGender={setEditGender}
                                    editDOB={editDOB}
                                    editGender={editGender} 
                                />
                                <PaymentCardsPage 
                                    SubmitEditPaymentCard={SubmitEditPaymentCard}
                                    AddPaymentCard={AddPaymentCard}
                                    DeletePaymentCard={DeletePaymentCard}
                                    isLoading={isPaymentCardsLoading}
                                    payments={payments}
                                    card_not_found={card_not_found} 
                                    show_more_payment_method_info={show_more_payment_method_info}
                                    hide_more_payment_method_info={hide_more_payment_method_info}
                                    show_add_new_payment_form={show_add_new_payment_form}
                                />
                                <PassportsPage 
                                    SubmitEditPassport={SubmitEditPassport}
                                    AddPassport={AddPassport}
                                    DeletePassport={DeletePassport}
                                    isPassportsLoading={isPassportsLoading}
                                    passports={passports}
                                    show_more_passport_info={show_more_passport_info}
                                    hide_more_passport_info={hide_more_passport_info}
                                    show_add_new_passport_form={show_add_new_passport_form}
                                />
                            </div>
                            <BookingHistoryPage
                                isLoading={isBookingHistoryLoading}
                                ShowBookingHistory={ShowBookingHistory}
                                toggle_show_booking_history_filters={toggle_show_booking_history_filters}
                                hide_booking_history_filters={hide_booking_history_filters}
                                bookings={bookings}
                                show_booking_history_more_info_pane={show_booking_history_more_info_pane}
                                nothing_found_icon={nothing_found_icon}
                            />
                        </div>
                        
                    }
                </>
            }
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