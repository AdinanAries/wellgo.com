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
import SearchPage from './Pages/SearchPage/SearchPage';
import SelectedTicketPane from './components/SelectedTicketPane';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import DealsPage from "./Pages/DealsPage/DealsPage";
import HelpPage from "./Pages/HelpPage/HelpPage";
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
