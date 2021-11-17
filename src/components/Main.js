import SearchForm from "./SearchForm";
import ChooseUs from "./ChooseUs";
import DownloadMobileApp from "./DownloadMobileApp";
import ExploreDestinations from "./ExploreDestination";

import explore_page_hero from "../explore_page_hero.jpg";

function Main(){
    return (
        <main>
            <div id="main_hero_section" className="hero-section">
                <div style={{maxWidth: 1500, margin: "auto"}}>
                    <div className="search-form-container">
                        <SearchForm />
                    </div>
                </div>
                <div className="wrapper">
                    <div style={{marginTop: 10, height: "calc(100vh - 390px)", boxShadow: "0 0 5px rgba(0,0,0,0.3)", backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 50}}>
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 35}}>
                            See the world,</p>
                        <p style={{marginTop: -9,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 28 }}>
                            with a third eye</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            We got you on these amaizing trip ideas that will 
                            make you want to do it over again
                        </p>
                        <div style={{backgroundColor: "slateblue", padding: 14, color: "white", cursor: "pointer", fontFamily: "'Prompt', sans-serif", marginTop: 20, width: "fit-content", borderRadius: 50}}>
                            Start exploring
                        </div>
                    </div>
                </div>
            </div>
            <ExploreDestinations />
            <ChooseUs />
            <DownloadMobileApp />
        </main>
    );
}

export default Main;