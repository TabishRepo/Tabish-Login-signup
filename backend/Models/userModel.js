const mongoose = require("mongoose");
// create model for a user to register  to save data in mongodb
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      required: true, 
      unique: true,          //email should be unique 
    },

    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
      },

    phone: {
      type: String,
      required: true,
    },

    
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
