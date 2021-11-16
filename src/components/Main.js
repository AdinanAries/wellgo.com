import SearchForm from "./SearchForm";
import ChooseUs from "./ChooseUs";
import DownloadMobileApp from "./DownloadMobileApp";
import ExploreDestinations from "./ExploreDestination";

function Main(){
    return (
        <main>
            <div id="main_hero_section" className="hero-section">
                <div style={{maxWidth: 1500, margin: "auto"}}>
                    <div className="search-form-container">
                        <SearchForm />
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