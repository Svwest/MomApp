const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    picture: { type: String },  
    createdAt: { type: Date, default: Date.now },
    Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});


module.exports = mongoose.model('Post', Post);
