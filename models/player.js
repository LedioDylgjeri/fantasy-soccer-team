import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: String,
  number: Number,
}, {
  timestamps: true
})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}