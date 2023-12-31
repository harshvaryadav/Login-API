const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      UserName : {
        type : String
      },
      Password : {
        type : String
      }
});

const User = mongoose.model("User",UserSchema);

module.exports = User;