import React, { Component } from 'react';
import PlayerRanking from './PlayerRanking';

const axios = require("axios");

class Rankings extends Component
{   state =
    {   standings: []
    }

    componentDidMount = () =>
    {   // when the component mounts and is React is ready, retrieve ranking data from the server

        axios.get("/api/getRankings")
        .then (data =>
        {   
            this.setState ({ standings: data.data })
        })
        .catch (err =>
        {   console.log (err);
        })
    }
    
    render()
    {
                return (
            <div className="standing-div">
                { this.state.standings.map(player =>
                (   <PlayerRanking
                        name = { player.name }
                        wins = { player.wins }
                        losses = { player.losses }
                        percent = { player.pct }
                    />
                ))}
            </div>
        )
    }
}

export default Rankings