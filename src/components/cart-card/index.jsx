import './index.css'
import { CiSquareRemove } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
function CartCard({handleClick, shoeName, price, brand, imgSrc}) {

    return (
        <div id='cart-card-div'>
            <CiSquareRemove onClick={handleClick}id="exit" />
            <div id='top-section-card'>
                <img className="sneak-img" src={imgSrc}></img>
            </div>
            <div id='text-div'> 
                <div id='top-text'>
                    <p className='card-text-top'>{shoeName}</p>
                    <p className='card-text-top'>{price}$</p>
                </div>
                <div id='bottom-text'>
                    <p id='brand-text'>{brand}</p>
                </div>
            </div>
        </div>
    )
}


export default CartCard