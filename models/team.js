import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  reviewer: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const teamSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  reviews: [reviewSchema],
  players: {type: Schema.Types.ObjectId, ref: 'Player'}
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team
}