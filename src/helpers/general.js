import { show_full_search_form } from "./PageRoutingFuncs";
import CURRENCY_SYMBOLS from "../Constants/CurrencySymbols";
import Logger from "./Logger";
import CONSTANTS from "../Constants/Constants";
import { getAnonymousID } from "../Constants/Environment";
import { verifyUserToken } from "../services/sessionServices";

const getRandomHex = (size=20) => {
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

export const create_anonymous_user_id = () => {
    const one=getRandomHex();
    const two = getRandomHex();
    const three=getRandomHex();
    const four=getRandomHex();
    const five=getRandomHex();
    const six=getRandomHex();
    return `${one}${two}${three}${four}${five}${six}`;
    
}

export const obj_has_empty_prop = (obj) => {

    if (typeof obj === "object") {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (!obj[keys[i]]) {
                return true;
            } else if (typeof obj[keys[i]] === "string") {
                if (obj[keys[i]].length < 1) {
                    return true;
                }
            } else if (typeof obj[keys[i]] === "object" || Array.isArray(obj[keys[i]])) {
                return obj_has_empty_prop(obj[keys[i]]);
            }
        };
    } else if (!obj) {
        return true;
    }

    return false;
}

export const calculate_age = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (isNaN(age)) ? 0 : age;
}

export const shuffle_array = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const ellipsify = (str, length = 10) => {
    if (str.length > length) {
        return (str.substring(0, length) + "...");
    }
    else {
        return str;
    }
}

export const get_horizontal_page_size = (item_width, margin = 0, max = 10) => {
    let total_item_width = (item_width + margin);
    let page_width = (document.body.offsetWidth);
    let page_size = Math.floor(page_width / total_item_width);
    if (page_size > max)
        return max;
    else return page_size;
}

export const get_short_date_MMMDD = (date_string) => {
    let d_arr = new Date(date_string).toDateString().split(" ");
    return `${d_arr[1]} ${d_arr[2]}`;
}

export const get_short_date_DAYMMMDD = (date_string) => {
    let d_arr = new Date(date_string).toDateString().split(" ");
    return `${d_arr[0]}, ${d_arr[1]} ${d_arr[2]}`;
}

export const get_date_format_DAYMMMDDYYYY = (date_string) => {
    return new Date(date_string).toDateString();
}

export const get_currency_symbol = (curr) => {
    const CURRENCIES = CURRENCY_SYMBOLS;
    if(curr && typeof curr === "string")
        return CURRENCIES[curr.toUpperCase()];
    return "$";
}

/**
 * @desc This function toggles inbetween adding and removing cities in favorites
 * @param {*} city 
 * @param {*} favCities 
 * @param {*} setFavCities 
 * @returns void
 */
export const toggleAddRemoveCityInFavourites = (city, favCities, setFavCities) => {
    if (favCities.includes(city.IATA)) {
        let i = favCities.indexOf(city.IATA);
        favCities.splice(i, 1);
        Logger.log_activity({
            title: "City/Airport removed from favorites",
            body: `The user removed ${city.IATA} from their favorite cities/airports`,
            resource_id: "",
            resource_type: CONSTANTS.resource_types.user_favorites,
        });
    } else {
        favCities.push(city.IATA);
        Logger.log_activity({
            title: "City/Airport added to favorites",
            body: `The user included ${city.IATA} in their favorite cities/airports`,
            resource_id: "",
            resource_type: CONSTANTS.resource_types.user_favorites,
        });
    }
    localStorage.setItem("favCts", JSON.stringify(favCities))
    setFavCities([...favCities]);
}

export const startSearchToKnownCity = (city, name, IATA, ICAO) => {
    global.changeAirportsToInput(
        `${city} - ${name} (${IATA})`,
        IATA, ICAO );
    show_full_search_form();
}

export const convert24HTimeToAMPM = ( time ) => {
    let parts = time.trim().split(":")
    let hh = parseInt(parts[0]);
    let m = parseInt(parts[1]);
    let dd = "am";
    let h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = "pm";
    }
    if (h === 0) {
      h = 12;
    }
    m = m < 10 ? "0" + m : m;
  
    return `${h}:${m}${dd}`;
}

