import express from "express";
import movieRouter from "./movies/routes.js";
import cors from 'cors'
import userAuth from "./models/userAuth.js"
import usersRegister from "./models/usersRegister.js"
import helmet from "helmet";
const app = express();
const PORT = 3004;


// app.use(helmet())
app.use(cors())

app.use(express.json());


app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
}); 

app.use('/movies', movieRouter)
app.use('/login', userAuth)
app.use('/register', usersRegister)
