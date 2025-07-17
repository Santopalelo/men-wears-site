import React from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/hero.jsx";
import Product from "./components/Product.jsx";
import Blog from "./components/Blog.jsx";
import Abouthero from "./components/abouthero.jsx";
import Footer from "./components/footer.jsx";
import Service from "./components/Service.jsx";
import Home from "./pages/home.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/login.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Link to="/Login">Login</Link>
      <Link to="/Cart">Cart</Link>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Hero />
                <Abouthero />
                <Product />
                <Blog />
                <Service />
                <Footer />
              </>
            }
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
