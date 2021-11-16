import $ from "jquery";

const MobileMenu = () => {
    return (
        <div id="main-mobile-menu" className="mobile-menu">
            <div className="mobile-menu-header">
                <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p style={{color: "white"}}>Willgo.com</p>
                </div>
                <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p style={{fontSize: 35, color: "rgba(255,255,255,0.5)"}} onClick={hide_main_mobile_menu} >&times;</p>
                </div>
            </div>
            <div style={{height: "calc(100wh - 50px)", padding: 10}}>
                <div style={{height: "calc(50vh - 45px)", marginBottom: 10, display: "flex", justifyContent: "space-between"}}>
                    <div style={{width: "calc(50% - 5px)", height: "100%", borderRadius: "10px"}}>

                    </div>
                    <div style={{width: "calc(50% - 5px)", height: "100%", borderRadius: "10px"}}>

                    </div>
                </div>
                <div style={{height: "calc(50vh - 45px)", display: "flex", justifyContent: "space-between"}}>
                    <div style={{width: "calc(50% - 5px)", height: "100%", borderRadius: "10px"}}>

                    </div>
                    <div style={{width: "calc(50% - 5px)", height: "100%", borderRadius: "10px"}}>

                    </div>
                </div>
            </div>
        </div>
    );
}

function hide_main_mobile_menu(){
    $("#main-mobile-menu").slideUp("fast");
}

export function show_main_mobile_menu(){
    $("#main-mobile-menu").slideDown("fast");
}

export default MobileMenu;