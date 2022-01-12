const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let imageBlog = new Schema({
    title: {
	type: String
    },
    author: {
	type: String
    },
    tags : String,
    blog:  String,
    img: { data: Buffer, contentType: String , name: String},
    date: { type: Date, default: Date.now },
    meta: {
	stars: { type:Number, default: 0},
	favs:  { type:Number, default: 0},
    }
});

module.exports = mongoose.model('imageblogs', imageBlog)
