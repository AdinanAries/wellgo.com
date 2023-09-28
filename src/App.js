import { useState } from 'react';
import './App.css';

//components
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TripsPage from "./components/TripsPage";
import LoginPage from './components/LoginPage';
import ExplorePage from './components/ExplorePage';
import SearchPage from './components/SearchPage';
import SelectedTicketPane from './components/SelectedTicketPane';
import CheckoutPage from './components/CheckoutPage';
import DealsPage from "./components/DealsPage";
import HelpPage from "./components/HelpPage";
import HPSupport from "./components/HPSupport";


function App() {

  const [ showHome, setShowHome ] = useState(true);
  const [ showSearchPage, setShowSearchPage ] = useState(false);

  const show_search_page = () => {
    setShowSearchPage(true);
  }

  const show_home_page = () => {
    setShowSearchPage(false);
  }

  return (
    <div className="">
      <HPSupport />
      <SelectedTicketPane />
      <MobileMenu />
      <CheckoutPage />
      <Header  show_home_page={show_home_page} />
      <HomePage show_search_page={show_search_page} showSearchPage={showSearchPage}/>
      <TripsPage />
      <DealsPage />
      <HelpPage />
      <LoginPage />
      <ExplorePage />
      {/*<SearchPage />*/}
      <Footer />
    </div>
  );
}

export default App;
