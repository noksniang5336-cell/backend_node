const express = require('express');
const router = express.Router();

const Question = require("../models/Question");
// GET toutes les questions
router.get("/", async (req, res) => {

  try {

    const questions = await Question.find()
      .populate("auteur", "nom email")
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

// ✅ POST nouvelle question (MANQUANT)
router.post('/', async (req, res) => {
    try {
        console.log("QUESTION REÇUE :", req.body);

        const { titre, description, tags } = req.body;

        // simulation (sans MongoDB pour l'instant)
        const newQuestion = {
            id: Date.now(),
            titre,
            description,
            tags,
            createdAt: new Date()
        };

        return res.status(201).json({
            message: "Question créée avec succès",
            question: newQuestion
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;