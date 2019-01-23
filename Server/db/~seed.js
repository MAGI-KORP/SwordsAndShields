const mongoose = require('mongoose')
const Character = require ("./models/createCharacter");
// mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
// const uri = 'mongodb://localhost:27017/swords-and-shields' 

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
       
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
       
    }
);

const seeds = 
[   {   "firstName":    "Bruce",
        "surName":     "Wayne",
        "wins":         15,
        "losses":       3
    },
    {   "firstName":    "Peter",
        "surName":     "Parker",
        "wins":         10,
        "losses":       6
    },
    {   "firstName":    "Diana",
        "surName":     "Prince",
        "wins":         14,
        "losses":       2
    },
    {   "firstName":    "Clark",
        "surName":     "Kent",
        "wins":         15,
        "losses":       2
    }
]

seeds.forEach (function (player)
{
    Character.create
    (   {   firstName:  player.firstName,
            surName:    player.surName,
            strength:   Math.floor(Math.random() *50),
            defense:    Math.floor(Math.random() *50),
            evasion:    Math.floor(Math.random() *50),
            wins:       player.wins,
            losses:     player.losses,
        }
    )
    .then (function (data)
    {
        console.log ("okay");
    })
    .catch (function (error)
    {
        console.log (error)
    })
})

// orm.getRankings ()
// .then (function (data)
// {
//     console.log (JSON.stringify (data, null, 2))
// })
// .catch (function (error)
// {
//     console.log (error)
// })