import { show_full_search_form } from "./PageRoutingFuncs";

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