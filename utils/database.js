import mysql from "mysql2/promise";

const conection = await mysql.createConnection({
  host: "localhost",
  user: "dom_EdixonDCT",
  password: "ADSO",
  database: "dom_EdixonDCT"
});

export default conection;