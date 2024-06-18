/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import './index.css'
import { Link } from "react-router-dom";

function Navbar({count}) {
    const cartCountRef = useRef(null);

    useEffect(() => {
        const countElement = cartCountRef.current.querySelector("p");
        if (count === 0) {
            cartCountRef.current.classList.add("hidden");
        } else {
            cartCountRef.current.classList.remove("hidden");
            if (count > 99) {
                countElement.innerText = "99+";
            } else {
                countElement.innerText = count.toString();
            }
        }
    }, [count]);
    

    return (
        <div className='nav-div'>
           <div className="search-bar-div">
                <div>
                    <svg id="search" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.01 15.699L12.893 11.582C14.963 8.89098 14.756 5.00398 12.272 2.54298C10.915 1.18598 9.16702 0.518982 7.39602 0.518982C5.62502 0.518982 3.87702 1.18598 2.52002 2.54298C-0.17098 5.23398 -0.17098 9.60398 2.52002 12.295C3.87702 13.652 5.62502 14.319 7.39602 14.319C8.86802 14.319 10.34 13.859 11.559 12.916L15.699 17.01C15.883 17.194 16.113 17.286 16.366 17.286C16.596 17.286 16.849 17.194 17.033 17.01C17.378 16.665 17.378 16.067 17.01 15.699ZM7.41902 12.456C6.06202 12.456 4.82002 11.927 3.85402 10.984C1.89902 9.02898 1.89902 5.83198 3.85402 3.85398C4.79702 2.91098 6.06202 2.38198 7.41902 2.38198C8.77602 2.38198 10.018 2.91098 10.984 3.85398C11.95 4.79698 12.456 6.06198 12.456 7.41898C12.456 8.77598 11.927 10.018 10.984 10.984C10.041 11.95 8.75302 12.456 7.41902 12.456Z" fill="black"/>
                    </svg>
                </div>
                <input className="search-bar" type="search" placeholder='Search'/>
            </div> 

            <div className='logo-div'>
                <p id='logo-text'>SNEAKER <br/>SUPPLY</p>
            </div>

            <div className='right-nav-div'>
                <div>
                    <Link to="/" id='home'>Home</Link>
                </div>
                <div>
                   <Link to="/catalog" id='catalog'>Catalog</Link>
                </div>
                <div>
                    <Link to="/cart" id='cart'>
                        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2.43058C0 1.85333 0.46441 1.38892 1.04167 1.38892H3.01649C3.97135 1.38892 4.81771 1.94447 5.21267 2.7778H23.0512C24.1927 2.7778 25.026 3.86287 24.7266 4.9653L22.947 11.5755C22.5781 12.9384 21.3411 13.8889 19.9306 13.8889H7.40885L7.64323 15.1259C7.73872 15.6163 8.1684 15.9722 8.66753 15.9722H21.1806C21.7578 15.9722 22.2222 16.4367 22.2222 17.0139C22.2222 17.5912 21.7578 18.0556 21.1806 18.0556H8.66753C7.1658 18.0556 5.87674 16.9879 5.59896 15.5165L3.35938 3.75437C3.32899 3.58944 3.18576 3.47225 3.01649 3.47225H1.04167C0.46441 3.47225 0 3.00784 0 2.43058ZM5.55556 21.5278C5.55556 21.2542 5.60944 20.9833 5.71414 20.7305C5.81884 20.4778 5.97229 20.2481 6.16575 20.0547C6.3592 19.8612 6.58887 19.7078 6.84163 19.6031C7.09439 19.4984 7.3653 19.4445 7.63889 19.4445C7.91248 19.4445 8.18338 19.4984 8.43615 19.6031C8.68891 19.7078 8.91857 19.8612 9.11203 20.0547C9.30548 20.2481 9.45894 20.4778 9.56364 20.7305C9.66833 20.9833 9.72222 21.2542 9.72222 21.5278C9.72222 21.8014 9.66833 22.0723 9.56364 22.3251C9.45894 22.5778 9.30548 22.8075 9.11203 23.0009C8.91857 23.1944 8.68891 23.3479 8.43615 23.4526C8.18338 23.5573 7.91248 23.6111 7.63889 23.6111C7.3653 23.6111 7.09439 23.5573 6.84163 23.4526C6.58887 23.3479 6.3592 23.1944 6.16575 23.0009C5.97229 22.8075 5.81884 22.5778 5.71414 22.3251C5.60944 22.0723 5.55556 21.8014 5.55556 21.5278ZM20.1389 19.4445C20.6914 19.4445 21.2213 19.664 21.612 20.0547C22.0027 20.4454 22.2222 20.9753 22.2222 21.5278C22.2222 22.0803 22.0027 22.6102 21.612 23.0009C21.2213 23.3916 20.6914 23.6111 20.1389 23.6111C19.5864 23.6111 19.0564 23.3916 18.6657 23.0009C18.275 22.6102 18.0556 22.0803 18.0556 21.5278C18.0556 20.9753 18.275 20.4454 18.6657 20.0547C19.0564 19.664 19.5864 19.4445 20.1389 19.4445Z" fill="black"/>
                        </svg>
                        <div id='cart-item-count' ref={cartCountRef}>
                            <p> {count}</p>
                        </div>
                    </Link>

                </div>
            </div>


        </div>
    )
}

export default Navbar

