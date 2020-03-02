const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  text: String,
});

module.exports = mongoose.model('Game', gameSchema);
