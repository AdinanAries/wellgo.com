import $ from "jquery";

import edit_user_forms_bg from "../../icons/edit_user_forms_bg.svg";
import credit_card_payment from "../../icons/credit_card_payment.svg";
import passport from "../../icons/passport.svg";
import nothing_found_icon from "../../icons/nothing_found_icon.svg";
import card_not_found from "../../icons/card_not_found.svg";
import not_found_icon from "../../icons/not_found_icon.svg";
import PaginationButtons from "../../components/PaginationButtons";
import { useState } from "react";

function UserAccountPage({user, passports, bookings, payments}){

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
                            <div id="user_account_main_account_pane" style={{marginTop: 20}}>
                                <div style={{display: "flex", flexDirection: "row", position: "relative"}}>
                                    <div className="account_page_profile_pic_container" style={{marginRight: 20, borderRadius: "100%", width: 80, height: 80, boxShadow: "0 0 5px rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)", overflow: "hidden", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i style={{fontSize: 50, color: "rgba(0,0,0,0.4)"}} className="fa fa-user"></i>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <p className="account_page_user_name_display" style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, fontWeight: "bolder", color: "rgba(0,0,0,0.7)"}}>
                                            {user.first_name} {user.last_name}</p>
                                        <p onClick={()=>document.getElementById("profile_view_more_options_drop_down").style.display="block"} style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                            more options
                                            <i style={{marginLeft: 10}} className="fa fa-angle-right"></i>
                                        </p>
                                        <div id="profile_view_more_options_drop_down" style={{display: "none", overflow: "hidden", position: "absolute", top: "calc(100% - 10px)", left: 0, zIndex: 1, borderRadius: 6, backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", animation: "pop-in 0.2s ease-out"}}>
                                            <p onClick={()=>document.getElementById("profile_view_more_options_drop_down").style.display="none"} style={{fontSize: 30, marginBottom: 5, borderBottom: "1px solid rgba(0,0,0,0.1)", padding: "0 10px", cursor: "pointer", textAlign: "right"}}>
                                                &times;
                                            </p>
                                            <p onClick={show_edit_profile_form} style={{textAling: "center", fontFamily: "'Prompt', Sans-serif", fontSize: 15, padding: "10px 20px", color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                                <i style={{marginRight: 5}} className="fa fa-pencil"></i>
                                                edit profile
                                            </p>
                                            <p style={{textAling: "center", fontFamily: "'Prompt', Sans-serif", marginTop: 10, backgroundColor: "crimson", fontSize: 15, padding: "10px 20px", color: "white", cursor: "pointer"}}>
                                                <i style={{marginRight: 5}} className="fa fa-sign-out"></i>
                                                logout
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <div style={{marginBottom: 20}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder", marginBottom: 5, color: "rgb(102, 169, 233)", letterSpacing: 1}}>
                                            Contact</p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            Email: {user.email}</p>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            Phone: {user.mobile}</p>
                                    </div>
                                    <div style={{marginBottom: 20}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder", marginBottom: 5, color: "rgb(102, 169, 233)", letterSpacing: 1}}>
                                            Other</p>
                                        <p style={{display: (user.dob && !editDOB ? "block" : "none"), fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            DOB: {user.dob}
                                            <span onClick={()=>{setEditDOB(true)}}>
                                                <i style={{marginLeft: 20, cursor: "pointer"}} className="fa-solid fa-pencil"></i></span>
                                            </p>
                                        <div style={{display: (!user.dob || editDOB ? "block" : "none"), borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 250}}>
                                            <p>
                                                <i style={{color: "rgba(0,0,0,0.6)"}} className="fa fa-calendar"></i>
                                                <input style={{padding: 10, border: "none", width: "calc(100% - 60px)"}} type="text" placeholder="add your date of birth" value={user.dob} />
                                                <span onClick={()=>{setEditDOB(false)}}>
                                                    <i style={{marginLeft: 20, cursor: "pointer", color: "crimson"}} className="fa-solid fa-times"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <p style={{display: (user.gender && !editGender ? "block" : "none"), fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, marginTop: 5, color: "rgba(0,0,0,0.7)"}}>
                                            Gender: {user.gender}
                                            <span onClick={()=>{setEditGender(true)}}>
                                                <i style={{marginLeft: 20, cursor: "pointer"}} className="fa-solid fa-pencil"></i></span>
                                            </p>
                                        <div style={{display: (!user.gender || editGender ? "block" : "none"), borderBottom: "1px solid rgba(0,0,0,0.1)", maxWidth: 250}}>
                                            <i style={{color: "rgba(0,0,0,0.6)"}} className="fa fa-user"></i>
                                            <select style={{padding: 10, border: "none", color: "rgba(0,0,0,0.7)", background: "none", width: "calc(100% - 60px)"}} type="text" placeholder="add your date of birth">
                                                <option>Add Your Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                            <span onClick={()=>{setEditGender(false)}}>
                                                <i style={{marginLeft: 20, cursor: "pointer", color: "crimson"}} className="fa-solid fa-times"></i>
                                            </span>
                                        </div>
                                        <div style={{display: ((user.gender && user.dob) && (!editDOB && !editGender) ? "none" : "block"),cursor: "pointer", padding: 16, backgroundColor: "green", color: "white", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", borderRadius: 50, width: 130, fontSize: 14, marginTop: 10}}>
                                            <i className="fa fa-save" style={{color: "rgba(255,255,255,0.6)", marginRight: 10}}></i>
                                            Save
                                        </div>
                                    </div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", textAlign: "center", fontSize: 15, borderRadius: 6, padding: 14, color: "white", backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.33)"}}>
                                        Frequent Flyer and Membership</p>
                                </div>
                            </div>
                            <div id="user_account_main_payment_pane" style={{display: (payments.length > 0 ? "none" : "block"), marginTop: 10}}>
                                <div style={{height: 400, overflowY: "auto"}}>
                                    <div style={{display: ((payments.length > 0) ? "none" : "block"), marginBottom: 20, padding: "20px"}}>
                                        <div style={{backgroundImage: `url(${card_not_found})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                            <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                            No payment method added</p>
                                    </div>
                                    {
                                        /*
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
                                        */

                                        payments.map((each, index)=>(
                                            <div style={{padding: 10, borderBottom: "1px solid rgba(0,0,0,0.1)"}}>
                                                <div id={"show_more_payment_method_info_btn"+index}>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 16, color: "rgb(12, 109, 133)"}}>
                                                        <i className="fa-solid fa-check" style={{color: "lightgreen", marginRight: 10}}></i>
                                                        {each.card_number}
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            , {each.holder_name}
                                                        </span>
                                                    </p>
                                                    <p onClick={()=>show_more_payment_method_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                                        view more ...
                                                    </p>
                                                </div>
                                                <div id={"show_more_payment_method_info_container"+index} style={{display: "none"}}>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", color: "rgb(12, 109, 133)",}}>
                                                        <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-credit-card"></i>
                                                        {each.holder_name}</p>
                                                    <div style={{marginLeft: 10, marginTop: 10}}>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                                Number: </span>{each.card_number}</p>
                                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                                Exp Date: </span>{each.exp_date}</p>
                                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                                Address: </span>
                                                            {each.billing.street} {each.billing.city}, {each.billing.state}, {each.billing.country} {each.billing.zip_code}</p>
                                                    </div>
                                                    <p onClick={()=>hide_more_payment_method_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                                        view less ...
                                                    </p>
                                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10, marginTop: 20}}>
                                                        <div className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, borderRadius: 50}}>
                                                            <i className="fa fa-trash" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Delete
                                                        </div>
                                                        <div className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, backgroundColor: "green", borderRadius: 50}}>
                                                            <i className="fa fa-pencil" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Edit
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    
                                    }
                                </div>
                                <div style={{padding: "15px 0"}}>
                                    <PaginationButtons />
                                </div>
                                <div onClick={show_add_new_payment_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                                    <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                                    Add New Payment Method
                                </div>
                            </div>
                            <div id="user_account_main_passports_pane" style={{display: "none", marginTop: 10}}>
                                <div style={{display: ((passports.length > 0) ? "none" : "block"), marginBottom: 20, padding: "20px"}}>
                                    <div style={{backgroundImage: `url(${not_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                        No passport added</p>
                                </div>
                                {

                                    /*
                                        id: "",
                                        user_id: "",
                                        passport_number: "",
                                        issue_date: "",
                                        exp_date: "",
                                        city: "",
                                        country: "",
                                        holder_name: "",
                                        holder_gender: "",
                                        holder_nationality: "",
                                        holder_dob: "",
                                        holder_birth_city: "",
                                    */
                                    passports.map((each, index)=>(
                                        <div style={{backgroundColor: "rgb(23, 87, 148,0.1)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
                                            <div id={"show_more_passport_info_btn"+index}>
                                                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 16, color: "rgb(12, 109, 133)"}}>
                                                    <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-passport"></i>
                                                    {each.holder_name}
                                                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}
                                                    > , {each.passport_number}</span>
                                                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}
                                                    > , {each.city} - {each.country} ...</span>
                                                </p>
                                                <p onClick={()=>show_more_passport_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                                    view more ...
                                                </p>
                                            </div>
                                            <div  id={"show_more_passport_info_container"+index} style={{display: "none"}}>
                                                <p style={{fontFamily: "'Prompt', sans-serif", color: "rgb(12, 109, 133)",}}>
                                                    <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-passport"></i>
                                                    {each.holder_name}</p>
                                                <div style={{marginLeft: 10, marginTop: 10}}>
                                                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            Number:</span> {each.passport_number}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            Issued:</span> {each.issue_date}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            Expires:</span> {each.exp_date}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            Country:</span> {each.country}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            City:</span> {each.city}</p>
                                                </div>
                                                <div style={{marginLeft: 10, marginTop: 10, borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12, fontWeight: "bolder", marginBottom: 5, color: "rgba(0,0,0,0.7)", letterSpacing: 1}}>
                                                        Holder information</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                            Name:</span> {each.holder_name}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                        DOB:</span> {each.holder_dob}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                        Gender:</span> {each.holder_gender}</p>
                                                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                                        Birth City:</span> {each.holder_birth_city}</p>
                                                </div>
                                                <p onClick={()=>hide_more_passport_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                                    view less ...
                                                </p>
                                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10, marginTop: 20}}>
                                                    <div className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, borderRadius: 50}}>
                                                        <i className="fa fa-trash" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Delete
                                                    </div>
                                                    <div className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, backgroundColor: "green", borderRadius: 50}}>
                                                        <i className="fa fa-pencil" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Edit
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div onClick={show_add_new_passport_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                                    <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                                    Add New Passport
                                </div>
                            </div>
                        </div>
                        <div className="user_account_page_each_child_container user_account_page_second_child_container" style={{borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
                            <div>
                                <p style={{fontFamily: "'Prompt', Sans-serif", textAlign: "center", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                    <i style={{marginRight: 10}} className="fa fa-history"></i>
                                    Booking History
                                </p>
                                <div style={{marginTop: 10, position: "relative", backgroundColor: "rgba(0,0,0,0.072)", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <p style={{position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 40, height: 48, borderRadius: "100%"}}>
                                        <i style={{color: "rgba(0,0,0,0.7)"}} className="fa fa-calendar"></i>
                                    </p>
                                    <input id="booking_history_date_range_input" readOnly="true" style={{position: "relative", zIndex: 4, border: "none", borderRadius: 50, fontSize: 14, padding: "14px 10px", backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", width: "calc(100% - 95px)"}} type="text" placeholder="Select date range"/>
                                    <p onClick={toggle_show_booking_history_filters} style={{cursor: "pointer", position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 48, height: 48, borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.072)",}}>
                                        <i id="toggle_show_booking_history_filters_caret" style={{color: "rgba(0,0,0,0.7)", transition: "all 0.2s ease-in-out"}} className="fa fa-caret-down"></i>
                                    </p>
                                    <div id="booking_history_filters_container" style={{display: "none", padding: "0 10px", backgroundColor: "rgb(240,240,240)", paddingTop: 70, position: "absolute", top: -10, left: 0, zIndex: 3, width: "calc(100% + 5px)", borderRadius: 20, boxShadow: "0 0 5px rgba(0,0,0,0.33)",}}>
                                        <div style={{padding: 10}}>
                                            <p style={{fontSize: 13, fontWeight: "bolder", letterSpacing: 1, color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', sans-serif"}}>Filter by:</p>
                                            <div style={{marginLeft: 10, marginTop: 10}}>
                                                <p style={{fontSize: 13, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                                    Cabin type</p>
                                                <select style={{marginTop: 5, border: "none", borderRadius: 50, backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", padding: 10, fontSize: 14, width: "100%"}}>
                                                    <option>All</option>
                                                    <option>Cheapest</option>
                                                    <option>Economy</option>
                                                    <option>Premium</option>
                                                    <option>Business</option>
                                                    <option>First</option>
                                                </select>
                                                <p style={{fontSize: 13, letterSpacing: 1, color: "rgba(0,0,0,0.7)", marginTop: 15, fontFamily: "'Prompt', sans-serif"}}>
                                                    Trip type</p>
                                                    <select style={{marginTop: 5, border: "none", borderRadius: 50, backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", padding: 10, fontSize: 14, width: "100%"}}>
                                                    <option>All</option>
                                                    <option>Round-trip</option>
                                                    <option>One-way</option>
                                                    <option>Multicity</option>
                                                </select>
                                                <div onClick={hide_booking_history_filters} style={{cursor: "pointer", padding: 10, backgroundColor: "rgba(53,53,86)", color: "white", borderRadius: 50, textAlign: "center", marginTop: 10}}>
                                                    Done
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 10, height: 400, overflowY: "auto"}}>
                                {
                                    /*
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
                                    */
                                
                                    bookings.map(each =>(
                                        <div style={{display: "block", borderBottom: "1px solid rgba(0,0,0,0.1)", padding: 10}}>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <i className="fa fa-route" style={{marginRight: 10, color: "rgba(12, 109, 133, 0.5)"}}></i>
                                                {each.takeoff_city}, {each.takeoff_airport} - {each.destination_city}, {each.destination_airport}</p>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.5)"}}>
                                                {each.departure_date} - {each.return_date}</p>
                                            <p onClick={show_booking_history_more_info_pane} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "rgba(0,0,0,0.6)"}}>
                                                view more ...
                                            </p>
                                        </div>
                                    ))
                                }
                                <div style={{display: "none", backgroundColor: "rgb(0,0,255,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, fontWeight: "initial", color: "rgba(0,0,0,0.7)"}}>
                                            <i className="fa fa-ticket" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                                        </span>G030E9S, 2 travelers, economy</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                                        <i className="fa fa-calendar-o" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                                        March 22 - March 27</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        <i className="fa fa-map-marker" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                        Accra</span></p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgb(12, 109, 133)"}}>
                                        <i className="fa fa-plane" style={{marginRight: 10, color: "rgba(0,0,0,0.5)"}}></i>
                                        JFK - Kotoka, Round-trip</p>
                                    <p onClick="show_booking_history_more_info_pane" style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "#c751b9"}}>
                                        see all ...
                                    </p>
                                </div>
                                <div style={{display: "none", marginBottom: 20, padding: "20px"}}>
                                    <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                        Oops nothing found</p>
                                </div>
                            </div>
                            <div style={{marginTop: 30}}>
                                <PaginationButtons />
                            </div>
                        </div>
                    </div>
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