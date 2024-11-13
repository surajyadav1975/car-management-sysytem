const mongoose=require('mongoose');
const { Buffer } = require('safe-buffer');

const carsSchema=mongoose.Schema({
    image: String,
    content: String,
    title: String,
    tags: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    createdAt: { type: Date, default: Date.now },
});

module.exports=mongoose.model('cars',carsSchema);