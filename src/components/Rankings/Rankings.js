import React, { Component } from 'react';
import PlayerRanking from './PlayerRanking';

const rankings = require("./ranking.json");
const axios = require("axios");

class Rankings extends Component
{   state =
    {   
        // standings: rankings
        standings: []
    }

    componentDidMount = () =>
    // gleep = () =>
    {
console.log ("componentDidMount()");
        // axios.get("https://localhost:8080/api/getRankings")
        axios.get("/api/getRankings")
        .then (data =>
        {   
console.log("axios.get().then()");
console.log(JSON.stringify(data.data, null, 2));
// console.log("data[0]: ", data [0]);

            this.setState ({ standings: data.data })
        })
        .catch (err =>
        {   console.log (err);
        })
    }
    
    render()
    {
        
console.log("Rankings");
// this.gleep ();
        return (
            <div className="standing-div">
                { this.state.standings.map(player =>
                (   <PlayerRanking
                        name = { player.name }
                        wins = { player.wins }
                        losses = { player.losses }
                        // percent = { player.wins / (player.wins + player.losses) }
                        percent = { player.pct }
                    />
                ))}
            </div>
        )
    }
}

export default Rankings