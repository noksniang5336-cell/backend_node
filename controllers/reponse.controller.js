const Reponse = require("../models/Reponse");

const createReponse = async (req, res) => {
  try {
    const { questionId, contenu } = req.body;

    // ❌ validation
    if (!questionId) {
      return res.status(400).json({
        error: "Un ID de question valide est requis.",
      });
    }

    if (!contenu) {
      return res.status(400).json({
        error: "Le contenu est requis.",
      });
    }

    // ✅ création
    const reponse = await Reponse.create({
      questionId,
      contenu,
    });

    res.status(201).json(reponse);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createReponse,
};