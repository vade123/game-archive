const gameRouter = require('express').Router();
const Game = require('../models/game');

gameRouter.get('/all', (req, res) => {
  Game
    .find()
    .then((games) => {
      res.json({ games });
    });
});

gameRouter.post('/add', (req, res) => {
  const game = new Game({
    name: req.body.name,
    text: req.body.text,
  });
  game
    .save()
    .then((result) => {
      res.status(201).json({ name: result.name });
    });
});

module.exports = gameRouter;
