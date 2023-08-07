const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const User = require('./models/User');

const fileUpload = require('express-fileupload')

mongoose.connect('mongodb+srv://xtrullor73:Dkflbr73@cluster.uvstdm5.mongodb.net/', {useNewUrlParser: true});

const app = new express();
const validationMiddleware = require('./middleware/validation');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());
app.use('/posts/store', validationMiddleware)

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('hosted');
})

const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost');
const createPostController = require('./controllers/createPost');
const storePostController = require('./controllers/storePost');
const searchPostController = require('./controllers/searchPost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');

app.get('/', homeController);
app.get('/post/:id', getPostController);
app.get('/create', createPostController);
app.get('/auth/register', newUserController);
app.post('/', searchPostController);
app.post('/posts/store', storePostController);
app.post('/users/register', storeUserController);