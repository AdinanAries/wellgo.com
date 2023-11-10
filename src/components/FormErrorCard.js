const FormErrorCard = (props) => {
    const { type, message } = props;
    return (
        <div style={{padding: 10}}>
            <p style={{fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                <i style={{color: "orange", marginRight: 10}} className="fa-solid fa-exclamation-triangle" ></i>
                {message}
            </p>
        </div>
    );
}

export default FormErrorCard;