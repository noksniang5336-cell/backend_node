const mongoose = require('mongoose');

const reponseSchema = new mongoose.Schema({
    contenu: {
        type: String,
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question', // Optionnel : lie au modèle Question si tu en as un
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reponse', reponseSchema);