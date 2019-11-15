const express = require('express'), 
      app = express(),
      Character = require('./models/character'),
      mongoose = require('mongoose');

app.use(express.json())

/* Create */
app.post('/characters', (req, res) => {
  console.log(req.body);
  
  Character.insertMany(req.body).then(chars => {
    return res.send(chars)
  }).catch((err) => {
    return res.send(400).sendStatus(err);
  });
});

/* Read */
app.get('/characters', (req, res) => {
  Character.find({}).then((characters) => {
    res.send(characters);
  }).catch(err => {
    res.status(500).sendStatus(err);
  });
});

app.get('/characters/:id', (req, res) => {
  _id = req.params.id;
  Character.findById(_id).then((character) => {
    return res.send(character);
  }).catch((err) => {
    return res.status(404).send({});
  });
});

/* Start Server */
const {DATABASE_URL, PORT} = require('./config');

let server;

function closeServer() {
  return mongoose.disconnect()
    .then(_ => {
      return new Promise((resolve, reject) => {
        console.log('Closing the server');
        server.close( err => {
          if(err) {
            return reject(err);
          } else {
            resolve();
          }
        })
      })
    })
}

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

function runServer(port, databaseURL) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseURL, options, response => {
      if(response)
        return reject(response);
      
      server = app.listen(port, _ => {
        console.log('App running on port:', port);
        resolve();
      })
      .on("error", err => {
        mongoose.disconnect();
        return reject(err);
      });
    });
  });
}

runServer(PORT, DATABASE_URL).catch (err => {
  console.log(err);
});

module.exports = {app, runServer, closeServer};