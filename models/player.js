import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: {type: String, required: true},
  position: {type: String, required: true},
  status: String,
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}