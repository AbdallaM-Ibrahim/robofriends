import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className="main tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;