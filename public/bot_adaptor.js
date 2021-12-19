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
