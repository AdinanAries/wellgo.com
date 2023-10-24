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
    }
}