import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";

export default function LoginPage(){

    let [login, setLogin] = useState({
        id: "",
        user_id: "001",
        username: "m.adinan@yahoo.com",
        password: "Passord@2014",
    });

    let [loginForm, setLoginForm] = useState({

    });
    
    let [signupForm, setSignupForm] = useState({

    });

    return (
        <main id="login_page" style={{display: "none"}}>
            <div id="booking_history_more_info_pane" className="display_more_info_pane">
                <p onClick={()=>document.getElementById("booking_history_more_info_pane").style.display="none"} className="page-popup-cover-close-btn">
                    &times;
                </p>
            </div>
            <div className="wrapper">
                <LoginForm 
                    loginForm={loginForm}
                />
                <SignupForm
                    signupForm={signupForm}
                />
            </div>
        </main>
    );
}