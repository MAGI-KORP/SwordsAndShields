// // This is the middleware that handles the connection to our MySQL database

// const mysql = require("mysql");
// var connection;

// if (process.env.JAWSDB_URL)
// {   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else
// {
//     connection = mysql.createConnection(
//     {   server:     "localhost",
//         port:       3306,
//         user:       "root",
//         password:   "root",
//         database:   "swords_and_shields_db"
//     });
// }

// connection.connect (function (error)
// {   // Connect to the MySQL database

//     if (error) throw error;

//     console.log ("Connected to database as", connection.threadId);
// });

// module.exports = connection;