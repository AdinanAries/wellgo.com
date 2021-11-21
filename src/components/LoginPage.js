import $ from "jquery";

export default function LoginPage(){
    return (
        <main id="login_page" style={{display: "none"}}>
            <div className="wrapper">
                <div id="main_login_form" style={{padding: "30px 5px"}}>
                    <p style={{marginLeft: 20, fontSize: 30, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>Login</p>
                    <div style={{maxWidth: "600px", margin: "auto", marginTop: 30, backgroundColor: "white", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: 15, backgroundColor: "rgb(43, 52, 61)", fontWeight: "bolder", letterSpacing: 1, marginBottom: 10, color: "white"}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                            Sign In</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="email" placeholder="Email"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Password"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                Login
                            </div>
                            <p style={{marginTop: 15, color: "darkcyan", cursor: "pointer", fontSize: 14, textAlign: "center",}}>Forgot your password?</p>
                            <p onClick={show_signup_form} style={{marginTop: 25, backgroundColor: "rgb(43, 52, 61)", width: "fit-content", color: "white", textAlign: "center", padding: "14px", width: "200px", borderRadius: 5, cursor: "pointer"}}>
                                <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-user"></i>
                                Create an Account</p>
                        </div>
                    </div>
                </div>
                <div id="main_signup_form" style={{display: "none", padding: "30px 5px"}}>
                    <p style={{marginLeft: 20, fontSize: 30, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>Login</p>
                        <div style={{maxWidth: "600px", margin: "auto", marginTop: 30, backgroundColor: "white", border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: 15, backgroundColor: "rgb(43, 52, 61)", fontWeight: "bolder", letterSpacing: 1, marginBottom: 10, color: "white"}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-user"></i>
                            Signup</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="text" placeholder="Full Name"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="email" placeholder="Email"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Password"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 20}}>
                               <div style={{backgroundColor: "rgba(0,0,0,0.07)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 14}}>
                                    <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    <input type="password" placeholder="Confirm Password"  style={{padding: 14, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", textAlign: "center", padding: 14, borderRadius: 50}}>
                                Register
                            </div>
                            <p onClick={show_login_form} style={{marginTop: 25, backgroundColor: "rgb(43, 52, 61)", color: "white", textAlign: "center", padding: "14px", width: "250px", borderRadius: 5, cursor: "pointer"}}>
                                <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                                Login with existing account</p>
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