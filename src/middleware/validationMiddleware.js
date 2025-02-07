// middleware/validationMiddleware.js
const validateRequest = (req, res, next) => {
    const { name, language } = req.body;
  
    if (!name || !language) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    next();
  };
  
  module.exports = validateRequest;
  