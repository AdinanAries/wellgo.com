import { useEffect } from "react";
import { obj_has_empty_prop } from "../../../helpers/general";
import CONSTANTS from "../../../Constants/Constants";

const PassengerCard = (props) => {
    const { given_name, family_name, id, infant_passenger_id } = props.passenger;
    let incomplete_passenger = obj_has_empty_prop(props.passenger);

    //For adult passengers
    const infant = props.allInfantsPassengers.find( psngr => psngr.id === infant_passenger_id);
    //For infant passengers
    const adult = props.availableAdultPassengersForInfants.find( psngr => psngr.infant_passenger_id === id);
    if(adult){
        let i = props.availableAdultPassengersForInfants.findIndex( psngr => psngr.id === adult.id );
        props.availableAdultPassengersForInfants.splice(i,1);
        props.availableAdultPassengersForInfants.unshift(adult);
    }

    useEffect(() => {

    }, []);

    return (
        <div style={{position: "relative", border: "1px dashed rgba(0,0,0,0.2)", width: "calc(50% - 5px)", borderRadius: 8, marginTop: 7}}>
            <div onClick={()=>props.selectPassengerCard(props.index)} style={{cursor: "pointer", padding: 10, backgroundColor: "rgba(0,0,0,0.07)"}}>
                <p style={{position: "absolute", top: -5, right: -12, color: "rgba(0,0,0,0.2)", background: "white"}}>
                    <i className="fa-solid fa-pencil" style={{marginRight: 10}}></i></p>
                <p style={{fontSize: 14, color: "darkslateblue", fontFamily: "'Prompt', Sans-serif"}}>
                    <i className="fa-solid fa-user" style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}}></i>
                    {given_name} {family_name}, <span style={{color: "rgba(0,0,0,0.5)", fontSize: 13}}> {props.age} year(s)</span>
                </p>
                <p style={{color: "rga(0,0,0,0.4)", fontFamily: "'Prompt', Sans-serif", fontSize: 12, marginTop: 5}}>
                    Click this top area to open this passenger's form
                </p>
            </div>
            {
                incomplete_passenger ? 
                    <div style={{padding: 10, textAlign: "center", color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "crimson"}} className="fa-solid fa-exclamation-triangle"></i>
                        Uncompleted form. Please edit.
                    </div> :
                    <div style={{paddingTop: 10, padding: 10, textAlign: "center", color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                        Form has been completed
                    </div>
            }{
                (infant_passenger_id && infant) ?
                    <div style={{textAlign: "center", marginBottom: 10, color: "rgba(0,0,0,0.6)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-info-circle"></i>
                        Responsible for {infant?.given_name} {infant?.family_name}
                    </div> : ""
            }{ 
                (props.age <= CONSTANTS.infant_age_threshold) ?  
                    <div style={{backgroundColor: "rgba(0,0,0,0.07)"}}>
                        <p style={{padding: 10, fontFamily: "'Prompt', Sans-serif"}}>
                            <span style={{color: "rgba(0,0,0,0.7)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                                Select adult responsible:
                            </span>
                        </p>
                        <select
                            onChange={props.setResponsibleAdultForInfant} 
                            style={{width: "calc(100%)", background: "none", color: "rgba(255,0,0,0.6)", textAlign: "center", padding: 10, border: "1px solid rgba(0,0,0,0.1)", fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                            { props.availableAdultPassengersForInfants.map( (each, i) => <option key={each.id} 
                                value={`${id}${CONSTANTS.special_str_separator}${each.id}`}>
                                {each.given_name} {each.family_name}</option>) }
                            
                        </select>
                    </div>
                        
                    : "" 
            }
        </div>
    );
}

export default PassengerCard;