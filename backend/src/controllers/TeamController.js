// index, show, store, update, destroy
const Team = require('../models/Team');

module.exports = {

    async store(req, res) {
        // const { filename } = req.file;
        const { game, location, language} = req.body;
        const { user_id } = req.headers;

        const team = await Team.create({
            owner: user_id,
            // thumbnail: filename,
            game,
            location,
            language,
            members: [
                user_id
            ],
        });

        return res.json({
            team
        });
    },

    async index(req, res) {
        const teams = await Team.find();

        res.json({teams});
    },

    async show (req, res) {
        try {
            const { id } = req.query;
            const team = await Team.findById(id);
            return res.json({team});
        } catch (error) {
            return res.json({error})
        }
    }
}