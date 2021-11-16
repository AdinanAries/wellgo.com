export default function LoginPage(){
    return (
        <main id="login_page" style={{display: "none"}}>
            <div className="wrapper">
                <div style={{padding: "30px 5px"}}>
                    <p style={{marginLeft: 20, fontSize: 30, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>Login</p>
                    <div style={{maxWidth: "600px", margin: "auto", marginTop: 30, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: 15, backgroundColor: "rgb(43, 52, 61)", fontWeight: "bolder", letterSpacing: 1, marginBottom: 10, color: "white"}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                            Sign In</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 20}}>
                                <p style={{color: "rgba(0,0,0,0.6)", marginLeft: 10, fontSize: 14}}>
                                    <i className="fa fa-envelope" style={{marginRight: 7, color: "rgb(43, 52, 61)"}}></i>Email</p>
                                <input type="email" placeholder="enter your email here"  style={{marginTop: 10, padding: 14, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, width: "100%"}}/>
                            </div>
                            <div style={{marginBottom: 5}}>
                                <p style={{color: "rgba(0,0,0,0.6)", marginLeft: 10, fontSize: 14}}>
                                    <i className="fa fa-key" style={{marginRight: 7, color: "rgb(43, 52, 61)"}}></i>Password</p>
                                <input type="password" placeholder="enter your password here"  style={{marginTop: 10, padding: 14, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, width: "100%"}}/>
                            </div>
                            <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", textAlign: "center", padding: 14, borderRadius: 9}}>
                                Login
                            </div>
                            <p style={{marginTop: 15, color: "darkcyan", cursor: "pointer", fontSize: 14, textAlign: "center",}}>Forgot your password?</p>
                            <p style={{marginTop: 25, backgroundColor: "rgb(43, 52, 61)", width: "fit-content", color: "white", textAlign: "center", padding: "14px", width: "200px", borderRadius: 5, cursor: "pointer"}}>
                                <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-user"></i>
                                Create an Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}