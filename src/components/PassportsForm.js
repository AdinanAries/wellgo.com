import passport from "../icons/passport.svg";
import { useEffect, useState } from "react";

function PassportsForm(props){

    const {
        isEdit,
        currentEditObject,
        SubmitEditPassport,
        AddPassport
    } = props;

    let [passportForm, setPassportForm] = useState({
        _id: "",
        passport_number: "",
        issue_date: "",
        exp_date: "",
        city: "",
        country: "",
        holder_name: "",
        holder_gender: "",
        holder_nationality: "",
        holder_dob: "",
        holder_birth_city: "",
    });

    /*if(currentEditObject && isEdit){
        setPassportForm(currentEditObject);
        console.log("Edit Passport Obj:", passportForm);
    }*/

    const addPassport = () => {
        AddPassport(passportForm);
    }

    const editPassport = () => {
        SubmitEditPassport(passportForm);
    }

    return (
        <div id="account_page_add_passport_form" style={{display: "none"}} className="page-popup-cover">
            <div className="page-popup-cover-content-container">
                <div style={{backgroundImage: `url('${passport}')`}} className="page-popup-cover-container-svg-bg"></div>
                <p onClick={()=>document.getElementById("account_page_add_passport_form").style.display="none"} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div className="page-popup-cover-content-header">
                    Add New Passport
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
                            <input value={passportForm.passport_number}
                                type="number" placeholder="Passport Number"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                     value={passportForm.issue_date}
                                    type="number" placeholder="Issue Date"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-calendar" style={{marginLeft: 10}}></i>
                                <input 
                                     value={passportForm.exp_date}
                                    type="number" placeholder="Exp Date"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input 
                                     value={passportForm.country}
                                    type="text" placeholder="Country"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-tree-city" style={{marginLeft: 10}}></i>
                                <input type="text" placeholder="City"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="user_profile_add_passport_holder_form" style={{display: "none"}}>
                    <div style={{marginBottom: 10}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                            <i className="fa-solid fa-user" style={{marginLeft: 10}}></i>
                            <input 
                                 value={passportForm.holder_name}
                                type="text" placeholder="Name on Passport"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                        </div>
                    </div>
                    <div style={{display: "flex", marginBottom: 10, padding: "0"}}>
                        <div style={{marginRight: 10, width: "50%"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-person-half-dress" style={{marginLeft: 10}}></i>
                                <input 
                                     value={passportForm.holder_gender}
                                    type="text" placeholder="Gender"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-earth-americas" style={{marginLeft: 10}}></i>
                                <input 
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
                                     value={passportForm.holder_dob}
                                    type="text" placeholder="Date of Birth"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{width: "calc(50% - 10px)"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa-solid fa-tree-city" style={{marginLeft: 10}}></i>
                                <input 
                                     value={passportForm.holder_birth_city}
                                    type="text" placeholder="Birth City"  style={{padding: 16, width: "calc(100% - 45px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px 0", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                    <div onClick={()=>document.getElementById("account_page_add_passport_form").style.display="none"} style={{color: "white", cursor: "pointer", backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                        <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.7)"}} className="fa fa-times"></i>
                        Cancel
                    </div>
                    <div onClick={(isEdit ? editPassport : addPassport)} style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
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