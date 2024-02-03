require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=> {
    res.send("HI Prakash Thhis is homepage");
});

app.get('/login', (req,res)=> {
    res.send("Hi Prakash this is login page");
})

app.get('/signup', (req,res)=> {
    res.send("Hi prakash this is signup page");
})

app.listen(PORT, ()=> {
    console.log("app started at post", PORT);
})