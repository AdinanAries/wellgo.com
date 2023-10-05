const PassengerForm = (props) => {
    return (
        <div style={{border: "1px solid rgba(0,0,0,0.07)", padding: 10, width: "calc(100% - 22px)", borderRadius: 6}}>
            <p>{props.passenger.family_name}</p>
            <div>

            </div>
            <div style={{backgroundColor: "darkslateblue", cursor: "pointer", fontSize: 14, fontFamily: "'Prompt', Sans-serif", padding: 10, borderRadius: 6, textAlign: "center", color: "white"}}
                onClick={props.unSelectPassengerCard}
            >See all Passengers</div>
        </div>
    )
}

export default PassengerForm;