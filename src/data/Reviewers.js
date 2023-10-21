import wellgo_reviewer from '../wellgo_reviewer.jpg';
import wellgo_reviewer2 from '../wellgo_reviewer2.jpg';
import wellgo_reviewer3 from '../wellgo_reviewer3.jpg';
import wellgo_reviewer4 from '../wellgo_reviewer4.jpg';
import wellgo_reviewer5 from '../wellgo_reviewer5.jpg';
import wellgo_reviewer6 from '../wellgo_reviewer6.jpg';
import defaultProf from "../defaultProf2.jpg";
import photo5 from "../explore_destination_img1.jpg";
import photo7 from "../explore_destination_img3.jpg";

import AccraImg from "../citiesImg/AccraGhana.jpg";
import LAImg from "../citiesImg/LA_US.jpg";
import ParisImg from "../citiesImg/Paris.jpg";
import pic1 from "../explore_destination_img.jpg";
import pic2 from "../explore_destination_img1.jpg";
import pic3 from "../explore_destination_img2.jpg";
import pic4 from "../explore_destination_img4.jpg";
import pic5 from '../explore_destination_img3.jpg';
import pic6 from "../explore_destination_img5.jpg";
import pic7 from "../explore_destination_img6.jpg";
import pic8 from "../explore_destination_img7.jpg";
import pic9 from "../explore_destination_img8.jpg"

const Reviewers = [
    {
        place: {
            name: "London Bridge",
            city: "London",
            airport_name: "London Airport",
            price: "24.35",
            gps: "",
            currency: "USD",
            IATA: "LHR",
            ICAO: "EGLL",
            pictures: [AccraImg, LAImg, ParisImg]
        },
        reviews: [
            {
                name: "Evelin Grigory",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.7
            },
            {
                name: "Edward Onsoh",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer3,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.6
            },
            {
                name: "Naana Agyeman",
                city: "New York City",
                date: "March 23 2021",
                img: wellgo_reviewer4,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.7
            },
            {
                name: "Regina Daniels",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer5,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            }
        ]
    },
    {
        place: {
            name: "Kintampo Water Falls",
            city: "Kintampo",
            airport_name: "Accra Airport",
            price: "45.35",
            gps: "",
            currency: "USD",
            IATA: "ACC",
            ICAO: "DGAA",
            pictures: [pic7, pic8, pic9]
        },
        reviews: [
            {
                name: "Setzo Aldavis",
                city: "New York City",
                date: "October 14 2021",
                img: wellgo_reviewer6,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.9
            },
            {
                name: "Cecilia Branden",
                city: "New York City",
                date: "January 03 2021",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Kojo Sheldon",
                city: "New York City",
                date: "February 03 2022",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4
            },
        ]
    },
    {
        place: {
            name: "Paris Saint Jemain",
            city: "Paris",
            airport_name: "Paris Airport",
            price: "25.35",
            gps: "",
            currency: "USD",
            IATA: "LBG",
            ICAO: "LFPB",
            pictures: [pic1, pic2, pic3]
        },
        reviews: [
            {
                name: "Kojo Sheldon",
                city: "New York City",
                date: "February 03 2022",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4
            },
            {
                name: "Monica Totti",
                city: "New York City",
                date: "April 20 2022",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Abdullah Mohammed",
                city: "New York City",
                date: "March 13 2021",
                img: wellgo_reviewer2,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Mohammed Adinan",
                city: "New York City",
                date: "January 03 2021",
                img: photo5,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 2.5
            },
            {
                name: "Sallah Mohammed",
                city: "New York City",
                date: "June 14 2023",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 3.1
            },
            {
                name: "Marfo Brekum",
                city: "New York City",
                date: "January 03 2021",
                img: photo7,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.2
            }
        ]
    },
    {
        place: {
            name: "China Tower",
            city: "Beijing",
            airport_name: "Beijing Airport",
            price: "25.35",
            gps: "",
            currency: "USD",
            IATA: "PEK",
            ICAO: "ZBAA",
            pictures: [pic4, pic5, pic6]
        },
        reviews: [
            {
                name: "Evelin Grigory",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.7
            },
            {
                name: "Edward Onsoh",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer3,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.6
            },
            {
                name: "Naana Agyeman",
                city: "New York City",
                date: "March 23 2021",
                img: wellgo_reviewer4,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.7
            },
            {
                name: "Regina Daniels",
                city: "New York City",
                date: "July 11 2021",
                img: wellgo_reviewer5,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Setzo Aldavis",
                city: "New York City",
                date: "October 14 2021",
                img: wellgo_reviewer6,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.9
            },
            {
                name: "Cecilia Branden",
                city: "New York City",
                date: "January 03 2021",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Kojo Sheldon",
                city: "New York City",
                date: "February 03 2022",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4
            },
            {
                name: "Monica Totti",
                city: "New York City",
                date: "April 20 2022",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Abdullah Mohammed",
                city: "New York City",
                date: "March 13 2021",
                img: wellgo_reviewer2,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 5
            },
            {
                name: "Mohammed Adinan",
                city: "New York City",
                date: "January 03 2021",
                img: photo5,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 2.5
            },
            {
                name: "Sallah Mohammed",
                city: "New York City",
                date: "June 14 2023",
                img: defaultProf,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 3.1
            },
            {
                name: "Marfo Brekum",
                city: "New York City",
                date: "January 03 2021",
                img: photo7,
                msg: `This is is each other reviewer message that can be only to some 
                extent. Well add this message later. Lets see what Edward has said about our
                service`,
                rated: 4.2
            }
        ]
    }
]

export default Reviewers;