export const validateYYYYMMDDInputDates = (date_string, press_key_value, date_separator="-") => {

    const lastChar = date_string.charAt(date_string.length - 1);
    const numberPattern = /\d+/g;
    let nums = date_string.match( numberPattern ); // Return only numbers and discard all other string characters
    
    if(!nums || !nums.length){
        return "";
    }else{
        nums = nums.join("")
    }

    if(!press_key_value) return // Backspace pressed

    //Special Case
    if(nums.length===5 && lastChar===date_separator){
        let YYYY = nums.substring(0, 4);
        let MM = "0"+nums.substring(4);
        if(parseInt(MM) < 1){
            MM="01"
        }
        if(parseInt(MM) > 12){
            MM="12"
        }
        return YYYY+date_separator+MM+date_separator;
    }

    if(nums.length>3 && nums.length<=5){
        return nums.substring(0, 4)+date_separator+nums.substring(4);
    }else if(nums.length>5 && nums.length<=8) {
        let YYYY=nums.substring(0, 4);
        let MM=nums.substring(4, 6);
        let DD=nums.substring(6);
        if(parseInt(MM)>12){
            MM="12";
        }
        if(parseInt(DD)>31){
            DD="31"
        }
        if(parseInt(MM)<1){
            MM="01"
        }
        if(parseInt(DD)<1){
            DD="01"
        }
        return YYYY+date_separator+MM+date_separator+DD;
    }else if(nums.length > 8){
        let YYYY=nums.substring(0, 4);
        let MM=nums.substring(4, 6);
        let DD=nums.substring(6, nums.length-1);
        if(parseInt(MM)>12){
            MM="12";
        }
        if(parseInt(DD)>31){
            DD="31"
        }
        if(parseInt(MM)<1){
            MM="01"
        }
        if(parseInt(DD)<1){
            DD="01"
        }
        return YYYY+date_separator+MM+date_separator+DD;
    }
}

export const confirmYYYMMDDDateValidity = (date) => {

    function validate() {
        return (
            (parseInt(date.charAt(0)) || date.charAt(0) === "0") &&
            (parseInt(date.charAt(1)) || date.charAt(1) === "0") &&
            (parseInt(date.charAt(2)) || date.charAt(2) === "0") &&
            (parseInt(date.charAt(3)) || date.charAt(3) === "0") &&
            date.charAt(4) === "-" &&
            (parseInt(date.charAt(5)) || date.charAt(5) === "0") &&
            (parseInt(date.charAt(6)) || date.charAt(6) === "0") &&
            date.charAt(7) === "-" &&
            (parseInt(date.charAt(8)) || date.charAt(8) === "0" ) &&
            (parseInt(date.charAt(9)) || date.charAt(9) === "0")
        );
    }

    if(date || date?.length===0){
        /*
            Base Case: When input field has not value. 
            Then no need to validate
        */
        if(date.length===0)
            return true;

        /*
            Default: When input field has value. 
            Then do the validatation
        */
        if(date.length===10)
            if(validate()) 
                return true;
    }

    return false;
}

export const calculateTotalTime = (earlier, later) => {
    let diff_ms = new Date(later).getTime() - new Date(earlier).getTime();
    let diff_s, diff_m, diff_h, diff_d;
    if(diff_ms>1000){
        diff_s = Math.floor(diff_ms/1000);
    }else{
        return {
            d: "",
            h: "",
            m: "",
            s: "",
        }
    }
    if(diff_s>60){
        diff_m = Math.floor(diff_s/60);
        diff_s = (diff_s%60)
    }else{
        return {
            d: "",
            h: "",
            m: "",
            s: `${diff_s}s`,
        }
    }
    if(diff_m>60){
        diff_h = Math.floor(diff_m/60);
        diff_m = (diff_m%60);
    }else{
        return {
            d: "",
            h: "",
            m: `${diff_m}m`,
            s: `${diff_s}s`,
        }
    }
    if(diff_h>24){
        diff_d = Math.floor(diff_h/24);
        diff_h = (diff_h%24)
    }else{
        return {
            d: "",
            h: `${diff_h}h`,
            m: `${diff_m}m`,
            s: `${diff_s}s`,
        }
    }
    
    return {
        d: diff_d,
        h: `${diff_h}h`,
        m: `${diff_m}m`,
        s: `${diff_s}s`,
    }
    
}

