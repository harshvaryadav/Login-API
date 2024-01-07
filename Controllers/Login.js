const User = require('../Models/User');
const LogIn_User = async (req,res) => {
      const user = req.body;
      try{
      const response = await User.findOne(user);
      if(response != null)
      {
         res.send({ok : true , status : "True",message : "Welcome back! You have successfully logged in. Enjoy your experience!"});
      }
      else{
         res.send({ok : true , status : "False" , message : "Invalid username or password. Please try again."});
      }
    }
    catch(ex){
       res.send({ok : false, status : "Unknown" , message : "Something went wrong. Please try again."});
    }
}

module.exports = LogIn_User;