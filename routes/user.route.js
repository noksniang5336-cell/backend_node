const express = require('express');
const { inscription, connexion, profil } = require('../controllers/user.controller');

// 💡 AJOUT DU MIDDLEWARE D'AUTHENTIFICATION 
// (Ajustez le chemin '../middlewares/auth.js' si votre fichier s'appelle autrement ou est placé ailleurs)
const auth = require('../middlewares/auth'); 

const router = express.Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);

// Récupérer le profil utilisateur (Désormais 'auth' est bien défini !)
router.get("/profil", auth, profil);

module.exports = router;