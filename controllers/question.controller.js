const Question = require("../models/Question");

const createQuestion = async (req, res) => {
  try {
    const { titre, description, tags } = req.body;

    const question = await Question.create({
      titre,
      description,
      tags
    });

    res.status(201).json(question);

  } catch(error) {
    res.status(500).json({
      message: error.message
    });
  }
};


const getQuestions = async (req,res)=>{
  try {

    const questions = await Question.find().sort({
      createdAt:-1
    });

    res.json(questions);

  }catch(error){
    res.status(500).json({
      message:error.message
    });
  }
}


module.exports = {
 createQuestion,
 getQuestions
}