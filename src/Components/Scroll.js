import React from "react";
import './scroll.css'

//reusable component
const Scroll = (props) => {
    return (
        <div className="scroll">
            {/* props.children - components that are wrapped around this component */}
            {props.children}
        </div>
    );
}

export default Scroll;