import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Cart from "./pages/Cart/cart.jsx";
import App from "./pages/App/App.jsx";
import Catalog from "./pages/Catalog/catalog.jsx";
import "./index.css";
import data from "../scraper/catalog_scraped.json";

const MainRouter = () => {
  const items = data
  const [cartItems, updateCart] = useState([])

  const cartItemsCount = cartItems.length;

  const updateItemInCart = (itemName) => {
    const item = items.find(item => item.name === itemName);
    updateCart((prevCartItems) => [...prevCartItems, item]);
  };

  const handleCartClick = (index) => {
    updateCart((prevCartItems) => {
      const newCartItems = [...prevCartItems];
      newCartItems.splice(index, 1);
      return newCartItems;
    });
  };

  const handleCheckout = () => {
        const overlay = document.querySelector(".overlay")
        const popup = document.querySelector(".popup")

        popup.classList.toggle("scale-in-center")
        overlay.classList.toggle("hidden")
        popup.classList.toggle("hidden")
    updateCart(() => []);
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App count={cartItemsCount}/>} />
        <Route path="catalog" element={<Catalog count={cartItemsCount} itemArray={items} updateItemInCart={updateItemInCart} />} />
        <Route path="cart" element={<Cart handleCheckout={handleCheckout} handleCartClick={handleCartClick} count ={cartItemsCount} cartItems={cartItems} />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
