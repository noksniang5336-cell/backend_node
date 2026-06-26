const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});


module.exports = mongoose.models.Question || mongoose.model("Question", questionSchema);