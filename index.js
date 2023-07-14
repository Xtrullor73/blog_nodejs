const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = new express()

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('hosted');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/post.html', (req, res) => {
    res.render('post');
})

app.get('/contact.html', (req, res) => {
    res.render('contact');
})

app.get('/about.html', (req, res) => {
    res.render('about');
})