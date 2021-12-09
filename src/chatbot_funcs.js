import { chat_bot_msg } from "./chatbot_msgs";
import { chat_bot_new_msg } from "./components/ExploreDestination"

export function return_new_rand_msg(){
    return chat_bot_msg.msgs[Math.floor(Math.random() * chat_bot_msg.msgs.length)].msg;
}

setInterval(() => {
    chat_bot_new_msg(return_new_rand_msg());
}, 20000);