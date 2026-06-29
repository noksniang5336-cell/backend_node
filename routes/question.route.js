const express = require('express');
const router = express.Router();

const Question = require('../models/Question');


// AJOUTER UNE QUESTION
router.post('/', async (req, res) => {
    try {

        const { titre, description, tags } = req.body;


        const nouvelleQuestion = new Question({
            titre,
            description,
            tags
        });


        await nouvelleQuestion.save();


        res.status(201).json({
            message: "Question créée",
            question: nouvelleQuestion
        });


    } catch(error){

        res.status(500).json({
            message:"Erreur serveur",
            error:error.message
        });

    }
});



// SUPPRIMER UNE QUESTION
router.delete('/:id', async (req, res) => {
    try {

        const question = await Question.findByIdAndDelete(req.params.id);


        if(!question){
            return res.status(404).json({
                message:"Question introuvable"
            });
        }


        res.json({
            message:"Question supprimée"
        });


    } catch(error){

        res.status(500).json({
            error:error.message
        });

    }
});


module.exports = router;