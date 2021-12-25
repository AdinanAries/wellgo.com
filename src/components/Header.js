import { show_main_mobile_menu } from "./MobileMenu";

import WillgoLogo from '../WillgoLogo.png';

import { show_login_page, show_home_page, show_trips_page, show_explore_page } from '../helpers/PageRoutingFuncs';

function Header(){
    return (
        <header id="site_main_header">
            <div className="wrapper">
                <div className="header_content_container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{height: "60px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div onClick={show_home_page} className="site-logo">
                            <p className="site-logo-img">
                                <img src={WillgoLogo}/></p>
                            <div className="site-logo-txt">
                                <p>
                                    Wellgo
                                    <span>.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-menu-items">
                        <div id="desktop_explore_menu_item" onClick={show_explore_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-globe" />Explore
                            </p>
                        </div>
                        <div id="desktop_trips_menu_item" onClick={show_trips_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-briefcase" />Trips
                            </p>
                        </div>
                        <div id="desktop_login_menu_item" onClick={show_login_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-user" />Account
                            </p>
                        </div>
                        <div id="desktop_search_menu_item" onClick={()=>show_home_page(false)} className="each-header-menu-item active">
                            <div style={{display: "flex", flexDirection: "row", fontSize: 14, padding: "5px", width: 105, border: "2px solid #d66aca", color: "rgba(255,255,255,0.7)", textShadow: "1px 2px 3px rgb(0,0,0,0.33)", borderRadius: 50, backgroundColor: "darkslateblue"}}>
                                <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: 30, height: 30, backgroundColor: "white", borderRadius: "100%", marginRight: 10}}>
                                    <i style={{display: 'inline', fontWeight: "initial", color: "rgb(46, 98, 133)", margin: 0, fontSize: 17}} className="fa fa-plane"/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", fontSize: 13}}>
                                    Search</div>
                            </div>
                        </div>
                    </div>
                    <div className="header_humburger_menu">
                        <div className="header_mobile_menus" style={{display: "flex", flexDirection: "row"}}>
                            <div id="mobile_trips_menu_item" className="header_mobile_menus_item" onClick={show_trips_page}><i className="fa fa-briefcase"></i></div>
                            <div id="mobile_login_menu_item" className="header_mobile_menus_item" onClick={show_login_page}><i className="fa fa-user-circle"></i></div>
                            <div id="mobile_search_menu_item" style={{marginRight: 0}} className="header_mobile_menus_item active" onClick={()=>show_home_page(false)}>
                                <div style={{display: "flex", flexDirection: "row", margin: 0, fontSize: 14, height: "auto", padding: "5px", width: 95, justifyContent: "flex-start", color: "white", textAlign: "center", textShadow: "1px 2px 3px rgb(0,0,0,0.33)", border: "2px solid #d66aca", color: "rgba(255,255,255,0.7)", textShadow: "1px 2px 3px rgb(0,0,0,0.33)", borderRadius: 50, backgroundColor: "darkslateblue", borderRadius: 50}}>
                                    <div style={{textAlign: "center", display: "flex", height: "auto", flexDirection: "column", justifyContent: "center", width: 26, height: 26, backgroundColor: "white", borderRadius: "100%", margin: 0, marginRight: 10}}>
                                        <i style={{display: 'inline', fontWeight: "initial", color: "rgb(46, 98, 133)", margin: 0, fontSize: 14}} className="fa fa-plane"/>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", margin: 0, fontSize: 12}}>
                                        Search
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;