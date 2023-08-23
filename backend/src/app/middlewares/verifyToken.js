const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const  verifyToken = (req, res, next) => {
    const token = req.headers.authorization; // Assuming token is sent in the Authorization header
  console.log(token)
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Failed to authenticate token" });
      }
  
      // Token is valid, you can access decoded.id and decoded.username here
      req.userId = decoded.id;
      next();
    });
  }

module.exports = verifyToken;