import { Team } from "../models/team.js";
import { Profile } from "../models/profile.js";
import { Player } from "../models/player.js";

function newTeam(req, res) {
  res.render('teams/new')
}

function create(req, res) {
  // console.log(req.user.profile._id);
  req.body.owner = req.user.profile._id
  Team.create(req.body)
  .then(team => {
    res.redirect('/')
  })
}

export {
  newTeam as new,
  create,
}