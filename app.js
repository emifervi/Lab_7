const express = require('express'), 
      app = express(),
      mongoose = require('mongoose'),
      router = require('./routes');

app.use(express.json());
app.use('/', router);

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