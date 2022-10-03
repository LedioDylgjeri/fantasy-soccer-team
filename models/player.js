import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: String,
  position: String,
  number: Number,
  starting: String,
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}