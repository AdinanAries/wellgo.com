import { show_full_search_form } from "./PageRoutingFuncs";
import CURRENCY_SYMBOLS from "../Constants/CurrencySymbols";

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
    } else {
        favCities.push(city.IATA);
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

export const validateYYYYMMDDInputDates = (date_string, date_separator="/") => {
    date_string=date_string.trim(); 
    //date_string=date_string.replace(/\D/g, ""); // returning only numbers
    if (date_string==="") {
        return "";
    } else {
        let lastChar = date_string.charAt(date_string.length - 1);
        if(parseInt(lastChar) || lastChar==="0"){
            date_string=date_string.replaceAll(date_separator, "");
            if(date_string.length>3 && date_string.length<=6){
                return date_string.substring(0, 4)+date_separator+date_string.substring(4);
            }else if(date_string.length>6 && date_string.length<=8) {
                let YYYY=date_string.substring(0, 4);
                let MM=date_string.substring(4, 6);
                let DD=date_string.substring(6);
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
            }else if(date_string.length > 8){
                let YYYY=date_string.substring(0, 4);
                let MM=date_string.substring(4, 6);
                let DD=date_string.substring(6, date_string.length-1);
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
        }else if(lastChar===date_separator && date_string.length===5){
            return date_string;
        }else if(lastChar===date_separator && date_string.length===7) {
            return date_string.substring(0, 4)+date_separator+"0"+date_string.substring(5,6)+date_separator;
        }else{
            return date_string.substring(0, date_string.length-1);
        }
    }
}

export const calculateTotalTime = (earlier, later) => {
    let diff_ms = new Date(later).getTime() - new Date(earlier).getTime();
    let diff_s = diff_ms/1000;
    let diff_m = diff_s/60;
    let diff_h = Math.floor(diff_m/60);
    let diff_rm = (diff_m%60);
    return {
        h: diff_h,
        total_m: diff_m,
        m: diff_rm,
        total_s: diff_s,
        total_ms: diff_ms

    }
}