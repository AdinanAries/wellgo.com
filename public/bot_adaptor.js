//bot_flight_booking_stages_dailog
let virtual_assistant = {
    state: {
        status: "",
        status_names: {
            BEGIN_AIR_BOOKING: "begin_air_booking"
        },
        last_query: "can i book a flight",
        step: "",
        about: "countries, cities, and airports",
        scroll_chat: true,
        isTripRoundFirstEntered: true,
        isPNRFirstEntered: true,
        isDatesFirstEntered: true,
        isCabinClassFirstEntered: true,
        isSearchingFlightFirstEnter: true,
        isGettingTravelersFirstEntered: true,
        selectedOriginAirport: "",
        selectedDestinationAirport: "",
        selectedAFlight: false,
        hasBotReturnedResults: true
    },
    server: {
        msgs: {
            failed: [
                "Opps! My server failed. My bad...",
                `Opps! 😒 My server failed. My bad. This one is on me..`,
                `Eh! I think we are having some internet issues. Or Did my server fail? 🤦🏾‍♂️`,
                `Ummm... wait 😕, could it be your internet or my server crushed.
                <br/>I'm unable to help you without my server being online.
                <br/>I'll put in a ticket to alert the technical team.
                <br/>But also make sure its not your internet.`,
                `... I can't reach my server. Please check your internet. I think its not working.
                    <br/>Or Maybe my server crushed`,
                `I can't imagine my life without the server. Oh no! 🤦🏾‍♂️🤦🏾‍♂️🤦🏾‍♂️ my server is not online right now.<br/>
                Please, also make sure that your internet it working.`
            ]
        }
    },
    starters: {
        begin_air_booking: {
            start_msgs: [
                `Hey! &#128400;... We're only 4 steps away...
                    please tell me from where you are traveling and to where you are going. You should say something like
                    '<span class="support_chat_bot_msg_highlights">New York to Paris</span>',
                      or something like '<span class="support_chat_bot_msg_highlights">
                      United States to France</span>'...
                      , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
                `Sup! &#128400; kk.. let's dive right in... To start with, please tell me your departure and arrival places. You should say something like
                '<span class="support_chat_bot_msg_highlights">New York to Paris</span>'
                      , or something like '<span class="support_chat_bot_msg_highlights">United States to France</span>'
                        , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
                `Hi... We'll start with by collecting some information from you... So tell me from where you are traveling and to where you are going. You should say something like
                '<span class="support_chat_bot_msg_highlights">New York to Paris</span>'
                      , or something like '<span class="support_chat_bot_msg_highlights">United States to France</span>'
                        , or '<span class="support_chat_bot_msg_highlights">La Guardia to Charles de Gaulle Intl</span>'`,
            ]
        },
        no_bot_status_msgs: [
            "I'm unable to help you with that... sorry..."
        ]
    },
    stop_current_activity_commands: [
        "stop",
        "stop booking",
        "stop the booking",
        "end booking",
        "no more booking",
        "not booking anymore",
        "i'm not booking anymore",
        "i'am not booking",
        "not booking no more",
        "let's stop",
        "let's stop booking",
        "I want to stop booking",
    ],
    saying_yes_commands: [
        "yes", "absolutely", "sure", "perfect!", "perfect", "absolutely!",
        "yes!", "exactly", "exactly!", "sure!", "continue", "continue!",
        "proceed", "proceed!",
    ],
    in_activity_stop_current_activity_bot_responses: [
        "Ok cool...",
        "Got it... Let me know...",
        "Sure, no problem",
    ],
    idle_bot_stop_current_activity_responses: (user_query) => {
        return [
            `<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">${user_query.trim()}</span>? 😏 But We're already not doing any booking or cancellation to stop...`,
            `Hey! If we had started any booking, then saying "<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">${user_query.trim()}</span>" could help.`,
            `You got me confused. Please explain what you mean by "<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">${user_query.trim()}</span>" 😐`,
        ]
    },
    steps: {
        names: {
            TRIP_ROUND: "trip-round",
            ORIGIN_DESTINATION: "origin-destination",
            TRAVEL_DATES: "departure-return-dates",
            CABIN_CLASS: "cabin-class",
            FLIGHT_SEARCH: "searching-flight",
            TRAVELER_COUNT: "getting-travelers",
            PNR_RECORD: "pnr-recording",
        },
        origin_destination: {
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
            ],
            start_over_msgs: [
                `K.. cool.. in order to get the new airports please say something like
                '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... Else say '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>' so we can do something else...`
            ],
            start_over_msgs_in_origin_detination_stage: [
                `Yab! I should be expecting your airport inputs..
                say something like '<span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">New York to Paris</span>' or '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">United States to France</span>' or '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">La-guardia to Charles de gualle Intl</span>'... Else say '
                <span style="font-family: 'Prompt', sans-serif; font-size: 14px; color: rgb(174, 101, 0);">stop</span>' so we can do something else...`
            ],
            airports_found_confirmation_msgs: [
                `Cool.. I found a couple airports 🛫, select your departure and destination airports and then say '<span class="support_chat_bot_msg_highlights">
                done</span>' after that...`,
                `👍 Please.. look through the following airports 🛫, select your departure and destination and then reply '<span class="support_chat_bot_msg_highlights">
                done</span>' when you finish`,
                `Perfect! these 👇 airports 🛫 matched your reply.. Please select yours and reply with '<span class="support_chat_bot_msg_highlights">done</span>' to confirm`,
                `Great! These airports 👇 were found for your previous reply. Please select yours and reply '<span class="support_chat_bot_msg_highlights">done</span>' to proceed`,
                `Looking good 🙂... Please select your 🛫 airports from the list below and reply with '<span class="support_chat_bot_msg_highlights">done</span>' so I can confirm` ,
                `🙂 We're not wasting any of your time 🕐. Please select your airports and 'then say <span class="support_chat_bot_msg_highlights">done</span>' so we can proceed quickly`,
                `Hey Umm! 🤔 The lists below 👇 have departure and destination airports. Please select yours then reply with '<span class="support_chat_bot_msg_highlights">done</span>', then we will proceed.`,
                `Got it. 🤔 We found you some airports for depature and destination. You may pick yours and reply saying '<span class="support_chat_bot_msg_highlights">done</span>' to confirm with me`,
                `😃 You know.. when the prices get good like they are right now, we dont waste any time booking your flight. I have found a couple airports listed below 👇. Please select yours and reply '<span class="support_chat_bot_msg_highlights">done</span>' to proceed quickly`,
                `Getting there 💪... I have found a couple airports. Please select your departure and destination then reply with '<span class="support_chat_bot_msg_highlights">done</span>' so I can confirm.`,
            ],
            change_values_commands: [
                "changeairports", "change airports",
                "startover", "start over",
                "startagain", "start again"
            ],
            selected_a_airport_confirm_commands: [
                "done", "selected", "finished", "i have selected my airports",
                "i have selected", "i have chosen one", "i have chosen my airport",
                "i have selected one", "i have finished", "i have selected my airports",
                "i have chosen an airport",
            ]
        },
        cabin_class: {
            start_msgs: [
                `Alright... Almost done. Please provide flight class.. You should say one of the following.. '
                <span class="support_chat_bot_msg_highlights">first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `Kk! Flight class next... You should say one of the following.. '
                <span class="support_chat_bot_msg_highlights">first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `Perfect 👍... What flight class.. You should say one of the following.. '
                <span class="support_chat_bot_msg_highlights">
                first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
            ],
            validation_error_msgs: [
                `Your answer should be one of '<span class="support_chat_bot_msg_highlights">
                first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `You should say either '<span class="support_chat_bot_msg_highlights">
                first class</span>', or '<span class="support_chat_bot_msg_highlights">
                economy</span>', or '<span class="support_chat_bot_msg_highlights">
                business</span>', or '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`,
                `Umm... your answer didn't match any of '<span class="support_chat_bot_msg_highlights">
                first class</span>', '<span class="support_chat_bot_msg_highlights">
                economy</span>', '<span class="support_chat_bot_msg_highlights">
                business</span>', '<span class="support_chat_bot_msg_highlights">
                premium</span>', or '<span class="support_chat_bot_msg_highlights">
                cheapest</span>'`
            ],
            accepted_queries: [ "first class", "first-class", "firstclass", "first", "economy", "business", "premium", "cheapest" ],
            change_values_commands: [
                "changecabinclass", "change cabin class",
                "changeflightclass", "change flight class",
                "changeclass", "change class",
                "changecabin", "change cabin",
                "changetravelclass", "change travel class",
            ]
        },
        trip_round: {
            start_msgs: [
                `K.. cool 😎... do you want a return flight?... say '<span class="support_chat_bot_msg_highlights">
                round trip</span>' if you do or say '
                <span class="support_chat_bot_msg_highlights">one way</span>' if you dont`,
                `Looking good... 💪 Now do you want a "return flight" as well?...<br/>
                Say '<span class="support_chat_bot_msg_highlights">
                round trip</span>' if so. Also say '
                <span class="support_chat_bot_msg_highlights">one way</span>' if you want only the departure`,
                `Awsome 🙂...  Are we booking a return flight as well?... If so say '<span class="support_chat_bot_msg_highlights">
                round trip</span>'. For booking only the departure flight say '
                <span class="support_chat_bot_msg_highlights">one way</span>' if you dont`
            ],
            input_validation_error: [
                `I should be expecting you to say either '<span class="support_chat_bot_msg_highlights">
                round trip</span>' or '<span class="support_chat_bot_msg_highlights">
                one way</span>'`,
                `You should say '<span class="support_chat_bot_msg_highlights">
                round trip</span>' to include return flights or say '<span class="support_chat_bot_msg_highlights">
                one way</span>' for only departure flights`,
                `Ummm. You're supposed to say '<span class="support_chat_bot_msg_highlights">
                one way</span>' or '<span class="support_chat_bot_msg_highlights">
                round trip</span>'`
            ],
            accepted_queries: [
                "round trip", "one way", "one-way", "oneway", "roundtrip", "round-trip"
            ],
            change_values_commands: [
                "changetrip", "change trip",
                "changetripround", "change trip round",
                "addreturnflight", "add return flight"
            ]
        },
        getting_travelers: {
            start_msgs: [
                `Now... Let's see how may people you're booking for... Say something like '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `How many people are getting on the flight... You could say '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `How many people are you booking for... You could say '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or ' <span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
            ],
            validation_error_msgs: [
                `You should say something like '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or something like
                '<span class="support_chat_bot_msg_highlights">1 child</span>'
                ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Note that, adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `I'm expecting you to say something like '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`,
                `Say something like '<span class="support_chat_bot_msg_highlights">
                1 adult</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 child</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 1 infant</span>' ... or '<span class="support_chat_bot_msg_highlights">
                1 adult, 2 children, 1 infant</span>' ... Adults refer to 18 years and above,
                children refer to 2 to 17 years, infants refer to below 2 years, ...
                and only 'adult/adults, child/children, and infant/infants are allowed`
            ],
            change_values_commands: [
                "changetravelers", "change travelers",
                "changeflighttravelers", "change flight travelers",
                "changetraveler", "change traveler",
                "changeflighttraveler", "change flight traveler"
            ]
        },
        travel_dates: {
            one_way_start_msgs: [
                `Good! Now lets get your travel date 📆. Please Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
                `Getting there 💪🏼... When is your travel. Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
                `👍 OK time to get your traveling date! Please Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
            ],
            rount_trip_start_msgs: [
                `Cool.. Now lets get your departure and return date. Please Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
                `Getting there 💪🏼... When is your travel. Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
                `👍 OK time to get your traveling date! Please Say something like '<span class="support_chat_bot_msg_highlights">
                February 23, 2022 to February 28, 2022</span>' where <span class="support_chat_bot_msg_highlights">
                February</span> is the month and <span class="support_chat_bot_msg_highlights">
                23</span> is the date of month and <span class="support_chat_bot_msg_highlights">
                2022</span> is the year...`,
            ],
            change_values_commands: [
                "changedates", "change dates",
                "changedate", "change date",
                "changetraveldates", "change travel dates",
                "changetraveldate", "change travel date"
            ]
        },
        searching_flights: {
            change_values_commands: [
                "changeflight", "change flight",
                "pickanotherflight", "pick another flight",
                "chooseanotherflight", "choose another flight",
                "changeflightschedule", "change flight schedule"
            ],
            selected_a_flight_confirm_commands: [
                "done", "selected", "finished", "i have selected a flight",
                "i have selected", "i have chosen one", "i have chosen my flight",
                "i have selected one", "i have finished", "i have selected my flight",
                "i have chosen a flight", "continue", "proceed", "lets go", "let's go", "forward",
            ],
        },
        pnr_recording: {
            change_values_commands: [
                "changepassengerrecords", "change passenger records",
                "restartpassengerrecords", "restart passenger records",
                "changepnr", "change pnr",
                "changepassengernamerecord", "change passenger name record",
                "changepassengerdetails", "change passenger details",
                "changetravelerdetails", "change traveler details",
                "changetravelersdetails", "change travelers details"
            ]
        }
    }
}
window.virtual_assistant=virtual_assistant;

window.virtual_assistant_functions = {
    reset_bot_status: () => {
        virtual_assistant.state.status = "";
        virtual_assistant.state.step = "";
        virtual_assistant.state.scroll_chat=true;
        virtual_assistant.state.isTripRoundFirstEntered=true;
        virtual_assistant.state.isPNRFirstEntered=true;
        virtual_assistant.state.isDatesFirstEntered=true;
        virtual_assistant.state.isCabinClassFirstEntered=true;
        virtual_assistant.state.isSearchingFlightFirstEnter=true;
        virtual_assistant.state.isGettingTravelersFirstEntered=true;
        virtual_assistant.state.selectedOriginAirport="";
        virtual_assistant.state.selectedDestinationAirport="";
    },
    get_starter_message: (activity_type) => {
        if(activity_type===virtual_assistant.state.status_names.BEGIN_AIR_BOOKING){
            return virtual_assistant.starters.begin_air_booking.start_msgs[
                Math.floor(Math.random() *
                virtual_assistant.starters.begin_air_booking.start_msgs.length)]
        }
    },
    return_server_failed_error: () => {
        return virtual_assistant.server.msgs.failed[
            Math.floor(Math.random() * virtual_assistant.server.msgs.failed.length)];
    },
    return_no_bot_status_message: () => {
        return virtual_assistant.starters.no_bot_status_msgs[
            Math.floor(Math.random() * virtual_assistant.starters.no_bot_status_msgs.length)];
    },
    is_airports_change_values_command: (value) => {
        return virtual_assistant.steps.origin_destination.change_values_commands.includes(value);
    },
    is_trip_round_change_values_command: (value) => {
        return virtual_assistant.steps.trip_round.change_values_commands.includes(value);
    },
    is_travel_dates_change_values_command: (value) => {
        return virtual_assistant.steps.travel_dates.change_values_commands.includes(value);
    },
    is_cabin_class_change_values_command: (value) => {
        return virtual_assistant.steps.cabin_class.change_values_commands.includes(value);
    },
    is_travelers_change_values_command: (value) => {
        return virtual_assistant.steps.getting_travelers.change_values_commands.includes(value);
    },
    is_flight_search_change_values_command: (value) => {
        return virtual_assistant.steps.searching_flights.change_values_commands.includes(value);
    },
    is_selected_a_flight_confirmation_command: (value) => {
        return virtual_assistant.steps.searching_flights.selected_a_flight_confirm_commands.includes(value);
    },
    is_selected_airports_confirmation_command: (value) => {
        return virtual_assistant.steps.origin_destination.selected_a_airport_confirm_commands.includes(value);
    },
    is_pnr_change_values_command: (value) => {
        return virtual_assistant.steps.pnr_recording.change_values_commands.includes(value);
    },
    get_start_over_message: (origin_destination_stage=false) => {
        if(origin_destination_stage){
            return virtual_assistant.steps.origin_destination.start_over_msgs_in_origin_detination_stage[
                Math.floor(Math.random() *
                virtual_assistant.steps.origin_destination.start_over_msgs_in_origin_detination_stage.length)];
        }
        return virtual_assistant.steps.origin_destination.start_over_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.origin_destination.start_over_msgs.length)];
    },
    get_airports_found_confirmation_message: () => {
        return virtual_assistant.steps.origin_destination.airports_found_confirmation_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.origin_destination.airports_found_confirmation_msgs.length)];
    },
    get_trip_round_start_message: () => {
        return virtual_assistant.steps.trip_round.start_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.trip_round.start_msgs.length)];
    },
    get_trip_round_input_validation_error_message: () => {
        return virtual_assistant.steps.trip_round.input_validation_error[
            Math.floor(Math.random() *
            virtual_assistant.steps.trip_round.input_validation_error.length)];
    },
    get_travelers_input_validation_error_message: () => {
        return virtual_assistant.steps.getting_travelers.validation_error_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.getting_travelers.validation_error_msgs.length)]
    },
    get_travelers_input_start_message: () => {
        return virtual_assistant.steps.getting_travelers.start_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.getting_travelers.start_msgs.length)]
    },
    get_cabin_class_input_validation_error_message: () => {
        return virtual_assistant.steps.cabin_class.validation_error_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.cabin_class.validation_error_msgs.length)]
    },
    get_cabin_class_input_start_message: () => {
        return virtual_assistant.steps.cabin_class.start_msgs[
            Math.floor(Math.random() *
            virtual_assistant.steps.cabin_class.start_msgs.length)]
    },
    get_travel_dates_start_message: (cabin_type="one-way") => {
        if(cabin_type==="one-way"){
            return virtual_assistant.steps.travel_dates.one_way_start_msgs[
                Math.floor(Math.random() *
                virtual_assistant.steps.travel_dates.one_way_start_msgs.length)]
        }else if(cabin_type==="round-trip"){
            return virtual_assistant.steps.travel_dates.rount_trip_start_msgs[
                Math.floor(Math.random() *
                virtual_assistant.steps.travel_dates.rount_trip_start_msgs.length)]
        }
    },
    verify_trip_round_if_query_accepted: (value) => {
        return virtual_assistant.steps.trip_round.accepted_queries.includes(value);
    },
    verify_cabin_class_if_query_accepted: (value) => {
        return virtual_assistant.steps.cabin_class.accepted_queries.includes(value);
    },
    is_stop_current_activity_command: (value) => {
        return virtual_assistant.stop_current_activity_commands.includes(value);
    },
    is_saying_yes_command: (value) => {
        return virtual_assistant.saying_yes_commands.includes(value);
    },
    get_in_activity_stop_command_reponse: () => {
        return virtual_assistant.in_activity_stop_current_activity_bot_responses[
            Math.floor(Math.random() *
            virtual_assistant.in_activity_stop_current_activity_bot_responses.length)]
    },
    get_idle_bot_stop_current_activity_response: (value) => {
        let responses = virtual_assistant.idle_bot_stop_current_activity_responses(value);
        return responses[Math.floor(Math.random() * responses.length)];
    },

}

window.validate_user_airports_input_for_bot = (inputs) => {
    if(inputs.split(" ").includes("to")){
        let itin_obj = {
            from: inputs.split(" to ")[0].trim(),
            to: inputs.split(" to ")[1].trim()
        }
        return {
            isValid: true,
            origin: itin_obj.from,
            destination: itin_obj.to
        }
    }else{
        return {
            isValid: false,
            msg: virtual_assistant.steps.origin_destination.error_msgs[Math.floor(Math.random() * virtual_assistant.steps.origin_destination.error_msgs.length)]
        }
    }
}

window.validate_user_dates_input_for_bot = (inputs, trip_round) => {
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
                let pst_date_err_msg = [
                  `Umm.. The date you provided is past...`,
                  `Oops! The date you are giving is past...`,
                  `Hey, your date is a past date...`,
                  `So.. Please check your date. Its a past one!`,
                ]
                return{
                    isValid: false,
                    msg: pst_date_err_msg[Math.floor(Math.random() * pst_date_err_msg.length)]
                }
            }
            return {
                isValid: true,
                msg: `Ok great...`,
                date: new Date(the_date).toISOString(),
            }
        }

    }else if(trip_round==="round-trip"){

        let err_msg = [
            `Your answer must look like '<span class="support_chat_bot_msg_highlights">February 4, 2022 to February 10, 2022</span>'
            and each date must be in the form 'Month day, year', or say 'stop' to cancel flight booking all-together`,
            `I can't read your date. You should say something like '<span class="support_chat_bot_msg_highlights">
            February 4, 2022 to February 10, 2022</span>'... You can also say 'stop' to stop booking a flight`,
            `Your answer must look like '<span class="support_chat_bot_msg_highlights">February 16, 2022 to February 20, 2022</span>'
            and each. Where '<span class="support_chat_bot_msg_highlights">February</span>' or '<span class="support_chat_bot_msg_highlights">
            Feb</span>' is for month, and '<span class="support_chat_bot_msg_highlights">16</span>' and '
            <span class="support_chat_bot_msg_highlights">20</span>' for date of month, and '<span class="support_chat_bot_msg_highlights">
            2022</span>' for year...`

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
            if(the_date_1 < today){ // Departure Date
                let pst_dep_date_err_msg = [
                  `Umm.. The departure date you provided is past...`,
                  `Oops! The departure you are giving is past...`,
                  `Hey, your departure date is a past date...`,
                  `So.. Please check your departure date. Its a past one!`,
                ];
                return{
                    isValid: false,
                    msg: pst_dep_date_err_msg[Math.floor(Math.random() * pst_dep_date_err_msg.length)]
                }
            }
            if(the_date < today){ // Return Date
              let pst_ret_date_err_msg = [
                `Umm.. The return date you provided is past...`,
                `Oops! The return date you are giving is past...`,
                `Hey, your return date is a past date...`,
                `So.. Please check your return date. Its a past one!`,
              ];
              return{
                  isValid: false,
                  msg: pst_ret_date_err_msg[Math.floor(Math.random() * pst_ret_date_err_msg.length)]
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
                dep_date: new Date(the_date_1).toISOString(), // Departure Date
                arr_date: new Date(the_date).toISOString() // Return Date
            }
        }
    }
}

window.validate_travelers_input_for_bot = (input) => {
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
                    resp_obj.adults=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[0].trim(), 10);
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
                    resp_obj.adults=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=parseInt(travelers[2].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[2].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[2].trim(), 10);
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
                    resp_obj.adults=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[0].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=parseInt(travelers[2].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[2].trim(), 10);
                }
                if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[2].trim(), 10);
                }
                if(travelers[5].trim().toLowerCase() === "adult" || travelers[5].trim().toLowerCase() === "adults"){
                    resp_obj.isValid = true;
                    resp_obj.adults=parseInt(travelers[4].trim(), 10);
                }
                if(travelers[5].trim().toLowerCase() === "child" || travelers[5].trim().toLowerCase() === "children"){
                    resp_obj.isValid = true;
                    resp_obj.children=parseInt(travelers[4].trim(), 10);
                }
                if(travelers[5].trim().toLowerCase() === "infant" || travelers[5].trim().toLowerCase() === "infants"){
                    resp_obj.isValid = true;
                    resp_obj.infants=parseInt(travelers[4].trim(), 10);
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
                resp_obj.adults=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[0].trim(), 10);
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
                resp_obj.adults=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=parseInt(travelers[2].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[2].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[2].trim(), 10);
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
                resp_obj.adults=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "child" || travelers[1].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[1].trim().toLowerCase() === "infant" || travelers[1].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[0].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "adult" || travelers[3].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=parseInt(travelers[2].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "child" || travelers[3].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[2].trim(), 10);
            }
            if(travelers[3].trim().toLowerCase() === "infant" || travelers[3].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[2].trim(), 10);
            }
            if(travelers[5].trim().toLowerCase() === "adult" || travelers[5].trim().toLowerCase() === "adults"){
                resp_obj.isValid = true;
                resp_obj.adults=parseInt(travelers[4].trim(), 10);
            }
            if(travelers[5].trim().toLowerCase() === "child" || travelers[5].trim().toLowerCase() === "children"){
                resp_obj.isValid = true;
                resp_obj.children=parseInt(travelers[4].trim(), 10);
            }
            if(travelers[5].trim().toLowerCase() === "infant" || travelers[5].trim().toLowerCase() === "infants"){
                resp_obj.isValid = true;
                resp_obj.infants=parseInt(travelers[4].trim(), 10);
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
