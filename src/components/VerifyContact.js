const VerifyContact = (props) => {

  const {
    email_verified,
    phone_verified,
    email,
    phone,
  } = props;

  let unverifiedItemText = (!email_verified && phone_verified) && "Email is";
  unverifiedItemText = (email_verified && !phone_verified) && "Phone is";
  unverifiedItemText = (!email_verified && !phone_verified) && "Email and Phone are";

  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}} >
    <div className="mobile-remove-border-radius" style={{backgroundColor: "rgb(43, 52, 61)", padding: "15px 0", borderRadius: 8, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)"}}>
      <div style={{padding: 10, borderBottom: "1px solid rgba(255,255,255,0.1)"}}>
        <p style={{color: "white", textAlign: "center", fontSize: 13, marginBottom: 10, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
            Verify Contact Details
        </p>
      </div>
      <div style={{padding: 10}}>
        <div style={{display: "flex", padding: 10, backgroundColor: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.1)"}}>
          <i style={{marginRight: 15, color: "yellow"}} className="fa-solid fa-exclamation-triangle"></i>
          <p style={{color: "white", textAlign: "center", fontSize: 13, marginBottom: 10, fontFamily: "'Prompt', Sans-serif"}}>
              Your {unverifiedItemText} not verified. Please complete the verification process below.
          </p>
        </div>
        <div>
          <div style={{padding: "10px 0"}}>
              <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                  <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-envelope"></i>
                  <input
                      value={email}
                      style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                      placeholder="Enter your email here" />
              </div>
              <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                  <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-phone"></i>
                  <input
                      value={phone}
                      style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                      placeholder="Enter your email here" />
              </div>
            </div>
          <div style={{textAlign: "center", backgroundColor: "darkslateblue", color: "white", padding: 10, borderRadius: 8, cursor: "pointer", fontSize: 13}}>
            Click Here to Send Code
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default VerifyContact;
