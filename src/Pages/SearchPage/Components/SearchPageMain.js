import React, { useState, useEffect } from "react";
import SearchResultSearchForm from "./SearchResultSearchForm";
import ResultsListContainer from "./ResultsListContainer";
import CONSTANTS from "../../../Constants/Constants";
import SelectedTicketPane from "./SelectedTicketPane";
import { fetchFlightOffers } from "../../../services/flightsServices";
import Weather from "../../../helpers/Weather";
import Tourism from "../../../helpers/Tourism";
import { show_prompt_on_Bot_AD_tips_popup } from "../../../components/HPSupport";
import { getDataSummeries } from "../../../helpers/FlightsFilterHelpers";

const SearchPageMain = (props) => {

    let [ flights, setFlights ] = useState([]);
    let [ loading, setLoading ] = useState(true);
    let [ selectedFlightId, setSelectedFlightId] = useState("");

    // Search object that was sent to the server
    const SEARCH_OBJ=JSON.parse(localStorage.getItem(CONSTANTS.local_storage.flight_search_object));

    const selectFlightOffer = (id) => {
        setSelectedFlightId(id);
    }

    const unselectFlightOffer = () => {
        setSelectedFlightId("");
    }

    useEffect(() => {
        setFlightsResults();
    }, [])

    const setFlightsResults = async () => {
        let res = await fetchFlightOffers();
            console.log('Flight Offers:', res);
            if(res?.data)
                (res?.data?.length>0) ? setFlights(res?.data) : setFlights([]);
            else
                setFlights([]);
            setLoading(false);

        if(res?.data)
            if(res?.data?.length>0)
                runBotPrompt(res?.data);
            else
                runBotPrompt();
        else
            runBotPrompt();
    }

    const submitFromSearchPage = async () => {
        window.location.reload();
    }

    if(flights.length>0){
        SEARCH_OBJ.origin_city = flights[0].slices[0].segments[0].origin.city_name;
        SEARCH_OBJ.destination_city = flights[0].slices[0].segments[0].destination.city_name;
    }
    useEffect(()=>{
        global.autoSelectAirportForInputField(SEARCH_OBJ.itinerary.departure.airport, "sp_search_forms_from_where_input_fld");
        global.autoSelectAirportForInputField(SEARCH_OBJ.itinerary.arrival.airport, "sp_search_forms_to_where_input_fld");
    }, []);

    useEffect(()=>{
        // Getting Weather
        
    }, []);

    const runBotPrompt = (flights=null) => {
        let lon = parseFloat(SEARCH_OBJ?.itinerary?.arrival?.longitude);
        let lat = parseFloat(SEARCH_OBJ?.itinerary?.arrival?.latitude);
        let iso_date = (SEARCH_OBJ?.itinerary?.arrival?.date) ? SEARCH_OBJ?.itinerary?.arrival?.date : SEARCH_OBJ?.itinerary?.departure?.date;
        let flightsOffers;
        if(!flights)
            flightsOffers={isError: true}
        else
            flightsOffers=flights;
        Weather.getWeather(lon, lat, iso_date, iso_date, weatherCallback, flightsOffers);
    }

    const weatherCallback = (weatherData, flightsOffers={isError: true}) => {
        console.log('Weather', weatherData);
        const PROMPTS=["*", "summaries", "weather", "places"];
        const TO_SHOW=PROMPTS[Math.floor(Math.random() * PROMPTS.length)]
        // Duration of the Prompt
        let duration=150000;

        // Showing places bot prompt
        if(TO_SHOW==="places"){
            let lon = parseFloat(SEARCH_OBJ?.itinerary?.arrival?.longitude);
            let lat = parseFloat(SEARCH_OBJ?.itinerary?.arrival?.latitude);
            Tourism.getTouristAttraction(lon, lat, (touristAttraction) => {
                console.log("Search Page Attraction", touristAttraction);
                if(touristAttraction?.error || !touristAttraction?.name){
                    // Fall back on Summaries
                    if(flightsOffers?.isError){
                        // Do nothing for now
                    }else{
                        getAndShowBotFlightSummaryPrompt(flightsOffers, duration)
                    }
                    return;
                }
                let place=touristAttraction;
                let prompt_msg = Tourism.getBotPromptMessage(place);
                show_prompt_on_Bot_AD_tips_popup(
                    prompt_msg,
                    CONSTANTS.bot.prompt_types.prompt, 
                    duration,
                    {
                        places: place
                    }
                );
            });
            
            return;
        }

        if(weatherData?.error || TO_SHOW==="summaries"){
            // Error handling
            if(flightsOffers?.isError){
                // Do nothing for now
            }else{
                getAndShowBotFlightSummaryPrompt(flightsOffers, duration)
            }
            return;
        }
        let current_hour = new Date().toString().split(" ")[4].split(":")[0];
        let current_hour_weather = {};
        let i = parseInt(current_hour);
        current_hour_weather.time = weatherData.hourly.time[i]; //.toISOString();
        current_hour_weather.temperature2m=weatherData.hourly.temperature2m[i];
        current_hour_weather.relativeHumidity2m=weatherData.hourly.relativeHumidity2m[i];
        current_hour_weather.dewPoint2m=weatherData.hourly.dewPoint2m[i];
        current_hour_weather.apparentTemperature=weatherData.hourly.apparentTemperature[i];
        current_hour_weather.precipitationProbability=weatherData.hourly.precipitationProbability[i];
        current_hour_weather.precipitation=weatherData.hourly.precipitation[i];
        current_hour_weather.rain=weatherData.hourly.rain[i];
        current_hour_weather.showers=weatherData.hourly.showers[i];
        current_hour_weather.snowfall=weatherData.hourly.snowfall[i];
        current_hour_weather.snowDepth=weatherData.hourly.snowDepth[i];
        current_hour_weather.weatherCode=weatherData.hourly.weatherCode[i];
        current_hour_weather.pressureMsl=weatherData.hourly.pressureMsl[i];
        current_hour_weather.surfacePressure=weatherData.hourly.surfacePressure[i];
        current_hour_weather.cloudCover=weatherData.hourly.cloudCover[i];
        current_hour_weather.cloudCoverLow=weatherData.hourly.cloudCoverLow[i];
        current_hour_weather.cloudCoverMid=weatherData.hourly.cloudCoverMid[i];
        current_hour_weather.cloudCoverHigh=weatherData.hourly.cloudCoverHigh[i];
        current_hour_weather.visibility=weatherData.hourly.visibility[i];
        current_hour_weather.evapotranspiration=weatherData.hourly.evapotranspiration[i];
        current_hour_weather.et0FaoEvapotranspiration=weatherData.hourly.et0FaoEvapotranspiration[i];
        current_hour_weather.vapourPressureDeficit=weatherData.hourly.vapourPressureDeficit[i];
        current_hour_weather.windSpeed10m=weatherData.hourly.windSpeed10m[i];
        current_hour_weather.windSpeed80m=weatherData.hourly.windSpeed80m[i];
        current_hour_weather.windSpeed120m=weatherData.hourly.windSpeed120m[i];
        current_hour_weather.windSpeed180m=weatherData.hourly.windSpeed180m[i];
        current_hour_weather.windDirection10m=weatherData.hourly.windDirection10m[i];
        current_hour_weather.windDirection80m=weatherData.hourly.windDirection80m[i];
        current_hour_weather.windDirection120m=weatherData.hourly.windDirection120m[i];
        current_hour_weather.windDirection180m=weatherData.hourly.windDirection180m[i];
        current_hour_weather.windGusts10m=weatherData.hourly.windGusts10m[i];
        current_hour_weather.temperature80m=weatherData.hourly.temperature80m[i];
        current_hour_weather.temperature120m=weatherData.hourly.temperature120m[i];
        current_hour_weather.temperature180m=weatherData.hourly.temperature180m[i];
        current_hour_weather.soilTemperature0cm=weatherData.hourly.soilTemperature0cm[i];
        current_hour_weather.soilTemperature6cm=weatherData.hourly.soilTemperature6cm[i];
        current_hour_weather.soilTemperature18cm=weatherData.hourly.soilTemperature18cm[i];
        current_hour_weather.soilTemperature54cm=weatherData.hourly.soilTemperature54cm[i];
        current_hour_weather.soilMoisture0To1cm=weatherData.hourly.soilMoisture0To1cm[i];
        current_hour_weather.soilMoisture1To3cm=weatherData.hourly.soilMoisture1To3cm[i];
        current_hour_weather.soilMoisture3To9cm=weatherData.hourly.soilMoisture3To9cm[i];
        current_hour_weather.soilMoisture9To27cm=weatherData.hourly.soilMoisture9To27cm[i];
        current_hour_weather.soilMoisture27To81cm=weatherData.hourly.soilMoisture27To81cm[i];
        current_hour_weather.icon=Weather.getCurrentWeatherIcon(current_hour_weather, current_hour);
        current_hour_weather.city=weatherData?.city;
        current_hour_weather.description=Weather.getWeatherCodeDescription(current_hour_weather?.weatherCode);

        if(flightsOffers?.isError || TO_SHOW==="weather"){ // Flight Offers Were Not Available
            let prompt_msg=Weather.getWeatherPromptMsgDestinationCity(current_hour_weather);
            show_prompt_on_Bot_AD_tips_popup(
                prompt_msg,
                CONSTANTS.bot.prompt_types.prompt, 
                duration,
                {
                    weather: true, 
                    data: current_hour_weather
                }
            );
        }else{ // Both Weather and Summaries
            let summeries = getDataSummeries(flightsOffers);
            let prompt_msg = Weather.getWeatherPromptMsgDestinationCityAndSummeries(current_hour_weather);
            show_prompt_on_Bot_AD_tips_popup(
                prompt_msg,
                CONSTANTS.bot.prompt_types.prompt, 
                duration,
                {
                    weather: true, 
                    data: current_hour_weather,
                    flight_data_summeries: summeries
                }
            );
        }
        
    }


    const getAndShowBotFlightSummaryPrompt = (flightsOffers, duration) => {
        let summeries = getDataSummeries(flightsOffers);
        let prompt_msg = Weather.getWeatherPromptMsgSummeries(flightsOffers);
        show_prompt_on_Bot_AD_tips_popup(
            prompt_msg,
            CONSTANTS.bot.prompt_types.prompt, 
            duration,
            {
                flight_data_summeries: summeries
            }
        );
    }

    return (
        <main style={{background: "white"}}>
            <div className="wrapper search-page-wrapper">
                <div style={{paddingTop: 90}}>
                    <SearchResultSearchForm submitFromSearchPage={submitFromSearchPage} />
                    <ResultsListContainer 
                        selectFlightOffer={selectFlightOffer} 
                        flights={flights} loading={loading}
                        SEARCH_OBJ={SEARCH_OBJ}
                    />
                    {
                        selectedFlightId ? 
                        <SelectedTicketPane 
                            selectedFlightId={selectedFlightId} 
                            unselectFlightOffer={unselectFlightOffer} 
                            begin_checkout={props.begin_checkout}
                        /> 
                        : ""
                    }
                </div>
            </div>
        </main>
    );
}

export default SearchPageMain;