import React, { Component } from 'react';
// import Typed from 'react-typed';
import PlayerRanking from './PlayerRanking';

// const rankings = require("./ranking.json");
const axios = require("axios");
const orm = require("../../db/orm");

class Rankings extends Component
{   state =
    {   // standings: rankings
        standings: []
    }

    componentDidMount ()
    {
        orm.get("/api/getRankings")
        .then (data =>
        {   this.setState ({ standings: data })
        })
        .catch (err =>
        {   console.log (err);
        })
    }
    
    render()
    {   return (
            <div>
                <h1>
                    {/* <Typed 
                        strings={["This is the Player Rankings Page!"]} 
                        typeSpeed={100}
                        startDelay={0}
                        showCursor={true} 
                    /> */}
                </h1>
                <main className="standing-div">
                    { this.state.standings.map(player =>
                    (   <PlayerRanking
                            name = { player.name }
                            wins = { player.wins }
                            losses = { player.losses }
                            percent = { player.wins / (player.wins + player.losses) }
                        />
                    ))}
                </main>
            </div>
        )
    }
}

export default Rankings