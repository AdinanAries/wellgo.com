import WillgoLogo from '../WillgoLogo.png';

function Footer(){
    return (
        <footer>
            <div className="wrapper" style={{paddingTop: 20}}>
                <div className="footer_section_flex_container">
                <div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c900b0", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Wellgo.com</p>
                            <p className="footer-site-logo">
                                <img src={WillgoLogo}/></p>
                            <p style={{color: "white", fontSize: 14, marginTop: 5, textAlign: "center"}}>
                                &copy; 2022, all rights reserved
                            </p>
                        </div>
                    </div>
                    <div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c900b0", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                About Us</p>
                            <p className="footer_about_text" style={{color: "white", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette", maxWidth: 250}}>
                            Wellgo.com is a online travel agency who's business operations targets mostly the African
                            travel market</p>
                        </div>
                    </div>
                    {/*<div className="footer_section_each_flex_section_container">
                        <div>
                            <p style={{fontWeight: "bolder", color: "#c900b0", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Recieve Price Updates</p>
                            <p style={{color: "white", textAlign: "center", letterSpacing: 0.5, fontSize: 14}}>
                                Subscribe your email to get latest price updates</p>
                            <div style={{marginTop: 10, borderRadius: 9, overflow: "hidden", border: "1px solid rgba(0,0,0,0.35)"}}>
                                <input style={{width: "100%", padding: 15, border: "none", borderRadius: 0}} type="email" placeholder="enter your email here"/>
                                <div style={{padding: 14, color: "white", backgroundColor: "rgb(34, 91, 138)", textAlign: "center", cursor: "pointer"}}>
                                    <i className="fa fa-check" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>subscribe
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div>
                        <div className="footer_section_each_flex_section_container" style={{marginBottom: 20}}>
                            <p style={{fontWeight: "bolder", color: "#c900b0", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Contact</p>
                            <div style={{marginTop: 10}}>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 8}} className="fa fa-envelope"></i>
                                    support@willgo.com
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 20}} className="fa fa-phone"></i>
                                    +1 732-799-9546
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-facebook"></i>
                                    </span>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-twitter"></i>
                                    </span>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-instagram"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer_very_lower_text" style={{marginTop: 20, textAlign: "center", opacity: 0.6, paddingTop: 20, color: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(255,255,255,0.3)"}}>
                    &copy; 2022 willgo.com, all rights reserved</p>
            </div> 
        </footer>
    );
}

export default Footer; 