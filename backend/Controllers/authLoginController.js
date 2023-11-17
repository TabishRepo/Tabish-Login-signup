//login controller for login

const userModel = require("../Models/userModel");
const JWT = require("jsonwebtoken");
const comparePassword = require("../Utils/comparepasswordUtils");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation for email or password if its found or not 
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password ",
      });
    }
    //check user 
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //match password with stored password 
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Inavlid password ",
      });
    }
    //create a token  for duration how long a user will remain Login
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(200).send({
      success: true,
      message: "login in sucessfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },

      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in login",
      error,
    });
  }
};

module.exports = loginController;
