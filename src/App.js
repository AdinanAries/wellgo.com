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


function App() {
  return (
    <div className="">
      <SelectedTicketPane />
      <MobileMenu />
      <CheckoutPage />
      <Header />
      <HomePage />
      <TripsPage />
      <DealsPage />
      <HelpPage />
      <LoginPage />
      <ExplorePage />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
