const JWT = require("jsonwebtoken");
// create a middleware which insures that a user is Authorized then move forward to private path 
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
        req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user =decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = requireSignIn;
