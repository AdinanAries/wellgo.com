const BagsFilter = (props) => {
    
    const { 
        hideBagsFilter,
        checkedBagsFilterQuantity,
        carryOnBagsFilterQuantity,
        setCheckedBagsFilterQuantity,
        setCarryOnBagsFilterQuantity
    } = props;
    const MAX_CHECKED_BAGS=6;
    const MAX_CARRY_ON_BAGS=6

    const increaseCheckedBags = () => {
        if(checkedBagsFilterQuantity<MAX_CHECKED_BAGS){
            setCheckedBagsFilterQuantity(checkedBagsFilterQuantity+1);
        } else {
            alert("only a maximum of "+MAX_CHECKED_BAGS);
        }
    }

    const decreaseCheckedBags = () => {
        if(checkedBagsFilterQuantity>0){
            setCheckedBagsFilterQuantity(checkedBagsFilterQuantity-1);
        }
    }

    const increaseCarryOnBags = () => {
        if(carryOnBagsFilterQuantity<MAX_CHECKED_BAGS){
            setCarryOnBagsFilterQuantity(carryOnBagsFilterQuantity+1);
        } else {
            alert("only a maximum of "+MAX_CARRY_ON_BAGS);
        }
    }

    const decreaseCarryOnBags = () => {
        if(carryOnBagsFilterQuantity>0){
            setCarryOnBagsFilterQuantity(carryOnBagsFilterQuantity-1);
        }
    }

    return <div className="classic_popup_pane" style={{right: -90}}>
        <p onClick={hideBagsFilter} className="hover_bg-grey"
            style={{zIndex: 1, cursor: "pointer", fontFamily: "'Pompt', Sans-serif", position: "absolute", top: 4, right: 10, fontSize: 20, color: "rgba(0,0,0,0.7)", width: 35, height: 35, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            x</p>
        <div style={{padding: 10, paddingTop: 0, marginBottom: 10}}>
            <p style={{fontSize: 14, fontFamily: "'Prompt', Sans-serif", fontWeight: "bolder"}}>
                Bags
            </p>
        </div>
        <div>
            <div style={{marginBottom: 20}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 5}}>
                    <p style={{fontSize: 14, color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Carry-on bag</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div onClick={decreaseCarryOnBags} className="hover_bg-grey" style={{cursor: "pointer", width: 35, height: 35, borderRadius: 5, border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            -
                        </div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: "0 10px", color: "rgba(0,0,0,0.7)"}}>
                            {carryOnBagsFilterQuantity}
                        </p>
                        <div onClick={increaseCarryOnBags} className="hover_bg-grey" style={{cursor: "pointer", width: 35, height: 35, borderRadius: 5, border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            +
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 25}}>
                    <p style={{fontSize: 14, color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                        Checked bag</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div onClick={decreaseCheckedBags} className="hover_bg-grey" style={{cursor: "pointer", width: 35, height: 35, borderRadius: 5, border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            -
                        </div>
                        <p style={{fontFamily: "'Prompt', Sans-serif", fontSize: 14, margin: "0 10px", color: "rgba(0,0,0,0.7)"}}>
                            {checkedBagsFilterQuantity}
                        </p>
                        <div onClick={increaseCheckedBags} className="hover_bg-grey" style={{cursor: "pointer", width: 35, height: 35, borderRadius: 5, border: "1px solid rgba(0,0,0,0.1)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BagsFilter;