const validator = require('validator');
const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if(!validator.isEmpty(value)) {
        throw new Error ('The name cannot be empty');
      }
    }
  },
  year: {
    type: Number,
    required: true,
  },
  firstAppearance: {
    type: String,
    required: true,
    validate(value) {
      if(!validator.isEmpty(value)) {
        throw new Error ('First Appearance cannot be empty');
      }
    }
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