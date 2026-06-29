const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

  const authHeader = req.headers.authorization;

  console.log("HEADER TOKEN :", authHeader);

  if (!authHeader) {
    return res.status(401).json({
      message: "Token manquant"
    });
  }


  const token = authHeader.split(" ")[1];


  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch(error) {

    console.log(error);

    return res.status(401).json({
      message: "Token invalide"
    });
  }

};


module.exports = auth;