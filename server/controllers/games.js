const bcrypt = require('bcryptjs');

const gameRouter = require('express').Router();
const Game = require('../models/game');
const User = require('../models/user');

gameRouter.get('/all', async (req, res) => {
  const games = await Game.find();
  res.json({ games });
});

gameRouter.post('/add', async (req, res) => {
  const user = await User.findOne({ username: 'admin' });
  const passwordCorrect = await bcrypt.compare(req.body.password, user.passwordHash);

  if (!passwordCorrect) {
    res.status(401).json({ error: 'invalid password' });
  } else {
    const game = new Game({
      name: req.body.name,
      text: req.body.text,
    });
    const savedGame = await game.save();
    res.status(201).json({ name: savedGame.name });
  }
});

module.exports = gameRouter;