export const getClient = async () => {
    let client={}
    let verify_res = await verifyUserToken();
    if(verify_res.valid){
        // Logged user details
        client.user=verify_res.data;
        client.anonymous_id="";
    }else{
        // Anonymous id for non-logged-in users
        client.user={};
        client.anonymous_id=getAnonymousID();
    }
    // Browser
    client.device=navigator.userAgent;
    return client;
}

export const getTotalMinutesFromDurationString = (_duration) => {
    let duration =_duration?.replace("P","")?.replace("T",""); // [P1DT2H30M, PT23H45M]
    let d_string="";
    let h_string="";
    let m_string="";
    if(duration?.includes("D")){
        d_string=duration.split("D")[0].trim();
        duration=duration.split("D")[1].trim();
    }
    if(duration?.includes("H")){
        h_string=duration.split("H")[0].trim();
        duration=duration.split("H")[1]
    }
    if(duration?.includes("M")){
        m_string=duration.split("M")[0].trim();
        duration=duration.split("M")[0];
    }
    let Days = d_string ? parseInt(d_string) : 0;
    let Hours =  h_string ? parseInt(h_string) : 0;
    let Minutes = m_string ? parseInt(m_string) : 0;

    Hours = ((Days * 24) + Hours);
    Minutes = ((Hours * 60) + Minutes);
    return Minutes;
}

export const getUserFriendlyDurationStringFromTotalMunites = (total_minutes) => {
    if(total_minutes){
        let total_hours = Math.trunc(total_minutes/60);
        let mm=total_minutes%60;
        let hh=total_hours%24;
        let dd=Math.trunc(total_hours/24);
        let stringDuration=""
        if(dd){
            stringDuration+=(dd+"d ");
        }
        if(hh){
            stringDuration+=(hh+"h ");
        }
        if(mm){
            stringDuration+=(mm+"m");
        }
        return stringDuration;
    }
    return "0h 0m";
}

export const get_duration_d_h_m = (_duration) => {
    let duration =_duration?.replace("P","")?.replace("T",""); // [P1DT2H30M, PT23H45M]
    let d_string="";
    let h_string="";
    let m_string="";
    if(duration?.includes("D")){
        d_string=duration.split("D")[0].trim();
        duration=duration.split("D")[1].trim();
    }
    if(duration?.includes("H")){
        h_string=duration.split("H")[0].trim();
        duration=duration.split("H")[1]
    }
    if(duration?.includes("M")){
        m_string=duration.split("M")[0].trim();
        duration=duration.split("M")[0];
    }
    let Days = d_string ? parseInt(d_string) : 0;
    let Hours =  h_string ? parseInt(h_string) : 0;
    let Minutes = m_string ? parseInt(m_string) : 0;

    let d = Days ? `${Days}d` : "";
    let h = Hours ? `${Hours}h` : "";
    let m = Minutes ? `${Minutes}m` : "";

    return {
        d, h, m
    }
}

export const return_passenger_by_id = (flight, id) => {
    let passengers = flight.passengers;
    let psngr = {};
    for(let p=0; p<passengers.length; p++){
        if(passengers[p].id===id){
            psngr = passengers[p];
        }
    }
    return psngr;
}

export const return_segment_by_id = (flight, id) => {
    let slices = flight.slices;
    let segment = {};
    for(let i=0; i<slices.length; i++){
        for(let p=0; p<slices[i].segments.length; p++){
            if(slices[i].segments[p].id===id){
                segment = slices[i].segments[p];
            }
        }
    }
    return segment;
}

export const add_months_to_date = (date, months) => {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}