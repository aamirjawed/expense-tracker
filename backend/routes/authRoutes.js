const express = require("express");


const {
    registeredUser,
    loginUser,
    getUserInfo
} = require("../controllers/authController");


const router = express.Router();

router.post("/register", registeredUser);
router.post("/login", loginUser);
// router.post("/getUser", protect, getUserInfo);


module.exports = router;