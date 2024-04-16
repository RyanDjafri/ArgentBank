const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Token is missing from header" });
    }

    const userToken = req.headers.authorization.split("Bearer")[1].trim();
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || "default-secret-key"
    );

    req.decodedToken = decodedToken;
    next();
  } catch (error) {
    console.error("Error in tokenValidation.js", error);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
