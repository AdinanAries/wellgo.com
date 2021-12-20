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
    let err_msg = [
        "Your date must be in the form 'Month day, year' like 'February 4, 2022', or say 'stop' to cancel flight booking all-together",
        "I can't parse your date. Make sure it looks like 'February 23, 2022'... You can also say 'stop' to stop booking a flight",
        "Your date must look like 'February 16, 2022'. so you 'February' or 'Feb' for month and '16' for date of month and '2022' for year..."
        
    ]
    
    if(inputs.trim().split(" ").length !== 3){
        return{
            isValid: false,
            msg: err_msg[Math.floor(Math.random() * err_msg.length)]
        }
    }
    //console.log(trip_round)
    if(trip_round==="one-way"){
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
                msg: `Ok great...`
            }
        }

    }else if(trip_round==="round-trip"){

    }
}