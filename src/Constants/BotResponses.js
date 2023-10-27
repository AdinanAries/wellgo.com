const getBotResponse = (type) => {
    return BotResponses[type][Math.floor(Math.random() * BotResponses[type].length)];
}

export default getBotResponse;

const BotResponses = {
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
    ]
}