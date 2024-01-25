const API_URL="https://wellgo-backend-a2628ce79736.herokuapp.com";

export const fetchTouristAttraction = async (long, lat, path="/api/tourism/attraction") => {
    try{
        return await fetch(`${API_URL+path}/${long}/${lat}`)
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

export const fetchTouristAttractionCity = async (long, lat, path="/api/weather/city") => {
    try{
        return await fetch(`${API_URL+path}/${long}/${lat}/`)
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