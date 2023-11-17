const bcrypt = require("bcrypt");
const hashpassword = require("../Utils/authUtils");
// compare the password
const comparePassword = async (password, hashedpassword) => {
    return bcrypt.compare(password, hashedpassword);
  };
  
  module.exports = comparePassword;