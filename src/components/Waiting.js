const Waiting = (props) => {
    return <div style={{ borderRadius: 9, padding: "30px 10px", boxShadow: "1px 2px 3px rgba(0,0,0,0.3)",
            display: "flex", flexDirection: "column", alignItems: "center", background: "black", position: "relative"}}>
        <p style={{fontWeight: "bolder", fontFamily: "'Prompt', Sans-serif", fontSize: 14, color: "lightblue"}}>
            <i className="fa-solid fa-exclamation-triangle" style={{marginRight: 10, color: "yellow"}}></i>
            Loading
        </p>
        <p style={{color: "white", fontSize: 14, marginBottom: 60, marginTop: 10}}>
            We are working on it. Please be wait!</p>
        <div className="waiting"></div>
        <p style={{color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 55, marginBottom: 5, textAlign: "center"}}>
            <span style={{color: "red", fontWeight: "bolder", fontSize: 14, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                    Byte the Code LLC
            </span>
            <br/>&copy; {new Date().getFullYear()}, all rights reserved
        </p>
    </div>
}

export default Waiting;