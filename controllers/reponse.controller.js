const Reponse = require("../models/Reponse");

const getReponsesByQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;

    const reponses = await Reponse.find({ questionId });

    res.json(reponses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReponse = async (req, res) => {
  try {
    const { questionId, contenu } = req.body;

    if (!questionId) {
      return res.status(400).json({ error: "ID question requis" });
    }

    if (!contenu) {
      return res.status(400).json({ error: "Contenu requis" });
    }

    const reponse = await Reponse.create({ questionId, contenu });

    res.status(201).json(reponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getReponsesByQuestion,
  createReponse,
};