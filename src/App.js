import { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TripsPage from "./Pages/TripsPage/TripsPage";
import LoginPage from './Pages/LoginPage/LoginPage';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import UserAccountPage from "./Pages/UserAccountPage/UserAccountPage";
//import SearchPage from './Pages/SearchPage/SearchPage';
//import SelectedTicketPane from './components/SelectedTicketPane';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import DealsPage from "./Pages/DealsPage/DealsPage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import HPSupport from "./components/HPSupport";
import { ToastContainer } from "react-toastify";
import CurrenciesPane from './components/CurrenciesPane';
import LanguagesPane from './components/LanguagesPane';
import "react-toastify/dist/ReactToastify.css";
import CONSTANTS from './Constants/Constants';

let CURR=CONSTANTS.default_currency;
if (localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_curr)) {
    CURR = localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_curr);
} else {
    localStorage.setItem(CONSTANTS.local_storage.wellgo_usr_curr, CURR);
}

let LANG=CONSTANTS.default_language[0]+CONSTANTS.default_language.toLowerCase().substring(1);
if (localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_lang)) {
    LANG = localStorage.getItem(CONSTANTS.local_storage.wellgo_usr_lang);
} else {
    localStorage.setItem(CONSTANTS.local_storage.wellgo_usr_lang, LANG);
}

// Instantiating search post obj
global.instantiateSearchObj();

function App() {

  const [ showHome, setShowHome ] = useState(true);
  const [ showSearchPage, setShowSearchPage ] = useState(false);
  const [ isCheckout, setIsCheckout ] = useState(false);
  const [ checkoutPayload, setcheckoutPayload ] = useState({});
  const [ showHomePageSearchForm, setShowHomePageSearchForm ] = useState(false);
  const [ toggleShowCurrencyPage, setToggleShowCurrencyPage ] = useState(false);
  const [ siteCurrency, setSiteCurrency ] = useState(CURR);
  const [ toggleShowLanguagesPage, setToggleShowLanguagesPage ] = useState(false);
  const [ siteLanguage, setSiteLanguage ] = useState(LANG);
  

  const show_search_page = () => {
    setShowSearchPage(true);
  }

  const show_home_page = (with_search_form=false) => {
    setShowSearchPage(false);
    setShowHomePageSearchForm(with_search_form);
  }

  const cancel_checkout = () => {
    setIsCheckout(false);
  }

  const begin_checkout = (data) => {
    setIsCheckout(true);
    setcheckoutPayload(data);
  }

  const toggle_show_hide_currency_page = () => {
    setToggleShowCurrencyPage(!toggleShowCurrencyPage);
  }

  const toggle_show_hide_languages_page = () => {
    setToggleShowLanguagesPage(!toggleShowLanguagesPage);
  }

  const SelectSiteCurrency = (CURR) => {
    setSiteCurrency(CURR);
    localStorage.setItem(CONSTANTS.local_storage.wellgo_usr_curr, CURR);
  }

  const SelectSiteLanguage = (LANG) => {
    setSiteLanguage(LANG);
    localStorage.setItem(CONSTANTS.local_storage.wellgo_usr_lang, LANG);
  }

  return (
    <div className="">
      {
        toggleShowCurrencyPage && <CurrenciesPane 
          SelectSiteCurrency={SelectSiteCurrency}
          toggle_show_hide_pane={toggle_show_hide_currency_page} />
      }
      {
        toggleShowLanguagesPage && <LanguagesPane 
          SelectSiteLanguage={SelectSiteLanguage}
          toggle_show_hide_pane={toggle_show_hide_languages_page} />
      }
      <HPSupport />
      <MobileMenu />
      {
        isCheckout ? 
          <CheckoutPage 
            payload={checkoutPayload}
            cancel_checkout={cancel_checkout}
          /> 
        : ""
      }
      <Header  show_home_page={show_home_page} />
      <HomePage 
        show_search_page={show_search_page} 
        showSearchPage={showSearchPage}
        begin_checkout={begin_checkout}
        showSearchForm={showHomePageSearchForm}
        siteCurrency={siteCurrency}
        siteLanguage={siteLanguage}
        toggle_show_hide_currency_page={toggle_show_hide_currency_page}
        toggle_show_hide_languages_page={toggle_show_hide_languages_page}
      />
      <TripsPage />
      <DealsPage />
      <HelpPage />
      <LoginPage />
      <UserAccountPage />
      <ExplorePage />
      <Footer />
      <ToastContainer 
        className="my-toast-container"
        position="bottom-left" />
    </div>
  );
}

export default App;
