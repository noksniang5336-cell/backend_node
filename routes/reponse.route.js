const express = require('express');
const router = express.Router();

const { 
  getReponsesByQuestion, 
  createReponse,
  updateReponse,
  deleteReponse
} = require('../controllers/reponse.controller');


// récupérer les réponses
router.get('/:questionId', getReponsesByQuestion);


// ajouter une réponse
router.post('/', createReponse);


// modifier une réponse
router.put('/:id', updateReponse);


// supprimer une réponse
router.delete('/:id', deleteReponse);


module.exports = router;