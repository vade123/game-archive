const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./utils/config');
const gameRouter = require('./controllers/games');
const userRouter = require('./controllers/users');

const app = express();

console.log('Connecting to', config.MONGODB_URI);
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err.message);
    console.log('Server shutting down');
    process.exit(1);
  });

app.use(cors());
app.use(bodyParser.json());
app.use('/api/games', gameRouter);
app.use('/api/users', userRouter);
app.use(express.static('build'));

module.exports = app;
