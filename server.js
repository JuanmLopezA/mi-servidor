const express = require("express");
const app = express();

app.use(express.json());

let datos = [];

// test
app.get("/", (req, res) => {
  res.send("OK servidor");
});

// endpoint API ✅
app.post("/api", (req, res) => {
  console.log("Recibido:", req.body);
  datos.push(req.body);
  res.json({ ok: true });
});

// ver datos ✅
app.get("/data", (req, res) => {
  res.json(datos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor listo en puerto", PORT);
});
