import express from "express";
import morgan from "morgan";
import AdnModel from "./Model/adnModel.js";
import hasMutationHorizontal from "./controllers/DetectorMutacionesHorizontal.js";

const app = express();
const port = 3000;

const adnModel = new AdnModel();

app.use(morgan("dev"));
app.use(express.json());



app.post('/mutation', (req, res) => {
   const nuevoAdn = { 
        id: adnModel.getAdns().length + 1,
        adn: req.body.adn
    }

   const detectorMutacion = hasMutationHorizontal(req.body.adn) 

   if (detectorMutacion === true){
    res.status(200).json({ message: 'Mutación detectada'})
   } else {
    res.status(403).json({ message: 'Sin Mutacion'})
   }


   adnModel.addAdn(nuevoAdn);
   res.json(nuevoAdn);
});



app.get('/adns', (req, res) => {
    const adns = adnModel.getAdns();
    res.json(adns);
 });


app.get("/stats", (req, res) => {
    const statsTrue = adnModel.countMutations();
    const statsFalse = adnModel.countNoMutations();
    res.json({count_mutations:statsFalse, count_no_mutations:statsTrue})
})


app.listen(port, () => {
    console.log("Servidor en Puerto", port);
});
