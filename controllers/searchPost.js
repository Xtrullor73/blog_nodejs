const BlogPost = require("../models/BlogPost");
module.exports = async (req, res) => {
    const word = req.body.title;
    const query = new RegExp(word, 'i');
    const blogposts = await BlogPost.find({title: query})

    res.render('index', {
        blogposts
    });
}