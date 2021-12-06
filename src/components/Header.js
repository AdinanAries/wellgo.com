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
                        <div id="desktop_search_menu_item" onClick={()=>show_home_page(false)} className="each-header-menu-item active">
                            <p style={{padding: "10px", width: 110, color: "rgba(255,255,255,0.6)"}}>
                                <i style={{display: 'inline', fontWeight: "initial", color: "rgb(46, 108, 133)"}} className="fa fa-search" />
                                Search...
                            </p>
                        </div>
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
                    </div>
                    <div className="header_humburger_menu">
                        <div className="header_mobile_menus" style={{display: "flex", flexDirection: "row"}}>
                            <div id="mobile_search_menu_item" className="header_mobile_menus_item active" onClick={()=>show_home_page(false)}>
                            <p style={{fontSize: 15, padding: "5px", width: 85, color: "white"}}>
                                <i style={{display: 'inline', fontWeight: "initial", fontSize: 18, marginRight: 10}} className="fa fa-search" />
                                Search...
                            </p></div>
                            <div id="mobile_trips_menu_item" className="header_mobile_menus_item" onClick={show_trips_page}><i className="fa fa-briefcase"></i></div>
                            <div id="mobile_login_menu_item" style={{marginRight: 10}} className="header_mobile_menus_item" onClick={show_login_page}><i className="fa fa-user-circle"></i></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;