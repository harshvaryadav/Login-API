const mongoose = require('mongoose');
const connectDB = (Uri) =>{
      const db = mongoose.connect(Uri);
      console.log("Connected to Db");
      return db;
}

module.exports = connectDB;