import { useEffect, useState } from "react";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";

export default function LoginPage(props){

    const { isLoggedIn, LogMeIn } = props;
    
    const [ isShowSignUpForm, setIsShowSignUpForm ] = useState(false);

    const showSignupForm = () => {
        setIsShowSignUpForm(true);
    }

    const showLoginForm = () => {
        setIsShowSignUpForm(false);
    }

    useEffect(() => {
    }, []);

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
        <main>
            <div id="booking_history_more_info_pane" className="display_more_info_pane">
                <p onClick={()=>document.getElementById("booking_history_more_info_pane").style.display="none"} className="page-popup-cover-close-btn">
                    &times;
                </p>
            </div>
            <div className="wrapper">
                <LoginForm 
                    isLoggedIn={isLoggedIn}
                    isShowSignUpForm={isShowSignUpForm}
                    showSignupForm={showSignupForm}
                    LogMeIn={LogMeIn}
                    loginForm={loginForm}
                />
                <SignupForm
                    isLoggedIn={isLoggedIn}
                    signupForm={signupForm}
                    isShowSignUpForm={isShowSignUpForm}
                    showLoginForm={showLoginForm}
                    LogMeIn={LogMeIn}
                />
            </div>
        </main>
    );
}