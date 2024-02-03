const FULL_FLIGHT_DETAILS = {
    "data": {
        "total_emissions_kg": "92",
        "allowed_passenger_identity_document_types": [
            "passport",
            "tax_id",
            "known_traveler_number",
            "passenger_redress_number"
        ],
        "payment_requirements": {
            "price_guarantee_expires_at": "2024-02-05T13:45:26Z",
            "payment_required_by": "2024-02-06T13:45:26Z",
            "requires_instant_payment": false
        },
        "available_services": [],
        "supported_passenger_identity_document_types": [
            "passport",
            "known_traveler_number",
            "passenger_redress_number"
        ],
        "passenger_identity_documents_required": false,
        "tax_currency": "USD",
        "base_currency": "USD",
        "base_amount": "428.19",
        "private_fares": [],
        "tax_amount": "77.07",
        "total_currency": "USD",
        "total_amount": "505.26",
        "created_at": "2024-02-03T13:45:26.777875Z",
        "live_mode": false,
        "slices": [
            {
                "destination_type": "airport",
                "origin_type": "airport",
                "fare_brand_name": "Basic",
                "conditions": {
                    "change_before_departure": {
                        "penalty_currency": null,
                        "penalty_amount": null,
                        "allowed": false
                    }
                },
                "segments": [
                    {
                        "origin_terminal": "2",
                        "destination_terminal": "1",
                        "aircraft": {
                            "iata_code": "33Y",
                            "name": "Airbus A330-300",
                            "id": "arc_00009oBdrPis4D1mAnkllV"
                        },
                        "departing_at": "2024-02-11T07:44:00",
                        "arriving_at": "2024-02-11T20:42:00",
                        "stops": [],
                        "operating_carrier": {
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/IB.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/IB.svg",
                            "conditions_of_carriage_url": "https://www.iberia.com/gb/bills/conditions/",
                            "iata_code": "IB",
                            "name": "Iberia",
                            "id": "arl_00009VME7DCOaPRQvNhcMu"
                        },
                        "marketing_carrier": {
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/IB.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/IB.svg",
                            "conditions_of_carriage_url": "https://www.iberia.com/gb/bills/conditions/",
                            "iata_code": "IB",
                            "name": "Iberia",
                            "id": "arl_00009VME7DCOaPRQvNhcMu"
                        },
                        "operating_carrier_flight_number": "3167",
                        "marketing_carrier_flight_number": "3167",
                        "distance": "5539.8359982030115",
                        "passengers": [
                            {
                                "cabin": {
                                    "amenities": {
                                        "wifi": {
                                            "cost": "paid",
                                            "available": true
                                        },
                                        "seat": {
                                            "pitch": "30",
                                            "legroom": "n/a"
                                        },
                                        "power": {
                                            "available": true
                                        }
                                    },
                                    "marketing_name": "Economy",
                                    "name": "economy"
                                },
                                "baggages": [
                                    {
                                        "quantity": 1,
                                        "type": "checked"
                                    },
                                    {
                                        "quantity": 1,
                                        "type": "carry_on"
                                    }
                                ],
                                "cabin_class_marketing_name": "Economy",
                                "passenger_id": "pas_0000AeVUZWXhEs7Ejp1B1t",
                                "fare_basis_code": "Y20LGTN2",
                                "cabin_class": "economy"
                            }
                        ],
                        "duration": "PT7H58M",
                        "destination": {
                            "icao_code": "EGLL",
                            "city_name": "London",
                            "iata_city_code": "LON",
                            "airports": null,
                            "iata_country_code": "GB",
                            "iata_code": "LHR",
                            "latitude": 51.470311,
                            "longitude": -0.458118,
                            "city": {
                                "icao_code": null,
                                "city_name": null,
                                "iata_city_code": "LON",
                                "iata_country_code": "GB",
                                "iata_code": "LON",
                                "latitude": null,
                                "longitude": null,
                                "time_zone": null,
                                "type": "city",
                                "name": "London",
                                "id": "cit_lon_gb"
                            },
                            "time_zone": "Europe/London",
                            "type": "airport",
                            "name": "Heathrow Airport",
                            "id": "arp_lhr_gb"
                        },
                        "origin": {
                            "icao_code": "KJFK",
                            "city_name": "New York",
                            "iata_city_code": "NYC",
                            "airports": null,
                            "iata_country_code": "US",
                            "iata_code": "JFK",
                            "latitude": 40.640556,
                            "longitude": -73.778519,
                            "city": {
                                "icao_code": null,
                                "city_name": null,
                                "iata_city_code": "NYC",
                                "iata_country_code": "US",
                                "iata_code": "NYC",
                                "latitude": null,
                                "longitude": null,
                                "time_zone": null,
                                "type": "city",
                                "name": "New York",
                                "id": "cit_nyc_us"
                            },
                            "time_zone": "America/New_York",
                            "type": "airport",
                            "name": "John F. Kennedy International Airport",
                            "id": "arp_jfk_us"
                        },
                        "id": "seg_0000AeVUZWo0GF9xYOeCR6"
                    }
                ],
                "duration": "PT7H58M",
                "destination": {
                    "icao_code": "EGLL",
                    "city_name": "London",
                    "iata_city_code": "LON",
                    "airports": null,
                    "iata_country_code": "GB",
                    "iata_code": "LHR",
                    "latitude": 51.470311,
                    "longitude": -0.458118,
                    "city": {
                        "icao_code": null,
                        "city_name": null,
                        "iata_city_code": "LON",
                        "iata_country_code": "GB",
                        "iata_code": "LON",
                        "latitude": null,
                        "longitude": null,
                        "time_zone": null,
                        "type": "city",
                        "name": "London",
                        "id": "cit_lon_gb"
                    },
                    "time_zone": "Europe/London",
                    "type": "airport",
                    "name": "Heathrow Airport",
                    "id": "arp_lhr_gb"
                },
                "origin": {
                    "icao_code": "KJFK",
                    "city_name": "New York",
                    "iata_city_code": "NYC",
                    "airports": null,
                    "iata_country_code": "US",
                    "iata_code": "JFK",
                    "latitude": 40.640556,
                    "longitude": -73.778519,
                    "city": {
                        "icao_code": null,
                        "city_name": null,
                        "iata_city_code": "NYC",
                        "iata_country_code": "US",
                        "iata_code": "NYC",
                        "latitude": null,
                        "longitude": null,
                        "time_zone": null,
                        "type": "city",
                        "name": "New York",
                        "id": "cit_nyc_us"
                    },
                    "time_zone": "America/New_York",
                    "type": "airport",
                    "name": "John F. Kennedy International Airport",
                    "id": "arp_jfk_us"
                },
                "id": "sli_0000AeVUZWo0GF9xYOeCR7"
            },
            {
                "destination_type": "airport",
                "origin_type": "airport",
                "fare_brand_name": "Basic",
                "conditions": {
                    "change_before_departure": {
                        "penalty_currency": null,
                        "penalty_amount": null,
                        "allowed": false
                    }
                },
                "segments": [
                    {
                        "origin_terminal": "2",
                        "destination_terminal": "1",
                        "aircraft": {
                            "iata_code": "33Y",
                            "name": "Airbus A330-300",
                            "id": "arc_00009oBdrPis4D1mAnkllV"
                        },
                        "departing_at": "2024-02-13T09:17:00",
                        "arriving_at": "2024-02-13T12:15:00",
                        "stops": [],
                        "operating_carrier": {
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/IB.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/IB.svg",
                            "conditions_of_carriage_url": "https://www.iberia.com/gb/bills/conditions/",
                            "iata_code": "IB",
                            "name": "Iberia",
                            "id": "arl_00009VME7DCOaPRQvNhcMu"
                        },
                        "marketing_carrier": {
                            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/IB.svg",
                            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/IB.svg",
                            "conditions_of_carriage_url": "https://www.iberia.com/gb/bills/conditions/",
                            "iata_code": "IB",
                            "name": "Iberia",
                            "id": "arl_00009VME7DCOaPRQvNhcMu"
                        },
                        "operating_carrier_flight_number": "3167",
                        "marketing_carrier_flight_number": "3167",
                        "distance": "5539.8359982030115",
                        "passengers": [
                            {
                                "cabin": {
                                    "amenities": {
                                        "wifi": {
                                            "cost": "paid",
                                            "available": true
                                        },
                                        "seat": {
                                            "pitch": "30",
                                            "legroom": "n/a"
                                        },
                                        "power": {
                                            "available": true
                                        }
                                    },
                                    "marketing_name": "Economy",
                                    "name": "economy"
                                },
                                "baggages": [
                                    {
                                        "quantity": 1,
                                        "type": "checked"
                                    },
                                    {
                                        "quantity": 1,
                                        "type": "carry_on"
                                    }
                                ],
                                "cabin_class_marketing_name": "Economy",
                                "passenger_id": "pas_0000AeVUZWXhEs7Ejp1B1t",
                                "fare_basis_code": "Y20LGTN2",
                                "cabin_class": "economy"
                            }
                        ],
                        "duration": "PT7H58M",
                        "destination": {
                            "icao_code": "KJFK",
                            "city_name": "New York",
                            "iata_city_code": "NYC",
                            "airports": null,
                            "iata_country_code": "US",
                            "iata_code": "JFK",
                            "latitude": 40.640556,
                            "longitude": -73.778519,
                            "city": {
                                "icao_code": null,
                                "city_name": null,
                                "iata_city_code": "NYC",
                                "iata_country_code": "US",
                                "iata_code": "NYC",
                                "latitude": null,
                                "longitude": null,
                                "time_zone": null,
                                "type": "city",
                                "name": "New York",
                                "id": "cit_nyc_us"
                            },
                            "time_zone": "America/New_York",
                            "type": "airport",
                            "name": "John F. Kennedy International Airport",
                            "id": "arp_jfk_us"
                        },
                        "origin": {
                            "icao_code": "EGLL",
                            "city_name": "London",
                            "iata_city_code": "LON",
                            "airports": null,
                            "iata_country_code": "GB",
                            "iata_code": "LHR",
                            "latitude": 51.470311,
                            "longitude": -0.458118,
                            "city": {
                                "icao_code": null,
                                "city_name": null,
                                "iata_city_code": "LON",
                                "iata_country_code": "GB",
                                "iata_code": "LON",
                                "latitude": null,
                                "longitude": null,
                                "time_zone": null,
                                "type": "city",
                                "name": "London",
                                "id": "cit_lon_gb"
                            },
                            "time_zone": "Europe/London",
                            "type": "airport",
                            "name": "Heathrow Airport",
                            "id": "arp_lhr_gb"
                        },
                        "id": "seg_0000AeVUZWo0GF9xYOeCR8"
                    }
                ],
                "duration": "PT7H58M",
                "destination": {
                    "icao_code": "KJFK",
                    "city_name": "New York",
                    "iata_city_code": "NYC",
                    "airports": null,
                    "iata_country_code": "US",
                    "iata_code": "JFK",
                    "latitude": 40.640556,
                    "longitude": -73.778519,
                    "city": {
                        "icao_code": null,
                        "city_name": null,
                        "iata_city_code": "NYC",
                        "iata_country_code": "US",
                        "iata_code": "NYC",
                        "latitude": null,
                        "longitude": null,
                        "time_zone": null,
                        "type": "city",
                        "name": "New York",
                        "id": "cit_nyc_us"
                    },
                    "time_zone": "America/New_York",
                    "type": "airport",
                    "name": "John F. Kennedy International Airport",
                    "id": "arp_jfk_us"
                },
                "origin": {
                    "icao_code": "EGLL",
                    "city_name": "London",
                    "iata_city_code": "LON",
                    "airports": null,
                    "iata_country_code": "GB",
                    "iata_code": "LHR",
                    "latitude": 51.470311,
                    "longitude": -0.458118,
                    "city": {
                        "icao_code": null,
                        "city_name": null,
                        "iata_city_code": "LON",
                        "iata_country_code": "GB",
                        "iata_code": "LON",
                        "latitude": null,
                        "longitude": null,
                        "time_zone": null,
                        "type": "city",
                        "name": "London",
                        "id": "cit_lon_gb"
                    },
                    "time_zone": "Europe/London",
                    "type": "airport",
                    "name": "Heathrow Airport",
                    "id": "arp_lhr_gb"
                },
                "id": "sli_0000AeVUZWo0GF9xYOeCRA"
            }
        ],
        "passengers": [
            {
                "loyalty_programme_accounts": [],
                "family_name": null,
                "given_name": null,
                "age": null,
                "type": "adult",
                "id": "pas_0000AeVUZWXhEs7Ejp1B1t"
            }
        ],
        "conditions": {
            "refund_before_departure": {
                "penalty_currency": null,
                "penalty_amount": null,
                "allowed": false
            },
            "change_before_departure": {
                "penalty_currency": null,
                "penalty_amount": null,
                "allowed": false
            }
        },
        "updated_at": "2024-02-03T14:00:20.671316Z",
        "expires_at": "2024-02-03T14:15:26.776706Z",
        "partial": false,
        "owner": {
            "logo_symbol_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/IB.svg",
            "logo_lockup_url": "https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/IB.svg",
            "conditions_of_carriage_url": "https://www.iberia.com/gb/bills/conditions/",
            "iata_code": "IB",
            "name": "Iberia",
            "id": "arl_00009VME7DCOaPRQvNhcMu"
        },
        "id": "off_0000AeVUZWo0GF9xYOeCRG"
    },
    "headers": {}
}