const User = require('../models/User');
const path = require('path');

module.exports = async (req, res) => {
    try {
        await User.create(req.body);
    } catch (e) {
        console.log(e);
        return res.redirect('auth/register');
    }
    res.redirect('/');
}