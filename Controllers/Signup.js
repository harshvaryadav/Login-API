const User = require('../Models/User');
const RegisterUser = async (req,res) => {
      try{
           const user = req.body;
           const response = await User.findOne(
                 {
                     UserName : user.UserName,
                     Source : user.Source
               });
           if(response != null)
           {
              res.send({Ok : true , success : false, msg : 'Username already exists. Please choose a different one.'});
              return ;
           }
           await User.create(user);
           res.send({ok : true, success : true , msg : 'Signup successful! Welcome aboard!'});
      }
      catch(ex)
      {
         res.send({error : "Oops! Signup failed due to an unexpected error. Please try again."});
      }
}
module.exports = RegisterUser;