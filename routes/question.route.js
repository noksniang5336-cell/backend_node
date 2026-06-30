const express = require('express');
const router = express.Router();

const Question = require("../models/Question");


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



module.exports = router;