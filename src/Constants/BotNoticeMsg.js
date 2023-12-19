const getBotNoticeMessage = () => {
    return BotResponses.msgs[Math.floor(Math.random() * BotResponses.msgs.length)].msg;
}

export const getBotGreeting = () => {
    return BotResponses.greetings[Math.floor(Math.random() * BotResponses.greetings.length)];
}

export default getBotNoticeMessage;

const BotResponses = {
    msgs: [
        {
            type: "notice",
            msg: "&#129488; I was digging... prices dropped again"

        },
        {
            type: "notice",
            msg: "&#129488; Whoa... prices keep dropping..."

        },
        {
            type: "notice",
            msg: "Umm, this pink button will show buttons below &#128073;"

        },
        {
            type: "notice",
            msg: "FYI, having an account gets you discounts"

        },
        {
            type: "notice",
            msg: "Having an account can get you discounts"

        },
        {
            type: "notice",
            msg: "Hey! I'm thinking about something &#129300;&#129300;&#129300;..."

        },
        {
            type: "notice",
            msg: "&#129300; Lets get you flying ASAP, Right? &#129300; .."

        },
        {
            type: "notice",
            msg: "Hey! &#128073; click here... &#128072; .."
        },
        {
            type: "notice",
            msg: "&#128072; Tap me for a chat.."

        },
        {
            type: "notice",
            msg: "&#128072; You need help? Tap me..."

        },
        {
            type: "notice",
            msg: "This button hides/shows buttons below &#128073;"

        },
        {
            type: "notice",
            msg: "Hey! &#128073; click here... &#128072;"
        },
        {
            type: "notice",
            msg: "&#128071; The search fligts button opens the form"

        },
        {
            type: "notice",
            msg: "The get help button &#128071; opens help page"

        },
        {
            type: "notice",
            msg: "I think, Umm.. &#129300; Nevermind &#128580;&#128578; .."
        },
        {
            type: "notice",
            msg: "Umm... &#129300; Nevermind... &#128578;&#128580; .."
        },
        {
            type: "notice",
            msg: "Look.. &#128073; click here &#128072; ..."
        },
        {
            type: "notice",
            msg: "&#128073; click here &#128072; to will open the search form"
        }
    ],
    greetings: [
        "&#128400; Hi...",
        "Hi.. &#128400; ..",
        "Hi, &#128400; ...",
        "&#128400; Sup..",
        "Hi &#128400; .."
    ]
}