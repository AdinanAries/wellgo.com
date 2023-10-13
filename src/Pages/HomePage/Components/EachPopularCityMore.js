const EachPopularCityMore = (prop) => {
    const { city } = prop;
    return (
        <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", maxWidth: "300px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
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
            {city.city} - {city.country}
        </div>
    )
}

export default EachPopularCityMore;