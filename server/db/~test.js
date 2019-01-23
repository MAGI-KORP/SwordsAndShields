const orm = require ("./orm.js");

orm.getRankings ()
.then (function (data)
{
    console.log (JSON.stringify (data, null, 2))
})
.catch (function (error)
{
    console.log (error)
})