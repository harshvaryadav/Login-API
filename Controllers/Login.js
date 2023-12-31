const User = require('../Models/User');
const LogIn_User = async (req,res) => {
      const user = req.body;
      try{
      const response = await User.findOne(user);
      console.log(response);
      if(response != null)
      {
         res.send({ok : true , status : "True",message : "LoggedIn Successfully"});
      }
      else{
         res.send({ok : true , status : "False" , message : "UserName Or Password Is Incorrect"});
      }
    }
    catch(ex){
       res.send({ok : false, status : "Unknown" , message : "Something went wrong"});
    }
}

module.exports = LogIn_User;