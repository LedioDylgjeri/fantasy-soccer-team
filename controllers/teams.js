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
      teams
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
  .populate('players')
  .then(team => {
    Player.find({_id: {$nin: team.players}})
    .then(players => {
      res.render('teams/show', {
        team,
        players
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

function addPlayer(req, res) {
  Team.findById(req.params.id)
  .then(team => {
    team.players.push(req.body.playerId)
    team.save()
    .then(team => {
        res.redirect(`/teams/${team._id}`)
    })
  })
}

export {
  newTeam as new,
  create,
  index,
  show,
  deleteTeam as delete,
  addPlayer
}