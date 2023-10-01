import CONSTANTS from "../../../Constants/Constants";
import ENVIRONMENT from "../../../Constants/Environment";

//Offer item cards
import DuffelOfferItem from "./FlightOfferCards.js/DuffelOfferItem";

const FlightOfferItem = (props) => {
    if(CONSTANTS.duffel===ENVIRONMENT.data_provider){
        return <DuffelOfferItem flight={props.flight} />
    } else {
        return <div>
            <p>Unknown Data Provider</p>
        </div>
    }
}

export default FlightOfferItem;