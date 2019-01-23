import React from 'react';
import './PlayerRanking.css';

const PlayerRanking = (props) =>
{
    return (
        <div className="ranking-div">
            <div className="name-div">{ props.name }</div>
            <div className="stat-div">{ props.wins }</div>
            <div className="stat-div">{ props.losses }</div>
            <div className="percent-div">{ props.percent.toFixed(3).substring(1) }</div>
        </div>
    )
}

export default PlayerRanking