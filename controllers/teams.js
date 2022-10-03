import { Team } from "../models/team.js";
import { Profile } from "../models/profile.js";
import { Player } from "../models/player.js";

function newTeam(req, res) {
  res.render('teams/new')
}

function create(req, res) {
  // console.log(req.user.profile._id);
  req.body.owner = req.user.profile._id
  console.log(req.body);
  Team.create(req.body)
  .then(team => {
    res.redirect('/teams')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/teams')
  })
}

function index(req, res) {
  Team.find({})
  .populate('owner')
  .then(teams => {
    res.render('teams/index', {
      teams,
      title: "⚽️"
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate('owner')
  .then(team => {
    Player.find({_id: {$nin: team.players}})
    .then(playersNotChosen => {
      res.render('teams/show', {
        team,
        playersNotChosen
      })
    })
  })
}

function deleteTeam(req, res) {
  Team.findByIdAndDelete(req.params.id)
  .then(team => {
    res.redirect('/teams')
  })
}

export {
  newTeam as new,
  create,
  index,
  show,
  deleteTeam as delete,
}