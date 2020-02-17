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

    async login(req, res) {
        try {
            let { email, password } = req.body;
            let user = await User.findOne({ email }); 

            if ( !user ) {
                return res.status(400).send({ error: 'User not found'});
            }

            if (!(user.password == password)) {
                return res.status(400).send({ error: 'Invalid password'});
            }
            
            user.password = undefined;
            password = undefined;

            res.json({
                user, 
                token: generateToken({ id: user.id })
            });
        } catch (error) {
            res.json({
                error: error.message
            })
        }
    },

}