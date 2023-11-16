import { useState } from "react";
import { calculate_age, validateYYYYMMDDInputDates } from "../../../helpers/general";
import CONSTANTS from "../../../Constants/Constants";

const PassengerForm = (props) => {
    
    const [passenger, setPassenger] = useState(props.passenger);
    const [ age, setAge ]=useState(calculate_age(passenger.born_on))
 
    console.log("Passenger: ", passenger);

    const setFirstName = (e) => {
        setPassenger({...passenger, given_name: e.target.value});
    }

    const setLastName = (e) => {
        setPassenger({...passenger, family_name: e.target.value});
    }

    const setEmail = (e) => {
        setPassenger({...passenger, email: e.target.value});
    }
    const setGender = (e) => {
        setPassenger({...passenger, gender: e.target.value});
    }
    const setDOB = (e) => {
        setPassenger({...passenger, born_on: validateYYYYMMDDInputDates(e.target.value)});
    }
    const setTitle = (e) => {
        setPassenger({...passenger, title: e.target.value});
    }
    const setPhone = (e) => {
        setPassenger({...passenger, phone_number: e.target.value});
    }
    const setTravelDocID = (e) => {
        setPassenger({...passenger, identity_documents: [
            { ...passenger.identity_documents[0], unique_identifier: e.target.value }
        ]});
    }
    const setTravelDocExpiration = (e) => {
        setPassenger({...passenger, identity_documents: [
            { ...passenger.identity_documents[0], expires_on: e.target.value }
        ]});
    }
    const setTravelDocCountry = (e) => {
        setPassenger({...passenger, identity_documents: [
            { ...passenger.identity_documents[0], issuing_country_code: e.target.value }
        ]});
    }
    const setTravelDocType = (e) => {
        setPassenger({...passenger, identity_documents: [
            { ...passenger.identity_documents[0], type: e.target.value }
        ]});
    }

    const setPassengerAge = (e) => {
        setAge(calculate_age(e.target.value));
    }

    const setInfantPassengerId = (e) => {
        setPassenger({ ...passenger, infant_passenger_id: e.target.value });
    }

    return (
        <div style={{border: "1px solid rgba(0,0,0,0.07)", padding: 10, width: "calc(100% - 22px)", borderRadius: 6}}>
            <p>{
                (passenger.infant_passenger_id) }</p>
            <div style={{padding: "10px 0"}}>
                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", fontSize: 14, padding: 10, paddingTop: 0}}>
                    TRAVELER DETAILS</p>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-check" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Title</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <select 
                            onChange={setTitle} 
                            value={passenger.title}
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}>
                            <option value="">Select here...</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                        </select>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        First Name</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <input 
                            onInput={setFirstName}
                            value={passenger.given_name}
                            type="text" placeholder="type here..."  
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa fa-user" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Last Name</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <input 
                            onInput={setLastName}
                            value={passenger.family_name}
                            type="text" placeholder="type here..."  
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-calendar" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Birth Date (YYYY/MM/DD)</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <input 
                            onBlur={setPassengerAge}
                            onInput={setDOB}
                            value={passenger.born_on}
                            type="text" placeholder="YYYY/MM/DD"  
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                    </div>
                </div>
                {
                    (passenger.born_on && (age > CONSTANTS.infant_age_threshold)) &&
                    <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            <i className="fa-solid fa-envelope" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                            Email</p>
                        <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                            <input 
                                onInput={setEmail} 
                                value={passenger.email}
                                type="email" placeholder="type here..."
                                style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                        </div>
                    </div>
                }
                {
                    (passenger.born_on && (age > CONSTANTS.infant_age_threshold)) &&
                    <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                        <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            <i className="fa-solid fa-mobile" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                            Phone</p>
                        <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                            <input 
                                onInput={setPhone}
                                value={passenger.phone_number}
                                type="text" placeholder="type here..."  
                                style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                        </div>
                    </div>
                }
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-person-half-dress" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Gender</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <select 
                            onChange={setGender} 
                            value={passenger.gender}
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}>
                            <option value="">Select here...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                <p style={{color: "rgba(0,0,0,0.7)", textAlign: "center", fontFamily: "'Prompt', Sans-serif", fontSize: 14, padding: 10, marginTop: 10, borderTop: "1px solid rgba(0,0,0,0.1)"}}>
                    TRAVEL DOCUMENT</p>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-id-card" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Document Type</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <select 
                            onChange={setTravelDocType} 
                            value={passenger.identity_documents[0].type}
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}>
                            <option value="">Select here...</option>
                            <option value="passport">Passport</option>
                        </select>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-passport" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Passport/Document ID</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <input 
                            onInput={setTravelDocID}
                            value={passenger.identity_documents[0].unique_identifier}
                            type="text" placeholder="type here..."  
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-calendar" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Document Expiration</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <input 
                            onInput={setTravelDocExpiration}
                            value={passenger.identity_documents[0].expires_on}
                            type="text" placeholder="YYYY/MM"  
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}/>
                    </div>
                </div>
                <div style={{marginBottom: 5, backgroundColor: "rgba(0,0,0,0.07)", padding: 10, borderRadius: 8}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        <i className="fa-solid fa-id-card" style={{marginRight: 10, color: "rgb(43, 52, 61)"}}></i>
                        Issue Country</p>
                    <div style={{border: "none", borderTop: "1px solid rgba(0,0,0,0.1)", marginTop: 10}}>
                        <select 
                            onChange={setTravelDocCountry} 
                            value={passenger.identity_documents[0].issuing_country_code}
                            style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", width: "calc(100% - 20px)", padding: 10, background: "none", border: "none"}}>
                            <option value="">Select here...</option>
                            <option value="USA">United States</option>
                        </select>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "calc(50% - 5px)", backgroundColor: "crimson", cursor: "pointer", fontSize: 14, fontFamily: "'Prompt', Sans-serif", padding: 10, borderRadius: 6, textAlign: "center", color: "white"}}
                    onClick={props.unSelectPassengerCard}
                >Cancel</div>
                <div style={{width: "calc(50% - 5px)", backgroundColor: "darkslateblue", cursor: "pointer", fontSize: 14, fontFamily: "'Prompt', Sans-serif", padding: 10, borderRadius: 6, textAlign: "center", color: "white"}}
                    onClick={()=>props.savePassengerInfo(passenger, props.index)} 
                >Save</div>
            </div>
        </div>
    )
}

export default PassengerForm;