import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
<<<<<<< HEAD
  user: process.env.DATABASE_USER,
  host:  process.env.DATABASE_HOST,
  database:  process.env.DATABASE_NAME,
  password:  process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT
=======
  user: 'postgres',
  host: 'localhost',
  database: 'test-app',
  password: '',
  port: 5433
>>>>>>> d1d233f743217623af1ec570b7db1c4af0abab18
});






