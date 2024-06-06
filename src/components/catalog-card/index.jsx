import './index.css'


// eslint-disable-next-line react/prop-types
function CatalogCard({handleClick, shoeName, price, brand}) {
    // const index = key;

    return (
        <div id='card-div'>
            <div id='top-section-card'>
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
            <div id="add-button-div">
                <div onClick={handleClick} id="add-button">
                    <p id='button-text'> ADD TO CART</p>
                </div>
            </div>
        </div>
    )
}


export default CatalogCard