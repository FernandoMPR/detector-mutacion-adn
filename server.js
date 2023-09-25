import pg from "pg";
import { config } from "dotenv";

config();

//CONFIGURACION DE BASE DE DATOS DE RENDER, POSTGRESSQL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export default pool;
