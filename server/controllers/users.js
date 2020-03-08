const bcrypt = require('bcryptjs');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.post('/add', async (req, res) => {
  const users = await User.find();

  if (users.length >= 1) {
    res.status(400).json({ error: 'cannot create more users' })
  } else {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: 'admin',
      passwordHash,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  }
});
