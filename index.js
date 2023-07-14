const express = require('express');
const path = require('path');

const app = new express()

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('hosted');
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve((__dirname), 'pages/index.html'))
})

app.get('/post.html', (req, res) => {
    res.sendFile(path.resolve((__dirname), 'pages/post.html'))
})

app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve((__dirname), 'pages/contact.html'))
})

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve((__dirname), 'pages/about.html'))
})