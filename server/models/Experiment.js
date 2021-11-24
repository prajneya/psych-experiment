const mongoose = require('mongoose');

const ExperimentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: String,
  occupation: String,
  experiment_type: Number,
  words_listed: String,
  game_chosen: String,
  createdAt: Date
});

module.exports = Experiment = mongoose.model('experiment', ExperimentSchema);