const express = require("express");
const upload = require("../../middlewares/upload.files");

const tournamentRouter = express.Router();

const {getAllTournaments, getTournament, postNewTournament, putTournament, deleteTournament} = require("../controllers/tournament.controllers")

tournamentRouter.get("/", getAllTournaments);
tournamentRouter.get("/:id", getTournament);
tournamentRouter.post("/",upload.single("tournamentLogo"), postNewTournament);
tournamentRouter.put("/:id",upload.single("tournamentLogo"), putTournament);
tournamentRouter.delete("/:id", deleteTournament);

module.exports = tournamentRouter;