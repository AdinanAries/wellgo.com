//cities imgs
import LondonImg from "../citiesImg/London.jpg";
import AccraImg from "../citiesImg/AccraGhana.jpg";
import LAImg from "../citiesImg/LA_US.jpg";
import ParisImg from "../citiesImg/Paris.jpg";
import NewYorkImg from "../citiesImg/NewYork.jpg";
import CairoImg from "../citiesImg/Cairo.jpg";
import RomeImg from "../citiesImg/Rome.jpg";

const PopularCitiesList = [
    {
        country: "United Kingdom",
        name: "London Heathrow",
        city: "London",
        picture: LondonImg,
        IATA: "LHR",
        ICAO: "EGLL"
    },
    {
        country: "Ghana",
        name: "Kotoka Intl",
        city: "Accra",
        picture: AccraImg,
        IATA: "ACC",
        ICAO: "DGAA"
    },
    {
        country: "United States",
        name: "Los Angeles Intl",
        city: "Los Angeles",
        picture: LAImg,
        IATA: "LAX",
        ICAO: "KLAX"
    },
    {
        country: "France",
        name: "Paris-Le Bourget",
        city: "Paris",
        picture: ParisImg,
        IATA: "LBG",
        ICAO: "LFPB"
    },
    {
        country: "United States",
        name: "La Guardia",
        city: "New York",
        picture: NewYorkImg,
        IATA: "LGA",
        ICAO: "KLGA"
    },
    {
        country: "Italy",
        name: "Ciampino\u2013G. B. Pastine Intl",
        city: "Rome",
        picture: RomeImg,
        IATA: "CIA",
        ICAO: "LIRA"

    },
    {
        country: "Egypt",
        name: "Cairo Intl",
        city: "Cairo",
        picture: CairoImg,
        IATA: "CAI",
        ICAO: "HECA"
    },
];

export default PopularCitiesList;