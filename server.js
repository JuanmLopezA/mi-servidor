import express from "express";

const app = express();
app.use(express.json());

let datos = [];

app.get("/", (req, res) => {
  res.send("OK servidor");
});

app.post("/api", (req, res) => {
  datos.push(req.body);
  res.json({ ok: true });
});

app.get("/data", (req, res) => {
  res.json(datos);
});

app.listen(3000, () => {
  console.log("Servidor listo");
});
