// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete (Named according to MDN convention.)
const Blog = require('./../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt : -1}).then((result) => { //Note: When we're finding, we use the Blog model directly and not one of its instances.
        res.render('blogs/index', {title : 'All Blogs', blogs : result});
    }).catch((err) => {
        console.log(err);
    });
}

const blog_details = (req, res) => {
    Blog.findById(req.params.id)
            .then((result) => {
                res.render('blogs/details', {title : 'Blog Details', blog : result})
            })
            .catch((err) => {
                res.status(404).render('404' , {title : 'Error'});
            });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', {title : 'Create a new blog'});
}

const blog_create_post = (req, res) => {
    // const blog = new Blog({
    //     title : req.body.title,
    //     snippet : req.body.snippet,
    //     body : req.body.body
    // });

    const blog = new Blog(req.body);

    blog.save().then((result) => {
        console.log(result);
        res.redirect('blogs');
    }).catch((err) => {
        console.log(err);
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect : '/blogs'}); //since the request is coming from a ajax request, we cannot just redirect using node. We need to send back a json or text data as a response.
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}