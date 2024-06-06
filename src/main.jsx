import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Cart from "./pages/Cart/cart.jsx";
import App from "./pages/App/App.jsx";
import Catalog from "./pages/Catalog/catalog.jsx";
import "./index.css";
import itemArray from "./pages/Catalog/catalog.js";

const MainRouter = () => {
  const items = itemArray
  const [cartItems, updateCart] = useState([])

  const updateItemInCart = (itemName) => {
    const item = items.find(item => item.name === itemName);
    updateCart((prevCartItems) => [...prevCartItems, item]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />} />
        <Route path="catalog" element={<Catalog itemArray={items} updateItemInCart={updateItemInCart} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} />} />
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
