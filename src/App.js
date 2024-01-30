import { useEffect, useState } from 'react';
import './App.css';
import UseCurrentPage from './helpers/PageRoutingFuncs';
//components
import Header from './components/Header';
import FullPageLoader from './components/FullPageLoader';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TripsPage from "./Pages/TripsPage/TripsPage";
import LoginPage from './Pages/LoginPage/LoginPage';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import UserAccountPage from "./Pages/UserAccountPage/UserAccountPage";
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import DealsPage from "./Pages/DealsPage/DealsPage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import HPSupport from "./components/HPSupport";
import { ToastContainer } from "react-toastify";
import CurrenciesPane from './components/CurrenciesPane';
import LanguagesPane from './components/LanguagesPane';
import "react-toastify/dist/ReactToastify.css";
import CONSTANTS from './Constants/Constants';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { getApiHost } from './Constants/Environment';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OdjZ3An0YMgH2TtyCpkCBN4vDrMuQlwvmFSNKqBl9gJY996OXSpZ9QLz5dBGHLYLsa7QVvwY51I0DcLHErLxW7y00vjEWv9Lc');


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
let AMLOGGEDIN=false;
if(localStorage.getItem(CONSTANTS.local_storage.logged_in_usr)){
  AMLOGGEDIN=JSON.parse(localStorage.getItem(CONSTANTS.local_storage.logged_in_usr));
}else{
  localStorage.setItem(CONSTANTS.local_storage.logged_in_usr, AMLOGGEDIN);
}

// Instantiating search post obj
global.instantiateSearchObj();

function App() {

  const [ showSearchPage, setShowSearchPage ] = useState(false);
  const [ isCheckout, setIsCheckout ] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState(AMLOGGEDIN);
  const [ checkoutPayload, setcheckoutPayload ] = useState({});
  const [ showHomePageSearchForm, setShowHomePageSearchForm ] = useState(false);
  const [ toggleShowCurrencyPage, setToggleShowCurrencyPage ] = useState(false);
  const [ siteCurrency, setSiteCurrency ] = useState(CURR);
  const [ toggleShowLanguagesPage, setToggleShowLanguagesPage ] = useState(false);
  const [ siteLanguage, setSiteLanguage ] = useState(LANG);
  const [ isLoading, setIsLoading ] = useState(false);

  // For Stripe Payment
  const [ options, setOptions ] = useState();

  useEffect(()=>{
    UseCurrentPage();
  }, []);

  const show_search_page = () => {
    setShowSearchPage(true);
  }
  // making show_search_page() global
  window.__show_search_page__=show_search_page;

  const show_home_page = (with_search_form=false) => {
    setShowSearchPage(false);
    setShowHomePageSearchForm(with_search_form);
  }
  // making show_home_page() global
  window.__show_home_page__=show_home_page;

  const cancel_checkout = () => {
    setIsCheckout(false);
    setcheckoutPayload({});
  }

  const begin_checkout = async (data) => {
    setIsLoading(true);
    setcheckoutPayload(data);
    const API_HOST=getApiHost();
    const response = await fetch((API_HOST+'/api/payment/secret/'));
    const {client_secret: clientSecret} = await response.json();
    // Render the form using the clientSecret
    setOptions({
        // passing the client secret obtained from the server
        ...options,
        clientSecret,
    });
    setIsCheckout(true);
    setIsLoading(false);
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

  const LogMeIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem(CONSTANTS.local_storage.logged_in_usr, true);
  }

  const LogMeOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem(CONSTANTS.local_storage.logged_in_usr, false);
    localStorage.removeItem("user_token");
  }

  return (
    <div className="">
      {
        isLoading && <FullPageLoader />
      }
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
        <Elements stripe={stripePromise} options={options}>
            <CheckoutPage 
              stripeOptions={options}
              LogMeIn={LogMeIn}
              payload={checkoutPayload}
              cancel_checkout={cancel_checkout}
            /> 
        </Elements>
        : ""
      }
      <Header  
        showSearchPage={showSearchPage}
        show_home_page={show_home_page} />
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
      <div className='wrapper'  id="login_page" style={{display: "none"}}>
        <LoginPage
          LogMeIn={LogMeIn}
          isLoggedIn={isLoggedIn} /> 
        <UserAccountPage 
          LogMeOut={LogMeOut}
          isLoggedIn={isLoggedIn} /> 
      </div>
      <ExplorePage />
      <Footer />
      <ToastContainer 
        className="my-toast-container"
        position="top-left" />
    </div>
  );
}

export default App;
