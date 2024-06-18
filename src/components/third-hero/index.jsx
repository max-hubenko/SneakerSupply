import "./index.css"
import travisImage from "../../assets/Images/travis1.webp"

function ThirdHero() {
    return (
        <>
        
        <div className="Hero-div">
            <div className="inner-hero-div">
                <h1> STEP UP YOUR GAME </h1>
            </div>
            <div id="95-div" className="inner-hero-div">
                <img id="travis1" src={travisImage}/>
            </div>
        </div>
        <div className="banner-div">
                <h1 id="banner-text">PROUD SUPPLIERS OF</h1>
        </div>
        
        </>
    )
}


export default ThirdHero