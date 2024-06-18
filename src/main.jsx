import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Cart from "./pages/Cart/cart.jsx";
import App from "./pages/App/App.jsx";
import Catalog from "./pages/Catalog/catalog.jsx";
import "./index.css";

const MainRouter = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/catalog_scraped.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [cartItems, updateCart] = useState([]);
  const cartItemsCount = cartItems.length;

  const updateItemInCart = (itemName) => {
    const item = data.find(item => item.name === itemName);
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
    const overlay = document.querySelector(".overlay");
    const popup = document.querySelector(".popup");

    popup.classList.toggle("scale-in-center");
    overlay.classList.toggle("hidden");
    popup.classList.toggle("hidden");
    updateCart(() => []);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App count={cartItemsCount} />} />
        <Route path="catalog" element={<Catalog count={cartItemsCount} itemArray={data} updateItemInCart={updateItemInCart} />} />
        <Route path="cart" element={<Cart handleCheckout={handleCheckout} handleCartClick={handleCartClick} count={cartItemsCount} cartItems={cartItems} />} />
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
