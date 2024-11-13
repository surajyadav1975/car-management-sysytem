const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    contact: Number,
    picture: { type: String,default:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    username: String,
    email: String,
    password: String,
    cars:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cars",
    }],
});

module.exports = mongoose.model("user", userSchema);
