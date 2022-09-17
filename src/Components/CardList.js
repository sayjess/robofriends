import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => { //map = for loop(ES6)
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })

    if (true){
        throw new Error("Error display");
    }
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;