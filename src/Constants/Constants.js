const CONSTANTS = {
    viewport_threshold: 1000,
    infant_age_threshold: 5,
    special_str_separator: " [$/*S#_P#_R#T*/$] ",
    round_trip: "ROUND-TRIP",
    one_way: "ONE-WAY",
    duffel: "DUFFEL",
    dev: "DEVELOPMENT",
    prod: "PRODUCTION",
    default_currency: "USD",
    default_language: "ENGLISH",
    local_storage: {
        wellgo_usr_curr: "wellgo_usr_curr",
        wellgo_usr_lang: "wellgo_usr_lang",
        flight_search_object: "search_obj",
        wellgo_page: "wellgo_page"
    },
    checkout_pages: {
        info: "INFO_PAGE",
        pnr: "PNR_PAGE",
        payment: "PAYMENT_PAGE"
    },
    site_pages: {
        account: "account",
        landing: "landing",
        search: "search",
    },
    duffel_checkout: {
        payment: {
            types: {
                balance: "balance",
                arc_bsp_cash: "arc_bsp_cash",
            }
        }
    },
    prices: {
        markup_percentage: 10,
    },
    bot: {
        prompt_types: {
            warn: "warn",
            prompt: "prompt",
        },
        responses: {
            no_hotel_booking: "no hotel booking",
            no_cars_renting: "no cars renting",
            no_travel_packages : "no travel packages",
        }
    },
    envs: [ "PRODUCTION", "DEVELOPMENT" ],
}

export default CONSTANTS;