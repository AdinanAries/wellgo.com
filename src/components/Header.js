import { show_main_mobile_menu } from "./MobileMenu";

import WillgoLogo from '../WillgoLogo.png';

import { show_login_page, show_home_page, show_trips_page, show_explore_page } from '../helpers/PageRoutingFuncs';
import CONSTANTS from "../Constants/Constants";

function Header(props){

    const { 
        showSearchPage, 
        productType,
        cancel_checkout,
    } = props;
    
    return (
        <header id="site_main_header">
            <div className="wrapper">
                <div className="header_content_container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{height: "60px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div onClick={()=>{show_home_page();props.show_home_page();}} className="site-logo">
                            <p className="site-logo-img">
                                <img src={WillgoLogo} alt={"to do"} /></p>
                            <div className="site-logo-txt">
                                <p>
                                    welldugo
                                    <span>.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-menu-items">
                        <div id="desktop_explore_menu_item" onClick={()=>{show_explore_page();cancel_checkout();}} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-globe" />Explore
                            </p>
                        </div>
                        <div id="desktop_trips_menu_item" onClick={()=>{show_trips_page();cancel_checkout();}} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-briefcase" />Trips
                            </p>
                        </div>
                        <div id="desktop_login_menu_item" onClick={()=>{show_login_page();cancel_checkout();}} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-user" />Account
                            </p>
                        </div>
                        <div id="desktop_search_menu_item" onClick={()=>{show_home_page(false);props.show_home_page(true);}} className="each-header-menu-item active">
                            <div style={{display: "flex", flexDirection: "row", fontSize: 14, paddingRight: "5px", width: 105, color: "rgba(255,255,255,0.7)", /*border: "1px solid rgba(255,255,255,0.2)",*/ borderRadius: 50,}}>
                                <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: 35, height: 35, backgroundColor: "white", borderRadius: "100%", marginRight: 10}}>
                                    <i style={{display: 'inline', color: "rgb(46, 98, 133)", margin: 0, fontSize: 17}} 
                                        className={showSearchPage? "fa-solid fa-home" :
                                        ( 
                                            (productType===CONSTANTS.product_types.flights) ? "fa-solid fa-plane-departure"
                                            : (productType===CONSTANTS.product_types.stays) ? "fa-solid fa-hotel"
                                            : (productType===CONSTANTS.product_types.rental_cars) ? "fa-solid fa-car" : ""
                                        )}/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", fontSize: 14, fontFamily: "'Prompt', Sans-serif"}}>
                                    {showSearchPage ? "Home" : "Search"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="header_humburger_menu">
                        <div className="header_mobile_menus" style={{display: "flex", flexDirection: "row"}}>
                            <div style={{display: "none"}} id="mobile_trips_menu_item" className="header_mobile_menus_item" onClick={show_trips_page}><i className="fa fa-briefcase"></i></div>
                            <div id="mobile_search_menu_item" style={{marginRight: 18}} className="header_mobile_menus_item active" onClick={()=>{show_home_page(false);props.show_home_page(true);}}>
                                <div style={{display: "flex", flexDirection: "row", margin: 0, fontSize: 14, height: "auto", paddingRight: "10px", width: 100, justifyContent: "flex-start", textAlign: "center", color: "rgba(255,255,255,0.7)", /*border: "1px solid rgba(255,255,255,0.2)",*/ borderRadius: 50}}>
                                    <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", width: 35, height: 35, backgroundColor: "white", borderRadius: "100%", margin: 0, marginRight: 10}}>
                                        <i style={{display: 'inline', color: "rgb(46, 98, 133)", margin: 0, fontSize: 15}} 
                                            className={showSearchPage ? "fa-solid fa-home"
                                            :( 
                                                (productType===CONSTANTS.product_types.flights) ? "fa-solid fa-plane-departure"
                                                : (productType===CONSTANTS.product_types.stays) ? "fa-solid fa-hotel"
                                                : (productType===CONSTANTS.product_types.rental_cars) ? "fa-solid fa-car" : ""
                                            )}/>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "auto", margin: 0, fontSize: 14,  fontFamily: "'Prompt', Sans-serif"}}>
                                        {showSearchPage ? "Home" : "Search"}
                                    </div>
                                </div>
                            </div>
                            <div id="mobile_login_menu_item" style={{marginRight: 0}} className="header_mobile_menus_item" onClick={()=>{show_login_page();cancel_checkout();}}>
                                <i style={{fontSize: 27, color: "rgba(255,255,255,0.6)"}} className="fa fa-user-circle"></i></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;