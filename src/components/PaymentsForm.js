import credit_card_payment from "../icons/credit_card_payment.svg";
import { useState } from "react";

import FullPageLoader from "./FullPageLoader";
import FormErrorCard from "./FormErrorCard";

function PaymentsForm(props){

    const { 
        cancelIsEdit,
        submitFunction,
        paymentForm,
        stateChange
    } = props;

    const [ formValidation, setFormValidation ] = useState({
        type: "warning",
        isError: false,
        message: "",
    });

    const [ isLoading, setIsLoading ] = useState(false);

    const resetFormValidation = () => {
        setFormValidation({
            type: "warning",
            isError: false,
            message: "",
        });
    }

    const setCardNumber = (e) => {
        resetFormValidation();
        stateChange("card_number", e.target.value);
    }

    const setHolderName = (e) => {
        resetFormValidation();
        stateChange("holder_name", e.target.value);
    }

    const setExpDate = (e) => {
        resetFormValidation();
        stateChange("exp_date", e.target.value);
    }

    const setSecCode = (e) => {
        resetFormValidation();
        stateChange("sec_code", e.target.value);
    }

    const setStreetAddress = (e) => {
        resetFormValidation();
        const IS_BILLING_INFO=true;
        stateChange("street", e.target.value, IS_BILLING_INFO);
    }

    const setBillingCity = (e) => {
        resetFormValidation();
        const IS_BILLING_INFO=true;
        stateChange("city", e.target.value, IS_BILLING_INFO);
    }

    const setBillingState = (e) => {
        resetFormValidation();
        const IS_BILLING_INFO=true;
        stateChange("state", e.target.value, IS_BILLING_INFO);
    }

    const setBillingCountry = (e) => {
        resetFormValidation();
        const IS_BILLING_INFO=true;
        stateChange("country", e.target.value, IS_BILLING_INFO);
    }

    const setBillingZipCode = (e) => {
        resetFormValidation();
        const IS_BILLING_INFO=true;
        stateChange("zip_code", e.target.value, IS_BILLING_INFO);
    }

    const onSubmit = () => {
        if(
            !paymentForm.card_number ||
            !paymentForm.holder_name ||
            !paymentForm.exp_date ||
            !paymentForm.sec_code ||
            !paymentForm.billing.street ||
            !paymentForm.billing.city ||
            !paymentForm.billing.state ||
            !paymentForm.billing.country ||
            !paymentForm.billing.zip_code
        ){
            setFormValidation({
                type: "error",
                isError: true,
                message: "Please make sure the form is completed",
            });
            return;
        }
        setIsLoading(true);
        submitFunction();
    }

    return (
        <div id="account_page_add_payments_form" style={{display: "none"}} className="page-popup-cover">
            {
                isLoading && <FullPageLoader />
            }
            <div className="page-popup-cover-content-container">
                <div style={{backgroundImage: `url('${credit_card_payment}')`}} className="page-popup-cover-container-svg-bg"></div>
                <p onClick={()=> {
                        cancelIsEdit();
                        document.getElementById("account_page_add_payments_form").style.display="none";
                    }} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div className="page-popup-cover-content-header">
                    Add Payment Method
                </div>
                <div className="steps_form_all_steps_indicators">
                    <div id="user_profile_add_payment_method_info_nav_btn" style={{width: "50%"}} onClick={show_add_payment_credit_card_infor} className="steps_form_each_step_indicator_container active payment_method_form">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif", textAlign: "center"}}>
                            Credit/Debit Card</p>
                        <div className="steps_form_each_step_indicator" style={{left: "calc(50% - 15px)"}}>
                            <p><i className="fa-solid fa-credit-card"></i></p>
                        </div>
                    </div>
                    <div id="user_profile_add_payment_address_info_nav_btn" style={{width: "50%"}} onClick={show_add_payment_billing_address_infor} className="steps_form_each_step_indicator_container payment_method_form">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif", textAlign: "center"}}>
                            Billing Address</p>
                        <div className="steps_form_each_step_indicator" style={{left: "calc(50% - 15px)"}}>
                            <p><i className="fa-solid fa-globe"></i></p>
                        </div>
                    </div>
                </div>
                <div id="user_profile_add_payment_credit_card_form">
                    <div style={{marginBottom: 10}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa-solid fa-credit-card" style={{marginLeft: 10}}></i>
                            <input 
                                onInput={setCardNumber}
                                value={paymentForm.card_number}
                                type="text" placeholder="Card Number"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                        <i className="fa-solid fa-user" style={{marginLeft: 10}}></i>
                            <input 
                                onInput={setHolderName}
                                value={paymentForm.holder_name}
                                type="text" placeholder="Holder Name"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setExpDate}
                                    value={paymentForm.exp_date}
                                    type="text" placeholder="Exp Date"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-key" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setSecCode}
                                    value={paymentForm.sec_code}
                                    type="number" placeholder="Sec Code"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user_profile_add_payment_address_form" style={{display: "none"}}>
                    <div style={{marginBottom: 10}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa-solid fa-map-marker" style={{marginLeft: 10}}></i>
                            <input 
                                onInput={setStreetAddress}
                                value={paymentForm.billing.street}
                                type="text" placeholder="Street Address"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-tree-city" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setBillingCity}
                                    value={paymentForm.billing.city}
                                    type="text" placeholder="City"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setBillingState}
                                    value={paymentForm.billing.state}
                                    type="text" placeholder="State"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input
                                    onInput={setBillingCountry}
                                    value={paymentForm.billing.country} 
                                    type="text" placeholder="Country"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-map-marker" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setBillingZipCode}
                                    value={paymentForm.billing.zip_code}
                                    type="text" placeholder="Zip Code"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    formValidation.isError && <FormErrorCard 
                        message={formValidation.message} 
                        type={formValidation.type}
                    />
                }
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px 0", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                    <div onClick={()=> {
                        cancelIsEdit();
                        document.getElementById("account_page_add_payments_form").style.display="none";
                    }} style={{color: "white", cursor: "pointer", backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                        <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.7)"}} className="fa fa-times"></i>
                        Cancel
                    </div>
                    <div onClick={onSubmit} style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                        <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-save"></i>
                        Save
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentsForm;

function show_add_payment_credit_card_infor(){
    Array.from(document.querySelectorAll(".steps_form_each_step_indicator_container.payment_method_form")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_add_payment_method_info_nav_btn").classList.add("active");

    document.getElementById("user_profile_add_payment_address_form").style.display="none";
    document.getElementById("user_profile_add_payment_credit_card_form").style.display="block";
} 

function show_add_payment_billing_address_infor(){
    Array.from(document.querySelectorAll(".steps_form_each_step_indicator_container.payment_method_form")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_add_payment_address_info_nav_btn").classList.add("active");

    document.getElementById("user_profile_add_payment_address_form").style.display="block";
    document.getElementById("user_profile_add_payment_credit_card_form").style.display="none";
} 