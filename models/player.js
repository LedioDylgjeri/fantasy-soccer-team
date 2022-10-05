import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: {type: String, required: true},
  position: {type: String, required: true},
  status: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}