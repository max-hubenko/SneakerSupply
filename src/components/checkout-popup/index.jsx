import "./index.css"
import { FaCheckCircle } from "react-icons/fa";


function CheckoutPopup() {

    const handleClick = () => {
        const overlay = document.querySelector(".overlay")
        const popup = document.querySelector(".popup")

        popup.classList.toggle("scale-in-center")
        overlay.classList.toggle("hidden")
        popup.classList.toggle("hidden")
    }
        

    return (
        <>
            <div className="overlay hidden">
            <div className="popup hidden">
                <div className="top-text-div">
                    <h2>Checkout Success!</h2>
                    <h2 id="check-icon"><FaCheckCircle /></h2>
                </div>
                <div id="add-button-div">
                <div onClick={handleClick}className="add-button">
                    <p id="button-text"> CLOSE</p>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default CheckoutPopup