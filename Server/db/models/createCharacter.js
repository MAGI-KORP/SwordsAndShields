const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = Promise

const characterSchema = new Schema({
  
  firstName: { 
    type: String, 
    unique: true, 
    required: true
   },
  surName: { 
    type: String, 
    unique: false, 
    required: false 
  },
  strength: { 
    type: Number, 
    unique: false, 
    required: true 
  },
  defense: { 
    type: Number, 
    unique: false, 
    required: true 
  },
  evasion: { 
    type: Number, 
    unique: false, 
    required: false 
  },
  wins:
  { type: Number,
    default: 0
  },
  losses:
  { type: Number,
    default: 0
  }
})

// This is how Mongoose documentation says to create a virtual field (a field that is not stored in the
// database), but it doesn't seem to be doing anything.  These virtual fields don't seem to be added to
// the results from the query, and I certainly was not able to use them in a .sort() method...
//
// characterSchema.virtual("player")
// .get (function ()
// {   console.log ("virtual: player: ", this.firstName + " " + this.surName)
//     return this.firstName + " " + this.surName
// })

// characterSchema.virtual("percent")
// .get (function ()
// {   console.log ("virtual: percent: ", this.wins / (this.wins + this.losses))
//     return this.wins / (this.wins + this.losses)
// })

const CreateCharacter = mongoose.model("CreateCharacter", characterSchema)
module.exports = CreateCharacter