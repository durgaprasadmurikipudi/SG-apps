import React from 'react';
import './SeasonDisplay.css';

function season(flag) {
    let style = "sun", text = "Let's hit the beaches!", season = "summer"; 
    if(flag)
    {
        style = "snowflake";
        text = "Burr! It's chilly!";
        season = "winter"
    }
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon icon-left ${style} massive`}></i>
            <p>{text}</p>
            <i className={`icon icon-right ${style} massive`}></i>
        </div>
    );
}


const SeasonDisplay = (props) => {
    return season(props.seasonIsWinter)
}

export default SeasonDisplay;