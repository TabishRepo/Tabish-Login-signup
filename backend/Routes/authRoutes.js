const express = require("express");
const registerController = require("../Controllers/authRegisterController");
const loginController = require("../Controllers/authLoginController");
const forgotPasswordController = require("../Controllers/forgotPasswordController");
const { getUsers, Updatename } = require("../Controllers/userController");
const router = require("express").Router();
const requireSignIn = require("../Middlewares/authMiddleware");
//register a user
router.post("/register", registerController);
// login for a user
router.post("/login", loginController);
//forget password
router.post("/forgot-password", forgotPasswordController);
//protected route FOR USER profile  which validates first jwt token found or not then procced to userprofile page
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//get user data for profile
router.get("/users", getUsers);
//update user data
router.put("/users/:userId", Updatename);

module.exports = router;
