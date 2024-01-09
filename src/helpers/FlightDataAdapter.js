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
    addServicesToCheckout: (checkout_obj, services=[], key_prop="id") => {
        if (Array.isArray(services)) {
            for(let i=0;i<services.length;i++){
                let object = checkout_obj.services.find(each=>each[key_prop]===services[i][key_prop]);
                if(object){
                    let objIndex = checkout_obj.services.findIndex(each=>each[key_prop]===services[i][key_prop]);
                    checkout_obj.services[objIndex]=services[i];
                }else{
                    checkout_obj.services.push(services[i]);
                }
            }
        } else {
            let object = checkout_obj.services.find(each=>each[key_prop]===services[key_prop]);
            if(object){
                let objIndex = checkout_obj.services.findIndex(each=>each[key_prop]===services[key_prop]);
                checkout_obj.services[objIndex]=services;
            }else{
                checkout_obj.services.push(services);
            }
        }
        
        return checkout_obj;
    },

    /**
     * 
     */
    clearCheckoutIncludedServices: (checkout_obj) => {
        checkout_obj.services=[];
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
                base_currency: data.base_currency,
                extras: []
            }
        }
        return prices
    },

    /**
     * 
     * @param {*} 
     * @returns 
     */
    return_available_services : (data) => {
        let services = [];
        if(ENVIRONMENT.data_provider===CONSTANTS.duffel){
            services=data.available_services;
        }
        return services;
    },

    /**
     * 
     */
    prepareFlightBookingLogObject: (bookingConfirmationObject) => {
        
        const {
            API_PROVIDER,
            BOOKING_ID,
            TYPE,
            AIRLINE_NAME,
            AIRLINE_IATA,
            TRIP_TYPE,
            TRAVELERS,
            ORIGIN_AIRPORT_NAME,
            ORIGIN_AIRPORT_IATA,
            ORIGIN_CITY_NAME,
            DESTINATION_AIRPORT_NAME,
            DESTINATION_AIRPORT_IATA,
            DESTINATION_CITY_NAME,
            DEPARTURE_DATE,
            RETURN_DATE
        } = return_flight_booking_log_object_props(bookingConfirmationObject);

        return {
            apiProvider: API_PROVIDER,
            providerBookingID: BOOKING_ID,
            originPayloads: [ bookingConfirmationObject ],
            type: TYPE,
            airline: AIRLINE_NAME,
            ariline_code: AIRLINE_IATA,
            trip_type: TRIP_TYPE,
            travellers: TRAVELERS,
            takeoff_airport: ORIGIN_AIRPORT_NAME,
            takeoff_airport_code: ORIGIN_AIRPORT_IATA,
            takeoff_city: ORIGIN_CITY_NAME,
            destination_airport: DESTINATION_AIRPORT_NAME,
            destination_airport_code: DESTINATION_AIRPORT_IATA,
            destination_city: DESTINATION_CITY_NAME,
            departure_date: DEPARTURE_DATE,
            return_date: RETURN_DATE,
        }
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
                "given_name": data.passengers[pp]?.given_name || "",
                "gender": "",
                "type": data.passengers[pp]?.type || "",
                "family_name": data.passengers[pp]?.family_name || "",
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

/**
 * 
 */
export const return_flight_booking_log_object_props = (obj) => {
    if(CONSTANTS.duffel===ENVIRONMENT.data_provider){
        let tt="one-way";
        if(obj.slices.length===2){
            tt="round-trip"
        }else if(obj.slices.length>2){
            tt="multi-city"
        }
        return {
            API_PROVIDER: "Duffel",
            BOOKING_ID: obj.id,
            TYPE: "Flight",
            AIRLINE_NAME: obj.owner.name,
            AIRLINE_IATA: obj.owner.iata_code,
            TRIP_TYPE: tt,
            TRAVELERS: obj.passengers,
            ORIGIN_AIRPORT_NAME: obj.slices[0].origin.name,
            ORIGIN_AIRPORT_IATA: obj.slices[0].origin.iata_code,
            ORIGIN_CITY_NAME: obj.slices[0].origin.city_name,
            DESTINATION_AIRPORT_NAME: obj.slices[(obj.slices.length-1)].destination.name,
            DESTINATION_AIRPORT_IATA: obj.slices[(obj.slices.length-1)].destination.iata_code,
            DESTINATION_CITY_NAME: obj.slices[(obj.slices.length-1)].destination.city_name,
            DEPARTURE_DATE: obj.slices[0].segments[0].departing_at,
            TOTAL_AMOUNT: obj.total_amount,
            TOTAL_CURRENCY: obj.total_currency,
            RETURN_DATE: obj.slices[(obj.slices.length-1)].segments[(obj.slices[[(obj.slices.length-1)]].segments.length-1)].arriving_at,
        }
    }else{
        return {}
    }
}

/**
 * 
 * @returns 
 */
export const return_duffel_confirmed_order_example = () => {
    return {
        "type": "instant",
        "total_currency": "USD",
        "total_amount": "404.59",
        "tax_currency": "USD",
        "tax_amount": "61.72",
        "synced_at": "2023-11-23T14:37:38Z",
        "slices": [
            {
                "segments": [
                    {
                        "passengers": [
                            {
                                "seat": null,
                                "passenger_id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                                "cabin_class_marketing_name": "Economy",
                                "cabin_class": "economy",
                                "baggages": [
                                    {
                                        "type": "checked",
                                        "quantity": 1
                                    },
                                    {
                                        "type": "carry_on",
                                        "quantity": 1
                                    }
                                ]
                            }
                        ],
                        "origin_terminal": "2",
                        "origin": {
                            "type": "airport",
                            "time_zone": "Africa/Accra",
                            "name": "Kotoka International Airport",
                            "longitude": -0.167454,
                            "latitude": 5.605642,
                            "id": "arp_acc_gh",
                            "icao_code": "DGAA",
                            "iata_country_code": "GH",
                            "iata_code": "ACC",
                            "iata_city_code": "ACC",
                            "city_name": "Accra",
                            "city": null
                        },
                        "operating_carrier_flight_number": "10",
                        "operating_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "marketing_carrier_flight_number": "10",
                        "marketing_carrier": {
                            "name": "American Airlines",
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
                            "id": "arl_00009VME7DAGiJjwomhv32",
                            "iata_code": "AA",
                            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
                        },
                        "id": "seg_0000Ac6K7P3dohp5WA7RQW",
                        "duration": "PT11H32M",
                        "distance": "8221.392679809798",
                        "destination_terminal": "1",
                        "destination": {
                            "type": "airport",
                            "time_zone": "America/New_York",
                            "name": "John F. Kennedy International Airport",
                            "longitude": -73.778519,
                            "latitude": 40.640556,
                            "id": "arp_jfk_us",
                            "icao_code": "KJFK",
                            "iata_country_code": "US",
                            "iata_code": "JFK",
                            "iata_city_code": "NYC",
                            "city_name": "New York",
                            "city": {
                                "type": "city",
                                "time_zone": null,
                                "name": "New York",
                                "longitude": null,
                                "latitude": null,
                                "id": "cit_nyc_us",
                                "icao_code": null,
                                "iata_country_code": "US",
                                "iata_code": "NYC",
                                "iata_city_code": "NYC",
                                "city_name": null
                            }
                        },
                        "departure_terminal": "2",
                        "departure_datetime": "2023-11-29T21:40:00",
                        "departing_at": "2023-11-29T21:40:00",
                        "arriving_at": "2023-11-30T04:12:00",
                        "arrival_terminal": "1",
                        "arrival_datetime": "2023-11-30T04:12:00",
                        "aircraft": {
                            "name": "Airbus A319",
                            "id": "arc_00009VMF8AgpV5sdO0xXAn",
                            "iata_code": "319"
                        }
                    }
                ],
                "origin_type": "airport",
                "origin": {
                    "type": "airport",
                    "time_zone": "Africa/Accra",
                    "name": "Kotoka International Airport",
                    "longitude": -0.167454,
                    "latitude": 5.605642,
                    "id": "arp_acc_gh",
                    "icao_code": "DGAA",
                    "iata_country_code": "GH",
                    "iata_code": "ACC",
                    "iata_city_code": "ACC",
                    "city_name": "Accra",
                    "city": null
                },
                "id": "sli_0000Ac6KEffjaAdhv9NCr2",
                "fare_brand_name": "Basic",
                "duration": "PT11H32M",
                "destination_type": "airport",
                "destination": {
                    "type": "airport",
                    "time_zone": "America/New_York",
                    "name": "John F. Kennedy International Airport",
                    "longitude": -73.778519,
                    "latitude": 40.640556,
                    "id": "arp_jfk_us",
                    "icao_code": "KJFK",
                    "iata_country_code": "US",
                    "iata_code": "JFK",
                    "iata_city_code": "NYC",
                    "city_name": "New York",
                    "city": {
                        "type": "city",
                        "time_zone": null,
                        "name": "New York",
                        "longitude": null,
                        "latitude": null,
                        "id": "cit_nyc_us",
                        "icao_code": null,
                        "iata_country_code": "US",
                        "iata_code": "NYC",
                        "iata_city_code": "NYC",
                        "city_name": null
                    }
                },
                "conditions": {
                    "change_before_departure": {
                        "penalty_currency": null,
                        "penalty_amount": null,
                        "allowed": false
                    }
                },
                "changeable": true
            }
        ],
        "services": [],
        "payment_status": {
            "price_guarantee_expires_at": null,
            "payment_required_by": null,
            "paid_at": "2023-11-23T14:37:38Z",
            "awaiting_payment": false
        },
        "passengers": [
            {
                "type": "adult",
                "title": "mr",
                "phone_number": "+17327999546",
                "loyalty_programme_accounts": [],
                "infant_passenger_id": null,
                "id": "pas_0000Ac6K7OtiPbsp1NTVxK",
                "given_name": "Mohammed",
                "gender": "m",
                "family_name": "Adinan",
                "email": "m.adinan@yahoo.com",
                "born_on": "1992-03-23"
            }
        ],
        "owner": {
            "name": "American Airlines",
            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/AA.svg",
            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/AA.svg",
            "id": "arl_00009VME7DAGiJjwomhv32",
            "iata_code": "AA",
            "conditions_of_carriage_url": "https://www.aa.com/i18n/customer-service/support/conditions-of-carriage.jsp"
        },
        "metadata": {},
        "live_mode": false,
        "id": "ord_0000Ac6KEffNbUM7u3CvIm",
        "documents": [
            {
                "unique_identifier": "1",
                "type": "electronic_ticket",
                "passenger_ids": [
                    "pas_0000Ac6K7OtiPbsp1NTVxK"
                ]
            }
        ],
        "created_at": "2023-11-23T14:37:38.485807Z",
        "content": "managed",
        "conditions": {
            "refund_before_departure": {
                "penalty_currency": "GBP",
                "penalty_amount": "50.00",
                "allowed": true
            },
            "change_before_departure": {
                "penalty_currency": null,
                "penalty_amount": null,
                "allowed": false
            }
        },
        "changes": [],
        "cancelled_at": null,
        "cancellation": null,
        "booking_reference": "VXYP4X",
        "base_currency": "USD",
        "base_amount": "342.87",
        "available_actions": [
            "cancel",
            "change",
            "update"
        ],
        "airline_initiated_changes": []
    }
}

