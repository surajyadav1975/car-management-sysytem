const express=require('express')
const router=express.Router()
const {registerUser,loginUser,logoutUser,checkAuth}=require('../controllers/authcontrollers')
const authMiddleware=require('../middlewares/isloggedin')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',authMiddleware,logoutUser);
router.get('/check_auth',checkAuth)

module.exports=router;
