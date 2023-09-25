import express from "express";
import morgan from "morgan";
import AdnModel from "./Model/adnModel.js";
import pool from "./server.js";
import hasMutation from "./controllers/DetectorMutacionesHorizontal.js";

const app = express();
const port = 3000;
const adnModel = new AdnModel(pool);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let datosGet = {};

//FORMULARIO PARA PRUEBAS
app.get("/mutation", (req, res) => {
  datosGet = req.query;
  res.sendFile("index.html", { root: "./views" });
});

//DETECTOR DE MUTACIONES DE ENTRADA AL SERVIDOR
app.post("/mutation", (req, res) => {
  const nuevoAdn = {
    id: adnModel.getAdns().length + 1,
    adn: req.body.adn || datosGet.adn || "",
  };

  const detectorMutacion = hasMutation(nuevoAdn.adn);

  if (detectorMutacion === true) {
    res.status(200).json({ message: "Mutación detectada" });
  } else {
    res.status(403).json({ message: "Sin Mutacion" });
  }
  adnModel.addAdn(nuevoAdn);
});

//LISTA DE ADNS INGRESADOS
app.get("/adns", async (req, res) => {
  try {
    const adns = await adnModel.getAdns();
    res.json(adns);
  } catch (error) {
    console.error("Error al obtener los datos de la base de datos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

//CONTEO DE ADN MUTABLES Y NO MUTABLES
app.get("/stats", async (req, res) => {
  try {
    const statsTrue = await adnModel.countMutations();
    const statsFalse = await adnModel.countNoMutations();
    res.json({ count_mutations: statsFalse, count_no_mutations: statsTrue });
  } catch (error) {
    console.error(
      "Error al obtener estadísticas desde la base de datos:",
      error
    );
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

//PUERTO DE DESPLIEGUE
app.listen(port, () => {
  console.log("Servidor en Puerto", port);
});
