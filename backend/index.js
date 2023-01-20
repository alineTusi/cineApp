import express from "express";
import movieRouter from "./movies/routes.js";
import bodyParser from 'body-parser';

const app = express();
const PORT = 6000;

app.use(bodyParser.json());

app.listen(PORT, () =>{
  console.log(`Server is running on ${PORT}`);
}); 

app.use('/movies', movieRouter);