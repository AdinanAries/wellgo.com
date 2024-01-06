
const TimesFilter = (props) => {
    
    const { hideTimesFilter } = props;

    return <div className="classic_popup_pane" style={{right: -135}}>
        <p onClick={hideTimesFilter} className="hover_bg-grey"
            style={{zIndex: 1, cursor: "pointer", fontFamily: "'Pompt', Sans-serif", position: "absolute", top: 4, right: 10, fontSize: 20, color: "rgba(0,0,0,0.7)", width: 35, height: 35, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            x</p>
        <div style={{padding: 10, paddingTop: 0, marginBottom: 10}}>
            <p style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                Travel Times
            </p>
        </div>
        <div>
            <div style={{padding: "10px 40px"}}>
                <p style={{textAlign: "center", fontSize: 13, fontFamily: "'Prompt', Sans-serif"}}>
                    <i style={{marginRight: 10, color: "orange"}} className="fa-solid fa-exclamation-triangle"></i>
                    No data available</p>
            </div>
        </div>
    </div>
}

export default TimesFilter;