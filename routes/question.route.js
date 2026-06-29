const express = require('express');
const router = express.Router();
// Importez votre modèle de données MongoDB ici si nécessaire
// const Question = require('../models/Question'); 

// Route pour récupérer toutes les questions
router.get('/', async (req, res) => {
    try {
        // Exemple si vous utilisez Mongoose :
        // const questions = await Question.find();
        // res.json(questions);
        
        res.json({ message: "Route des questions fonctionnelle !" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 💡 C'EST CETTE LIGNE QUI MANQUAIT ET QUI FAISAIT CRASHER INDEX.JS !
module.exports = router;