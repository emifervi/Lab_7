const DB_PASSWORD = require('./db/dbCredentials').DB_PASSWORD;

module.exports.DATABASE_URL = process.env.DATABASE_URL || `mongodb+srv://m001-student:${DB_PASSWORD}@sandbox-kxnp6.mongodb.net/characters?retryWrites=true&w=majority`;
module.exports.PORT = process.env.PORT || 8080;