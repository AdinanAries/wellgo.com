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
//import SearchPage from './Pages/SearchPage/SearchPage';
//import SelectedTicketPane from './components/SelectedTicketPane';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import DealsPage from "./Pages/DealsPage/DealsPage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import HPSupport from "./components/HPSupport";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [ showHome, setShowHome ] = useState(true);
  const [ showSearchPage, setShowSearchPage ] = useState(false);
  const [ isCheckout, setIsCheckout ] = useState(false);
  const [ showHomePageSearchForm, setShowHomePageSearchForm ] = useState(false);

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

  const begin_checkout = () => {
    setIsCheckout(true);
  }

  return (
    <div className="">
      <HPSupport />
      <MobileMenu />
      {
        isCheckout ? 
          <CheckoutPage 
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
      />
      <TripsPage />
      <DealsPage />
      <HelpPage />
      <LoginPage />
      <ExplorePage />
      <Footer />
      <ToastContainer className="my-toast-container" />
    </div>
  );
}

export default App;
