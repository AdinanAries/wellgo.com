function SignupForm(){
    return (
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
                    <div style={{marginTop: 10}}>
                        <p onClick={show_login_form} style={{width: "220px", textAlign: "center", margin: 'auto', marginTop: 5, padding: "15px", fontSize: 14, cursor: "pointer"}}>
                            <i style={{marginRight: 5, color: "rgb(43, 52, 61)"}} className="fa fa-sign-in"></i>
                            Login with existing account</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;

function show_login_form(){
    document.getElementById("main_signup_form").style.display="none";
    document.getElementById("main_login_form").style.display="block";
    //$("#main_login_form").slideDown("fast")
}