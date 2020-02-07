// index, show, store, update, destroy
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86400,
    } );
}

module.exports = {

    async auth(req, res) {
        let { email, password } = req.body;
        console.log(password);
        let user = await User.findOne({ email }); 
        console.log(user);
        if ( !user ) {
            return res.status(400).send({ error: 'User not found'});
        }

        if (!(user.password == password)) {
            return res.status(400).send({ error: 'Invalid password'});
        }
        
        user.password = undefined;
        password = undefined;

        res.send({
            user, 
            token: generateToken({ id: user.id })
        });
    },

}