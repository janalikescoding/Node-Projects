const express = require('express');
const morgan = require('morgan'); //3rd party middleware for logging
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://root:root@atlascluster.fhwcw7q.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=AtlasCluster';
mongoose.connect(dbURI).then((result) => {
    console.log('connected to DB');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
})


//register the view engine
app.set('view engine', 'ejs');
//app.set('views', 'myViews'); // BY DEFAULT IT LOOKS AT THE 'VIEWS' FOLDER. If you want to change the folder, use this.

//listen for requests
//app.listen(3000); // can be stored in a const; moving this above - listen only when connected successfully to DB.

//use morgan
app.use(morgan('dev'));
//app.use(morgan('tiny')); //short logging

//Express JS middleware to render static content publicly
app.use(express.static('public')); //specify which folder's content is available staticly. Without this, just trying to reach the page directly on the browser ('http.../style.css') or importing directly in a 'link' element in one of the .ejs files won't work
//ejs files are dynamic files. Static files like images, css files need express.static() to be accessed.
//after adding this, ('http.../style.css') will work.

//Use Express middleware to use the data in the req.body as a usable format
//app.use(express.json()); reads the data object as a json
app.use(express.urlencoded({extended : true})); // Reads the incoming data object as strings or an arrays

//generic middleware
// app.use((req, res, next) => {
//     console.log('Generic middleware logic:');
//     console.log('Host: ', req.host);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Next bit of middleware:');
//     next();
// });

//listen for get request
app.get('/',(req, res) => {
    //res.send('<p>Home Page</p>'); //No need for end(); automatically infers 'Content-Type'; automatically infers status code. (however, it can also be set manually)
    //res.sendFile('./views/index.html', {root : __dirname});
    res.redirect('/blogs');
});

// app.use((req, res, next) => {
//     console.log('This middleware will not run if the request is for the homepage:');
//     next();
// });

app.get('/about',(req, res) => {
    //res.send('<p>about page</p>'); //No need for end(); automatically infers 'Content-Type'; automatically infers status code. (however, it can also be set manually)
    //res.sendFile('./views/about.html', {root : __dirname});
    res.render('about', {title : 'About'});
});

//blog routes
//app.use(blogRoutes); // Just 'use' it just like any middleware. 'blogRoutes' is now a mini-middleware on its own managing all the blog-routes
app.use('/blogs', blogRoutes); // This will 'scope' the app routes. Meaning: only requests beginning with 'blogs' will be served here. Remember to adjust blogRoutes file because all routes there begin with another '/blogs'

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about'); // sets location in the header; sets status; ends request 
})

// mongoose and mongo sandbox routes
app.get('/add-blog',(req, res) => {
    const blog = new Blog({
        title : 'Newer blog',
        snippet : 'more info about the blog',
        body : 'much more info about the newer blog'
    })

    blog.save().then((result) => { //Note: When we're saving, we use one of Blog's instances, blog and we use the Blog model itself.
        res.send(result);
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/all-blogs', (req, res) => {
    Blog.find().then((result) => { //Note: When we're finding, we use the Blog model directly and not one of its instances.
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
    Blog.findById('66297f96f14920313690d6e3').then((result) => { //Note: When we're finding, we use the Blog model directly and not one of its instances; mongoose's findById handles the conversion of string argument to ID object.
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root : __dirname}); // fires for every request, however, if a path is matched in the above cases, the code doesn't reach here (code doesn't proceed once the response is sent back to the browser.)
    // to add clue that this is a 404 error, add status.
    // res.status(404) returns the res object, hence we can tag the .sendFile() next to it.
    res.status(404).render('404' , {title : 'Error'});
}) 