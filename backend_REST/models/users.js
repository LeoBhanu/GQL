const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    createdPosts : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Post'
        }
    ]
});

module.exports = mongoose.model('User',userSchema);