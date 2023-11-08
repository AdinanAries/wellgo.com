import { useState } from "react";
import LoginErrorCard from "./LoginErrorCard";
import { getApiHost } from "../../../Constants/Environment";

function LoginForm(props){

    const API_URL = getApiHost();

    const { isLoggedIn, isShowSignUpForm, LogMeIn, showSignupForm } = props;

    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });

    const [ formValidation, setFormValidation ] = useState({
        type: "warning",
        isError: false,
        message: "",
    })

    const emailOnInput = (e) => {
        setFormValidation({
            type: "warning",
            isError: false,
            message: "",
        });
        setFormData({
            ...formData,
            email: e.target.value
        });
    }

    const passwordOnInput = (e) => {
        setFormValidation({
            type: "warning",
            isError: false,
            message: "",
        });
        setFormData({
            ...formData,
            password: e.target.value
        });
    }
    const loginFromServer = async (path=`\\api\\users\\login\\`) => {
        try{
            return await fetch(API_URL+path, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err);
                return {isError: true, message: err.message};
            })
        } catch (e){
            console.log(e);
            return {isError: true, message: e.message};
        }
    }

    const login_onclick = async () => {
        if(!formData.email) {
            setFormValidation({
                type: "error",
                isError: true,
                message: "please enter email",
            });
            return
        }
        if(!formData.password) {
            setFormValidation({
                type: "error",
                isError: true,
                message: "please enter password",
            });
            return
        }
        let res = await loginFromServer();
        if(res.token){
            LogMeIn();
        }else{
            setFormValidation({
                type: "error",
                isError: true,
                message: res.message,
            })
        }
        
    }

    function show_signup_form(){
        showSignupForm();
    }

    return (
        <div id="main_login_form" style={{display: ((!isLoggedIn && !isShowSignUpForm) ? "block" : "none"), padding: "30px 5px"}}>
            <div className="login_page_form_container" style={{maxWidth: "600px", margin: "auto", backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderRadius: 9, overflow: "hidden"}}>
                <p style={{padding: "0 20px", paddingTop: 20, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 16, fontWeight: "bolder", letterSpacing: 1, marginBottom: 10,}}>
                    Log Into Account</p>
                <div style={{padding: "10px",}}>
                    <div style={{marginBottom: 10}}>
                        <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                            <input onInput={emailOnInput} value={formData.email}
                                type="email" placeholder="Email"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.33)", border: "none", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                            <input onInput={passwordOnInput} value={formData.password}
                                type="password" placeholder="Password"  style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    {
                        formValidation.isError && <LoginErrorCard 
                        message={formValidation.message} 
                        type={formValidation.type}
                    />
                    }
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <div onClick={login_onclick} style={{color: "white", cursor: "pointer", width: "fit-content", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                            Login
                        </div>
                    </div>
                    <div style={{marginTop: 10}}>
                        <p style={{width: "165px", textAlign: "center", margin: "auto", marginTop: 5, padding: 10, color: "darkcyan", cursor: "pointer", fontSize: 14}}>Forgot your password?</p>
                        <p onClick={show_signup_form} style={{padding: 10, width: "150px", textAlign: "center", margin: "auto", marginTop: 5, marginBottom: 5, fontSize: 14, borderRadius: 5, cursor: "pointer", width: 160}}>
                            <i style={{marginRight: 5, color: "rgb(43, 52, 61)"}} className="fa fa-user"></i>
                            Create an Account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
