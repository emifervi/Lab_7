const express = require('express');
const router = express.Router();
const character = require('./controllers/charactersController');
const defaultRoute = require('./controllers/defaultController');

/* Create */
router.post('/characters', character.createCharacter);

/* Read */

// get all characters
router.get('/characters', character.getCharacters);

// get one char by id
router.get('/characters/:id', character.getCharacter);

/* Update */
router.patch('/characters/:id', character.updateCharacter);

/* Delete */
router.delete('/characters/:id', character.deleteCharacter);

/* Default Route */
router.get('*', defaultRoute);

module.exports = router;
