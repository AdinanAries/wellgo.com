import CONSTANTS from "../../../Constants/Constants";
import ENVIRONMENT from "../../../Constants/Environment";
import deltaIcon from "../../../deltaIcon.png";
import { show_start_checkout_page } from "../../CheckoutPage/CheckoutPage";
import SelectedTicketInfo from "./SelectedTicketInfo";
import { useState, useEffect } from "react";

export default function SelectedTicketPane(props){

    const { selectedFlightId } = props;
    const [ flightDetail, setFlightDetail ] = useState(null);
    const [isError, setIsError] = useState(false);

    let api_url = (ENVIRONMENT.runtime.env===CONSTANTS.prod) ?
        ENVIRONMENT.wellgo_api_svr : ENVIRONMENT.wellgo_dev_api_svr;

    const getFlightDetail = async (path="/api/flights/offers/"+selectedFlightId) => {
        try{
            return await fetch(api_url+path)
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err);
                return null;
            });
        }catch(e){
            console.log(e);
            return null;
        }
    }

    useEffect(()=>{
        (async () => {
            let data = await getFlightDetail();
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
            style={{display: "block", height: (isError || !flightDetail) ? "100vh": "calc(100vh - 120px)"}}>
            {
                !isError ?
                    flightDetail ? 
                        <SelectedTicketInfo 
                            flight={flightDetail}
                            unselectFlightOffer={unselectFlightOffer} /> : 
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
