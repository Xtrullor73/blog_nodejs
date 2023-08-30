const BlogPost = require("../models/BlogPost");
const fileUpload = require('express-fileupload');
const path = require('path')

module.exports = async (req, res) => {
    let image = req.files.image;
    console.log(path.resolve(__dirname))
    await image.mv(path.resolve(__dirname, '.', 'public/assets/img', image.name), async (error) => {
        await BlogPost.create({
            ...req.body,
            image: '/assets/img/' + image.name
        });

        res.redirect('/');
    })
}