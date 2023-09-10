const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    let user = await User.findOne({username:username});

    if (user) {
        let isSame = await bcrypt.compare(password, user.password);

        if (isSame) {
            req.session.userId = user._id;
            res.redirect('/');
        } else {
            res.redirect('/auth/login');
        }
    } else {
        console.log('user not found');
        res.redirect('/auth/login'); 
    }
}