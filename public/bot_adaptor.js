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
            "Are we still booking a flight for you?... if yes, say something like 'New York to Paris' or 'United States to France' or 'La-guardia to Charles de gualle Intl'... Else say 'stop' so we can do something else...",
            "Umm... I'm expecting something like 'New York to Paris' or 'United States to France' or 'La-guardia to Charles de gualle Intl'... or we can do another thing if you say 'stop'"
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
            "Your date must be in the form 'Month day, year' like 'February 4, 2022', or say 'stop' to cancel flight booking all-together",
            "I can't read your date. Make sure it looks like 'February 23, 2022'... You can also say 'stop' to stop booking a flight",
            "Your date must look like 'February 16, 2022'. Where 'February' or 'Feb' is for month, and '16' for date of month, and '2022' for year..."
            
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
            return {
                isValid: true,
                msg: `Ok great...`,
                dep_date: the_date_1,
                arr_date: the_date
            }
        }
    }
}