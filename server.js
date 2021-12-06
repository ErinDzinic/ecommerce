//importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

let staticPath = path.join(__dirname,"/public");

//importing express.js

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
 
//firebase admin setup
let serviceAccount = require("./ecommerce-21c77-firebase-adminsdk-axlzm-a472b2c35e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



//routes

app.post('/signup',(req,res) =>{
    let { name, email, password, number, tac, notification} = req.body;

    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    }else if(!email.length){
        return res.json({'alert': 'enter your email'});
    }else if(password.length < 8){
        return res.json({'alert': 'your password needs to contain atleast 8 characters'});
    }else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    }else if(!Number(number.value) || number.length<10){
        return res.json({'alert': 'invalid number, enter valid number'});
    }else if(!tac.checked){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }else{

    }

    res.json('data recieved');
})

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(staticPath,'html/signup.html'))
})

app.get("/",(req,res) => {
    res.sendFile(path.join(staticPath,'html/index.html'));
})

app.get('/404',(req,res)=>{
    res.sendFile(path.join(staticPath,'html/404.html'));
})

app.use((req,res)=>{
    res.redirect('/404');
})

app.listen(3000,()=> {
    console.log('listening on port 3000....');
})