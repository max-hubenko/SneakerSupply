import './index.css';
import 'animate.css';

// eslint-disable-next-line react/prop-types
function CatalogCard({ addItemtoCart, shoeName, price, brand, imgSrc}) {
    const handleClick = (event) => {
        const clickedElement = event.currentTarget; // Use currentTarget to get the element with the event handler attached
        
        clickedElement.classList.toggle("active");

        const child = clickedElement.querySelector("#button-text");
        if (child) {
            // Add animation classes
            child.classList.add('animate__animated', 'animate__jello');
            
            // Remove animation classes once the animation ends
            const removeAnimationClasses = () => {
                child.classList.remove('animate__animated', 'animate__jello');
                child.removeEventListener('animationend', removeAnimationClasses);
                clickedElement.classList.toggle("active")
            };
            
            child.addEventListener('animationend', removeAnimationClasses);
        }
        addItemtoCart();
    };

    return (
        <div id="card-div">
            <div id="top-section-card">
                <img className="sneak-img" src={imgSrc}></img>
            </div>
            <div id="text-div">
                <div id="top-text">
                    <p className="card-text-top">{shoeName}</p>
                    <p className="card-text-top">{price}$</p>
                </div>
                <div id="bottom-text">
                    <p id="brand-text">{brand}</p>
                </div>
            </div>
            <div id="add-button-div">
                <div onClick={handleClick} className="add-button">
                    <p id="button-text"> ADD TO CART</p>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;
