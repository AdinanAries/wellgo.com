import { useState } from "react";
import FullPageLoader from "./FullPageLoader";
import FormErrorCard from "./FormErrorCard";
import {
  VerifyEmail,
  VerifyPhone,
  requestEmailVerificationCode,
  requestMobileVerificationCode,
} from "../services/accountServices";

const VerifyContact = (props) => {
  const {
    email_verified,
    phone_verified,
    email,
    phone,
    closeVerifyContactPane,
  } = props;

  const [ isLoading, setIsLoading ] = useState(false);
  const [ emailInput, setEmailInput ] = useState(email);
  const [ phoneInput, setPhoneInput ] = useState(phone);
  const [ emailCodeInput, setEmailCodeInput ] = useState("");
  const [ phoneCodeInput, setPhoneCodeInput ] = useState("");
  const [ isEmailVerified, setIsEmailVerified ] = useState(email_verified);
  const [ isPhoneVerified, setIsPhoneVerified ] = useState(phone_verified);
  const [ isEmailCodeSent, setIsEmailCodeSent ] = useState(false);
  const [ isPhoneCodeSent, setIsPhoneCodeSent ] = useState(false);
  const [ isVerificationRequired, setIsVerificationRequired ] = useState(true);
  const [ formValidation, setFormValidation ] = useState({
      type: "warning",
      isError: false,
      message: "",
  });

  const toggleFormValidation = (type, isError, message) => {
    setFormValidation({type, isError, message});
  }

  let unverifiedItemTxt = "";
  if(!isEmailVerified){
    unverifiedItemTxt = "Email";
  }else if(!isPhoneVerified){
    unverifiedItemTxt = "Phone";
  }else if(!isEmailVerified && !isPhoneVerified){
    unverifiedItemTxt = "Email and Phone";
  }

  const emailInputOnChange = (e) => {
      toggleFormValidation("ok", false, "");
      setEmailInput(e.target.value);
  }

  const phoneInputOnChange = (e) =>  {
      toggleFormValidation("ok", false, "");
      setPhoneInput(e.target.value)
  }

  const emailCodeInputOnChange = (e) => {
    toggleFormValidation("ok", false, "");
    setEmailCodeInput(e.target.value);
  }

  const phoneCodeInputOnChange = (e) => {
    toggleFormValidation("ok", false, "");
    setPhoneCodeInput(e.target.value);
  }

  const sendVerificationCode = async () => {
    toggleFormValidation("ok", false, "");
    setIsLoading(true);
    if(!isEmailVerified){
      // Send Email Verification Code
      const e_res = await requestEmailVerificationCode({email: emailInput});
      console.log(e_res);
      setIsLoading(false);
      if(e_res?.isError || !e_res?.isSuccess) {
        toggleFormValidation("warning", true, e_res?.message);
        return;
      }
      setIsEmailCodeSent(true);
      setIsVerificationRequired(false);

    } else if(!isPhoneCodeSent) {
      // Send Phone Verification code
      setIsPhoneCodeSent(true);
      setIsVerificationRequired(false);
      setIsLoading(false);
    }
  }

  const VerifyContactOnSubmit = async () => {
    setIsLoading(true);
    if(!isEmailVerified){
      // Do Email Verification Here
      let e_res = await VerifyEmail({email: emailInput, verification_code: emailCodeInput});
      console.log(e_res);
      setIsLoading(false);
      setIsEmailVerified(true);
      if(!isPhoneVerified)
        setIsVerificationRequired(true);
    } else if(!isPhoneVerified){
      // Do Phone Verification Here
      setIsLoading(false);
      setIsPhoneVerified(true);
      if(!isEmailVerified)
        setIsVerificationRequired(true);
    }
  }

  const backToSendEmailVerificationCode = () => {
    setIsEmailCodeSent(false);
    setIsVerificationRequired(true);
  }

  const backToSendPhoneVerificationCode = () => {
    setIsPhoneCodeSent(false);
    setIsVerificationRequired(true);
  }

  return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.6)", position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh", zIndex: 10001}} >
        {
          isLoading && <FullPageLoader />
        }
        <div className="mobile-remove-border-radius" style={{backgroundColor: "rgb(43, 52, 61)", padding: "15px 10px", borderRadius: 8, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", minWidth: 320}} >
          <div style={{padding: 10, borderBottom: "1px solid rgba(255,255,255,0.1)"}}>
            <p style={{textAlign: "center", fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 13}}>
              Verify Your Contact</p>
          </div>
          <div style={{marginTop: 10}} >
            {
              (isVerificationRequired) ?
                <div style={{display: "flex", backgroundColor: "rgba(255,0,0,0.1)", border: "1px solid rgba(255,0,0,0.1)", padding: 10}}>
                  <p style={{color: "yellow", marginRight: 10}}>
                    <i className="fa-solid fa-exclamation-triangle" ></i>
                  </p>
                  <p style={{fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 13}}>
                    Your {unverifiedItemTxt} not Verified. Please complete the verification below
                  </p>
                </div> :
              (isEmailVerified && isPhoneVerified) &&
                <div style={{display: "flex", backgroundColor: "rgba(0,2255,0,0.1)", border: "1px solid rgba(0,255,0,0.1)", padding: 10}}>
                  <p style={{color: "lightgreen", marginRight: 10}}>
                    <i className="fa-solid fa-check" ></i>
                  </p>
                  <p style={{fontFamily: "'Prompt', Sans-serif", color: "white", fontSize: 13}}>
                    Your Contacts Have Been Verified Successfully!
                  </p>
              </div>
            }
            {
              (isVerificationRequired) ?
              <div style={{marginTop: 10}}>
                {
                  !isEmailVerified &&
                  <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 5}}>
                      <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-envelope"></i>
                      <input onInput={emailInputOnChange}
                          value={emailInput}
                          style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                          placeholder="Please enter your email here..." />
                  </div>
                }{
                  (!isPhoneVerified && isEmailVerified) &&
                  <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                      <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-phone"></i>
                      <input onInput={phoneInputOnChange}
                        value={phoneInput}
                          style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                          placeholder="Please enter your phone here..." />
                  </div>
                }
                <div onClick={sendVerificationCode} style={{padding: 10, backgroundColor: "darkslateblue", color: "white", fontSize: 13, textAlign: "center", borderRadius: 8, cursor: "pointer"}}>
                  Send Verification Code
                </div>
              </div> :
              <div style={{marginTop: 10}}>
                {
                  !isEmailVerified &&
                  <div>
                    <p style={{color: "grey", fontSize: 14, marginBottom: 15, textAlign: "center"}}>
                      Didn't recieve any code? <span onClick={backToSendEmailVerificationCode} style={{color: "orange", cursor: "pointer"}}>
                        Send another code!</span>
                    </p>
                    <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                        <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-envelope"></i>
                        <input onInput={emailCodeInputOnChange}
                            value={emailCodeInput}
                            style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                            placeholder="Enter Email Verification Code" />
                    </div>
                  </div>
                }{
                  (!isPhoneVerified && isEmailVerified) &&
                  <div>
                    <p style={{color: "grey", fontSize: 14, marginBottom: 15, textAlign: "center"}}>
                      Didn't recieve any code? <span onClick={backToSendPhoneVerificationCode} style={{color: "orange", cursor: "pointer"}}>
                        Send another code!</span>
                    </p>
                    <div style={{backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10px", borderRadius: 8, marginBottom: 10}}>
                        <i style={{color: "rgba(255,255,255,0.1)", marginRight: 10}} className="fa-solid fa-phone"></i>
                        <input onInput={phoneCodeInputOnChange}
                            value={phoneCodeInput}
                            style={{width: "calc(100% - 60px)", background: "none", color: "white", padding: "10px 0", border: "none"}} type="text"
                            placeholder="Enter Phone Verification Code" />
                    </div>
                  </div>
                }
                {
                    formValidation.isError && <FormErrorCard
                        message={formValidation.message}
                        type={formValidation.type}
                    />
                }
                {
                  (!isEmailVerified || !isPhoneVerified) ?
                    <div onClick={VerifyContactOnSubmit} style={{padding: 10, backgroundColor: "darkslateblue", color: "white", fontSize: 13, textAlign: "center", borderRadius: 8, cursor: "pointer"}}>
                      Submit
                    </div> :
                  (isEmailVerified && isPhoneVerified) &&
                    <div onClick={closeVerifyContactPane} style={{padding: 10, backgroundColor: "crimson", color: "white", fontSize: 13, textAlign: "center", borderRadius: 8, cursor: "pointer"}}>
                      Close
                    </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
  );
}

export default VerifyContact;
