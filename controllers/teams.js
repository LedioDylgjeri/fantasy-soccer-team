import { Team } from "../models/team.js";
import { Profile } from "../models/profile.js";
import { Player } from "../models/player.js";

function newTeam(req, res) {
  res.render('teams/new')
}


export {
  newTeam as new,
}