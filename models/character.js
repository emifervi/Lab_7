const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name cannot be empty'],
    unique: true
  },
  year: {
    type: Number,
    required: true,
  },
  firstAppearance: {
    type: String,
    required: [true, 'first appearance cannot be empty'],
  },
  relatedCharacters: {
    type: [String]
  },
  mostNotablePlayer: {
    type: String
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;