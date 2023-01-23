import express from "express";
import movieRouter from "./movies/routes.js";
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const PORT = 3004;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`);
}); 

app.use('/movies', movieRouter);