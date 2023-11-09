const ConfirmDelete = (props) => {
    const { submitFunction, cancelFunction } = props;
    return (
        <div style={{padding: 10, border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8}}>
            <p style={{textAlign:"center", marginBottom: 10, fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "rgba(0,0,0,0.7)"}}>
                <i className="fa-solid fa-exclamation-triangle" style={{color: "orange", marginRight: 10}}></i>
                Are you sure you want to delelte this item</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div onClick={cancelFunction} 
                    style={{cursor: "pointer", borderRadius: 50, padding: "10px 20px", textAlign: "center", fontFamily: "'Prompt', Sans-serif", fontSize: 14, background: "darkslateblue", color: "white"}}>
                    Cancel
                </div>
                <div onClick={submitFunction} 
                    style={{cursor: "pointer", borderRadius: 50, padding: "10px 20px", textAlign: "center", fontFamily: "'Prompt', Sans-serif", fontSize: 14, background: "crimson", color: "white"}}>
                    Delete
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;