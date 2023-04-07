function PaginationButtons(){
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{color: "rgba(0,0,0,0.7)", marginRight: 10, width: 45, height: 45, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa-solid fa-angles-left"></i>
            </div>
            <div style={{color: "rgba(0,0,0,0.7)", width: 45, height: 45, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa fa-angle-left"></i>
            </div>
            <div>
                <select style={{backgroundColor: "rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.1)", padding: 13, borderRadius: 50, margin: "0 10px"}}>
                    <option>1 - 20</option>
                    <option>21 - 30</option>
                </select>
            </div>
            <div style={{color: "rgba(0,0,0,0.7)", width: 45, height: 45, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa fa-angle-right"></i>
            </div>
            <div style={{color: "rgba(0,0,0,0.7)", marginLeft: 10, width: 45, height: 45, border: "1px solid rgba(0,0,0,0.1)", borderRadius: "100%", background: "rgb(0,0,255,0.05)", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <i className="fa-solid fa-angles-right"></i>
            </div>
        </div>
    )
}

export default PaginationButtons;