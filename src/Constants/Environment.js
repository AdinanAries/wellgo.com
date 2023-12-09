import CONSTANTS from "./Constants";
import { create_anonymous_user_id } from "../helpers/general";

const ENVIRONMENT = {
    data_provider: "DUFFEL",
    wellgo_api_svr: "",
    wellgo_dev_api_svr: "http://localhost:4000",
    runtime: {
        env: "DEVELOPMENT"
    }
}

export const getApiHost = () => {
    return (ENVIRONMENT.runtime.env===CONSTANTS.prod) ?
        ENVIRONMENT.wellgo_api_svr : ENVIRONMENT.wellgo_dev_api_svr;
}

export const getUserToken = () => {
    let token="";
    if(localStorage.getItem("user_token"))
        token=localStorage.getItem("user_token");
    else
        localStorage.setItem("user_token", token);
    return token;
}

export const deleteUserToken = () => {
    localStorage.setItem("user_token", null);
}

export const getAnonymousID = () => {
    let id="";
    if(localStorage.getItem("anonymous_id")){
        id=localStorage.getItem("anonymous_id");
    }else{
        id=create_anonymous_user_id();
        localStorage.setItem("anonymous_id", id);
    }
    return id;
}

export default ENVIRONMENT;