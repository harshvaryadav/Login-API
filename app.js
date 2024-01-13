require('dotenv').config();
const express = require('express');
const LoginRouter = require("./Routes/Login");
const SignupRouter = require("./Routes/Signup");
const app = express();
const PORT = process.env.PORT;
const connectDB = require('./DB/connect');
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));  
app.get("/",(req,res)=>{
    res.send("I am Live");
});
app.use("/api/Login",LoginRouter);
app.use("/api/SignUp",SignupRouter);
const Start = async ()=>{
      try {
          await connectDB(process.env.MONGODB_URL);
          app.listen(PORT,()=>{
              console.log("Server is start and live on port " + PORT);
          });
      }
      catch(error)
      {
         console.log(error);
      }
}

Start();