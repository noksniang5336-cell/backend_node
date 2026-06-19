const express = require('express');
const { inscription, connexion, profil } = require('../controllers/user.controller');


const router = express.Router();
router.post("/inscription", inscription);
router.post("/connexion", connexion);


// récupérer le profil utilisateur
router.get("/profil/:id", profil);



module.exports = router;