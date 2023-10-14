const EachPopularCityMore = (prop) => {
    const { city, searchFlightsForPopularCity, addCityToTavourites, fav } = prop;
    return (
        <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", maxWidth: "300px", textAlign: "center", margin: "auto", fontFamily: "'Prompt', Sans-serif"}}>
            <div className="each_more_popular_city_popup">
                <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                    <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${city.picture}')`}}>

                    </div>
                    <div className="home_page_each_most_visited_cities_btn">
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                            {city.city}</p>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                            {city.country}</p>
                        
                    </div>
                    <div className="home_page_each_most_visited_cities_bottom">
                        
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{textAlign: "initial", color: "rgba(0,0,0,0.8)", fontFamily: "'Prompt', Sans-serif"}}>
                    {city.city} - {city.country}
                </div>
                <div style={{position: "absolute", right: 0, top: 0, display: "flex"}}>
                    <div onClick={()=>addCityToTavourites(city)} style={{}}>
                        <i style={{color: "orange", cursor: "pointer"}} className={((fav ? "fa-solid" : "fa-regular") + " fa-heart")} aria-hidden={true}></i>
                    </div>
                    <div style={{marginLeft: 15}} onClick={()=>searchFlightsForPopularCity(city.iata)}>
                        <i style={{color: "green", cursor: "pointer"}} className="fa-regular fa-circle-check" aria-hidden={true}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachPopularCityMore;