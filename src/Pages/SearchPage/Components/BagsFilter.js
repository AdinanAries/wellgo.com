const BagsFilter = (props) => {
    
    const { hideBagsFilter } = props;

    return <div className="classic_popup_pane">
        <p onClick={hideBagsFilter} className="hover_bg-grey"
            style={{cursor: "pointer", fontFamily: "'Pompt', Sans-serif", position: "absolute", top: 10, right: 10, fontSize: 20, color: "rgba(0,0,0,0.7)", width: 35, height: 35, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            x</p>
        <div>
            
        </div>
    </div>
}

export default BagsFilter;