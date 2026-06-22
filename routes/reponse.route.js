const express = require('express');
const router = express.Router();
// Importation des fonctions du contrôleur (on va les créer juste après)
const { getReponsesByQuestion, createReponse } = require('../controllers/reponse.controller');

// GET /api/reponses/:questionId -> Appelé par ton useEffect
router.get('/:questionId', getReponsesByQuestion);

// POST /api/reponses -> Appelé par ton bouton "Envoyer"
router.post('/', createReponse);

module.exports = router;