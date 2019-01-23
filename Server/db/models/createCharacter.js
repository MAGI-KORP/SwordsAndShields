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

const CreateCharacter = mongoose.model("CreateCharacter", characterSchema)
module.exports = CreateCharacter