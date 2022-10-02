import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  players: [{type: Schema.Types.ObjectId, ref: "Player"}]
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team
}