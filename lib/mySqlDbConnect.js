import mysql2 from "mysql2/promise";

async function mySqlDbConnect({ query, params = [] }) {
  const connect = await mysql2.createConnection({
    host: process.env.MYSQL_IP,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });
  const [rows, fields] = await connect.execute(query, params);
  return rows;
}

export default mySqlDbConnect;
