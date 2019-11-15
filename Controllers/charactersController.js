const Character = require('../models/character');

/* Create */
const createCharacter = (req, res) => {
  Character.insertMany(req.body).then(chars => {
    return res.send(chars)
  }).catch(err => {
    return res.status(400).send(err);
  });
};

/* Read */
const getCharacters = (_, res) => {
  Character.find({}).then((characters) => {
    return res.send(characters);
  }).catch(err => {
    return res.status(500).send(err);
  });
};

const getCharacter = (req, res) => {
  _id = req.params.id;
  Character.findById(_id).then(character => {
    return res.send(character);
  }).catch( _ => {
    return res.status(404).send({});
  });
};

/* Update */
const updateCharacter = (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'year', 'firstAppearance', 'mostNotablePlayer'];

  const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

  if(!isValidUpdate) {
    return res.status(400).send({
      error: `Invalid update, only allowed to update ${allowedUpdates}`
    });
  }
  Character.findByIdAndUpdate(_id, req.body).then(character => {
    if(!character) {
      return res.status(404).send({});
    }
    return res.send(character);
  }).catch(err => {
    res.status(500).send(err);
  });
};

/* Delete */
const deleteCharacter = (req, res) => {
  const _id = req.params.id;
  Character.findByIdAndDelete(_id).then(character => {
    if(!character) {
      return res.status(404).send();
    }
    return res.send(character);
  }).catch(err => {
    res.status(505).send(err);
  });
};

module.exports = {
  createCharacter,
  getCharacter,
  getCharacters,
  updateCharacter,
  deleteCharacter
}
