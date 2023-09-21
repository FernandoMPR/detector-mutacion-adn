import express from "express";
import morgan from "morgan";
import AdnModel from "./Model/adnModel.js";

const app = express();
const port = 3000;

const adnModel = new AdnModel();

app.use(morgan("dev"));
app.use(express.json());

app.post('/adns', (req, res) => {
   const nuevoAdn = { 
        id: adnModel.getAdns().length + 1,
        adn: req.body.adn
    }
   adnModel.addAdn(nuevoAdn);
   res.json(nuevoAdn);
});

app.get('/adns', (req, res) => {
    const adns = adnModel.getAdns();
    res.json(adns);
 });

app.listen(port, () => {
    console.log("Servidor en Puerto", port);
});
