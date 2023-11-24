const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// IP address local | |  Database name
mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/create", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ error: err.message || "An error occurred while creating the user." }));
});


app.listen(3001, () =>{
    console.log(`Server Running On Port 3001`)
} )