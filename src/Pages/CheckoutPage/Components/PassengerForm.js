import { useState } from "react";

const PassengerForm = (props) => {
    
    const [passenger, setPassenger] = useState(props.passenger);

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
        setPassenger({...passenger, born_on: e.target.value});
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

    return (
        <div style={{border: "1px solid rgba(0,0,0,0.07)", padding: 10, width: "calc(100% - 22px)", borderRadius: 6}}>
            <p>{passenger.family_name}</p>
            <div style={{padding: "10px 0"}}>
                <input onInput={setTitle} type="text" value={passenger.title} 
                    placeholder="Title"/>
                <input onInput={setFirstName} type="text" value={passenger.given_name} 
                    placeholder="First Name"/>
                <input onInput={setLastName} type="text" value={passenger.family_name} 
                    placeholder="Last Name"/>
                <input onInput={setEmail} type="email" value={passenger.email} 
                    placeholder="Email"/>
                <input onInput={setGender} type="text" value={passenger.gender} 
                    placeholder="Gender"/>
                <input onInput={setDOB} type="text" value={passenger.born_on} 
                    placeholder="Date of Birth"/>
                <input onInput={setPhone} type="text" value={passenger.phone_number} 
                    placeholder="Phone"/>
                <input onInput={setTravelDocID} type="text" value={passenger.identity_documents[0].unique_identifier} 
                    placeholder="Passport ID"/>
                <input onInput={setTravelDocType} type="text" value={passenger.identity_documents[0].type} 
                    placeholder="is Passport"/>
                <input onInput={setTravelDocExpiration} type="text" value={passenger.identity_documents[0].expires_on} 
                    placeholder="Passport Expiration"/>
                <input onInput={setTravelDocCountry} type="text" value={passenger.identity_documents[0].issuing_country_code} 
                    placeholder="Passport Issue Country"/>
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