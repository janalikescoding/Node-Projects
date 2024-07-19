const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    snippet : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Blog = mongoose.model('Blog', blogSchema); // Name of the model starts with a capital letter typically - const 'Blog'.The name supplied in the first argument should always be the singluar of the name of the collection 'Blog' <---> 'blogs'.
module.exports = Blog;
