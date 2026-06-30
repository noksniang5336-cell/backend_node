const express = require('express');
const router = express.Router();

const Question = require("../models/question");


// GET toutes les questions
router.get("/", async (req, res) => {

  try {

    const questions = await Question.find()
      .sort({ createdAt: -1 });


    res.json({
      questions
    });


  } catch(error){

    res.status(500).json({
      message: error.message
    });

  }

});



// POST nouvelle question
router.post('/', async (req, res) => {

    try {

        console.log("QUESTION REÇUE :", req.body);


        const { titre, description, tags } = req.body;


        const newQuestion = await Question.create({

            titre,
            description,
            tags

        });



        res.status(201).json({

            message:"Question créée avec succès",

            question:newQuestion

        });



    } catch(error){


        res.status(500).json({

            message:error.message

        });

    }

});

// DELETE supprimer une question
router.delete("/:id", async (req, res) => {

  try {

    const question = await Question.findByIdAndDelete(
      req.params.id
    );


    if(!question){

      return res.status(404).json({
        message:"Question introuvable"
      });

    }


    res.json({
      message:"Question supprimée avec succès"
    });


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});



module.exports = router;