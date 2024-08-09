const express = require("express");
const app = express();
const { pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "127.0.0.1",
  port: 5432,
  database: "Login",
});

app.use(express.json());
app.post("/verificar-button", (req, res) => {
  const email = req.body.email;
  pool.query(
    "SELECT * FROM login WHERE email = $1",
    [email],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "Erro ao verificar emial" });
      } else {
        if (results.rows.length > 0) {
          res.send({ exists: true });
        } else {
          res.send({ exists: false });
        }
      }
    }
  );
});
app.listen(5500, () => {
  console.log("Servidor iniciado na porta 3000");
});
