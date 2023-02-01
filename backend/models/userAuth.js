import express from "express"
import { pool } from "../db.js";
import { createUsers,getUsersQuery} from "./queries.js"


const router = express.Router()

router.get("/", (req, res) => {
    pool.query(getUsersQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
   })


router.post("/", (req, res) => {
 const {email, password } = req.body
 pool.query(createUsers, [email, password], (error, results) => {
    if(error) throw error;
      res.status(201).send('The user was successfully created');
})

})



export default router