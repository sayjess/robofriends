import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid white', borderRadius: '5px', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;