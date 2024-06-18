import "./index.css"
import airmax95 from "../../assets/Images/airmax95.png"

function SecondHero() {
    return (
        <>
        
        <div className="Second-Hero-div">
            <div id="95-div" className="inner-hero-div">
                <img id="airmax95" src={airmax95}/>
            </div>
            <div className="inner-hero-div">
                <h1> BEST IN CLASS </h1>
            </div>
        </div>
        <div className="banner-div">
                <h1 id="banner-text2">NEW DROPS OUT NOW - LIMITED TIME ONLY</h1>
        </div>
        
        </>
    )
}


export default SecondHero