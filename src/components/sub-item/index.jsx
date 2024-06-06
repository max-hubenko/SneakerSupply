/* eslint-disable react/prop-types */
import "./index.css"


function SubItem({name, price}) {
    return (
        <div id="subitem-div">
            <p>{name}</p>
            <p>{price.toFixed(2)}$</p>
        </div>
    )
}

export default SubItem