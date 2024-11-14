const express=require('express');
const user=require('../models/user-model');
const bcrypt=require('bcrypt');
const {generatetoken}=require('../utils/generatetoken')
const jwt=require('jsonwebtoken')

exports.registerUser=async (req,res)=>{
    let {username,email,password}=req.body;
    
    let u=await user.findOne({email});
    if(u) return res.status(404).json({message:"user already exist"});
    try{

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                if(err) return res.json({message:err.message});
                else{
                    let createduser= await user.create({
                        username,
                        password:hash,
                        email,
                    })
       
                    let token=generatetoken(createduser);
                    res.cookie("token",token,{
                        httpOnly: true,      
                        secure: true,         
                        sameSite: 'None',      
                        maxAge: 24 * 60 * 60 * 1000, 
                    });
                    return res.status(200).json({message:"Registered"});
                }
            })
        })
       }catch(err){
            return res.status(200).json({message:err.message});
       }
}

exports.loginUser=async (req,res)=>{
    let {email,password}=req.body;
    let u=await user.findOne({email});
    if(!u) return res.status(404).json({message:"user dont have any account, try to register"});

    try{
        bcrypt.compare(password, u.password, function(err, result) {
            if(result){
                let token=generatetoken(u);
                res.cookie('token', token, {
                    httpOnly: true,      
                    secure: true,         
                    sameSite: 'None',      
                    maxAge: 24 * 60 * 60 * 1000, 
                });
                return res.status(200).json({message:"logged in"});
            }
            else{
                return res.status(400).json({message:"username or password is incorrect"});
            }
        });
    }
    catch(err){
        return res.json({message:err.message});
    }
}

exports.logoutUser=(req,res)=>{
    res.cookie("token","",{
        httpOnly: true,      
        secure: true,         
        sameSite: 'None',      
    });
    return res.json("loggedout");
}

exports.checkAuth = async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.status(401).send('Not authenticated');
  
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      const u = await user.findOne({email:decoded.email});
      if (!u) return res.status(401).send('User not found');
      
      return res.status(200).send('Authenticated');
    } catch (error) {
      return res.status(401).send('Invalid token');
    }
  };