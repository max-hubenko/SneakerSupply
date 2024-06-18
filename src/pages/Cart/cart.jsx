/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import CartCard from "../../components/cart-card"
import CheckoutPopup from "../../components/checkout-popup/index.jsx"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import ScrollToTop from "../../components/scrollToTop"
import SubItem from "../../components/sub-item"
import "./cart.css"
import 'animate.css'


function Cart({cartItems,count,handleCartClick, handleCheckout}) {
     const items = cartItems
     const sum = items.reduce((accumulator, item) => accumulator + item.price, 0);
     const taxes = sum * .20;
     const shipping = items.length == 0 ? 0.00 : 7.99;

    return (
        <div id="cart-container-div">
            <ScrollToTop />
            <CheckoutPopup />
            <Navbar count={count}/>
            <div id="cart-div">
                <div id="cart-items">
                    <div> <p id="cart-items-text"> CART ITEMS </p></div>
                    <div id="cart-item-grid">
                        {items.map((item, index) => (
                            <CartCard 
                                key={index}
                                imgSrc={item.imgSrc}
                                shoeName={item.name}
                                price={item.price}
                                brand={item.brand}
                                handleClick={() => handleCartClick(index)}
                            />
                        ))}
                    </div>

                </div>
                
                <div id="cart-summary">
                    <div> <p id="cart-placeholder-text"> PLACEHOLDER </p></div>
                    <div id="summary-div">
                        <p id="summary-text"> SUMMARY </p>
                        <div id="summary-items-div">
                            <div id="summary-items-top-div">
                                {items.map((item) => (
                                    <SubItem name={item.name} price={item.price} />
                                ))}
                            </div>
                            <div id="summary-items-bottom-div">
                                <SubItem name="taxes" price={taxes} />
                                <SubItem name="shipping" price={shipping} />
                                <hr></hr>
                                <SubItem name="total" price={taxes + shipping + sum} />
                                <div id="checkout-div-container">
                                    <div onClick={handleCheckout} id="checkout-div"> <p id="checkout-text"> CHECKOUT </p> </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart