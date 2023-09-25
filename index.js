import express from "express";
import morgan from "morgan";
import AdnModel from "./Model/adnModel.js";
import pool from "./server.js";
import hasMutationHorizontal from "./controllers/DetectorMutacionesHorizontal.js";



const app = express();
const port = 3000;

const adnModel = new AdnModel(pool);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    const respuesta = await pool.query("SELECT NOW()")
    return res.json(respuesta.rows[0])
})

let datosGet =  {}

app.get('/mutation', (req, res) => {
    datosGet = req.query;
  
    const formHTML = `
      <html>
        <head>
          <title>Formulario de Mutaciones</title>
        </head>
        <body>
          <h1>Formulario de Mutaciones</h1>
          <form action="/mutation" method="post">
            <label for="adn">ADN:</label>
            <input type="text" id="adn" name="adn" value="${datosGet.adn || ''}" required>
            <button type="submit">Enviar</button>
          </form>
        </body>
      </html>
    `;
    res.send(formHTML);
  });



app.post('/mutation', (req, res) => {
    const nuevoAdn = { 
         id: adnModel.getAdns().length + 1,
         adn: req.body.adn || datosGet.adn || '',
     }
 
    const detectorMutacion = hasMutationHorizontal(nuevoAdn.adn) 
 
    if (detectorMutacion === true){
     res.status(200).json({ message: 'Mutación detectada'})
    } else {
     res.status(403).json({ message: 'Sin Mutacion'})
    }
    adnModel.addAdn(nuevoAdn);
 });




app.get('/adns', async (req, res) => {
    try {
        const adns = await adnModel.getAdns();
        res.json(adns);
    } catch (error) {
        console.error('Error al obtener los datos de la base de datos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


app.get("/stats", async (req, res) => {
    try {
      const statsTrue = await adnModel.countMutations();
      const statsFalse = await adnModel.countNoMutations();
      res.json({ count_mutations: statsFalse, count_no_mutations: statsTrue });
    } catch (error) {
      console.error('Error al obtener estadísticas desde la base de datos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });


app.listen(port, () => {
    console.log("Servidor en Puerto", port);
});
