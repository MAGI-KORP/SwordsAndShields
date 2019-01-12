import React, { Component } from 'react';
// import Typed from 'react-typed';
import PlayerRanking from './PlayerRanking';

const rankings = require("./ranking.json");

class Rankings extends Component
{   state =
    {   standings: rankings
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