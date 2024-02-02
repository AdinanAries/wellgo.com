import { useEffect, useState } from 'react';
import WillgoLogo from '../WillgoLogo.png';
import { getClient } from "../helpers/general";
import { registerPriceAlertsUser } from "../services/accountServices";

function Footer(props){

    const [ priceAlertForm, setPriceAlertForm ] = useState({
        client: {},
        email: ""
    });

    useEffect(()=>{
        (async function go(){
            let client = await getClient();
            setPriceAlertForm({
                ...priceAlertForm,
                client: client
            });
        })();
    },[])

    const setPriceAlertEmail = (e) => {
        setPriceAlertForm({
            ...priceAlertForm,
            email: e.target.value
        });
    }

    const subscribeForPriceAlerts = async () => {
        if(priceAlertForm.email===""){
            alert("Please enter your email");
            return;
        }
        let res = await registerPriceAlertsUser(priceAlertForm);
        if(res?.status===400){
            alert("You have already subscribed");
            return;
        }
        if(res._id){
            alert("You have subscribed to price alerts");
            setPriceAlertForm({
                ...priceAlertForm,
                email: ""
            });
        }
    }

    return (
        <footer>
            <div className="wrapper" style={{paddingTop: 20}}>
                <div className="footer_section_flex_container">
                <div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c751b9", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                welldugo.com</p>
                            <p style={{textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 10}}>
                                <span style={{fontFamily: "'Prompt', Sans-serif", margin: "0 10px", color: "rgba(255,255,255,0.7)", fontSize: 11}}>
                                    &#8226;
                                </span>
                                Aide is AI assistant
                                <span style={{fontFamily: "'Prompt', Sans-serif", margin: "0 10px", color: "rgba(255,255,255,0.7)", fontSize: 11}}>
                                    &#8226;
                                </span>
                            </p>
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
                            <p className="footer_about_text" style={{color: "white", margin: "auto", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette", maxWidth: 250}}>
                            Welldugo.com is your favorite virtual travel agency with AI assistance...</p>
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
                                    support@welldugo.com
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
                    &copy; {new Date().getFullYear()} welldugo.com...</p>
            </div> 
        </footer>
    );
}

export default Footer; 