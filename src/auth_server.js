
const  express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userSchema = require('../models/users.js');
const cors = require('cors');
//-o_o===init======================================================|
mongoose.connect("mongodb://localhost:27017/gitalabs_users",{"useNewUrlParser": true}, (error)=>{
  if(error){
  console.log("MongoDb is not connected.");
  }
  else{
    console.log("Successfully connected to MongoDb");
  }
});
const ObjectId=mongoose.Types.ObjectId;
//-o_o===init======================================================|
let app = express();
const PORT = 3838;
app.use(helmet());
app.use(cors());
app.use(helmet.noCache());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
//-o_o===init======================================================|
app.post('/auth_existing', (request,response)=>{

  console.log("GOt request from React app!");
  
  const username = request.body.username;
  const password256 = request.body.password256;
  
  console.log(username,password256)

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");

  userSchema.findOne({username: username})//search db for order with this orderId
  .exec((err,data)=>{
    console.log("Entered mongoose query");
    if(data!==null){
      if(password256===data.password256){
        console.log(`${username} is authenticated.`);
        response.send({message: `${username} is authenticated!`})
      }
    }
    if(data===null){
      console.log("Invalid credentials");
      response.send({message: `${username} has provided invalid login credentials.`})
    }
    if(err){
      console.error(new Error(err));
    }
  });

})
//-o_o===init======================================================|
app.post('/auth_new', (request,response)=>{

  console.log("Entered new auth!");
  const email = request.body.email;
  const username = request.body.username;
  const password256 = request.body.password256;

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");

  userSchema.findOne({email: email})//search db for order with this orderId
  .exec((err,data)=>{
    console.log("Entered mongoose query");
    if(data!==null){
        console.log(`${email} is already registered.`);
        response.send({message: `${email} is already registered with username: ${data.username}`});
    }
    if(data===null){
      userSchema.findOne({username: username})//search db for order with this orderId
      .exec((err,data)=>{
        console.log("Entered mongoose query");
        if(data!==null){
          console.log(`${username} is taken.`);
          response.send({message: `${username} is taken. Try another.`});
        }
      
        if(data===null){
          console.log("User does not exist. Creating account ...");
          const _user = new userSchema({
            username: username,
            password256: password256,
            email: email
          });

          _user.save((e)=>{
            if(e!=null){
              console.log("Error writing to dB. Try again.");
              response.send({message: `Error in registering user. Please try again`});
            }
            else{
              console.log(`Added User:${username} to dB.`);
              response.send({message: `Created new account for ${email} with Username: ${username}.\n Don't forget to  bring a towel.`});
            }
          })
          
        }
        if(err){
          console.error(new Error(err));
          response.send({message: `Error in registering user. Please try again`});
        }
      });
    }
    if(err){
      console.error(new Error(err));
      response.send({message: `Error in registering user. Please try again`});
    }
  });

});
//-o_o===init======================================================|
app.listen(PORT,()=>
 console.log(`User Auth server listnening on port:${PORT}`)
);
//-o_o===init======================================================|

