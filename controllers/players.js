import { Team } from "../models/team.js";
import { Profile } from "../models/profile.js";
import { Player } from "../models/player.js";

function index(req, res) {
  Player.find({})
  .then(players => {
    res.render('players/index', {
      players
    })
  })
}

function newPlayer(req, res) {
  res.render('players/new')
}

function create(req, res) {
  Player.create(req.body)
  .then(players => {
    res.redirect('/players')
  })
}

export {
  index, 
  newPlayer as new,
  create
}