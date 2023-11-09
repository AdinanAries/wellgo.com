import PaginationButtons from "../../../components/PaginationButtons";
import EachPassport from "./EachPassport";
import PassportsForm from "../../../components/PassportsForm";
import not_found_icon from "../../../icons/not_found_icon.svg";
import nothing_found_icon from "../../../icons/nothing_found_icon.svg";
import loading_icon from "../../../icons/loading.svg";
import { useState } from "react";

const PassportsPage = (props) => {

    const {isPassportsLoading,
        passports,
        show_more_passport_info,
        hide_more_passport_info,
        show_add_new_passport_form,
        DeletePassport,
        AddPassport,
        SubmitEditPassport
    } = props;

    const [ isEdit, setIsEdit ] = useState(false);
    const [ currentEditObject, setCurrentEditObject ] = useState({});

    const startPassportEdit = (obj) => {
        setIsEdit(true);
        setCurrentEditObject(obj);
    }

    return (
        <div id="user_account_main_passports_pane" style={{display: "none", marginTop: 10}}>
            {   
                isPassportsLoading ? <div style={{marginBottom: 20, padding: "20px"}}>
                        <div style={{backgroundImage: `url(${loading_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                            Please wait...</p>
                    </div> :
                    <>
                        {
                            !passports.isError && passports.length < 1 &&
                            <div style={{marginBottom: 20, padding: "20px"}}>
                                <div style={{backgroundImage: `url(${not_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                    <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                    No passport added</p>
                            </div>
                        }
                        {
                            passports.isError && <div style={{marginBottom: 20, padding: "20px"}}>
                                <div style={{backgroundImage: `url(${nothing_found_icon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", width: 150, height: 150, margin: "auto"}}></div>
                                <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", textAlign: "center", marginTop: 20}}>
                                    <i style={{marginRight: 15, fontSize: 19, color: "orangered", textShadow: "1px 2px 3px rgba(0,0,0,0.2)"}} className="fa fa-exclamation-triangle"></i>
                                    Oop! Error on server</p>
                            </div>
                        }
                        {!passports.isError && passports.map((each, index)=>(
                            <EachPassport
                                DeletePassport={DeletePassport}
                                key={each.id}
                                index={index} 
                                each={each} 
                                show_add_new_passport_form={show_add_new_passport_form}
                                startPassportEdit={startPassportEdit}
                                show_more_passport_info={show_more_passport_info}
                                hide_more_passport_info={hide_more_passport_info}
                            />
                        ))}
                        {(passports.length>5) && <PaginationButtons />}
                        <div onClick={show_add_new_passport_form} style={{marginTop: 10, padding: 14, cursor: "pointer", background: "rgb(23, 87, 148)", color: "white", borderRadius: 9, boxShadow: "1px 2px 3px rgba(0,0,0,0.33)", textAlign: "center"}}>
                            <i style={{marginRight: 10, color: "rgba(255,255,255,0.5)"}} className="fa fa-plus"></i>
                            Add New Passport
                        </div>
                        <PassportsForm
                            isEdit={isEdit}
                            currentEditObject={currentEditObject}
                            SubmitEditPassport={SubmitEditPassport}
                            AddPassport={AddPassport} 
                        />
                    </>
            }
        </div>
        
    )
}

export default PassportsPage