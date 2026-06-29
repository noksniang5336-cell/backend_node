const express = require('express');
const router = express.Router();
const Question = require('../models/Question'); // Votre modèle Mongoose

// Route pour supprimer une question par son ID
router.delete('/:id', async (req, res) => {
    try {
        const questionId = req.params.id;
        const deletedQuestion = await Question.findByIdAndDelete(questionId);

        if (!deletedQuestion) {
            return res.status(404).json({ message: "Question non trouvée" });
        }

        res.status(200).json({ message: "Question supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression", error });
    }
});

module.exports = router;