import { getTotalMinutesFromDurationString } from "./general";

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

export const getMinAndMaxPrice = (flightsArr) => {
    if(flightsArr.length>0){
        let min_price=Math.ceil(parseFloat(flightsArr[0].total_amount));
        let max_price=Math.ceil(parseFloat(flightsArr[0].total_amount));
        for(let i=0; i<flightsArr.length; i++){
            const FLIGHT = flightsArr[i];
            const FLIGHT_PRICE = Math.ceil(parseFloat(FLIGHT.total_amount));
            if(FLIGHT_PRICE<min_price){
                min_price=FLIGHT_PRICE
            }
            if(FLIGHT_PRICE>max_price){
                max_price=FLIGHT_PRICE;
            }
        }
        return {
            min_price, max_price
        }
    }
    return {
        min_price: 0,
        max_price: 0
    }
}

export const filterByMaxPrice = (flightsArr, max_price) => {
    const tempArr=[];
    if(flightsArr.length>0){
        for(let i=0; i<flightsArr.length; i++){
            const FLIGHT = flightsArr[i];
            const FLIGHT_PRICE = parseFloat(FLIGHT.total_amount);
            if(FLIGHT_PRICE<=max_price){
                tempArr.push(FLIGHT);
            }
        }
        return tempArr;
    }
    return [];
}

export const getMinAndMaxDuration = (flightsArr) => {
    if(flightsArr.length>0){
        let min_duration=getTotalMinutesFromDurationString(
            flightsArr[0].slices[0]?.duration
        );
        let max_duration=getTotalMinutesFromDurationString(
            flightsArr[0].slices[0]?.duration
        );
        for(let i=0; i<flightsArr.length; i++){
            const FLIGHT = flightsArr[i];
            const FLIGHT_DURATION = getTotalMinutesFromDurationString(
                FLIGHT.slices[0]?.duration
            );
            if(FLIGHT_DURATION<min_duration){
                min_duration=FLIGHT_DURATION
            }
            if(FLIGHT_DURATION>max_duration){
                max_duration=FLIGHT_DURATION;
            }
        }
        return {
            min_duration, max_duration
        }
    }
    return {
        min_duration: 0,
        max_duration: 0
    }
}

export const filterByMaxDuration = (flightsArr, max_duration) => {
    const tempArr=[];
    if(flightsArr.length>0){
        for(let i=0; i<flightsArr.length; i++){
            const FLIGHT = flightsArr[i];
            const FLIGHT_DURATION = getTotalMinutesFromDurationString(
                FLIGHT.slices[0]?.duration
            );
            if(FLIGHT_DURATION<=Math.ceil(max_duration)){
                tempArr.push(FLIGHT);
            }
        }
        return tempArr;
    }
    return [];
}

