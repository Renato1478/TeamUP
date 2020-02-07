const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const UserController = require('../controllers/UserController');
const TeamController = require('../controllers/TeamController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
    res.send("Hello World");
});

routes.post('/signup', UserController.store);
routes.post('/authenticate', UserController.auth);

routes.post('/create_team', upload.single('thumbnail'), TeamController.store);

module.exports = routes;