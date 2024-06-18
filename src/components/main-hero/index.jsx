import "./index.css"
import airmax90 from "../../assets/Images/airmax90-backgorund.jpeg"

function MainHero() {
    return (
        <>
        <div id="placeholder-div">
            <p>placeholder</p>
        </div>
        <div className="Hero-div" id="first-hero-div">
            <div className="inner-hero-div">
                <h1> FIND YOUR <br/>
                PERFECT PAIR </h1>
            </div>
            <div className="inner-hero-div">
                <img src={airmax90}/>
            </div>
        </div>
        <div className="banner-div">
            <h1 id="banner-text">NEW DROPS OUT NOW - LIMITED TIME ONLY</h1>
        </div>
        </>
    )
}


export default MainHero