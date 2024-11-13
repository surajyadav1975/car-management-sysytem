const express=require('express');
const car_model=require('../models/car-model');
const User=require('../models/user-model');


exports.createPosts=async (req,res)=>{
    let {content,title,tags}=req.body;
    // console.log(content);
    // console.log(req.file,req.file.buffer);
    try{
        let car=await car_model.create({
            userId: req.u._id,
            image:req.file.buffer.toString('base64'),
            content,
            title,
            tags,
        })
        const user = await User.findById(req.u.id);
        user.posts.push(post.id);
        await user.save();
        return res.json(post);
    }
    catch(err){
        return res.json({message:err.message});
    }
}

exports.getallpost=async (req,res)=>{
    try{
        const cars = await car_model.find({userId: req.u._id})
        return res.json({cars});
    }
    catch(err){
        return res.json(err.message);
    }
}
