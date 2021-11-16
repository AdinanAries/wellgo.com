import mobile_app_iconsvg from "../icons/mobile_app_icon.svg"

function DownloadMobileApp(){
    return (
        <div className="wrapper">
            <div className="download_mobile_section">
                <div className="download_mobile_app_section_container">
                    <div style={{backgroundImage: `url('${mobile_app_iconsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                        height: 70, width: 70, marginTop: 5, marginBottom: 5}}>

                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                        <p className="download_mobile_app_title" style={{color: "#c900b0", fontWeight: "bolder", marginBottom: 5, fontFamily: "Courgette"}}>
                            Get Our Mobile App</p>
                        <p style={{color: "rgba(0,0,0,0.6)", fontWeight: "bolder", fontSize: 15}}>
                            For better user experience, we recommend that you download our mobile app.</p>
                    </div>
                    <div className="download_mobile_app_btn_container">
                        <div style={{cursor: "pointer", textAlign: "center", color: "white", backgroundColor: "rgb(43, 52, 61)", padding: "14px", borderRadius: 9, minWidth: 120}}>
                            <i className="fa fa-download" style={{marginRight: 7, color: "rgba(255,255,255,0.4)"}}></i>get the app
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadMobileApp;