import PaginationButtons from "../../../components/PaginationButtons";
import EachPassport from "./EachPassport";
import PassportsForm from "../../../components/PassportsForm";

const PassportsPage = (props) => {

    const {passports, not_found_icon, show_more_passport_info, hide_more_passport_info, show_add_new_passport_form } = props;

    return (
        <div id="user_account_main_passports_pane" style={{display: "none", marginTop: 10}}>
            <div style={{display: ((passports.length > 0) ? "none" : "block"), marginBottom: 20, padding: "20px"}}>
                <div style={{backgroundImage: `url(${not_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                    <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                    No passport added</p>
            </div>
            {/*
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
                */
                passports.map((each, index)=>(
                    <EachPassport
                        index={index} 
                        each={each} 
                        show_more_passport_info={show_more_passport_info}
                        hide_more_passport_info={hide_more_passport_info}
                    />
                ))
            }
            <PaginationButtons />
            <div onClick={show_add_new_passport_form} style={{marginTop: 10, padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                Add New Passport
            </div>
            <PassportsForm />
        </div>
    )
}

export default PassportsPage