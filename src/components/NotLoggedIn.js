import loginIcon from "../icons/loginIcon.svg";

import { show_login_page } from '../helpers/PageRoutingFuncs';

export default function NotLoggedIn({msg}){
    return(
        <div>
            <div style={{backgroundImage: `url('${loginIcon}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

            </div>
            <p style={{color: "rgba(0,0,0,0.8)", fontSize: 17, marginTop: 10, marginBottom: 20, textAlign: "center",}}>
                <i style={{marginRight: 5, color: "orangered"}} className="fa fa-exclamation-triangle"></i>
                {msg}</p>
            <div style={{marginBottom: 30}}>
                <div onClick={show_login_page} style={{margin: "auto", cursor: "pointer", textAlign: "center", maxWidth: 450, padding: "14px 10px", backgroundColor: "rgb(43, 52, 61)", borderRadius: 50, color: "white"}}>
                    Login or Create an Account
                </div>
            </div>
        </div>
    );
}