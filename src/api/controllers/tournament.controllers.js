const Tournament = require("../models/tournament.models");

const getAllTournaments = async (request, response) => {
    try {
        
        const allTournaments = await Tournament.find(); 
        return response.status(200).json(allTournaments);

    } catch (error) {
        return response.status(500).json(error);
    }
}

const getTournament = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allTournaments = await Tournament.findById(id); 
        return response.status(200).json(allTournaments);

    } catch (error) {
        response.status(500).json(error)
    }
}

const postNewTournament = async (request, response) => {
    try {
        
       const {name, surface, city, country, date, month, tournamentLogo, information, singles, doubles, website} = request.body;
       const newTournament = new Tournament({name, surface, city, country, date, month, tournamentLogo, information, singles, doubles, website});
       
       if(request.file) {
        newTournament.tournamentLogo = request.file.path;
       }
       
       const createdTournament = await newTournament.save(); 
       return response.status(201).json(createdTournament);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const putTournament = async (request, response) => {
    try {
        
        const {id} = request.params;
        const putTournament = new Tournament(request.body);
        putTournament._id = id;

        if(request.file) {
            putTournament.tournamentLogo = request.file.path;
           }
        
        const tournamentDb = await Tournament.findByIdAndUpdate(id, putTournament);

        if(!tournamentDb){
            return response.status(404).json("message: Tournament not found")
        }

        return response.status(200).json(putTournament);

    } catch (error) {
       return response.status(500).json(error);
    }
}

const deleteTournament = async (request, response) => {
    try {

        const {id} = request.params;
        const tournamentDb = await Tournament.findByIdAndDelete(id);

        if(!tournamentDb) {
            return response(404).json({"message" : "Tournament not found"})
        }

        return response.status(200).json(tournamentDb);

    } catch (error) {
       return response.status(500).json(error);
    }
}

module.exports = {getAllTournaments, getTournament, postNewTournament, putTournament, deleteTournament};