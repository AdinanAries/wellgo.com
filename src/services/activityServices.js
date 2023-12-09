import { getApiHost, getUserToken } from "../Constants/Environment";

const API_URL = getApiHost();
const USER_TOKEN = getUserToken();

export const postLog = (payload, path="") => {
    console.log(payload);
    console.log("Posting Log");
    return payload;
}