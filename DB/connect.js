const mongoose = require('mongoose');
const connectDB = () =>{
      const db = mongoose.connect("mongodb+srv://harshvardhancse1934:DQLabvuXANgzwxmE@loginapi.tl8owgp.mongodb.net/");
      console.log("Connected to Db");
      return db;
}

module.exports = connectDB;