const OrderCompletedPage = (props) => {

    const { 
        pickAnotherFlightOnclick,
        goHome,
        completedOrderDetails 
    } = props;

    return (
        <div style={{position: "relative"}}>
            <div style={{padding: "20px 0"}}>
                <p className="pop-up-close-btn" onClick={pickAnotherFlightOnclick} 
                    style={{cursor: "pointer", color: "rgb(255,0,0)", fontSize: 33, position: "absolute", right: 10, top: 10}}>
                    &times;
                </p>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, fontWeight: "bolder"}}>
                    <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-ticket"></i>
                    Reference Number:
                    <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 13}}>
                        {completedOrderDetails.booking_reference}
                    </span>
                </p>
                <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                    <i style={{marginRight: 10, color: "green"}} className="fa-solid fa-check"></i>
                    Your booking has been confirmed!
                    <span style={{fontFamily: "'Prompt', Sans-serif", marginLeft: 5, color: "rgba(0,0,0,0.7)", fontSize: 14}}>
                        What's next?
                    </span>
                </p>
                <div style={{padding: 10}}>
                    <div style={{display: "flex"}}>
                    <div style={{textAlign: "center", cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plus"></i>
                            add ancillaries
                        </div>
                        <div onClick={pickAnotherFlightOnclick} style={{textAlign: "center", cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plane-departure"></i>
                            pick another flight
                        </div>
                        <div onClick={goHome} style={{textAlign: "center", cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-home"></i>
                            go home
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: "5px 0"}}>
                        See Details Below: <span style={{cursor: "pointer", color: "darkslateblue", fontFamily: "'Prompt', Sans-serif", textDecoration: "underline"}}>
                            Click to Print</span></p>
                    <div style={{border: "1px dashed rgba(0,0,0,0.1)", padding: 10}}>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Segments/Stops</h1>
                        <div>
                            <div style={{display: "flex", paddingBottom: 10}}>
                                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                    <i style={{color: "rgba(0,0,0,0.5)"}}
                                            className="fa-solid fa-plane-departure"></i>
                                </div>
                                <div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                        New York - Laguardia Airport
                                        to
                                        Accra - Kotoka Int. Airport
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Nov 23rd, 2023 - Nov 24th, 2023
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Take off: 9:45pm, Aircraft: Boem1455, Checked bags: 4
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Amenities: wifi, power, seat 44E
                                    </p>
                                </div>
                            </div>
                            <div style={{display: "flex", paddingBottom: 10}}>
                                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                    <i style={{color: "rgba(0,0,0,0.5)"}}
                                            className="fa-solid fa-plane-departure"></i>
                                </div>
                                <div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                        New York - Laguardia Airport
                                        to
                                        Accra - Kotoka Int. Airport
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Nov 23rd, 2023 - Nov 24th, 2023
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Take off: 9:45pm, Aircraft: Boem1455, Checked bags: 4
                                    </p>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                        Amenities: wifi, power, seat 44E
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Passengers</h1>
                        <div>
                            <div>
                                <div style={{display: "flex", paddingBottom: 10}}>
                                    <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                        <i style={{color: "rgba(0,0,0,0.5)"}}
                                                className="fa-solid fa-user"></i>
                                    </div>
                                    <div>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                            Mohammed Adinan
                                        </p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                            Nov 23rd, 2023 - Nov 24th, 2023
                                        </p>
                                    </div>
                                </div>
                                <div style={{display: "flex", paddingBottom: 10}}>
                                    <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                        <i style={{color: "rgba(0,0,0,0.5)"}}
                                                className="fa-solid fa-user"></i>
                                    </div>
                                    <div>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                                            Mohammed Adinan
                                        </p>
                                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                                            Nov 23rd, 2023 - Nov 24th, 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                        <h1 style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, marginBottom: 10}}>
                            Important Notice</h1>
                            <div style={{display: "flex", padding: 10, marginBottom: 10, backgroundColor: "rgba(0,255,0,0.1)", border: "1px solid rgba(0,255,0,0.1)", borderRadius: 4}}>
                                <div style={{fontFamily: "'Prompt', Sans-serif", marginRight: 10}}>
                                    <i style={{color: "orange"}}
                                            className="fa-solid fa-exclamation-triangle"></i>
                                </div>
                                <div>
                                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 13}}>
                                        Some Random Text for showing disclaimer and notice messages or information to the user. This is important to communicate important matters to the them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default OrderCompletedPage;