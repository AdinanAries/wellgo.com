import edit_user_forms_bg from "../icons/edit_user_forms_bg.svg";

function EditProfileForm({userForm,
                            editUserFirstName,
                            editUserLastName,
                            editUserMiddleName,
                            editUserEmail,
                            editUserMobile,
                            ...rest}){
    return (
        <div id="account_page_edit_profile_form" style={{display: "none"}} className="page-popup-cover">
            <div className="page-popup-cover-content-container">
                <div style={{backgroundImage: `url('${edit_user_forms_bg}')`}} className="page-popup-cover-container-svg-bg"></div>
                <p onClick={()=>document.getElementById("account_page_edit_profile_form").style.display="none"} className="page-popup-cover-close-btn">
                    &times;
                </p>
                <div className="page-popup-cover-content-header">
                    Edit Profile
                </div>
                <div className="steps_form_all_steps_indicators">
                    <div id="user_profile_edit_personal_info_nav_btn" onClick={show_edit_user_personal_infor} className="steps_form_each_step_indicator_container active">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif"}}>Personal</p>
                        <div className="steps_form_each_step_indicator">
                            <p><i className="fa fa-user"></i></p>
                        </div>
                    </div>
                    <div id="user_profile_edit_contact_info_nav_btn" onClick={show_edit_user_contacts_infor} className="steps_form_each_step_indicator_container">
                        <p style={{fontSize: 13, marginLeft: -20, fontFamily: "'Prompt', sans-serif"}}>Contact</p>
                        <div className="steps_form_each_step_indicator">
                            <p><i className="fa fa-phone"></i></p>
                        </div>
                    </div>
                    <div id="user_profile_edit_other_info_nav_btn" onClick={show_edit_user_other_infor} className="steps_form_each_step_indicator_container">
                        <p style={{fontSize: 13, width: "calc(100% + 40px)", marginLeft: -20, fontFamily: "'Prompt', sans-serif", display: "flex", flexDirection: 'row', justifyContent: "space-between"}}>
                            <span style={{fontSize: 13, fontFamily: "'Prompt', sans-serif"}}>Other</span>
                            <span style={{fontSize: 13, fontFamily: "'Prompt', sans-serif"}}>Password</span>
                        </p>
                        <div className="steps_form_each_step_indicator">
                            <p><i className="fa fa-bars"></i></p>
                        </div>
                        <div style={{left: "calc(100% - 20px)", top: "calc(100% - 15px)", position: "absolute"}} className="steps_form_each_step_indicator">
                            <p><i className="fa fa-key"></i></p>
                        </div>
                    </div>
                </div>
                <div style={{padding: "10px",}}>
                    <div id="edit_user_info_personal_section" style={{animation: "pop-in 0.2s ease-out"}}>
                        <div style={{display: "flex", flexDirection: "row", marginBottom: 20, position: "relative"}}>
                            <div onClick={()=>document.getElementById("edit_profile_upload_photo_container").style.display="block"} className="account_page_profile_pic_container" style={{position: "relative", cursor: "pointer", marginRight: 20, borderRadius: "100%", width: 80, height: 80, boxShadow: "0 0 5px rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <i style={{fontSize: 50, color: "rgba(0,0,0,0.4)"}} className="fa fa-user"></i>
                                <div style={{position: "absolute", bottom: -4, right: -3, }}>
                                    <p style={{color: 'rgba(0,0,0,0.7)', fontSize: 14, width: 32, display: "flex", flexDirection: "row", justifyContent: "center", height: 32, alignItems: "center", backgroundColor: "rgb(211,211,211)", color: "rgba(0,0,0,0.3)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", borderRadius:   "100%"}}>
                                        <i className="fa fa-plus"></i></p>
                                </div>
                            </div>
                            <div id="edit_profile_upload_photo_container" style={{display: "none", animation: "pop-in 0.2s ease-out", overflow: "hidden", position: "absolute", zIndex: 3, width: "100%", left: 0, top: 0, backgroundColor: "white", boxShadow: "0 0 5px rgba(0,0,0,0.5)", borderRadius: 10,}}>
                                <div style={{borderBottom: "1px solid rgba(0,0,0,0.1)", backgroundColor: "rgba(0,0,0,0.07)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                    <div style={{cursor: "pointer", height: 150, width: 150, borderRadius: "100%", backgroundColor: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.1)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                        <div>
                                            <p><i style={{fontSize: 25, color: "rgba(0,0,0,0.2)", textAlign: "center", width: "100%"}} className="fa fa-plus"></i></p>
                                            <p style={{marginLeft: 10, fontSize: 14, color: "rgba(0,0,0,0.5)", textAlign: "center", marginTop: 5}}>select a photo</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{padding: "20px 10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <div onClick={()=>document.getElementById("edit_profile_upload_photo_container").style.display="none"} className="searchBtn" style={{backgroundColor: "white", boxShadow: "none", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, color: "rgba(0,0,0,0.7)"}}>
                                        <i className="fa fa-times" style={{marginRight: 5, color: "crimson"}}></i>Close
                                    </div>
                                    <div className="searchBtn" style={{boxShadow: "none", backgroundColor: "white", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, color: "rgba(0,0,0,0.7)"}}>
                                        <i className="fa fa-save" style={{marginRight: 5, color: "green"}}></i>Save
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <input type="text" placeholder="First Name" 
                                    onInput={editUserFirstName}
                                    value={userForm.first_name} 
                                    style={{padding: 16, width: "calc(100%)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <input type="text" placeholder="Middle Name"
                                    onInput={editUserMiddleName}
                                    value={userForm.middle_name}
                                    style={{padding: 16, width: "calc(100%)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <input type="text" placeholder="Last Name"
                                    onInput={editUserLastName}
                                    value={userForm.last_name}
                                    style={{padding: 16, width: "calc(100%)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div id="edit_user_info_contact_section" style={{display: "none", animation: "pop-in 0.2s ease-out"}}>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                <input type="email" placeholder="Email"
                                    onInput={editUserEmail}
                                    value={userForm.email}
                                    style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa fa-mobile" style={{marginRight: 10, fontSize: 22, color: "rgb(43, 52, 61)"}}></i>
                                <input type="text" placeholder="Mobile"
                                    onInput={editUserMobile}
                                    value={userForm.mobile}
                                    style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                    </div>
                    <div id="edit_user_info_other_section" style={{display: "none", animation: "pop-in 0.2s ease-out"}}>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa fa-calendar" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                <input type="text" placeholder="Date of Birth" value={userForm.dob} style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                            </div>
                        </div>
                        <div style={{marginBottom: 10}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 50, marginTop: 10, paddingLeft: 16}}>
                                <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                <select style={{padding: 16, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}>
                                    <option>Male</option>
                                </select>
                            </div>
                        </div>

                        <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", fontWeight: "bolder", fontFamily: "'Prompt', sans-serif", marginTop: 30, marginBottom: 20}}>
                            Change Password Below</p>
                        <div>
                            
                            <div style={{marginBottom: 10}}>
                                <div style={{position: "relative", padding: 15, backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 5, marginTop: 10, paddingLeft: 16}}>
                                    <p style={{fontSize: 13, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                        <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                        Old Password</p>
                                    <input type="password" placeholder=""  style={{paddingTop: 10, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                                <div style={{position: "relative", padding: 15, backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 5, marginTop: 10, paddingLeft: 16}}>
                                    <p style={{fontSize: 13, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                        <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                        New Password</p>
                                    <input type="password" placeholder=""  style={{paddingTop: 10, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                                <div style={{position: "relative", padding: 15, backgroundColor: "rgba(0, 0, 0, 0.07)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: 5, marginTop: 10, paddingLeft: 16}}>
                                    <p style={{fontSize: 13, paddingBottom: 10, borderBottom: "1px solid rgba(0,0,0,0.1)", color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', sans-serif"}}>
                                        <i className="fa fa-key" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                                        Confirm Password</p>
                                    <input type="password" placeholder=""  style={{paddingTop: 10, paddingLeft: 0, width: "calc(100% - 30px)", background: "none", border: "none"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20, borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10}}>
                        <div style={{color: "white", cursor: "pointer", backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.7)"}} className="fa fa-times"></i>
                            Cancel
                        </div>
                        <div style={{color: "white", cursor: "pointer", backgroundColor: "rgb(24, 67, 98)", boxShadow: "0 0 5px rgba(0,0,0,0.5)", textAlign: "center", padding: 14, borderRadius: 50}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-check-square-o"></i>
                            Update
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileForm;

function show_edit_user_contacts_infor(){
    Array.from(document.getElementsByClassName("steps_form_each_step_indicator_container")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_edit_contact_info_nav_btn").classList.add("active");

    document.getElementById("edit_user_info_personal_section").style.display="none";
    document.getElementById("edit_user_info_contact_section").style.display="block";
    document.getElementById("edit_user_info_other_section").style.display="none";
}

function show_edit_user_personal_infor(){
    Array.from(document.getElementsByClassName("steps_form_each_step_indicator_container")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_edit_personal_info_nav_btn").classList.add("active");

    document.getElementById("edit_user_info_personal_section").style.display="block";
    document.getElementById("edit_user_info_contact_section").style.display="none";
    document.getElementById("edit_user_info_other_section").style.display="none";
} 

function show_edit_user_other_infor(){
    Array.from(document.getElementsByClassName("steps_form_each_step_indicator_container")).forEach(each => {
        each.classList.remove("active")
        console.log(each.classList)
    });
    document.getElementById("user_profile_edit_other_info_nav_btn").classList.add("active");

    document.getElementById("edit_user_info_personal_section").style.display="none";
    document.getElementById("edit_user_info_contact_section").style.display="none";
    document.getElementById("edit_user_info_other_section").style.display="block";
} 