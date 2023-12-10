import { useState } from 'react';
import WillgoLogo from '../WillgoLogo.png';
import { getClient } from "../helpers/general";
import { registerPriceAlertsUser } from "../services/accountServices";

function Footer(props){

    const [ priceAlertForm, setPriceAlertForm ] = useState({
        client: getClient(),
        email: ""
    });

    const setPriceAlertEmail = (e) => {
        setPriceAlertForm({
            ...priceAlertForm,
            email: e.target.value
        })
    }

    const subscribeForPriceAlerts = async () => {
        if(priceAlertForm.email===""){
            alert("Please enter your email");
            return;
        }
        let res = await registerPriceAlertsUser(priceAlertForm);
        if(res._id){
            alert("You have subscribed to price alerts");
        }
    }

    return (
        <footer>
            <div className="wrapper" style={{paddingTop: 20}}>
                <div className="footer_section_flex_container">
                <div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c751b9", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Wellgo.com</p>
                            <p className="footer-site-logo">
                                <img src={WillgoLogo}/></p>
                            <p style={{color: "white", fontSize: 14, marginTop: 5, textAlign: "center"}}>
                                &copy; {new Date().getFullYear()}, all rights reserved
                            </p>
                        </div>
                    </div>
                    <div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c751b9", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                About Us</p>
                            <p className="footer_about_text" style={{color: "white", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette", maxWidth: 250}}>
                            Wellgo.com is a virtual travel agency with AI travel assistants...</p>
                        </div>
                        <p style={{fontFamily: "'Courgette', Sans-serif", textAlign: "center", marginTop: 10, color: "white", letterSpacing: 0.5, fontSize: 13}}>
                            <i style={{marginRight: 10, opacity: 0.4}} className="fa-solid fa-envelope"></i>
                            Subscribe to get latest price updates</p>
                        <div style={{borderRadius: 50, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.1)", marginTop: 10}}>
                            <div style={{display: "flex"}}>
                                <input 
                                    onInput={setPriceAlertEmail}
                                    value={priceAlertForm.email}
                                    style={{color: "white", fontFamily: "'Prompt', Sans-serif", fontSize: 13, width: "calc(100% - 100px)", padding: "10px 20px", border: "none", background: "none", borderRadius: 0}}
                                    type="email" placeholder="Email"/>
                                <div onClick={subscribeForPriceAlerts} style={{width: 100, fontFamily: "'Prompt', Sans-serif", fontSize: 13, padding: 9, color: "white", backgroundColor: "rgba(34, 91, 138, 0.3)", textAlign: "center", cursor: "pointer"}}>
                                    <i className="fa fa-check" style={{marginRight: 10, color: "rgba(255,255,255,0.4)"}}></i>Submit
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer_section_each_flex_section_container" style={{marginBottom: 20}}>
                            <p style={{fontWeight: "bolder", color: "#c751b9", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Contact</p>
                            <div style={{marginTop: 10}}>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 8}} className="fa fa-envelope"></i>
                                    support@wellgo.com
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 20}} className="fa fa-phone"></i>
                                    +1 732-799-9546
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <span style={{padding: "5px", marginRight: 10, borderRadius: 4, cursor: "pointer"}}>
                                        <i style={{opacity: 0.5, marginBottom: 5, fontSize: 19}} className="fa fa-facebook"></i>
                                    </span>
                                    <span style={{padding: "5px", marginRight: 10, borderRadius: 4, cursor: "pointer"}}>
                                        <i style={{opacity: 0.5, marginBottom: 5, fontSize: 19}} className="fa fa-twitter"></i>
                                    </span>
                                    <span style={{padding: "5px", marginRight: 10, borderRadius: 4, cursor: "pointer"}}>
                                        <i style={{opacity: 0.5, marginBottom: 5, fontSize: 19}} className="fa fa-instagram"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer_very_lower_text" style={{marginTop: 20, textAlign: "center", opacity: 0.6, paddingTop: 20, color: "rgba(255,255,255,0.55)", borderTop: "1px solid rgba(255,255,255,0.3)"}}>
                    &copy; {new Date().getFullYear()} wellgo.com...</p>
            </div> 
        </footer>
    );
}

export default Footer; 