const CONSTANTS = {
    our_company: {
        name: "to be discovered",
        product: "Wellgo",
        product_market_name: "to be discovered",
    },
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
        logged_in_usr: "logged_in_usr",
    },
    log_types: {
        activity: "activity",
        warning: "warning",
        error: "error",
        booking_error: "booking-error"
    },
    resource_types: {
        booking_history: "Booking History",
        user_favorites: "User Favorites",
    },
    checkout_pages: {
        info: "INFO_PAGE",
        pnr: "PNR_PAGE",
        payment: "PAYMENT_PAGE"
    },
    site_pages: {
        account: "account",
        landing: "home",
        search: "search",
        trips: "trips",
        explore: "explore",
        deals: "deals",
        support: "support",
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
            introduction_greetings: "introduction greetings",
            no_hotel_booking: "no hotel booking",
            no_cars_renting: "no cars renting",
            no_travel_packages : "no travel packages",
            uncompleted_pnr: "incomplete passenger name record",
            not_logged_in_on_checkout_complete: "checkout completed but user is not logged in",
        }
    },
    envs: [ "PRODUCTION", "DEVELOPMENT" ],
}

export default CONSTANTS;