import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test-app',
  password: '',
  port: 5433
});






