import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Coins from './component/Coins';
import Exchanges from './component/Exchanges';
import CoinDetails from './component/CoinDetails';
import React from 'react';
import Footer from "./component/Footer";


function App() {
  try{
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Coins" element={<Coins />} />
          <Route path="/Exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
      </Router>
    );
  }catch{
    console.log("Error in App.js")
  }
}

export default App;
