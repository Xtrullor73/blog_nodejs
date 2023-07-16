const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb+srv://xtrullor73:Dkflbr73@cluster.uvstdm5.mongodb.net/', {useNewUrlParser: true});

const app = new express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('hosted');
})

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts
    });
    console.log(req.body)
})

app.post('/', async (req, res) => {
    const word = req.body.title;
    const query = new RegExp(word, 'i');
    const blogposts = await BlogPost.find({title: query})

    res.render('index', {
        blogposts
    });
})

app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/post/new', (req, res) => {
    res.render('create');
})


app.post('/posts/store', async (req, res) => {
    await BlogPost.create(req.body);
    res.redirect('/');
})

