const FlightOfferItem = (props) => {
    //onclick="show_selected_ticket_details_pane()"
    return (
        <div style={{cursor: "pointer", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: 9, marginBottom: 10, padding: "15px 10px"}}>
            <div className="each_ticket_upper_flex" style={{flexDirection: "row", justifyContent: "space-between"}}>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontWeight: "bolder", fontSize: 16, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        9:45am - 2:54pm</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12,}}>
                        Montreal (YUB) - New York (LGA)</p>
                </div>
                <div>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>5h 9m (1 stop)</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>2h 1m in Toronto(yyz)</p>
                </div>
                <div className="each_ticket_price_display_container">
                    <p className="each_ticket_price_display" style={{color: "rgba(0,0,0,0.8)", fontWeight: 1000, fontSize: 27, fontFamily: "'Prompt', Sans-serif", marginBottom: 2}}>
                        $335</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>Roundtrip per traveler</p>
                </div>
            </div>
            <div style={{marginTop: 5}}>
                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12, marginBottom: 10}}>
                    <img src={"./deltaIcon.png"} alt={"test"} style={{width: 27, height: "auto", objectFit: "cover"}} />
                    Delta &#8226;
                    Delta 7204 and 7138 operated by WestJet
                </p>
                <p style={{color: "rgba(0,0,0,0.8)", fontSize: 12}}>
                    2 cleaning and safety practices
                </p>
            </div>
        </div>
    );
}

export default FlightOfferItem;