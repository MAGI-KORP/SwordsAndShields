// This is the middleware that handles the code specific to the MySQL -- now MongoDB -- queries.

const chalk = require ("chalk");
const connection = require ("./index");
const Character = require ("./models/createCharacter");


const orm =
{   getRankings: function ()
    {   // Get the overall record of characters in the arena.  For now we won't worry about characters that
        // have dropped out, or characters that have died.

        // The function returns a promise

        return new Promise ((resolve, reject) =>
        {       
            Character.find ()
            .then (function (results)
            {   // Don't seem to be able to get this module to recognize "virtual" fields, so I can't
                // sort the results with a mongoose method.  I'll have to do it myself...

                // First I need an array of objects with the data I want to sort by

                const array = [];
                results.forEach (function(character)
                {
                    array.push
                    (   {   "name":     character.firstName + " " + character.surName,
                            "wins":     character.wins,
                            "losses":   character.losses,
                            "percent":  (character.wins / (character.wins + character.losses)).toFixed(3)
                        }
                    )
                })

                // Now I can sort it...

                array.sort (function (a, b)
                {
                    if (a.percent > b.percent) return -1;
                    if (a.percent < b.percent) return 1;
                    return 0;
                })

                return resolve (array);
            })
            .catch (function (error)
            {
                return reject (error)
            })
        })
    },

    getCharacterRecord: function (name)
    {   // Get the overall record of the specified character.

        // The function returns a promise

        // return new Promise ((resolve, reject) =>
        // {       
        //     const query = "select name, wins, losses, (wins / (wins + losses)) as pct " +
        //                   "from characters " +
        //                   "where name = ? " +
        //                   "order by pct desc;";
        //     connection.query (query, [name], function (err, results)
        //     {   // error or not, we're done with the connection for now, so close it...
        //         // connection.end();

        //         // and retrun the results    
                
        //         if (err) return reject ("An error occured, couldn't retrieve character record");

        //         return resolve (results);
        //     })
        // })
    },

    incrementWins: function (name)
    {   // Increment the characters wins

        // return new Promise ((resolve, reject) =>
        // {   const query = "update characters set wins = (wins + 1) " +
        //                   "where name =?;";
        //     connection.query (query, [name], function (err, results)
        //     {   // error or not, we're done with the connection for now, so close it...
        //         // connection.end();

        //         // and retrun the results

        //         if (err) return reject ("An error occured, couldn't update the database");

        //         return resolve (results);
        //     })
        // })
    },

    incrementLosses: function (name)
    {   // increment the characters losses

        // return new Promise ((resolve, reject) =>
        // {       
        //     const query = "update characters set losses = (losses + 1) " +
        //                   "where name =?;";
        //     connection.query (query, [name], function (err, results)
        //     {   // error or not, we're done with the connection for now, so close it...
        //         // connection.end();

        //         // and retrun the results
                
        //         if (err) return reject ("An error occured, couldn't update the database");

        //         return resolve (results);
        //     })
        // })
    }
}

module.exports = orm;