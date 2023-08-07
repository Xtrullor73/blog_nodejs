const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(next){
    const user = this;

    user.password = await bcrypt.hash(user.password, 10);
    next();
})

const User = mongoose.model('User', UserSchema);

User.init().then(() => console.log('Indexes have been created'));

module.exports = User;