const express = require('express');
const router = express.Router();
const Tournaments = require('../db').import('../models/tournaments');
const User = require('../db').import('../models/users')
const validateSession = require('../middleware/validate-session');

//POST
router.post('/create', validateSession, (req, res) => {

    console.log(req.body)
    const tourneyFromRequest = {
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        maxPlayers: req.body.maxPlayers,
        format: req.body.format,
        version: req.body.version,
        prizePool: req.body.prizePool,
        userId: req.user.id
    }
    Tournaments.create(tourneyFromRequest)
        .then(tourney => res.status(200).json(tourney))

        .catch(err => res.status(500).json({
            error: err
        }));
});

//GET ALL FOR USER
router.get('/mytourneys', validateSession, (req, res) => {
    Tournaments.findAll({
        where: {
            userId: req.user.id
        }
    })
        .then(tourneys => res.status(200).json(tourneys))
        .then(console.log(`GET BY ID!!!!!!!!!!!!!!!`))
        .catch(err => res.status(500).json({
            error: err
        }))
});

//GET ALL
router.get('/alltourneys', (req, res) => {
    Tournaments.findAll()
        .then(tourneys => res.status(200).json(tourneys))
        .catch(err => res.status(500).json({
            error: err
        }))
});

router.get('/:Id', (req, res) => {
    Tournaments.findOne({
        where: {
            userId: req.params.userId
        }
    })
        .then(tourney => res.status(200).json(tourney))
        .catch(err => res.status(500).json({
            error: err
        }))
});

router.put('/edit/:id', (req, res) => {
    Tournaments.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(tourney => res.status(200).json(tourney))
        .catch(err => res.json(req.errors))
});

router.delete('/delete/:name', validateSession, (req, res) => {
    Tournaments.destroy({
        where: {
            name: req.params.name
        }
    })
        .then(tourney => res.status(200).json(tourney))
        .catch(err => res.json({
            error: err
        }))
});

module.exports = router;