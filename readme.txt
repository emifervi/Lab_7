Routes:


/characters :- get all characters
/characters/id :- get character with the given id


POST:
- route /characters

- format :
{
  "name": String,
  "year": Number,
  "firstAppearance": String,
  "relatedCharacters": [String],
  "mostNotablePlayer": String
}

can also receive an array of objects with the same format.

PATCH:
- route /characters/id

- create an obj with just the fields you wish to update


