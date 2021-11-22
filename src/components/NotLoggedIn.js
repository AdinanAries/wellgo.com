import loginIcon from "../icons/loginIcon.svg";

import { show_login_page } from '../helpers/PageRoutingFuncs';

export default function NotLoggedIn({msg}){
    return(
        <div>
            <div style={{backgroundImage: `url('${loginIcon}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

            </div>
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 17, marginTop: 10, marginBottom: 20, textAlign: "center", fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                <i style={{marginRight: 5, color: "orangered"}} className="fa fa-exclamation-triangle"></i>
                {msg}</p>
            <div style={{marginBottom: 30}}>
                <div onClick={show_login_page} style={{margin: "auto", cursor: "pointer", textAlign: "center", width: "fit-content", padding: "14px", boxShadow: "0 0 5px rgba(0,0,0,0.5)", backgroundColor: "rgb(43, 52, 61)", borderRadius: 50, color: "white"}}>
                <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                    Go to Login
                </div>
            </div>
        </div>
    );
}