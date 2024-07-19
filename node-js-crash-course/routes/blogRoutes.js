const express = require('express');
const blogController = require('./../controllers/blogController');


const router = express.Router();


router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post)
router.get('/create', blogController.blog_create_get)
//details page
router.get('/:id', blogController.blog_details)
//delete blog
router.delete('/:id', blogController.blog_delete)


module.exports = router;