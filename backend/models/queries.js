export const createUsers = `INSERT INTO users (email, password) VALUES  ($1, $2)`;
export const getUsersQuery =  "SELECT * FROM users";
export const createUsersRegister = `INSERT INTO users (gender, fname, lname, username, phoneNumber, email, repeatEmail, password, repeatPassword, date, photo, terms) VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
export const getUsersQueryRegister =  "SELECT * FROM users";
// export const existingEmail = `SELECT * FROM users WHERE email = '=${email}'`
// export const newUserQuery = "INSERT INTO users(email, password) values($1, $2) RETURNING email" 

// 1. Sign IN
// if email existed
// if password is correct
// 2. Registration

// if email existed
// email equal to repeat value 
// Password equal to repeat password 
// if username is existed