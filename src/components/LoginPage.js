import $ from "jquery";

import UserAccountPage from "./UserAccountPage";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import PaymentsForm from "./PaymentsForm";
import PassportsForm from "./PassportsForm";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function LoginPage(){

    let [login, setLogin] = useState({
        id: "",
        user_id: "001",
        username: "m.adinan@yahoo.com",
        password: "Passord@2014",
    });

    let [user, setUser] = useState({
        id: "001",
        first_name: "Mohammedu",
        middle_name: "",
        last_name: "Adinan",
        dob: "03-23-1992",
        email: "m.adinan@yahoo.com",
        mobile: "+1 7327999546",
        gender: "male"
    });

    let [passports, setPassports] = useState([{
        id: "",
        user_id: "",
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
    }]);

    let [payments, setPayments] = useState([{
        id: "",
        user_id: "",
        card_number: "",
        holder_name: "",
        exp_date: "",
        sec_code: "",
        billing: {
            street: "",
            city: "",
            state: "",
            country: "",
            zip_code: ""
        }
    }]);

    let [paymentForm, setPaymentForm] = useState({
        id: "",
        user_id: "",
        card_number: "",
        holder_name: "",
        exp_date: "",
        sec_code: "",
        billing: {
            street: "",
            city: "",
            state: "",
            country: "",
            zip_code: ""
        }
    });

    let [passportForm, setPassportForm] = useState({
        id: "",
        user_id: "",
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

    let [userForm, setUserForm] = useState({
        id: "001",
        first_name: "Mohammedu",
        middle_name: "Salifu",
        last_name: "Adinan",
        dob: "03-23-1992",
        email: "m.adinan@yahoo.com",
        mobile: "+1 732 799 9546",
        gender: "male",
        old_password: "",
        new_password: "",
        confirm_new_password: ""
    });

    let [bookings, setBookings] = useState([{
        id: "",
        user_id: "",
        airline: "",
        trip_type: "",
        travellers: [{
            first_name: "",
            last_name: "",
            gender: "",
            dob: "",
        }],
        from_where: "",
        to_where: "",
        departure_date: "",
        return_date: ""
    }]);

    let [loginForm, setLoginForm] = useState({

    });
    
    let [signupForm, setSignupForm] = useState({

    });


    function edit_user_form_firstname(e){
        setUserForm({
            ...userForm,
            first_name: e.target.value,
        });
    }

    function edit_user_form_lastname(e){
        setUserForm({
            ...userForm,
            last_name: e.target.value,
        });
    }

    function edit_user_form_middlename(e){
        setUserForm({
            ...userForm,
            middle_name: e.target.value,
        });
    }

    function edit_user_form_email(e){
        setUserForm({
            ...userForm,
            email: e.target.value,
        });
    }

    function edit_user_form_mobile(e){
        setUserForm({
            ...userForm,
            mobile: e.target.value,
        });
    }

    return (
        <main id="login_page" style={{display: "none"}}>

            <div id="booking_history_more_info_pane" className="display_more_info_pane">
                <p onClick={()=>document.getElementById("booking_history_more_info_pane").style.display="none"} className="page-popup-cover-close-btn">
                    &times;
                </p>
            </div>
            <EditProfileForm 
                userForm={userForm}
                editUserFirstName={edit_user_form_firstname}
                editUserLastName={edit_user_form_lastname}
                editUserMiddleName={edit_user_form_middlename}
                editUserEmail={edit_user_form_email}
                editUserMobile={edit_user_form_mobile}
            />
            <PaymentsForm
                paymentForm={paymentForm}
            />
            <PassportsForm
                passportForm={passportForm}
            />
            <div className="wrapper">
                <UserAccountPage 
                    user={user}
                    passports={passports}
                    payments={payments}
                    bookings={bookings}
                />
                <LoginForm 
                    loginForm={loginForm}
                />
                <SignupForm
                    signupForm={signupForm}
                />
            </div>
        </main>
    );
}