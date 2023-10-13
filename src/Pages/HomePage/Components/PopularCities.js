import { useState, useEffect } from "react";

import citiesIcon from "../../../icons/citiesIcon.svg";

//cities imgs
import LondonImg from "../../../citiesImg/London.jpg";
import AccraImg from "../../../citiesImg/AccraGhana.jpg";
import LAImg from "../../../citiesImg/LA_US.jpg";
import ParisImg from "../../../citiesImg/Paris.jpg";
import NewYorkImg from "../../../citiesImg/NewYork.jpg";
import CairoImg from "../../../citiesImg/Cairo.jpg";
import RomeImg from "../../../citiesImg/Rome.jpg";

import PaginationButtons from '../../../components/PaginationButtons';

import { shuffle_array } from '../../../helpers/general';
import EachPopularCity from "./EachPopularCity";

const PopularCities = () => {
    const [data, setData] = useState({
        exploreCities: {
            pagination: {
                currentPage: 1,
                numberPerPage: 4,
                numberOfPages: 0,
            },
            cities: shuffle_array([
                {
                    country: "United Kingdom",
                    city: "London",
                    picture: LondonImg,
                    iata: "to do"
                },
                {
                    country: "Ghana",
                    city: "Accra",
                    picture: AccraImg,
                    iata: "to do"
                },
                {
                    country: "United States",
                    city: "Los Angeles",
                    picture: LAImg,
                    iata: "to do"
                },
                {
                    country: "France",
                    city: "Paris",
                    picture: ParisImg,
                    iata: "to do"
                },
                {
                    country: "United States",
                    city: "New York",
                    picture: NewYorkImg,
                    iata: "to do"
                },
                {
                    country: "Italy",
                    city: "Rome",
                    picture: RomeImg,
                    iata: "to do"
                },
                {
                    country: "Egypt",
                    city: "Cairo",
                    picture: CairoImg,
                    iata: "to do"
                },
            ])
        }
    });

    function nextPage() {
        if(
            (((data.exploreCities.pagination.currentPage - 1) * data.exploreCities.pagination.numberPerPage)+data.exploreCities.pagination.numberPerPage)
            > data.exploreCities.cities.length
        )return;
        ++data.exploreCities.pagination.currentPage;
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination
                }
            }
        })
    }

    function prevPage() {
        if((data.exploreCities.pagination.currentPage-1) < 1)return;
        --data.exploreCities.pagination.currentPage;
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination
                }
            }
        })
    }

    function setPage(num) {
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    ...data.exploreCities.pagination,
                    currentPage: num,
                }
            }
        });
    }

    const searchFlightsForPopularCity = (iata) => {
        alert(iata);
    }

    const addCityToTavourites = (city) => {
        alert(city.city);
    }

    useEffect(() => {
        setData({
            exploreCities: {
                ...data.exploreCities,
                pagination: {
                    currentPage: 1,
                    numberPerPage: 4,
                    numberOfPages: Math.ceil(data.exploreCities.cities.length / data.exploreCities.pagination.numberPerPage),
                }
            }
        })
    }, []);

    let begin = ((data.exploreCities.pagination.currentPage - 1) * data.exploreCities.pagination.numberPerPage);
    let end = begin + data.exploreCities.pagination.numberPerPage;
    return (
        <div className="home_page_most_visited_cities" style={{paddingTop: 10}}>
            <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                >Popular Cities</h1>
            <h1 className="mobile_margin_bottom_20 title_desc" style={{textAlign: "center", marginTop: -10, letterSpacing: 1, fontSize: 16, color: "rgba(0,0,0,0.6)", fontWeight: "initial", fontFamily: "'Prompt', Sans-serif",}}
                >see some of most visited cities</h1>
            <div className="home_page_most_visited_cities_list">
                {
                    data.exploreCities.cities.slice(0,3).map(each=>
                        (
                            <EachPopularCity 
                                city={each} 
                                searchFlightsForPopularCity={searchFlightsForPopularCity} 
                                addCityToTavourites={addCityToTavourites}
                                
                            />
                        )
                    )
                }
            </div>
            <h1 className="page_title" style={{textAlign: "center", fontSize: 20, marginBottom: 10, marginTop: 10, letterSpacing: 1, color: "rgba(0,0,0,0.7)", fontWeight: 1000, fontFamily: "'Prompt', Sans-serif",}}
                >More To Explore</h1>
            <div style={{position: "relative", borderTop: "4px solid orange", padding: "15px", background: "rgba(255,255,255)"}}>
                <div className="more_popular_cities_svg_img" style={{height: 150, width: 150, backgroundImage: `url('${citiesIcon}')`, backgroundRepeat: "no-repeat", backgroundSize: "contain", position: "absolute", top: -50, left: 20, zIndex: 1}}>
                </div>
                <div style={{position: "relative", maxWidth: 500, margin: "auto"}}>
                    <div onClick={prevPage} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", zIndex: 1, height: "100%", left: 0}}>
                        <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "#db7fd0", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                            <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-left"></i>
                        </div>
                    </div>
                    <div onClick={nextPage} style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", zIndex: 1, height: "100%", right: 0}}>
                        <div style={{cursor: "pointer", width: 40, height: 40, borderRadius: "100%", backgroundColor: "#db7fd0", boxShadow: "1px 2px 4px rgba(0,0,0,0.4)", textAlign: "center", display: "flex", flexDirection: 'column', justifyContent: "center"}}>
                            <i style={{fontSize: 20, color: "white"}} className="fa fa-angle-right"></i>
                        </div>
                    </div>
                    {
                        
                        data.exploreCities.cities.slice(begin, end).map(each=>
                        (
                            <div className="each_more_popular_city" style={{postion: "relative", cursor: "pointer", color: "rgb(223, 157, 0)", maxWidth: "300px", textAlign: "center", margin: "auto", borderBottom: "1px solid rgba(0,0,0,0.1)", marginTop: 5, paddingBottom: 5, fontFamily: "'Prompt', Sans-serif"}}>
                            <div className="each_more_popular_city_popup">
                                <div style={{width: "100%", marginBottom: 0}}  className="home_page_each_most_visited_cities">
                                    <div className="home_page_each_most_visited_cities_top" style={{backgroundImage: `url('${each.picture}')`}}>

                                    </div>
                                    <div className="home_page_each_most_visited_cities_btn">
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 17, textAlign: "center", color: "rgb(0,0,0,0.8)", fontWeight: "bolder", letterSpacing: 1}}>
                                            {each.city}</p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontWeight: "initial", fontSize: 14, textAlign: "center", color: "rgb(0,0,0,0.8)", marginTop: -3, letterSpacing: 1}}>
                                            {each.country}</p>
                                        
                                    </div>
                                    <div className="home_page_each_most_visited_cities_bottom">
                                        
                                    </div>
                                </div>
                            </div>
                            {each.city} - {each.country}</div>
                        )
                    )}
                </div>
                <div style={{paddingTop: 20}}>
                    <PaginationButtons 
                        pageSize={data.exploreCities.pagination.numberPerPage} 
                        currentPage={data.exploreCities.pagination.currentPage} 
                        totalItems={data.exploreCities.cities.length}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default PopularCities;