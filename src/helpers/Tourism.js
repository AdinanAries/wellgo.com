import { fetchTouristAttraction, fetchTouristAttractionCity } from "../services/tourismServices";

const Tourism = {
    /**
     * 
     */
    getTouristAttraction: async (lon, lat, callback) => {
        const ATTRACTIONS = await fetchTouristAttraction(lon, lat);
        let attr = ATTRACTIONS[Math.floor(Math.random() * ATTRACTIONS.length)];
        let cities = await fetchTouristAttractionCity(lon, lat);
        if(attr){
            if(Array.isArray(cities) && cities?.length>0)
                attr.city=cities[0];
            else
                attr.city={
                    //city: "..",
                    //iso3: ".."
                };
            callback(attr);
        }else{
            callback({
                error: true,
                message: "Tourist attraction was null"
            });
        }
    },

    /**
     * 
     * @param {*} lon 
     * @param {*} lat 
     */
    getTouristAttractionDefaultLocation: async (callback) => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            const ATTRACTIONS = await fetchTouristAttraction(long, lat);
            let attraction = ATTRACTIONS[Math.floor(Math.random() * ATTRACTIONS.length)];
            let city = await fetchTouristAttractionCity(long, lat);
            if(attraction){
                if(Array.isArray(city) && city?.length>0)
                    attraction.city=city[0];
                else
                    attraction.city={
                        //city: "..",
                        //iso3: ".."
                    };
                callback(attraction);
            }else{
                callback({
                    error: true,
                    message: "Tourist attraction was null"
                });
            }
        }, (err) => {
            console.log(err);
            callback({
                error: true,
                ...err
            });
        })
    },

    /**
     * 
     */
    getBotPromptMessage: (place) => {
        const PROMPTS = [
            `Hey, have you visited ${place?.name} in/near ${place?.city?.city}?.. I just thought you might be interested if traveling for tourism...`,
            `Hi, I found ${place?.name} in/near ${place?.city?.city}... If interested, of course for tourism, consider visiting the place...`,
            `I found ${place?.name} popular in/near ${place?.city?.city}... You might be interested if traveling for tourism...`
        ]
        return PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
    }

}

export default Tourism;