export const getMinNumber = (numArr) => {
    return Math.min(...numArr);
}

export const getMaxNumber = (numArr) => {
    return Math.max(...numArr);
}

export const duffelStopsAndPrices = (flightsArr) => {
    let stopsArr = [];

    if(flightsArr && Array.isArray(flightsArr) && flightsArr?.length > 0){
        for(let i=0; i<flightsArr.length; i++){
            // Values
            const FLIGHT = flightsArr[i];
            const CURRENCY = FLIGHT.total_currency;
            const TOTAL_AMOUNT = parseFloat(FLIGHT.total_amount);
            const STOPS_COUNT = (FLIGHT.slices[0].segments.length-1);
            let stopObj = stopsArr.find(each=>each.count===STOPS_COUNT);
            if(stopObj){
                stopObj.prices.push(TOTAL_AMOUNT);
                stopObj.lowest = getMinNumber(stopObj.prices);
                stopObj.highest = getMaxNumber(stopObj.prices);
                stopObj.currency = CURRENCY;
                stopObj.flights.push(FLIGHT);
            }else{
                stopsArr.push({
                    count: STOPS_COUNT,
                    prices: [TOTAL_AMOUNT],
                    lowest: TOTAL_AMOUNT,
                    highest: TOTAL_AMOUNT,
                    currency: CURRENCY,
                    flights: [FLIGHT]
                });
            }
        }
    }

    return stopsArr;
}

export const duffelAirlinesAndPrices = (flightsArr) => {
    let airlinesArr = [];

    if(flightsArr && Array.isArray(flightsArr) && flightsArr?.length > 0){
        for(let i=0; i<flightsArr.length; i++){
            // Values
            const FLIGHT = flightsArr[i];
            const CURRENCY = FLIGHT.total_currency;
            const TOTAL_AMOUNT = parseFloat(FLIGHT.total_amount);
            const AIRLINE_CODE = FLIGHT.owner.iata_code;
            const AIRLINE_NAME = FLIGHT.owner.name;
            let airlineObj = airlinesArr.find(each=>each.airlineCode===AIRLINE_CODE);
            if(airlineObj){
                airlineObj.prices.push(TOTAL_AMOUNT);
                airlineObj.lowest = getMinNumber(airlineObj.prices);
                airlineObj.highest = getMaxNumber(airlineObj.prices);
                airlineObj.currency = CURRENCY;
                airlineObj.flights.push(FLIGHT);
            }else{
                airlinesArr.push({
                    airlineCode: AIRLINE_CODE,
                    airlineName: AIRLINE_NAME,
                    prices: [TOTAL_AMOUNT],
                    lowest: TOTAL_AMOUNT,
                    highest: TOTAL_AMOUNT,
                    currency: CURRENCY,
                    flights: [FLIGHT]
                });
            }
        }
    }

    return airlinesArr;
}