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


    const reponse = await Reponse.create({
      questionId,
      contenu
    });


    res.status(201).json(reponse);


  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};




// ✅ MODIFIER une réponse
const updateReponse = async (req, res) => {

  try {


    const reponse = await Reponse.findByIdAndUpdate(

      req.params.id,

      {
        contenu: req.body.contenu
      },

      {
        new: true
      }

    );


    if (!reponse) {

      return res.status(404).json({
        error:"Réponse introuvable"
      });

    }


    res.json(reponse);



  } catch(error) {


    res.status(500).json({
      error:error.message
    });


  }

};






// ✅ SUPPRIMER une réponse
const deleteReponse = async (req,res)=>{

  try {


    const reponse = await Reponse.findByIdAndDelete(
      req.params.id
    );


    if(!reponse){

      return res.status(404).json({
        error:"Réponse introuvable"
      });

    }


    res.json({
      message:"Réponse supprimée"
    });



  } catch(error){


    res.status(500).json({
      error:error.message
    });


  }

};






module.exports = {

  getReponsesByQuestion,

  createReponse,

  updateReponse,

  deleteReponse

};