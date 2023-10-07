import { useEffect } from "react";
import { obj_has_empty_prop } from "../../../helpers/general";
import CONSTANTS from "../../../Constants/Constants";

const PassengerCard = (props) => {
    const { given_name, family_name } = props.passenger;
    let incomplete_passenger = obj_has_empty_prop(props.passenger);

    useEffect(() => {

    }, []);

    return (
        <div style={{position: "relative", border: "1px dashed rgba(0,0,0,0.2)", width: "calc(50% - 5px)", borderRadius: 8, marginTop: 7}}>
            <div onClick={()=>props.selectPassengerCard(props.index)} style={{cursor: "pointer", padding: 10, backgroundColor: "rgba(0,0,0,0.07)"}}>
                <p style={{position: "absolute", top: -5, right: -12, color: "rgba(0,0,0,0.2)", background: "white"}}>
                    <i className="fa-solid fa-pencil" style={{marginRight: 10}}></i></p>
                <p style={{fontSize: 14, color: "darkslateblue", fontFamily: "'Prompt', Sans-serif"}}>
                    <i className="fa-solid fa-user" style={{marginRight: 10}}></i>
                    {given_name} {family_name} - <span style={{color: "rgba(0,0,0,0.4)", fontSize: 13}}> Age: {props.age}</span>
                </p>
            </div>
            {
                incomplete_passenger ? 
                    <div style={{padding: 10, textAlign: "center", color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "crimson"}} className="fa-solid fa-exclamation-triangle"></i>
                        Please complete this passenger's information
                    </div> :
                    <div style={{paddingTop: 10, padding: 10, textAlign: "center", color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                        This passenger is all set
                    </div>
            }{ 
                (props.age <= CONSTANTS.infant_age_threshold) ?  
                    <>
                        <p style={{paddingBottom: 10, fontFamily: "'Prompt', Sans-serif", textAlign: "center"}}>
                            <span style={{color: "rgba(0,0,0,0.7)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                                <i className="fa-solid fa-info" style={{marginRight: 10, color: "green"}}></i>
                                Please select responsible Adult for this infant
                            </span>
                        </p>
                        <select style={{width: "calc(100%)", color: "rgba(255,0,0,0.6)", textAlign: "center", backgroundColor: "rgba(0,0,0,0.07)", padding: 10, border: "1px solid rgba(0,0,0,0.1)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            <option>Mohammed Adinan</option>
                        </select>
                    </>
                        
                    : "" 
            }
        </div>
    );
}

export default PassengerCard;