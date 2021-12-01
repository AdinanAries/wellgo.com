import $ from "jquery";

export default function LoginPage(){
    return (
        <main id="login_page" style={{display: "none"}}>
            <div className="wrapper">
                <div id="user_account_manager_page">
                    <div className="user_account_page_container">
                        <div className="user_account_page_each_child_container">
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: 5, marginBottom: 10}}>
                                <div style={{backgroundColor: "rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", border: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-user"></i>
                                        Account</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-credit-card"></i>
                                        Payment</p>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "33%", height: 40, cursor: "pointer",}}>
                                    <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                                        <i style={{color: "#c751b9", marginRight: 10}} className="fa fa-user"></i>
                                        Passports</p>
                                </div>
                            </div>
                            <div style={{marginTop: 10, padding: 10}}>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <div style={{marginRight: 10, borderRadius: "100%", width: 80, height: 80, boxShadow: "0 0 5px rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)", overflow: "hidden", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <i style={{fontSize: 50, color: "rgba(0,0,0,0.4)"}} className="fa fa-user"></i>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, fontWeight: "bolder", color: "rgba(0,0,0,0.7)"}}>
                                            Mohammed Adinan</p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                            more options
                                            <i style={{marginLeft: 10}} className="fa fa-angle-right"></i>
                                        </p>
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
                        </div>
                        <div className="user_account_page_each_child_container user_account_page_second_child_container" style={{borderLeft: "1px solid rgba(0,0,0,0.1)"}}>
                            <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder", textAlign: "center", fontSize: 14, color: "rgba(0,0,0,0.7)", cursor: "pointer"}}>
                                <i style={{marginRight: 10}} className="fa fa-history"></i>
                                Booking History
                            </p>
                            <div style={{marginTop: 20}}>
                                <div style={{borderBottom: "1px solid rgb(0,0,0,0.1)", marginBottom: 10, paddingBottom: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 16, fontWeight: "initial", color: "rgb(102, 169, 233)"}}>
                                            Reference:</span> G030E9S</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        From <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        Accra</span></p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        JFK - Kotoka</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                        view booking
                                        <i style={{marginLeft: 10}} className="fa fa-long-arrow-right"></i>
                                    </p>
                                </div>
                                <div style={{borderBottom: "1px solid rgb(0,0,0,0.1)", marginBottom: 10, paddingBottom: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 16, fontWeight: "initial", color: "rgb(102, 169, 233)"}}>
                                            Reference:</span> G030E9S</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        From <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        Accra</span></p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        JFK - Kotoka</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                        view booking
                                        <i style={{marginLeft: 10}} className="fa fa-long-arrow-right"></i>
                                    </p>
                                </div>
                                <div style={{borderBottom: "1px solid rgb(0,0,0,0.1)", marginBottom: 10, paddingBottom: 10}}>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                                        <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 16, fontWeight: "initial", color: "rgb(102, 169, 233)"}}>
                                            Reference:</span> G030E9S</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        From <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        New York</span> to <span style={{fontFamily: "'Prompt', Sans-serif", fontSize: 15, fontWeight: "bolder"}}>
                                        Accra</span></p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, marginBottom: 2, color: "rgba(0,0,0,0.7)"}}>
                                        JFK - Kotoka</p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                                        view booking
                                        <i style={{marginLeft: 10}} className="fa fa-long-arrow-right"></i>
                                    </p>
                                </div>
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
                                    <input type="text" placeholder="Full Name"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
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