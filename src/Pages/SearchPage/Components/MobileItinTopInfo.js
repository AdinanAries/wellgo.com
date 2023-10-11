const MobileItinTopInfo = () => {
    return (
        <div id="itinerary_and_filter_icon">
            <div>
                <p style={{fontSize: 16, fontFamily: "'Prompt', Sans-serif", color: "rgba(0,0,0,0.7)", fontWeight: "bolder"}}>
                    New York
                    <span style={{margin: "0 10px", color: "rgba(0,0,0,0.4)"}}>
                        <i className="fa-solid fa-exchange"></i></span>
                    Canada
                </p>
                <p style={{fontSize: 13, color: "rgba(0,0,0,0.7)", marginTop: 2}}>
                    Nov 25 - Nov 27</p>
            </div>
            <p onClick={()=>document.getElementById('search_list_main__settings_section').style.display='block'} 
                style={{fontWeight: "bolder", color: "rgb(11, 71, 95)", fontSize: 17}}>
                <i style={{marginRight: 7}} className="fa fa-sliders" aria-hidden="true"></i>
                Filters</p>
        </div>
    );
}

export default MobileItinTopInfo;