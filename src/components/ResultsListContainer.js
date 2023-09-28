import explore_page_hero from "../explore_page_hero.jpg";

import deltaIcon from "../deltaIcon.png";
import airplane from "../icons/airplane.svg";

import { show_explore_page } from "../helpers/PageRoutingFuncs";
import FlightLoaderCard from "./FlightLoaderCard";
import FlightOfferItem from "./FlightOfferItem";

export default function ResultsListContainer(props){

    const FLIGHTS = props.flights.map((each, index) => <FlightOfferItem key={each} />);

    return (
        <div style={{marginTop: 10, minHeight: "calc(100vh - 300px)", padding: 0}}>
            
            <div id="search_results_mobile_top_itin_display">

            </div>
            <div className="search_list_main_flex_container">
                <div id="search_list_main__settings_section" className="search_list_main__settings_section">
                    
                </div>
                <div className="search_list_main_tickets_section">
                    <div id="animated_loader" style={{position: "relative", height: 190}}>
                        <div style={{backgroundImage: `url('${airplane}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: 120, height: 120, position: "absolute", left: "calc(50% - 80px)", zIndex: 2, animation: "the_moving_plane 15s ease-in-out infinite"}}></div>
                    </div>

                    <div id="search_result_important_notice">

                    </div>
                    
                    <div id="search_results_list_items">

                        { !props.loading ? FLIGHTS : "" }

                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        { props.loading ? <FlightLoaderCard /> : "" }
                        
                    </div>
                </div>
                <div className="search_list_main_ads_section">
                    <div style={{height: 500, backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", position: "relative", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{fontSize: 12, backgroundColor: "white", width: 40, textAlign: "center", borderRadius: 20, padding: 5, fontWeight: "bolder", position: "absolute", top: 10, right: 10}}>AD</p>
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 19}}>
                            Read, Travel,</p>
                        <p style={{marginTop: -5,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 17 }}>
                            and Become.</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            We've got trip ideas for you...
                        </p>
                        <div onClick={show_explore_page} style={{textAlign: "center", cursor: "pointer", width:"fit-content", backgroundColor: "#c900b0", fontSize: 14, fontFamily: "'Prompt', sans-serif", color: "white", padding: 14, borderRadius: 50}}>
                            <i className="fa fa-globe" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>
                            Explore now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
