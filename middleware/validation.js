module.exports = async (req, res, next) => {
    if(req.files == null || req.body.title == null || req.body.title === '') {
        console.log('Some fields were not filled')
        return res.redirect('/create');
    }
    next();
}