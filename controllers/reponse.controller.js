const Reponse = require("../models/reponse.model");


// Ajouter une réponse

const ajouterReponse = async (req, res) => {

    try {

        const { contenu, question, auteur } = req.body;


        const nouvelleReponse = await Reponse.create({
            contenu,
            question,
            auteur
        });


        res.status(201).json(nouvelleReponse);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




// Récupérer les réponses d'une question

const getReponses = async (req, res) => {

    try {


        const reponses = await Reponse.find({
            question: req.params.questionId
        })
        .populate("auteur", "nom email");


        res.status(200).json(reponses);


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    ajouterReponse,
    getReponses
};