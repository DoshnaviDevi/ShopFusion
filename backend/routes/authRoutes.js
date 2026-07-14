{/*const express = require("express");
const{
    registerUser,loginUser,getUsers
} = require("../controller/authController");
const {protect} = require('../middleware/authMiddleware');
const {admin} = require('../middleware/adminMiddleware');
const router = express.Router();
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/user",protect,admin ,getUsers);
//router.post("verify-email",async(req,res)=>{
    //const {email} = req.body;
//})
module.exports = router;*/}
const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUsers
} = require("../controller/authController");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Admin Route - Get All Users
router.get("/users", protect, admin, getUsers);

module.exports = router;