const userModel = require("../Models/userModel");
const UserModel = require("../Models/userModel");

//getUsers data  which are registered
module.exports.getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Could not get users!", status: false });
  }
};



//update the user profile name 
module.exports.Updatename = async (req, res) => {
    try {
      const { userId } = req.params;
      const { name } = req.body;
  
      await userModel.findByIdAndUpdate(userId, { name });
  
      res.json({ success: true, message: "User name updated successfully" });
    } catch (error) {
      console.error("Error updating user name:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  
