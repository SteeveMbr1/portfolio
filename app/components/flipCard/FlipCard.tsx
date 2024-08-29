import React from "react";
import "./FlipCard.scss"

function FlipCard({name, items} : {name: string, items: string[]}) {
    return (
        <div className="flip-card">
            <div className="container">
                <div className="front bg-slate-300 p-4">{name}</div>
                <div className="back bg-slate-700 text-white p-4">
                    {items.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
