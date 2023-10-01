import $ from "jquery";

import UserAccountPage from "../UserAccountPage/UserAccountPage";
import { useState } from "react";
import EditProfileForm from "../UserAccountPage/Components/EditProfileForm";
import PaymentsForm from "../../components/PaymentsForm";
import PassportsForm from "../../components/PassportsForm";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";

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

    let [passports, setPassports] = useState([
        {
            id: "001",
            user_id: "001",
            passport_number: "3452342",
            issue_date: "02-26-2022",
            exp_date: "02-26-2026",
            city: "New York",
            country: "United States",
            holder_name: "Mohammed Adinan",
            holder_gender: "Male",
            holder_nationality: "American",
            holder_dob: "03-23-1992",
            holder_birth_city: "New York"
        },
        {
            id: "002",
            user_id: "001",
            passport_number: "436373",
            issue_date: "03-19-2021",
            exp_date: "03-19-2025",
            city: "New York",
            country: "United States",
            holder_name: "Salis Munir",
            holder_gender: "Male",
            holder_nationality: "American",
            holder_dob: "03-23-1992",
            holder_birth_city: "New York"
        }
    ]);

    let [payments, setPayments] = useState([
        {
            id: "001",
            user_id: "001",
            card_number: "***3424",
            holder_name: "Mohammed Adinan",
            exp_date: "03-23-2025",
            sec_code: "009",
            billing: {
                street: "956 Anderson Ave, 1A",
                city: "Bronx",
                state: "NY",
                country: "United States",
                zip_code: "10453"
            }
        },
        {
            id: "001",
            user_id: "001",
            card_number: "***4532",
            holder_name: "Emmanuel Poku",
            exp_date: "06-19-2025",
            sec_code: "136",
            billing: {
                street: "956 Anderson Ave, 1A",
                city: "Bronx",
                state: "NY",
                country: "United States",
                zip_code: "10453"
            }
        }
    ]);

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

    let [bookings, setBookings] = useState([
        {
            id: "001",
            user_id: "001",
            airline: "American Airlines",
            ariline_code: "",
            trip_type: "round trip",
            travellers: [{
                first_name: "MOhammed",
                last_name: "Adinan",
                gender: "male",
                dob: "03-23-1992",
            }],
            takeoff_airport: "Laguardia",
            takeoff_airport_code: "",
            takeoff_city: "New York",
            destination_airport: "Kotoka",
            destination_airport_code: "",
            destination_city: "Accra",
            departure_date: "03-23-2023",
            return_date: "04-09-2023"
        },
        {
            id: "001",
            user_id: "001",
            airline: "Virgin Airlines",
            ariline_code: "",
            trip_type: "round trip",
            travellers: [{
                first_name: "Mohammed",
                last_name: "Adinan",
                gender: "male",
                dob: "03-23-1992",
            }],
            takeoff_airport: "JFK",
            takeoff_airport_code: "",
            takeoff_city: "New York",
            destination_airport: "Charles de Gaulle Intl",
            destination_airport_code: "",
            destination_city: "Paris",
            departure_date: "01-20-2023",
            return_date: "02-11-2023"
        }
    ]);

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