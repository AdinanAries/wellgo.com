var wellgo_bot = {
    //status: "begin_air_booking",
    status: "",
    last_query: "can i book a flight",
    step: "", 
    about: "countries, cities, and airports"
}

var bot_flight_booking_stages_dailog = [
    {
        step: "origin-destination",
        error_msgs: [
            `Are we still booking a flight for you?... if yes, say something like '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... Else say '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>' so we can do something else...`,
            `Umm... I'm expecting something like '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
            <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... 
            or we can do another thing if you say '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>'`
        ]
    }
]

function validate_user_airports_input_for_bot(inputs){
    if(inputs.split(" ").includes("to")){
        let itin_obj = {
            from: inputs.split("to")[0].trim(),
            to: inputs.split("to")[1].trim()
        }
        return {
            isValid: true,
            origin: itin_obj.from,
            destination: itin_obj.to
        }
    }else{
        return {
            isValid: false,
            msg: bot_flight_booking_stages_dailog[0].error_msgs[Math.floor(Math.random() * bot_flight_booking_stages_dailog[0].error_msgs.length)]
        }
    }
}

function validate_user_dates_input_for_bot(inputs, trip_round){
    //console.log(trip_round)
    if(trip_round==="one-way"){

        let err_msg = [
            `Your date must be in the form 'Month day, year' like '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            February 4, 2022</span>', or say '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            stop</span>' to cancel flight booking all-together`,
            `I can't read your date. Make sure it looks like '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            February 23, 2022</span>'... You can also say '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            stop</spant>' to stop booking a flight`,
            `Your date must look like '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            February 16, 2022</span>'. Where '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            February</span>' or '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            Feb</span>' is for month, and '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            16</span>' for date of month, and '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">
            2022</span>' for year...`
            
        ]

        if(inputs.trim().split(" ").length !== 3){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }
        
        let dateparts = inputs.trim().split(" ");
        let mmm = dateparts[0].length > 3 ? dateparts[0].substring(0,3) : dateparts[0];
        let dd = dateparts[1].length < 3 ? `0${dateparts[1]}` : dateparts[1];
        let yyyy = dateparts[2].length == 2 ? `20${dateparts[2]}` : dateparts[2];
        //console.log(`${mmm} ${dd} ${yyyy}`)
        console.log(Date.parse(`${mmm} ${dd} ${yyyy}`))
        let the_date = Date.parse(`${mmm} ${dd} ${yyyy}`)

        if(isNaN(the_date)){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }else{
            let today = new Date();
            today = today.setDate(today.getDate()-1);
            if(the_date < today){
                return{
                    isValid: false,
                    msg: `Umm.. I think the date you provided is past. We can only use today or future date...`
                }
            }
            return {
                isValid: true,
                msg: `Ok great...`,
                date: the_date,
            }
        }

    }else if(trip_round==="round-trip"){

        let err_msg = [
            "Your answer must look like 'February 4, 2022 to February 10, 2022' and each date must be in the form 'Month day, year', or say 'stop' to cancel flight booking all-together",
            "I can't read your date. You should say something like 'February 4, 2022 to February 10, 2022'... You can also say 'stop' to stop booking a flight",
            "Your answer must look like 'February 16, 2022 to February 20, 2022' and each. Where 'February' or 'Feb' is for month, and '16' and '20' for date of month, and '2022' for year..."
            
        ]

        if(!inputs.split(" ").includes("to")){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }

        let dates = inputs.trim().split(" to ");

        if(dates.length !== 2){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }

        if(dates[0].trim().split(" ").length !== 3 || dates[1].trim().split(" ").length !== 3){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }

        let dateparts_1 = dates[0].trim().split(" ");
        let mmm_1 = dateparts_1[0].length > 3 ? dateparts_1[0].substring(0,3) : dateparts_1[0];
        let dd_1 = dateparts_1[1].length < 3 ? `0${dateparts_1[1]}` : dateparts_1[1];
        let yyyy_1 = dateparts_1[2].length == 2 ? `20${dateparts_1[2]}` : dateparts_1[2];
        //console.log(`${mmm} ${dd} ${yyyy}`)
        console.log(Date.parse(`${mmm_1} ${dd_1} ${yyyy_1}`))
        let the_date_1 = Date.parse(`${mmm_1} ${dd_1} ${yyyy_1}`)

        let dateparts = dates[1].trim().split(" ");
        let mmm = dateparts[0].length > 3 ? dateparts[0].substring(0,3) : dateparts[0];
        let dd = dateparts[1].length < 3 ? `0${dateparts[1]}` : dateparts[1];
        let yyyy = dateparts[2].length == 2 ? `20${dateparts[2]}` : dateparts[2];
        //console.log(`${mmm} ${dd} ${yyyy}`)
        console.log(Date.parse(`${mmm} ${dd} ${yyyy}`))
        let the_date = Date.parse(`${mmm} ${dd} ${yyyy}`)

        if(isNaN(the_date_1) || isNaN(the_date)){
            return{
                isValid: false,
                msg: err_msg[Math.floor(Math.random() * err_msg.length)]
            }
        }else{
            let today = new Date();
            today = today.setDate(today.getDate()-1);
            if(the_date_1 < today || the_date < today){
                return{
                    isValid: false,
                    msg: `Umm.. I think the date you provided is past. We can only use today or future date...`
                }
            }

            if(the_date < the_date_1){
                return{
                    isValid: false,
                    msg: `Please check the dates... the return date cannot be before the departure date...`
                }
            }

            return {
                isValid: true,
                msg: `Ok great...`,
                dep_date: the_date_1,
                arr_date: the_date
            }
        }
    }
}

