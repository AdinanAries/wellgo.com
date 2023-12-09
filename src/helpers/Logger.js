import { postLog } from "../services/activityServices";
import { verifyUserToken } from "../services/sessionServices";
import CONSTANTS from "../Constants/Constants";
import { getAnonymousID } from "../Constants/Environment";


const getClient = async () => {
    let client={}
    let verify_res = await verifyUserToken();
    if(verify_res.valid){
        // Logged user details
        client.user=verify_res.data;
        client.anonymous_id="";
    }else{
        // Anonymous id for non-logged-in users
        client.user={};
        client.anonymous_id=getAnonymousID();
    }
    // Browser
    client.device=navigator.userAgent;
    return client;
}

/**
 * 
 * 
 */
const construct_html_message = (type="", header_text="", body_text="") => {
    return `
        <div style="padding: 10px;">
            <h1>${header_text}</p>
            <p>${body_text}</p>
        </div>
    `;
}

const Logger = {
    /**
     * 
     * @param {*} type 
     */
    log_activity: async (
        msgObj={
            title: "",
            body: "",
            resource_id: "",
            resource_type: "",
        }, 
        type=CONSTANTS.log_types.activity
    ) => {
            let res;
            let client = await getClient();
            let post_obj = {
                client: client,
                title: msgObj.title,
                body: msgObj.body,
                resource_id: msgObj.resource_id,
                resource_type: msgObj.resource_type,
            }
            if(type===CONSTANTS.log_types.activity){
                post_obj.type=CONSTANTS.log_types.activity;
                res = await postLog(post_obj);
            }
            return res;
    },

    /**
     * 
     * 
     */
    alert_email: (
        msgObj={
            title: "",
            body: "",
        }, type="", activity_ref=null) => {

    },

    /**
     * 
     * 
     */
    alert_text: (
        msgObj={
            title: "",
            body: "",
        }, type="", activity_ref=null) => {

    },
    
}

export default Logger;