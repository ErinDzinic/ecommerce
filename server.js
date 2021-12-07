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


let db = admin.firestore();


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
    }else if(!Number(number) || number.length<10){
        return res.json({'alert': 'invalid number, enter valid number'});
    }else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }

    //store user in db - check if user already exists
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'user with this email already exists'});
        }else{
            bcrypt.genSalt(10,(err,salt) =>{
                bcrypt.hash(password, salt,(err,hash) =>{
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data =>{
                        res.json({
                            name: req.body.name,
                            email: req.body.email,
                            seller: req.body.seller
                        })
                    })
                })
            })
        }
    })
})

app.get('/login',(req,res) =>{
    res.sendFile(path.join(staticPath,'html/login.html'));
})

app.post('/login',(req,res) =>{
    let { email, password } = req.body

    if(!email.length || !password.length){
        return res.json({'alert': 'Please fill all fields!'});
    }
 
    db.collection('users').doc(email).get()
    .then(user =>{
        if(!user.exists){
            return res.json({'alert':'Your email does not exist'});
        }else {
            bcrypt.compare(password, user.data().password, (err,result) =>{
                if(result){
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                        seller: data.seller,
                    })
                } else {
                    return res.json({'alert':'Password is incorrect'});
                }
            })
        }
    })
})

app.get('/seller', (req,res) =>{
    res.sendFile(path.join(staticPath, 'html/seller.html'));
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



