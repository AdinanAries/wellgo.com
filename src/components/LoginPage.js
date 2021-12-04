import $ from "jquery";

import edit_user_forms_bg from "../icons/edit_user_forms_bg.svg";
import credit_card_payment from "../icons/credit_card_payment.svg";
import passport from "../icons/passport.svg";

export default function LoginPage(){
    return (
        <main id="login_page" style={{display: "none"}}>

            <div id="account_page_edit_profile_form" style={{display: "none"}} className="page-popup-cover">
                <div className="page-popup-cover-content-container">
                    <div style={{backgroundImage: `url('${edit_user_forms_bg}')`}} className="page-popup-cover-container-svg-bg"></div>
                    <p onClick={()=>document.getElementById("account_page_edit_profile_form").style.display="none"} className="page-popup-cover-close-btn">
                        &times;
                    </p>
                    <div className="page-popup-cover-content-header">
                        Edit Profile
                    </div>
                    <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="First Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Middle Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Last Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="email" placeholder="Email"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-calendar-o" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Date of Birth"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div style={{color: "white", cursor: "pointer", backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                    <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.7)"}} className="fa fa-times"></i>
                                    Cancel
                                </div>
                                <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                    <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-check-square-o"></i>
                                    Update
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div id="account_page_add_payments_form" style={{display: "none"}} className="page-popup-cover">
                <div className="page-popup-cover-content-container">
                    <div style={{backgroundImage: `url('${credit_card_payment}')`}} className="page-popup-cover-container-svg-bg"></div>
                    <p onClick={()=>document.getElementById("account_page_add_payments_form").style.display="none"} className="page-popup-cover-close-btn">
                        &times;
                    </p>
                    <div className="page-popup-cover-content-header">
                        Add Payment Method
                    </div>
                </div>
            </div>

            <div id="account_page_add_passport_form" style={{display: "none"}} className="page-popup-cover">
                <div className="page-popup-cover-content-container">
                    <div style={{backgroundImage: `url('${passport}')`}} className="page-popup-cover-container-svg-bg"></div>
                    <p onClick={()=>document.getElementById("account_page_add_passport_form").style.display="none"} className="page-popup-cover-close-btn">
                        &times;
                    </p>
                    <div className="page-popup-cover-content-header">
                        Add New Passport
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div id="user_account_manager_page">
                    <div className="user_account_page_container">
                        <div className="user_account_page_each_child_container">
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 5, marginBottom: 10}}>
                                <div id="user_account_pane_account_menu_item" className="user_account_pane_main_menu_item active" onClick={show_main_account_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-user"></i>
                                        Account</p>
                                </div>
                                <div id="user_account_pane_payment_menu_item" className="user_account_pane_main_menu_item" onClick={show_main_payment_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-credit-card"></i>
                                        Payments</p>
                                </div>
                                <div id="user_account_pane_passport_menu_item" className="user_account_pane_main_menu_item" onClick={show_main_passport_pane} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer",}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
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
                                            Mohammed Adinan</p>
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
                                            Email: adinanaries@outlook.com</p>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            Phone: +1 732 799 9546</p>
                                    </div>
                                    <div style={{marginBottom: 20}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder", marginBottom: 5, color: "rgb(102, 169, 233)", letterSpacing: 1}}>
                                            Other</p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            DOB: March 23rd, 1992</p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                            Gender: Male</p>
                                    </div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", textAlign: "center", fontSize: 15, borderRadius: 6, padding: 14, color: "white", backgroundColor: "rgb(23, 87, 148)", boxShadow: "1px 2px 3px rgba(0,0,0,0.33)"}}>
                                        Frequent Flyer and Membership</p>
                                </div>
                            </div>
                            <div id="user_account_main_payment_pane" style={{display: "none", marginTop: 10,}}>
                                
                                <div style={{display: "none", backgroundColor: "rgba(255,0,0,0.1)", borderLeft: "4px solid rgba(255,0,0,0.3)", marginBottom: 20, padding: "20px"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif"}}>
                                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                        No payment method added</p>
                                </div>
                                <div style={{backgroundColor: "rgb(23, 87, 148,0.1)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
                                    <div id="show_more_payment_method_info_btn0">
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 16, color: "rgb(12, 109, 133)"}}>
                                            ...3453
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}> , Mohammed Adinan</span>
                                        </p>
                                        <p onClick={()=>show_more_payment_method_info(0)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                            view more ...
                                        </p>
                                    </div>
                                    <div id="show_more_payment_method_info_container0" style={{display: "none"}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", color: "rgb(12, 109, 133)",}}>
                                            <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-book"></i>
                                            Mohammed Adinan</p>
                                        <div style={{marginLeft: 10, marginTop: 10}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Number:</span> GH076033</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Issued:</span> March 2019</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Expires:</span> March 2024</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Country:</span> Spain</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>City:</span> Madrid</p>
                                        </div>
                                        <div style={{marginLeft: 10, marginTop: 10, borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12, fontWeight: "bolder", marginBottom: 5, color: "rgba(0,0,0,0.7)", letterSpacing: 1}}>
                                                Holder information</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Name:</span> Mohammed Adinan</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>DOB:</span> March 23rd, 1992</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Gender:</span> Male</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Birth City:</span> Madrid</p>
                                        </div>
                                        <p onClick={()=>hide_more_payment_method_info(0)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                            view less ...
                                        </p>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10, marginTop: 20}}>
                                        <div className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, borderRadius: 50}}>
                                            <i className="fa fa-trash" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Delete
                                        </div>
                                        <div className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, backgroundColor: "green", borderRadius: 50}}>
                                            <i className="fa fa-pencil" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Edit
                                        </div>
                                    </div>
                                </div>
                                <div onClick={show_add_new_payment_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                                    <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                                    Add New Payment Method
                                </div>
                            </div>
                            <div id="user_account_main_passports_pane" style={{display: "none", marginTop: 10}}>
                                <div style={{display: "none", backgroundColor: "rgba(255,0,0,0.1)", borderLeft: "4px solid rgba(255,0,0,0.3)", marginBottom: 20, padding: "20px"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif"}}>
                                        <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                        No passport added</p>
                                </div>
                                <div style={{backgroundColor: "rgb(23, 87, 148,0.1)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
                                    <div id="show_more_passport_info_btn0">
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 16, color: "rgb(12, 109, 133)"}}>
                                            Mohammed Adinan
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}> , GH076033</span>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}> , Madrid - Spain ...</span>
                                        </p>
                                        <p onClick={()=>show_more_passport_info(0)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                            view more ...
                                        </p>
                                    </div>
                                    <div  id="show_more_passport_info_container0" style={{display: "none"}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", color: "rgb(12, 109, 133)",}}>
                                            <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-book"></i>
                                            Mohammed Adinan</p>
                                        <div style={{marginLeft: 10, marginTop: 10}}>
                                        <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Number:</span> GH076033</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Issued:</span> March 2019</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Expires:</span> March 2024</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Country:</span> Spain</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>City:</span> Madrid</p>
                                        </div>
                                        <div style={{marginLeft: 10, marginTop: 10, borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                                            <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 12, fontWeight: "bolder", marginBottom: 5, color: "rgba(0,0,0,0.7)", letterSpacing: 1}}>
                                                Holder information</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                                <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Name:</span> Mohammed Adinan</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>DOB:</span> March 23rd, 1992</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Gender:</span> Male</p>
                                            <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                                            <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>Birth City:</span> Madrid</p>
                                        </div>
                                        <p onClick={()=>hide_more_passport_info(0)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                            view less ...
                                        </p>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10, marginTop: 20}}>
                                        <div className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, borderRadius: 50}}>
                                            <i className="fa fa-trash" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Delete
                                        </div>
                                        <div className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, backgroundColor: "green", borderRadius: 50}}>
                                            <i className="fa fa-pencil" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Edit
                                        </div>
                                    </div>
                                </div>
                                <div onClick={show_add_new_passport_form} style={{padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                                    <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                                    Add New Passport
                                </div>
                            </div>
                        </div>
                        <div className="user_account_page_each_child_container user_account_page_second_child_container" style={{borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder", textAlign: "center", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                <i style={{marginRight: 10}} className="fa fa-history"></i>
                                Booking History
                            </p>
                            <div style={{marginTop: 20, position: "relative", backgroundColor: "rgba(0,0,0,0.072)", borderRadius: 50, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <p style={{position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 40, height: 40, borderRadius: "100%"}}>
                                    <i style={{color: "rgba(0,0,0,0.7)"}} className="fa fa-calendar-o"></i>
                                </p>
                                <input id="booking_history_date_range_input" readOnly="true" style={{position: "relative", zIndex: 4, border: "none", borderRadius: 50, fontSize: 14, padding: "5px 10px", backgroundColor: "rgba(0,0,0,0.052)", fontFamily: "'Prompt', sans-serif", width: "calc(100% - 85px)"}} type="text" placeholder="add start and end dates"/>
                                <p onClick={toggle_show_booking_history_filters} style={{position: "relative", zIndex: 4, display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", width: 40, height: 40, borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.072)",}}>
                                    <i id="toggle_show_booking_history_filters_caret" style={{color: "rgba(0,0,0,0.7)", transition: "all 0.2s ease-in-out"}} className="fa fa-caret-down"></i>
                                </p>
                                <div id="booking_history_filters_container" style={{display: "none", padding: "0 10px", backgroundColor: "rgb(240,240,240)", paddingTop: 50, position: "absolute", top: -10, left: 0, zIndex: 3, width: "calc(100% + 5px)", borderRadius: 20, boxShadow: "0 0 5px rgba(0,0,0,0.33)",}}>
                                    <div style={{padding: 10}}>
                                        <p style={{fontSize: 13, fontWeight: "bolder", letterSpacing: 1, color: "rgba(0,0,0,0.6)", fontFamily: "'Prompt', sans-serif"}}>Filter by:</p>
                                        <div style={{marginLeft: 10, marginTop: 5}}>
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
                            <div style={{marginTop: 10}}>
                                <div style={{backgroundColor: "rgb(0,0,255,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
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
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "#c751b9"}}>
                                        see all ...
                                    </p>
                                </div>
                                <div style={{backgroundColor: "rgb(0,0,255,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
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
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "#c751b9"}}>
                                        see all ...
                                    </p>
                                </div>
                                <div style={{backgroundColor: "rgb(0,0,255,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 15}}>
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
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, marginTop: "10px", color: "#c751b9"}}>
                                        see all ...
                                    </p>
                                </div>
                                {/*<div style={{backgroundColor: "rgb(0,0,0,0.05)", borderRadius: 10, boxShadow: "0 0 5px rgba(0,0,0,0.33)", marginBottom: 10, padding: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 16, fontWeight: "initial"}}>
                                            Reference:</span> G030E9S</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        From <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15}}>
                                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15}}>
                                        Accra</span></p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        JFK - Kotoka</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                        view more ...
                                    </p>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main_login_form" style={{display: "none", padding: "30px 5px"}}>
                    <div className="login_page_form_container" style={{maxWidth: "600px", margin: "auto", backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: "0 20px", paddingTop: 20, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 16, fontWeight: "bolder", letterSpacing: 1, marginBottom: 10,}}>
                            Log Into Account</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="email" placeholder="Email"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Password"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                                <div style={{color: "white", cursor: "pointer", width: "fit-content", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                    <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                                    Login
                                </div>
                            </div>
                            <div style={{borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                <p style={{width: "165px", textAlign: "center", margin: "auto", marginTop: 5, padding: 10, color: "darkcyan", cursor: "pointer", fontSize: 14}}>Forgot your password?</p>
                                <p onClick={show_signup_form} style={{padding: 10, width: "150px", textAlign: "center", margin: "auto", marginTop: 5, marginBottom: 5, fontSize: 14, borderRadius: 5, cursor: "pointer"}}>
                                    <i style={{marginRight: 5, color: "rgb(43, 52, 61)"}} className="fa fa-user"></i>
                                    Create an Account</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main_signup_form" style={{display: "none", padding: "30px 5px"}}>
                    <div className="login_page_form_container" style={{maxWidth: "600px", margin: "auto", backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: "0 20px", paddingTop: 20, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 16, fontWeight: "bolder", letterSpacing: 1, marginBottom: 10,}}>
                            Add New Account</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="First Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Middle Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Last Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="email" placeholder="Email"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Password"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 10}}>
                               <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Confirm Password"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                                <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                    <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-check-square-o"></i>
                                    Register
                                </div>
                            </div>
                            <div style={{borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                <p onClick={show_login_form} style={{width: "220px", textAlign: "center", margin: 'auto', marginTop: 5, padding: "15px", fontSize: 14, cursor: "pointer"}}>
                                    <i style={{marginRight: 5, color: "rgb(43, 52, 61)"}} className="fa fa-sign-in"></i>
                                    Login with existing account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function show_login_form(){
    document.getElementById("main_signup_form").style.display="none";
    document.getElementById("main_login_form").style.display="block";
    //$("#main_login_form").slideDown("fast")
}

function show_signup_form(){
    document.getElementById("main_login_form").style.display="none";
    document.getElementById("main_signup_form").style.display="block";
    //$("#main_signup_form").slideDown("fast")
}

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

function show_add_new_payment_form(){
    document.getElementById("account_page_add_payments_form").style.display = "flex";
}

function show_add_new_passport_form(){
    document.getElementById("account_page_add_passport_form").style.display = "flex";
}

function show_edit_profile_form(){
    document.getElementById("account_page_edit_profile_form").style.display = "flex";
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