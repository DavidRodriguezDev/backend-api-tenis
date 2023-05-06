const express = require("express");
const upload = require("../../middlewares/upload.files");

const playerRouter = express.Router();

const {getAllPlayers, getPlayer, postNewPlayer, putPlayer, deletePlayer} = require("../controllers/player.controllers");

playerRouter.get("/", getAllPlayers);
playerRouter.get("/:id", getPlayer);
playerRouter.post("/",upload.single("atpLogo"), postNewPlayer);
playerRouter.put("/:id",upload.single("atpLogo"), putPlayer);
playerRouter.delete("/:id", deletePlayer);

module.exports = playerRouter;