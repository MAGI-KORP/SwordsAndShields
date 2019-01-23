const orm = require ("./orm.js");

// orm.incrementLosses ("The Joker")
// .then (function ()
// {
//     orm.getRankings ()
//     .then (function (data)
//     {   console.log (JSON.stringify(data, null, 2));
//     })
//     .catch (function (err)
//     {   console.log (err)
//     })
// })
// .catch (function (err)
// {   console.log (err)
// })
orm.getCharacterRecord ("Batman")
.then (function (data)
{   console.log (JSON.stringify(data, null, 2));
})
.catch (function (err)
{   console.log (err)
})
