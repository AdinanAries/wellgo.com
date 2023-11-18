export const getMinNumber = (numArr) => {
    return Math.min(...numArr);
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
                stopObj.currency = CURRENCY;
                stopObj.flights.push(FLIGHT)
            }else{
                stopsArr.push({
                    count: STOPS_COUNT,
                    prices: [TOTAL_AMOUNT],
                    lowest: TOTAL_AMOUNT,
                    currency: CURRENCY,
                    flights: [FLIGHT]
                });
            }
        }
    }

    return stopsArr;
}