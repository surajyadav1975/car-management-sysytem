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

exports.updatePosts= async (req, res) => {
    const { postId } = req.params;
    const { title, content ,tags} = req.body; 
    try {
      const updatedPost = await car_model.findByIdAndUpdate(postId, { title, content, tags }, { new: true });
      return res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating post', error });
    }
  };


exports.deletePosts= async (req, res) => {
    const { postId } = req.params;
    // console.log(postId);
  try {
    const deletedPost = await car_model.findByIdAndDelete(postId);
    
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
  };

  