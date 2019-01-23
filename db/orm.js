// // This is the middleware that handles the code specific to the MySQL queries.

// const connection = require ("./connection.js");

// const orm =
// {   getRankings: function ()
//     {   // Get the overall record of characters in the arena.  For now we won't worry about players that
//         // have dropped out, or characters that have died.

//         // The function returns a promise

//         return new Promise ((resolve, reject) =>
//         {       
//             const query = "select name, wins, losses, (wins / (wins + losses)) as percent " +
//                           "from characters order by percent desc;";
//             connection.query (query, function (err, results)
//             {   // error or not, we're done with the connection for now, so close it...
//                 // connection.end();

//                 // and retrun the results    
                
//                 if (err) return reject ("An error occured, couldn't retrieve player rankings");

//                 return resolve (results);
//             })
//         })
//     },

//     getCharacterRecord: function (name)
//     {   // Get the overall record of the specified character.

//         // The function returns a promise

//         return new Promise ((resolve, reject) =>
//         {       
//             const query = "select name, wins, losses, (wins / (wins + losses)) as pct " +
//                           "from characters " +
//                           "where name = ? " +
//                           "order by pct desc;";
//             connection.query (query, [name], function (err, results)
//             {   // error or not, we're done with the connection for now, so close it...
//                 // connection.end();

//                 // and retrun the results    
                
//                 if (err) return reject ("An error occured, couldn't retrieve character record");

//                 return resolve (results);
//             })
//         })
//     },

//     incrementWins: function (name)
//     {   // Increment the characters wins

//         return new Promise ((resolve, reject) =>
//         {   const query = "update characters set wins = (wins + 1) " +
//                           "where name =?;";
//             connection.query (query, [name], function (err, results)
//             {   // error or not, we're done with the connection for now, so close it...
//                 // connection.end();

//                 // and retrun the results

//                 if (err) return reject ("An error occured, couldn't update the database");

//                 return resolve (results);
//             })
//         })
//     },

//     incrementLosses: function (name)
//     {   // increment the characters losses

//         return new Promise ((resolve, reject) =>
//         {       
//             const query = "update characters set losses = (losses + 1) " +
//                           "where name =?;";
//             connection.query (query, [name], function (err, results)
//             {   // error or not, we're done with the connection for now, so close it...
//                 // connection.end();

//                 // and retrun the results
                
//                 if (err) return reject ("An error occured, couldn't update the database");

//                 return resolve (results);
//             })
//         })
//     }
// }

// module.exports = orm;