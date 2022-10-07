import { Team } from "../models/team.js";
import { Profile } from "../models/profile.js";
import { Player } from "../models/player.js";

function index(req, res) {
  Player.find({owner: req.user.profile._id})
  .populate('owner')
  .then(players => {
    res.render('players/index', {
      players
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/players')
  })
}

function newPlayer(req, res) {
  res.render('players/new')
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Player.create(req.body)
  .then(players => {
    res.redirect('/players')
  })
}

function show(req, res) {
  Player.findById(req.params.id)
  .populate('owner')
  .then(player => {
    console.log(taco);
    res.render('players/show', {
      player
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/players')
  })
}

function deletePlayer(req, res) {
  Player.findByIdAndDelete(req.params.id)
  .then(player => {
    if (player.owner.equals(req.user.profile._id)){
      player.delete()
      .then(removePlayer => {
        res.redirect('/players')
      })
    } else {
      throw new Error ('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err);
    res.redirect('/')
  })
}

function updatePlayer(req, res) {
  Player.findById(req.params.id)
  .then(player => {
    player.save()
    .then(() => {
      res.redirect(`/players/${player._id}`)
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/players')
  })
}

function edit(req, res) {
  Player.findById(req.params.id)
  .then(player => {
    res.render('players/edit', {
      player
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/players')
  })
}

function editPlayer(req, res) {
  Player.findById(req.params.id)
  .then(player => {
    if (player.owner.equals(req.user.profile._id)){
      player.updateOne(req.body, {new: true})
      .then(updatedPlayer => {
        res.redirect(`/players/${player._id}`)
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/players')
  })
}

export {
  index, 
  newPlayer as new,
  create,
  show,
  deletePlayer as delete,
  edit,
  editPlayer
}