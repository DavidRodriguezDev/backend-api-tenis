const express = require("express");
const dotenv = require("dotenv");

const {connect} = require("./src/utils/database");

const cloudinary = require("cloudinary").v2;

const categoryRouter = require("./src/api/routes/category.routes");
const tournametRouter = require("./src/api/routes/tournament.routes");
const playerRouter = require("./src/api/routes/player.routes");

dotenv.config();
const PORT = process.env.PORT ;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

const app = express();
connect();

app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({extended: false})); 


//ROUTES
app.use("/category", categoryRouter);
app.use("/tournament", tournametRouter);
app.use("/player", playerRouter);

app.listen(PORT, console.log(`listening on port: http://localhost:${PORT}`));