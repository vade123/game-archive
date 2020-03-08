const gameRouter = require('express').Router();
const Game = require('../models/game');

gameRouter.get('/all', async (req, res) => {
  const games = await Game.find();
  res.json({ games });
});

gameRouter.post('/add', async (req, res) => {
  const game = new Game({
    name: req.body.name,
    text: req.body.text,
  });
  const savedGame = await game.save();
  res.status(201).json({ name: savedGame.name });
});

module.exports = gameRouter;
