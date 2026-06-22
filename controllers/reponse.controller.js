const mongoose = require('mongoose');
const Reponse = require('../models/reponse.model'); // Ajuste le chemin vers ton modèle de données

// ✅ 1. Récupérer les réponses d'une question
exports.getReponsesByQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;

        // Sécurité anti-500 : Si l'ID dans l'URL n'est pas un ObjectId MongoDB valide (ex: "1")
        if (!mongoose.Types.ObjectId.isValid(questionId)) {
            return res.status(400).json({ 
                error: "L'identifiant de la question est invalide. Format MongoDB requis." 
            });
        }

        // Recherche des réponses associées
        const reponses = await Reponse.find({ question: questionId }).sort({ createdAt: 1 });
        
        // Renvoie directement le tableau attendu par setReponses() dans React
        return res.status(200).json(reponses);

    } catch (error) {
        console.error("Erreur dans getReponsesByQuestion :", error);
        return res.status(500).json({ error: "Erreur interne lors de la récupération des réponses" });
    }
};

// ✅ 2. Créer une nouvelle réponse
exports.createReponse = async (req, res) => {
    try {
        const { contenu, question } = req.body;

        // Validation des données reçues du frontend
        if (!contenu || !contenu.trim()) {
            return res.status(400).json({ error: "Le contenu de la réponse ne peut pas être vide." });
        }

        if (!question || !mongoose.Types.ObjectId.isValid(question)) {
            return res.status(400).json({ error: "Un ID de question valide est requis." });
        }

        // Création du document en base de données
        const nouvelleReponse = new Reponse({
            contenu: contenu,
            question: question
        });

        const reponseSauvegardee = await nouvelleReponse.save();

        // Renvoie l'objet sauvegardé que React ajoutera à son tableau avec [...prev, data]
        return res.status(201).json(reponseSauvegardee);

    } catch (error) {
        console.error("Erreur dans createReponse :", error);
        return res.status(500).json({ error: "Erreur interne lors de l'enregistrement de la réponse" });
    }
};