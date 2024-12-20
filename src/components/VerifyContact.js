import { useState } from "react";

const VerifyContact = (props) => {
  const {
    email_verified,
    phone_verified,
    email,
    phone,
  } = props;

  const [ isEmailVerified, setIsEmailVerified ] = useState(email_verified);
  const [ isPhoneVerified, setIsPhoneVerified ] = useState(phone_verified);

  let unverifiedItemTxt = (!isEmailVerified) && "Email";
  unverifiedItemTxt = (!isPhoneVerified) && "Phone";
  unverifiedItemTxt = (!isEmailVerified && !isPhoneVerified) && "Email and Phone";

  return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}} >
        <div className="mobile-remove-border-radius" style={{backgroundColor: "rgb(43, 52, 61)", padding: "15px 10px", borderRadius: 8, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)"}} >
          <div style={{padding: 10, borderBottom: "1px solid rgba(255,255,255,0.1)"}}>
            <p style={{textAlign: "center", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 13}}>
              Verify Your Contact</p>
          </div>
          <div style={{marginTop: 10}} >
            <div style={{display: "flex", backgroundColor: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.1)", padding: 10}}>
              <p style={{color: "yellow", marginRight: 10}}>
                <i className="fa-solid fa-exclamation-triangle" ></i>
              </p>
              <p style={{fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 13}}>
                Your {unverifiedItemTxt} not Verified. Please complete the verification below
              </p>
            </div>
            <div style={{marginTop: 10}}>
              <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 5}}>
                  <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-envelope"></i>
                  <input value={email}
                      style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                      placeholder="Please enter your email here..." />
              </div>
              <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                  <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-phone"></i>
                  <input value={phone}
                      style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                      placeholder="Please enter your phone here..." />
              </div>
              <div style={{padding: 10, backgroundColor: "darkslateblue", color: "white", fontSize: 13, textAlign: "center", borderRadius: 8, cursor: "pointer"}}>
                Send Verification Code
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default VerifyContact;
