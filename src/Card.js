import React from "react";

const Card = ({id, name, email }) => { //or you can use this
    //const {id, name, email } = props; //destructuring ES6
    return(
        // className is using tachyons library
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card