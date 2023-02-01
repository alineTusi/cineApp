import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from "helmet";
import movieRouter from "./movies/routes.js";
import calendarRouter from "./calendar/routes.js";
import scheduleRouter from "./schedule/routes.js";
import userAuth from "./models/userAuth.js"
import usersRegister from "./models/usersRegister.js"

const app = express();
const PORT = 3004;


// app.use(helmet())
app.use(cors())

app.use(express.json());


app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`)
}); 

app.use('/movies', movieRouter);
app.use('/login', userAuth);
app.use('/register', usersRegister);
app.use('/calendar', calendarRouter);
app.use('/schedule', scheduleRouter);