// Obsolete function for enforcing date format in YYYY/MM/DD
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