const Question = require("../models/question");

const createQuestion = async (req, res) => {
  try {
    const { titre, description ,tags} = req.body;

    const nouvelleQuestion = await Question.create({
      titre,
      description,
      tags,
      auteur : req.user.id
    });

    res.status(201).json(nouvelleQuestion);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
    console.log(error);
  }
};


const getQuestions = async (req, res) => {
  try {

    const questions = await Question.find().sort({
      createdAt: -1
    });

    res.json({
     questions
   });

  } catch(error){

    res.status(500).json({
      error:error.message
    });

  }
};


module.exports = {
  createQuestion,
  getQuestions
};