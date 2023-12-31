const connectDB = require('../DB/connect');
const User = require('../Models/User');
const RegisterUser = async (req,res) => {
      try{
           await connectDB();
           await User.create(req.body);
           res.send({ok : true});
      }
      catch(ex)
      {
         console.log(ex);
         res.send({error : "Somethings went wrong"});
      }
}
module.exports = RegisterUser;