function validate_travelers_input_for_bot(input){
    let resp_obj = {
        isValid: false,
        adults: 0,
        children: 0,
        infants: 0
    }
    //alert(input.includes(","))
    if(input.includes(",")){
        let travelers = input.trim().split(","); //string to array
        travelers = travelers.join(""); //array to string
        travelers = travelers.split(" "); //string to array
        console.log(travelers);
        console.log(parseInt(travelers[0].trim(), 10));
        if(travelers.length > 6 || travelers.length < 1){
            //alert("here")
            resp_obj.isValid = false;
            resp_obj.adults=0;
            resp_obj.children=0;
            resp_obj.infants=0;
            return resp_obj;
        }else if(travelers.length === 2){
            if(isNaN(parseInt(travelers[0].trim(), 10))){
                resp_obj.isValid = false;
                resp_obj.adults=0;
                resp_obj.children=0;
                resp_obj.infants=0;
                return resp_obj;
            }else{
                if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[0].trim();
                }
                return resp_obj;
            }
        }else if(travelers.length === 4){
            if(isNaN(parseInt(travelers[0].trim(), 10)) || isNaN(parseInt(travelers[2].trim(), 10))){
                resp_obj.isValid = false;
                resp_obj.adults=0;
                resp_obj.children=0;
                resp_obj.infants=0;
                return resp_obj;
            }else{
                if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[0].trim();
                }
                if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[2].trim();
                }
                if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[2].trim();
                }
                if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[2].trim();
                }
                return resp_obj;
            }
            
        }else if(travelers.length === 6){
            console.log(isNaN(parseInt(travelers[0].trim(), 10)));
            if(isNaN(parseInt(travelers[0].trim(), 10)) || isNaN(parseInt(travelers[2].trim(), 10)) || isNaN(parseInt(travelers[4].trim(), 10))){
                resp_obj.isValid = false;
                resp_obj.adults=0;
                resp_obj.children=0;
                resp_obj.infants=0;
                return resp_obj;
            }else{
                if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[0].trim();
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[0].trim();
                }
                if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[2].trim();
                }
                if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[2].trim();
                }
                if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[2].trim();
                }
                if(travelers[5].trim().toLowerCase() === "adult" || travelers[5].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=travelers[4].trim();
                }
                if(travelers[5].trim().toLowerCase() === "child" || travelers[5].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=travelers[4].trim();
                }
                if(travelers[5].trim().toLowerCase() === "infant" || travelers[5].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=travelers[4].trim(); 
                }
                return resp_obj;
            }
        }
    }else if(input.trim().split(" ").length === 2){
        let travelers = input.trim().split(" ");
        if(isNaN(parseInt(travelers[0].trim(), 10))){
            resp_obj.isValid = false;
            resp_obj.adults=0;
            resp_obj.children=0;
            resp_obj.infants=0;
            return resp_obj;
        }else{
            if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[0].trim();
            }
            return resp_obj;
        }
    }else if(input.trim().split(" ").length === 4){
        let travelers = input.trim().split(" ");
        if(isNaN(parseInt(travelers[0].trim(), 10)) || isNaN(parseInt(travelers[2].trim(), 10))){
            resp_obj.isValid = false;
            resp_obj.adults=0;
            resp_obj.children=0;
            resp_obj.infants=0;
            return resp_obj;
        }else{
            if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[0].trim();
            }
            if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[2].trim();
            }
            if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[2].trim();
            }
            if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[2].trim();
            }
            return resp_obj;
        }
    }else if(input.trim().split(" ").length === 6){
        let travelers = input.trim().split(" ");
        if(isNaN(parseInt(travelers[0].trim(), 10)) || isNaN(parseInt(travelers[2].trim(), 10)) || isNaN(parseInt(travelers[4].trim(), 10))){
            resp_obj.isValid = false;
            resp_obj.adults=0;
            resp_obj.children=0;
            resp_obj.infants=0;
            return resp_obj;
        }else{
            if(travelers[1].trim().toLowerCase() === "adult" || travelers[1].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[0].trim();
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[0].trim();
            }
            if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[2].trim();
            }
            if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[2].trim();
            }
            if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[2].trim();
            }
            if(travelers[5].trim().toLowerCase() === "adult" || travelers[5].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=travelers[4].trim();
            }
            if(travelers[5].trim().toLowerCase() === "child" || travelers[5].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=travelers[4].trim();
            }
            if(travelers[5].trim().toLowerCase() === "infant" || travelers[5].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=travelers[4].trim(); 
            }
            return resp_obj;
        }
    }
    resp_obj.isValid = false;
    resp_obj.adults=0;
    resp_obj.children=0;
    resp_obj.infants=0;
    return resp_obj;
    
}