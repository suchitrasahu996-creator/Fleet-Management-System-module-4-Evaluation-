const express =require("express");
const {signupUser} =require ("../controllers/user.controller");
const router = express.Router();
 router.post ("/signup", signupUser);

 module.exports =router;