export const obj_has_empty_prop = (obj) => {

    if(typeof obj === "object"){
        const keys = Object.keys(obj);
        for(let i=0; i<keys.length; i++) {
            if(!obj[keys[i]]){
                return true;
            }else if(typeof obj[keys[i]] === "string"){
                if(obj[keys[i]].length < 1){
                    return true;
                }
            }else if(typeof obj[keys[i]] === "object" || Array.isArray(obj[keys[i]])){
                return obj_has_empty_prop(obj[keys[i]]);
            }
        };
    }else if(!obj){
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
