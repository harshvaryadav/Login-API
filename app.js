const express = require('express');
const LoginRouter = require("./Routes/Login");
const SignupRouter = require("./Routes/Signup");
const app = express();
const PORT = 3000;
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
          await connectDB();
          app.listen(PORT,()=>{
              console.log("Server is start and live on port 3000");
          });
      }
      catch(error)
      {
         console.log(error);
      }
}

Start();