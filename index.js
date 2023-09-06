const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const User = require('./models/User');
const fileUpload = require('express-fileupload')
const validationMiddleware = require('./middleware/validation');
const authMiddleware = require('./middleware/auth');
const ifAuthedMiddleware = require('./middleware/ifAuthed');
const expressSession = require('express-session');

mongoose.connect('mongodb+srv://xtrullor73:Dkflbr73@cluster.uvstdm5.mongodb.net/', {useNewUrlParser: true});

const app = new express();
global.loggedIn = null;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());
app.use('/posts/store', validationMiddleware);
app.use(expressSession({
    secret: '73forever'
}));
app.use('*', (req, res, next) => {
    loggedIn = req.session.userId;
    next();
});

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
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const logoutController = require('./controllers/logout');

app.get('/', homeController);
app.get('/post/:id', getPostController);
app.post('/', searchPostController);
app.get('/create', authMiddleware, createPostController);
app.post('/posts/store', authMiddleware, storePostController);
app.get('/auth/register', ifAuthedMiddleware, newUserController);
app.get('/auth/login', ifAuthedMiddleware, loginController);
app.post('/users/register', ifAuthedMiddleware, storeUserController);
app.post('/auth/login', ifAuthedMiddleware, loginUserController);
app.get('/auth/logout', logoutController);
