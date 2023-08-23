import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import PaymentSuccessfull from "./pages/PaymentSuccessfull";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/payment/" element={<PaymentSuccessfull />} />
        </Routes>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
