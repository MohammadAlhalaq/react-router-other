const dbconnection = require('../config/connection');

exports.login = (email) => dbconnection
  .query('SELECT * FROM users WHERE $1 = users.email ;', [email]);

exports.signup = (data) => {
  const {
    name, email, hash
  } = data;

  return dbconnection
    .query({ text: 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);', values: [name, email, hash] });
};
