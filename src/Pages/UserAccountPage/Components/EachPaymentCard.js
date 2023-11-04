const EachPaymentCard = (props) => {

    const { index, each, show_more_payment_method_info, hide_more_payment_method_info } = props;

    return (
        <div style={{padding: 10}}>
            <div id={"show_more_payment_method_info_btn"+index}>
                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 16, color: "rgb(12, 109, 133)"}}>
                    <i className="fa-solid fa-check" style={{color: "lightgreen", marginRight: 10}}></i>
                    {each.card_number}
                    <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                        , {each.holder_name}
                    </span>
                </p>
                <p onClick={()=>show_more_payment_method_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                    view more ...
                </p>
            </div>
            <div id={"show_more_payment_method_info_container"+index} style={{display: "none"}}>
                <p style={{fontFamily: "'Prompt', sans-serif", color: "rgb(12, 109, 133)",}}>
                    <i style={{marginRight: 10, color: "rgba(0,0,0,0.4)"}} className="fa fa-credit-card"></i>
                    {each.holder_name}</p>
                <div style={{marginLeft: 10, marginTop: 10}}>
                <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            Number: </span>{each.card_number}</p>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            Exp Date: </span>{each.exp_date}</p>
                    <p style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgb(12, 109, 133)"}}>
                        <span style={{fontFamily: "'Prompt', sans-serif", fontSize: 13, color: "rgba(0,0,0,0.7)"}}>
                            Address: </span>
                        {each.billing.street} {each.billing.city}, {each.billing.state}, {each.billing.country} {each.billing.zip_code}</p>
                </div>
                <p onClick={()=>hide_more_payment_method_info(index)} style={{fontFamily: "'Prompt', Sans-serif", cursor: "pointer", fontSize: 15, borderRadius: 6, margin: "5px 0", color: "#c751b9"}}>
                    view less ...
                </p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 10}}>
                    <div className="searchBtn" style={{backgroundColor: "crimson", boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, borderRadius: 50}}>
                        <i className="fa fa-trash" style={{marginRight: 5, color: "rgba(255,255,255,0.5)"}}></i>Delete
                    </div>
                    <div className="searchBtn" style={{boxShadow: "0 0 5px rgba(0,0,0,0.3)", border: "none", fontSize: 14, backgroundColor: "green", borderRadius: 50}}>
                        <i className="fa fa-pencil" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Edit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachPaymentCard;