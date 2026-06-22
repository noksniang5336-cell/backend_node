const mongoose = require("mongoose");

const reponseSchema = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Question"
  },
  contenu: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ FIX IMPORTANT : éviter overwrite model
module.exports =
  mongoose.models.Reponse || mongoose.model("Reponse", reponseSchema);