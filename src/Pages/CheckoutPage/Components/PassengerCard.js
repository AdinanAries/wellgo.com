import { useEffect } from "react";
import { obj_has_empty_prop } from "../../../helpers/general";

const PassengerCard = (props) => {
    const { given_name, family_name } = props.passenger;
    let incomplete_passenger = obj_has_empty_prop(props.passenger);
    useEffect(() => {

    }, []);
    return (
        <div style={{position: "relative", border: "1px dashed rgba(0,0,0,0.2)", cursor: "pointer", minHeight: 60, width: "calc(50% - 5px)", padding: 10, borderRadius: 8}}>
            <p style={{position: "absolute", top: -5, right: -12, color: "rgba(0,0,0,0.2)", background: "white"}}>
                <i className="fa-solid fa-pencil" style={{marginRight: 10}}></i></p>
            <p style={{fontSize: 14, color: "darkslateblue"}}>
                <i className="fa-solid fa-user" style={{marginRight: 10}}></i>
                {given_name} {family_name}
                <span style={{color: "rgba(0,0,0,0.4)", fontSize: 14}}> - Adult</span>
            </p>
            {
                incomplete_passenger ? 
                    <div style={{paddingTop: 10, marginTop: 10, color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "crimson"}} className="fa-solid fa-exclamation-triangle"></i>
                        please complete this passenger's information
                    </div> :
                    <div style={{paddingTop: 10, marginTop: 10, color: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(0,0,0,0.1)", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                        <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                        Completed passenger information
                    </div>
            }
        </div>
    );
}

export default PassengerCard;