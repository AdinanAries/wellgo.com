import { show_login_page, show_full_search_form, show_trips_page, show_deals_page, show_help_page, show_explore_page } from '../../../helpers/PageRoutingFuncs';

const HeroMainMenu = (props) => {
    return (
        <div style={{border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, marginBottom: 40}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div onClick={show_full_search_form} style={{cursor: "pointer", textAlign: "center", color: "#d66aca", marginLeft: 20, fontSize: 14, borderBottom: "3px solid #d66aca", padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-plane-departure"></i>
                    Flights</div>
                <div style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-hotel"></i>
                    Stays</div>
                <div style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-car"></i>
                    Cars</div>
                <div style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-box-open"></i>
                    Packages</div>
                <div id="landing_page_hero_manu_bar_bot_item" style={{cursor: "pointer", textAlign: "center", color: "rgba(169, 221, 255, 0.8)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-robot"></i>
                    Agent</div>
                <div style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-globe"></i>
                    USD</div>
                <div style={{cursor: "not-allowed", textAlign: "center", color: "rgba(255,255,255,0.4)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-language"></i>
                    English</div>
                <div style={{cursor: "pointer", textAlign: "center", color: "rgba(169, 221, 255, 0.8)", marginLeft: 20, fontSize: 14, padding: "20px 10px", fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10}} className="fa-solid fa-bars"></i>
                    More
                </div>
            </div>
        </div>
    );
}

export default HeroMainMenu;