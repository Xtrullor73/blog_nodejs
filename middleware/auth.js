const User = require('../models/User');

module.exports = async (req, res, next) => {
    try {
        let user = await User.findById(req.session.userId);

        if (!user) {
            return res.render('login');
        }

    } catch (e) {
        console.log(e);
        return res.render('login');
    }

    next();
}

