import passport from "../icons/passport.svg";
import { useEffect, useState } from "react";

import FormErrorCard from "./FormErrorCard";
import FullPageLoader from "./FullPageLoader";

function PassportsForm(props){

    const {
        isEdit,
        cancelIsEdit,
        submitFunction,
        passportForm,
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

    const setPassportNumber = (e) => {
        resetFormValidation();
        stateChange("passport_number", e.target.value);
    }

    const setHolderName = (e) => {
        resetFormValidation();
        stateChange("holder_name", e.target.value);
    }

    const setNationality = (e) => {
        resetFormValidation();
        stateChange("holder_nationality", e.target.value);
    }

    const setGenger = (e) => {
        resetFormValidation();
        stateChange("holder_gender", e.target.value);
    }

    const setIssueCity = (e) => {
        resetFormValidation();
        stateChange("city", e.target.value);
    }

    const setIssueCountry = (e) => {
        resetFormValidation();
        stateChange("country", e.target.value);
    }

    const setBirthCity = (e) => {
        resetFormValidation();
        stateChange("holder_birth_city", e.target.value);
    }

    const setBirthDate = (e) => {
        resetFormValidation();
        stateChange("holder_dob", e.target.value);
    }

    const setIssueDate = (e) => {
        resetFormValidation();
        stateChange("issue_date", e.target.value);
    }

    const setExpDate = (e) => {
        resetFormValidation();
        stateChange("exp_date", e.target.value);
    }

    const onSubmit = () => {
        if(
            !passportForm.passport_number ||
            !passportForm.issue_date ||
            !passportForm.exp_date ||
            !passportForm.city ||
            !passportForm.country ||
            !passportForm.holder_name ||
            !passportForm.holder_gender ||
            !passportForm.holder_nationality ||
            !passportForm.holder_dob ||
            !passportForm.holder_birth_city
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
        <div id="account_page_add_passport_form" style={{display: "none"}} className="page-popup-cover">
            {
                isLoading && <FullPageLoader />
            }
            <div className="page-popup-cover-content-container">
                <div style={{backgroundImage: `url('${passport}')`}} className="page-popup-cover-container-svg-bg"></div>
                <p onClick={()=>{
                        document.getElementById("account_page_add_passport_form").style.display="none";
                        cancelIsEdit();
                    }} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div className="page-popup-cover-content-header">
                    {isEdit ? "Edit" : "Add"} Passport
                </div>
                <div className="steps_form_all_steps_indicators">
                    <div id="user_profile_add_passport_info_nav_btn" style={{width: "50%"}} onClick={show_add_passport_infor} className="steps_form_each_step_indicator_container active passport_form">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif", textAlign: "center"}}>
                            Passport Details</p>
                        <div className="steps_form_each_step_indicator" style={{left: "calc(50% - 15px)"}}>
                            <p><i className="fa-solid fa-passport"></i></p>
                        </div>
                    </div>
                    <div id="user_profile_add_passport_holder_info_nav_btn" style={{width: "50%"}} onClick={show_add_passport_holder_infor} className="steps_form_each_step_indicator_container passport_form">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif", textAlign: "center"}}>
                            Holder Info</p>
                        <div className="steps_form_each_step_indicator" style={{left: "calc(50% - 15px)"}}>
                            <p><i className="fa-solid fa-user"></i></p>
                        </div>
                    </div>
                </div>
                <div id="user_profile_add_passport_form">
                    <div style={{marginBottom: 10}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa-solid fa-passport" style={{marginLeft: 10}}></i>
                            <input 
                                onInput={setPassportNumber} 
                                value={passportForm.passport_number}
                                type="text" placeholder="Passport Number"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setIssueDate}
                                    value={passportForm.issue_date}
                                    type="text" placeholder="Issue Date"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setExpDate}
                                    value={passportForm.exp_date}
                                    type="text" placeholder="Exp Date"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setIssueCountry}
                                    value={passportForm.country}
                                    type="text" placeholder="Issue Country"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-tree-city" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setIssueCity}
                                    value={passportForm.city}
                                    type="text" placeholder="Issue City"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user_profile_add_passport_holder_form" style={{display: "none"}}>
                    <div style={{marginBottom: 10}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa-solid fa-user" style={{marginLeft: 10}}></i>
                            <input 
                                onInput={setHolderName}
                                value={passportForm.holder_name}
                                type="text" placeholder="Name on Passport"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-person-half-dress" style={{marginLeft: 10}}></i>
                                <select 
                                    onChange={setGenger}
                                    value={passportForm.holder_gender}
                                    type="text" placeholder="Gender"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}>
                                    <option value="">
                                        Gender at birth
                                    </option>
                                    <option value="Male">
                                        Male
                                    </option>
                                    <option value="Female">
                                        Female
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setNationality}
                                    value={passportForm.holder_nationality}
                                    type="text" placeholder="Nationality"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setBirthDate}
                                    value={passportForm.holder_dob}
                                    type="text" placeholder="Date of Birth"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-tree-city" style={{marginLeft: 10}}></i>
                                <input 
                                    onInput={setBirthCity}
                                    value={passportForm.holder_birth_city}
                                    type="text" placeholder="Birth City"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
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
                    <div onClick={()=>{
                            document.getElementById("account_page_add_passport_form").style.display="none";
                            cancelIsEdit();
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

export default PassportsForm;

function show_add_passport_infor(){
    Array.from(document.querySelectorAll(".steps_form_each_step_indicator_container.passport_form")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_add_passport_info_nav_btn").classList.add("active");

    document.getElementById("user_profile_add_passport_holder_form").style.display="none";
    document.getElementById("user_profile_add_passport_form").style.display="block";
} 

function show_add_passport_holder_infor(){
    Array.from(document.querySelectorAll(".steps_form_each_step_indicator_container.passport_form")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_add_passport_holder_info_nav_btn").classList.add("active");

    document.getElementById("user_profile_add_passport_holder_form").style.display="block";
    document.getElementById("user_profile_add_passport_form").style.display="none";
} 