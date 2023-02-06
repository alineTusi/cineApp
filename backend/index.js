import express from "express";
import movieRouter from "./movies/routes.js";
import calendarRouter from "./calendar/routes.js";
import scheduleRouter from "./schedule/routes.js";
import bodyParser from 'body-parser';
import cors from 'cors'
<<<<<<< HEAD
import userAuth from "./models/userAuth.js"
import usersRegister from "./models/usersRegister.js"
import userLogout from "./models/userLogout.js"
import helmet from "helmet";
=======

>>>>>>> d1d233f743217623af1ec570b7db1c4af0abab18
const app = express();
const PORT = 3006;

<<<<<<< HEAD

app.use(helmet())
app.use(cors())

app.use(express.json());

=======
app.use(bodyParser.json());
app.use(cors());
>>>>>>> d1d233f743217623af1ec570b7db1c4af0abab18

app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`);
}); 

<<<<<<< HEAD
app.use('/movies', movieRouter)
app.use('/login', userAuth)
app.use('/register', usersRegister)
app.use('/logout', userLogout)
=======
app.use('/movies', movieRouter);
app.use('/calendar', calendarRouter);
app.use('/schedule', scheduleRouter);
>>>>>>> d1d233f743217623af1ec570b7db1c4af0abab18
