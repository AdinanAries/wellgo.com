const DurationFilter = (props) => {
    
    const { hideDurationFilter } = props;

    return <div className="classic_popup_pane" style={{right: -50}}>
        <p onClick={hideDurationFilter} className="hover_bg-grey"
            style={{zIndex: 1, cursor: "pointer", fontFamily: "'Pompt', Sans-serif", position: "absolute", top: 4, right: 10, fontSize: 20, color: "rgba(0,0,0,0.7)", width: 35, height: 35, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            x</p>
        <div style={{padding: 10, paddingTop: 0, marginBottom: 10}}>
            <p style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                Duration
            </p>
        </div>
        <div>
            <div style={{marginTop: 20, marginBottom: 20}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 10, fontFamily: "'Prompt', Sans-serif"}}>
                        0h 0m
                    </p>
                    <p style={{color: "crimson", fontSize: 10, fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif"}}>
                        0h 0m
                    </p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontSize: 10, fontFamily: "'Prompt', Sans-serif"}}>
                        0h 0m
                    </p>
                </div>
                <input style={{width: "100%"}} className="styled-slider slider-progress" 
                    min="0" max="101" type="range" />
            </div>
        </div>
    </div>
}

export default DurationFilter;