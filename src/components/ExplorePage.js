import explore_page_hero from "../explore_page_hero.jpg";
import { show_home_page } from "../helpers/PageRoutingFuncs";

export default function ExplorePage(){
    return (
        <main style={{display: "none"}} id="explore_page">
            <div className="wrapper">
                <div style={{margin: 10, backgroundColor: "rgba(255,0,0,0.1)", padding: 10, borderRadius: 5, border: "1px solid rgba(255,0,0,0.1)"}}>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 16, fontFamily: "'Prompt', sans-serif", fontWeight: "bolder", marginBottom: 10}}>
                        <i className="fa fa-wrench" style={{fontSize: 19, marginRight: 5}}></i>Maintenance Notice
                    </p>
                    <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>
                        Due to expansion of services and maintenance work, we are unable to show trip destinations at this moment. 
                        We apologize for any inconvenience
                    </p>
                </div>
                <div style={{marginBottom: 30, height: 500, backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 38}}>
                        See the world,</p>
                    <p style={{marginTop: -9,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 30 }}>
                        with a third eye</p>
                    <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                        We got you on these amaizing trip ideas that will 
                        make you want to do it over again
                    </p>
                    <div style={{backgroundColor: "rgba(0,0,0,0.4)", fontFamily: "'Prompt', sans-serif", color: "white", padding: 14}}>
                        <i className="fa fa-exclamation-triangle" style={{color: "yellow", marginRight: 10}}></i>
                        Opps! something went wrong
                    </div>
                    <div onClick={show_home_page} style={{backgroundColor: "slateblue", padding: 14, color: "white", cursor: "pointer", marginTop: 20, width: "fit-content", borderRadius: 9, }}>
                        <i className="fa fa-home" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>go to home page
                    </div>
                </div>
            </div>
        </main>
    );
}