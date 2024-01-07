const getBotResponse = (type) => {
    return BotResponses[type][Math.floor(Math.random() * BotResponses[type].length)];
}

export default getBotResponse;

const BotResponses = {
    "introduction greetings": [
        `I'm AD, I'll be assisting you around here... cheers...`,
        `AD here, I'm your AI assitant. Feel free to reach out anytime. Cheers...`,
        `Thanks for choosing us. I'm AD, your assistant here... 
        I was just checking the flight prices, there's been a drop. Cheers..., 
        I encourage you to book your flights ASAP. Cheers...`,
        `Cheers... call me AD, I'm your AI assistant. Cheers...`
    ],
    "no hotel booking": [
        "We can't book hotels for now",
        "Hotel booking isn't allowed at the moment",
        "No Hotel search can be done for now",
        "We are doing some maintenance work. Hotel booking isn't possible right now"
    ],
    "no cars renting": [
        "Cars search cannot be done today due to site maintenance",
        "You can't search cars today",
        "We are making some fixes in order to enable car rentals. In the meantime try something else",
        "I promise you that we'll work around the clock to enable car rentals soon",
        "IT department are still working on enabling car rentals feature..."
    ],
    "no travel packages": [
        "No travel packages are available at the moment",
        "Travel packages feature isn't activated at the moment",
        "Please try another time. We have no travel packages at the moment",
        "Travel Packages is deactivated due to site maintenance"
    ],
    "incomplete passenger name record": [
        `In order to continue to payment, you must provide complete information for all  
        passengers. Also, for all infant passenger, 
        one adult passenger must be selected for each,
         as the person responsible for the infant. 
         You may click on the each passenger card in order to open their form`,
        `You must provide complete information for all  
        passengers. And, for each infant passenger, 
        an adult passenger must be chosen to be responsible for them. 
        You may click on the each passenger card in order to open their form`,
        `You cant continue, if passenger information is not completed. 
        And, each infant passenger must have an adult to fly with them. 
        Click on each passenger card will open their form`
    ],
    "checkout completed but user is not logged in": [
        `This booking will be saved as anonymous!
        The booking has been confirmed by the airline,
        however since you are not logged in,
        retrieving the record for this booking will not 
        be as simple as viewing your booking history
        on user account page. 
        You may proceed to view the booking details with or without login. 
        Also, you may register later in case you dont have an account already
        `
    ],
    "no language support": [
        "Lanuguage support has been disabled for maintenance purposes",
        "No language support for now",
        "Only English language can be used for now",
        "IT department is working to re-enabling language support",
    ],
    "no currency support": [
        "Currency support has been disabled for maintenance purposes",
        "No currency support for now",
        "Only US Dollar currency can be used for now",
        "IT department is working to re-enable currency support"
    ]
}