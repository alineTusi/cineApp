import express from "express"
import { pool } from "../db.js";
import { createUsersRegister, getUsersQueryRegister } from "./queries.js"


const router = express.Router()

router.get("/", (req, res) => {
    pool.query(getUsersQueryRegister, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
   })


router.post("/",  (req, res) => {
 const { gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms} = req.body
 const data = [gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms]
 

 pool.query(`SELECT * FROM users WHERE email = '${email}'`, (error, result) => {
        if(error) {
            throw error
        }
    
    if (result.rows.length > 0) {
        res.status(400).send({ error: 'Email already exists' });
      } else {
        pool.query(createUsersRegister, data, (error, results) => {
            if(error) throw error;
            result.setHeader('Content-Type', 'application/json');
            results.status(201).send('The user was successfully created');
        })
  
        res.send({ message: 'Successful registration' });
      }

    })

})



export default router