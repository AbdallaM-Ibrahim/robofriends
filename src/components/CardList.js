import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    return (
        <div className='main2'>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;