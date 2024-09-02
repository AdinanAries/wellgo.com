import { useState } from "react";
import Footer from "../components/Footer";
import FullPageLoader from "../components/FullPageLoader";
import FormErrorCard from "../components/FormErrorCard";
import WillgoLogo from '../WillgoLogo.png';

const PasswordReset = (props) => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ formValidation, setFormValidation ] = useState({
        type: "warning",
        isError: false,
        message: "",
    });

    return <div>
        <main>
            <div style={{marginBottom: 20, backgroundColor: "#121212", padding: "0 15px"}}>
                <div className="wrapper">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{height: "60px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            <div className="site-logo">
                                <p className="site-logo-img">
                                    <img src={WillgoLogo} alt={"to do"} /></p>
                                <div className="site-logo-txt">
                                    <p>
                                        welldugo
                                        <span>.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding: "30px 5px"}}>
                {
                    isLoading && <FullPageLoader />
                }
                {
                    <div  className="login_page_form_container" style={{maxWidth: "600px", margin: "auto", backgroundColor: "white", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: "0 20px", paddingTop: 20, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontSize: 16, fontWeight: "bolder", letterSpacing: 1, marginBottom: 10,}}>
                            Forgot Password</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    <i className="fa-solid fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    Enter New Password:</p>
                                <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                    <input
                                        type="password" placeholder="type here..."
                                        style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                                </div>
                            </div>
                            <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                    <i className="fa-solid fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                    Confirm Password:</p>
                                <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                                    <input
                                        type="password" placeholder="type here..."
                                        style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                                </div>
                            </div>
                            {
                                formValidation.isError && <FormErrorCard 
                                    message={formValidation.message} 
                                    type={formValidation.type}
                                />
                            }
                            <div style={{marginTop: 5}}>
                            <div style={{fontFamily: "'Prompt', Sans-serif", color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", textAlign: "center", padding: 14, borderRadius: 8}}>
                                Submit
                            </div>
                        </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </main>
    </div>
}

export default PasswordReset;