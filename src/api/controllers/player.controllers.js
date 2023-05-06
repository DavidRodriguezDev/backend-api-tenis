const Player = require("../models/player.models");

const getAllPlayers = async (request, response) => {
    try {
        
        const allPlayers = await Player.find();
        return response.status(200).json(allPlayers);

    } catch (error) {
        return response.status(500).json(error);
    }
}

const getPlayer = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allPlayers = await Player.findById(id);
        return response.status(200).json(allPlayers);

    } catch (error) {
        response.status(500).json(error)
    }
}

const postNewPlayer = async (request, response) => {
    try {
        
       const {name, ranking, titles, photo, plays, age, nationality, birthplace, coach, turnedPro, weight, height} = request.body;
       const newPlayer = new Player({name, ranking, titles, photo, plays, age, nationality, birthplace, coach, turnedPro, weight, height});

       if(request.file) {
        
        newPlayer.photo = request.file.path;

       }

       const createdPlayer = await newPlayer.save(); 
       return response.status(201).json(createdPlayer);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const putPlayer = async (request, response) => {
    try {
        
        const {id} = request.params;
        const putPlayer = new Player(request.body);
        putPlayer._id = id;

        if(request.file) {
        
            putPlayer.photo = request.file.path;
    
           }

        const playerDb = await Player.findByIdAndUpdate(id, putPlayer);

        if(!playerDb){
            return response.status(404).json("message: Player not found")
        }

        return response.status(200).json(putPlayer);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const deletePlayer = async (request, response) => {
    try {

        const {id} = request.params;
        const playerDb = await Player.findByIdAndDelete(id);

        if(!playerDb) {
            return response(404).json({"message" : "Player not found"})
        }

        return response.status(200).json(playerDb);

    } catch (error) {
       return response.status(500).json(error);
    }
}

module.exports = {getAllPlayers, getPlayer, postNewPlayer, putPlayer, deletePlayer};