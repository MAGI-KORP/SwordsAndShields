const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = Promise

const characterSchema = new Schema({
  
  firstName: { 
    type: String, 
    unique: true, 
    required: true
   },
   username: {
     type: String,
     unique: false,
     required: false
   },
  surName: { 
    type: String, 
    unique: false, 
    required: false 
  },
  hitpoints: {
    type: String,
    unique: false,
    required: true,
    default: 50
  },
  strength: { 
    type: Number, 
    unique: false, 
    required: true 
  },
  defense: { 
    type: Number, 
    unique: false, 
    required: false
  },
  evasion: { 
    type: Number, 
    unique: false, 
    required: false 
  },
  backstory: {
    type: String,
    unique: false,
    required: false
  }
})

const CreateCharacter = mongoose.model("CreateCharacter", characterSchema)
module.exports = CreateCharacter