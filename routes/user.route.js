const express = require('express');
const { inscription, connexion, profil } = require('../controllers/user.controller');

// Gestion automatique du chemin du middleware (avec ou sans 's')
let auth;
try {
  auth = require('../middlewares/auth');
} catch (e) {
  try {
    auth = require('../middleware/auth');
  } catch (err) {
    console.error("Erreur : Le fichier auth.js est introuvable dans le dossier middleware(s)");
  }
}

const router = express.Router();

router.post("/inscription", inscription);
router.post("/connexion", connexion);

// 💡 CORRECTION ICI : Ajout de /:id pour correspondre à ce que ton React envoie
router.get("/profil/:id", auth, profil);

module.exports = router;