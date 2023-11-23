import CONSTANTS from '../Constants/Constants';
import ENVIRONMENT from '../Constants/Environment';

/**
 * @classdesc Object to Adapt the Flight offer data into a common format regardless of Flight Provider
 */
export const FLIGHT_DATA_ADAPTER = {
    /**
     * @desc Raw data coming in from the api
     */
    rawData: null,

    /**
     * @desc Function to construct and preprocess
     */
    construct: () => {
        // construction here
    },

    /**
     * @desc Function to deconstruct and clean up when necessary
     */
    cleanup: () => {
        // clean up here
    },

    /**
     * @desc Adapts the flights data to output a common structure regardless of API Provider
     * @param {objec} data 
     * @returns Flight Data in a common format
     */
    adapt: (data) => {
        let common;
        if(ENVIRONMENT.data_provider===CONSTANTS.duffel){
            common = data;
        }
        return common;
    },
    /**
     * @desc Adapts and prepares Checkout Data for API provider creating payload object with 
     *       only required object properties
     * @param {Object} data
     * @returns {Object} checkout data
     */
    prepareCheckout: (data) => {
        let checkoutObj;
        if(ENVIRONMENT.data_provider===CONSTANTS.duffel){
            checkoutObj=return_duffel_object(data);
        }
        return checkoutObj;
    },

    /**
     * 
     */
    addPaymentIntentToCheckout: (checkout_obj, p_intent_id) => {
        checkout_obj.metadata.payment_intent_id = p_intent_id;
        return checkout_obj;
    },

    /**
     * 
     * @param {*} data 
     * @returns 
     */
    addServicesToCheckout: (checkout_obj, service) => {
        checkout_obj.services.push(service);
        return checkout_obj;
    },

    /**
     * 
     * @param {*} data 
     * @returns 
     */
    setCheckoutPaymentToInstant: (checkout_obj) => {
        checkout_obj.type="instant";
        return checkout_obj;
    },

    /**
     * 
     */
    adaptPriceProps: (data) => {
        let prices;
        if(ENVIRONMENT.data_provider===CONSTANTS.duffel){
            prices = {
                total_amount: data.total_amount,
                total_currency: data.total_currency,
                tax_amount: data.tax_amount,
                tax_currency: data.tax_currency,
                base_amount: data.base_amount,
                base_currency: data.base_currency
            }
        }
        return prices
    }

}

/**
 * 
 * @param {Object} data 
 * @returns Duffel Checkout Object
 */
const return_duffel_object = (data) => {
    
    let passengers=[];
    for(let pp=0;pp<data.passengers.length;pp++){
        passengers.push({
                "title": "",
                "phone_number": "",
                //"infant_passenger_id": "pas_00009hj8USM8Ncg32aMILY",
                "identity_documents": [
                    {
                        "unique_identifier": "",
                        "type": "",
                        "issuing_country_code": "",
                        "expires_on": ""
                    }
                ],
                "id": data.passengers[pp].id,
                "given_name": data.passengers[pp].given_name,
                "gender": "",
                "family_name": data.passengers[pp].family_name,
                "email": "",
                "born_on": ""
            });
    }

    return {
        "type": "instant",
        "services": [],
        "selected_offers": [
          data.id,
        ],
        "payments": [
          {
            "type": CONSTANTS.duffel_checkout.payment.types.balance,
            "currency": data.total_currency,
            "amount": data.total_amount
          }
        ],
        "passengers": passengers,
        "metadata": {}
    }
}