export const duffelTimesAndPrices = (flightsArr) => {
    let TimesArr = [];

    if(flightsArr && Array.isArray(flightsArr) && flightsArr?.length > 0){
        for(let i=0; i<flightsArr.length; i++){
            // Values
            const FLIGHT = flightsArr[i];
            const CURRENCY = FLIGHT.total_currency;
            const TOTAL_AMOUNT = parseFloat(FLIGHT.total_amount);
            const _TIME = FLIGHT.slices[0].segments[0].departing_at?.split("T")[1].replaceAll(":","_"); //"2024-01-08T12:36:00"
            const AIRLINE_NAME = FLIGHT.owner.name;
            let airlineObj = TimesArr.find(each=>each.takeOffTime===_TIME);
            if(airlineObj){
                airlineObj.prices.push(TOTAL_AMOUNT);
                airlineObj.lowest = getMinNumber(airlineObj.prices);
                airlineObj.highest = getMaxNumber(airlineObj.prices);
                airlineObj.currency = CURRENCY;
                airlineObj.flights.push(FLIGHT);
            }else{
                TimesArr.push({
                    takeOffTime: _TIME,
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

    return TimesArr;
}

export const getMaxBags = (flightsArr, departureSegmentsOnly=true, firstStopOnly=true) => {
    //slices[0].segments[0].passengers[0].baggages
    /*  
        {quantity: 2, type: 'checked'}
        {quantity: 1, type: 'carry_on'}*/
    let maxCarryOnBags=0;
    let maxCheckedBags=0;
    if(flightsArr && flightsArr?.length){
        for(let i=0; i<flightsArr.length; i++){
            let flightCarryOnBags=0;
            let flightCheckedBags=0;
            let slices=flightsArr[i].slices;
            for(let j=0; j<slices.length; j++){
                if(departureSegmentsOnly && (j>0))
                    break;
                let segments=slices[j].segments;
                for(let k=0; k<segments.length; k++){
                    if(firstStopOnly && (k>0))
                        break;
                    let passengers=segments[k].passengers;
                    for(let l=0; l<passengers.length; l++){
                        let baggages=passengers[l].baggages;
                        for(let m=0; m<baggages.length; m++){
                            if(baggages[m].type==="carry_on"){
                                flightCarryOnBags+=baggages[m].quantity;
                            }
                            if(baggages[m].type==="checked"){
                                flightCheckedBags+=baggages[m].quantity;
                            }
                        }
                    }
                }
            }
            if(flightCarryOnBags>maxCarryOnBags){
                maxCarryOnBags=flightCarryOnBags
            }
            if(flightCheckedBags>maxCheckedBags){
                maxCheckedBags=flightCheckedBags;
            }
        }
        return {
            maxCarryOnBags, 
            maxCheckedBags
        }
    }
    return {
        maxCarryOnBags: 0, 
        maxCheckedBags: 0,
    }
}

export const getTotalBags = (flight, departureSegmentsOnly=true, firstStopOnly=true) => {
        let flightCarryOnBags=0;
        let flightCheckedBags=0;
        let slices=flight.slices;
        for(let j=0; j<slices.length; j++){
            if(departureSegmentsOnly && (j>0))
                break;
            let segments=slices[j].segments;
            for(let k=0; k<segments.length; k++){
                    if(firstStopOnly && (k>0))
                        break;
                let passengers=segments[k].passengers;
                for(let l=0; l<passengers.length; l++){
                    let baggages=passengers[l].baggages;
                    for(let m=0; m<baggages.length; m++){
                        if(baggages[m].type==="carry_on"){
                            flightCarryOnBags+=baggages[m].quantity;
                        }
                        if(baggages[m].type==="checked"){
                            flightCheckedBags+=baggages[m].quantity;
                        }
                    }
                }
            }
        }
        
        return {
            totalCarryOnBags: flightCarryOnBags,
            totalCheckedBags: flightCheckedBags,
        }
}

export const filterByBags = (flightsArr, maxChecked, maxCarryOn) => {
    let filtered = [];

    if(flightsArr && flightsArr?.length){
        for(let i=0; i<flightsArr.length; i++){
            let Bags = getTotalBags(flightsArr[i]);
            if((Bags?.totalCheckedBags >= maxChecked) 
                && (Bags?.totalCarryOnBags >= maxCarryOn)){
                    filtered.push(flightsArr[i]);
            }
        }
    }

    return filtered;
}

export const getDataSummeries = (flightsArr) => {
    if(flightsArr.length>0){
        let min_price=parseFloat(flightsArr[0].total_amount);
        let max_price=parseFloat(flightsArr[0].total_amount);
        let total_of_all_prices = 0;
        let priceOccurrence = 0;
        let popularPrice = 0;
        const pricesCount={};
        for(let i=0; i < flightsArr.length; i++){
            const FLIGHT = flightsArr[i];

            // Prices
            const FLIGHT_PRICE = parseFloat(FLIGHT.total_amount);
            const total_amount = FLIGHT.total_amount;
            total_of_all_prices += FLIGHT_PRICE;
            if(!pricesCount[total_amount]) 
                pricesCount[total_amount] = 0;
            pricesCount[total_amount] += 1;
            if(FLIGHT_PRICE < min_price){
                min_price = FLIGHT_PRICE
            }
            if(FLIGHT_PRICE > max_price){
                max_price = FLIGHT_PRICE;
            }

            // Duration
            for (let [key, value] of Object.entries(pricesCount)){
                if(value > priceOccurrence){
                    priceOccurrence = value;
                    popularPrice = parseFloat(key);
                }
            }
        }
                
        return {
            prices: {
                min: min_price, 
                max: max_price,
                avg: (((total_of_all_prices)/flightsArr.length)),
                prices_count: pricesCount,
                popular: popularPrice,
                popular_count: priceOccurrence,
                items_total: flightsArr.length,
            },
            duration: {
                min: 0,
                max: 0,
                avg: 0,
                prices_count: 0,
                popular: 0,
                popular_count: 0,
                items_total: 0,
            }
        }
    }
    return {
        min_price: 0,
        max_price: 0
    }
}