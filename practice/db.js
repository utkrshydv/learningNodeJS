const mongoose = require('mongoose');

const mongoUrl = "mongodb://127.0.0.1:27017/userlogin"

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
})

db.on('error', (err) => {
  console.log(err);
})

db.on('disconnected', () => {
  console.log("MongoDB Disconnected")
})

module.exports = db;