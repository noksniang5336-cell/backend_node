const mongoose = require("mongoose");


const reponseSchema = new mongoose.Schema({

    contenu: {
        type: String,
        required: true
    },


    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true
    },


    auteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
});


module.exports = mongoose.model("Reponse", reponseSchema);