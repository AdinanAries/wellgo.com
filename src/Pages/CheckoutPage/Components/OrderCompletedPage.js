const OrderCompletedPage = (props) => {

    const { 
        pickAnotherFlightOnclick,
        goHome,
        completedOrderDetails 
    } = props;

    return (
        <div style={{position: "relative"}}>
            <div style={{padding: "20px 0"}}>
                <p className="pop-up-close-btn" onClick={props.cancel_checkout} 
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
                    <div style={{cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plus"></i>
                            add ancillaries
                        </div>
                        <div onClick={pickAnotherFlightOnclick} style={{cursor: "pointer", marginRight: 5, padding: 10, color: "white", backgroundColor: "darkslateblue", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "lightblue"}} className="fa-solid fa-plane-departure"></i>
                            pick another flight
                        </div>
                        <div onClick={goHome} style={{cursor: "pointer", padding: 10, color: "white", backgroundColor: "crimson", fontSize: 14, fontFamily: "'Prompt', Sans-serif", borderRadius: 7}}>
                            <i style={{marginRight: 10, color: "yellow"}} className="fa-solid fa-home"></i>
                            go home
                        </div>
                    </div>
                </div>
                <div>
                    <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14}}>
                        See Details Below:</p>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default OrderCompletedPage;