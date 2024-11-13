const express=require('express')
const router=express.Router()
const {createPosts,getallpost}=require('../controllers/authcontroller_cars')
const loggedin=require('../middlewares/isloggedin')
const upload=require('../config/multer_config')

router.get("/",function(req,res){
    res.send("hey its working");
});

router.post("/create",loggedin,upload.single('image'),createPosts);
router.get("/getallpost",loggedin,getallpost);

module.exports=router;
