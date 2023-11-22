import SelectedTicketInfo from "./SelectedTicketInfo";
import { useState, useEffect } from "react";
import { getFlightDetail } from "../../../services/flightsServices";

export default function SelectedTicketPane(props){

    const { selectedFlightId } = props;
    const [ flightDetail, setFlightDetail ] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        (async () => {
            let data = await getFlightDetail(selectedFlightId);
            console.log("Full Flight Detail: ", data);
            if(data.data) {
                if(data) setFlightDetail(data);
            }else{
                setIsError(true);
                setFlightDetail(null);
            }
        })()
    }, [])

    const unselectFlightOffer = () => {
        props.unselectFlightOffer();
        setFlightDetail(null);
    }

    return (
        <div id="selected_ticket_pane" className="display_more_info_pane" 
            style={{display: "block", zIndex: 10002/*, height: (isError || !flightDetail) ? "100vh": "calc(100vh - 120px)"*/}}>
            {
                !isError ?
                    flightDetail ? 
                        <SelectedTicketInfo 
                            key={0}
                            flight={flightDetail}
                            unselectFlightOffer={unselectFlightOffer} 
                            begin_checkout={props.begin_checkout} /> : 
                        <div style={{padding: "40px 10px", height: "calc(100% + 90px)", backgroundColor: "white"}}>
                            <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                                <i className="fa-solid fa-spinner" style={{marginRight: 10, color: "green"}}></i>
                                Loadding... Please Wait</p>
                        </div>
                : <div id="selected_ticket_main_details_pane" style={{padding: "40px 10px"}}>
                    <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                        <i className="fa-solid fa-exclamation-triangle" style={{marginRight: 10, color: "green"}}></i>
                        Oops! Something went wrong
                    </p>
                    <div onClick={unselectFlightOffer}
                        style={{padding: "10px", backgroundColor: "crimson", cursor: "pointer", color: "white", textAlign: "center", margin: "30px 0", borderRadius: 50}}>
                        <i className="fa-solid fa-times" style={{marginRight: 10, color: "rgba(255,255,255,0.6)"}}></i>
                        close</div>
                </div>
            }
        </div>
    );
}
