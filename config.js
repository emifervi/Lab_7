var DATABASE_URL, PORT;

if(process.env.NODE_ENV === 'production'){
  DATABASE_URL = process.env.DATABASE_URL,
  PORT = process.env.PORT;
} else {
  const DB_PASSWORD = require('./db/dbCredentials').DB_PASSWORD;
  DATABASE_URL = `mongodb+srv://m001-student:${DB_PASSWORD}@sandbox-kxnp6.mongodb.net/characters?retryWrites=true&w=majority`;
  PORT = 8080;
}

module.exports = {
  DATABASE_URL,
  PORT
}
