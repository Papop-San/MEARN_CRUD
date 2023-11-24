const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

// IP address local | |  Database name
mongoose.connect("mongodb://127.0.0.1:27017/crud");


app.get('/' , async(req, res)=>{
    try {
        const users = await UserModel.find(); // Retrieve all users from the database
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ error: err.message || "An error occurred while fetching users." });
      }

})


//Find ID
app.get("/getUser/:id" ,(req ,res) => {
  const id = req.params.id;
  UserModel.findById({_id:id}) // Use findById directly with the 'id' parameter
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch(err => res.status(500).json({ error: err.message || "An error occurred while fetching the user." }));
});


app.post("/create", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ error: err.message || "An error occurred while creating the user." }));
});


//Update
app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    id,
    { 
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    },
    { new: true } // To return the updated document
  )
  .then(updatedUser => {
    res.json(updatedUser);
  })
  .catch(err => {
    res.status(500).json({ error: err.message || "An error occurred while updating the user." });
  });
});


//Del
app.delete('/deleteUser/:id' ,(req ,res)=>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(result => res.json(result))
  .catch(err=> res.json(err))

})


app.listen(3001, () =>{
    console.log(`Server Running On Port 3001`)
} )