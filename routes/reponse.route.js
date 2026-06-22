const express = require("express");
const router = express.Router();


const {
    ajouterReponse,
    getReponses
} = require("../controllers/reponse.controller");



// POST ajouter une réponse

router.post("/", ajouterReponse);


// GET réponses d'une question

router.get("/:questionId", getReponses);



module.exports = router;