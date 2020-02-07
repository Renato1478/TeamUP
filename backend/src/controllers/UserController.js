// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { email } = req.body;
        
        let user = await User.findOne({ email }); 

        if ( !user ) {
            user = await User.create( req.body );
        }
        
        res.send({
            user, 
            token: generateToken({ id: user.id })
        });
    },

    async auth(req, res) {
        let { email, password } = req.body;
        console.log(password);
        let user = await User.findOne({ email }); 
        console.log(user);
        if ( !user ) {
            return res.send({ error: 'User not found'});
        }

        if (!(user.password == password)) {
            return res.send({ error: 'Invalid password'});
        }
        
        user.password = undefined;
        password = undefined;

        res.send({
            user, 
            token: generateToken({ id: user.id })
        });
    },
    
    generateToken(params = {}) {
        return jwt.sign( params, authConfig.secret, {
            expiresIn: 86400,
        } );
    }
    
};