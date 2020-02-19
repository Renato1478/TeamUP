const express = require('express');
const multer = require('multer');

const uploadConfig = require('../config/upload');
const UserController = require('../controllers/UserController');
const TeamController = require('../controllers/TeamController');
const SessionController = require('../controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);


//////////////////////////////////////////////////////////////////////////////

routes.post('/signup', UserController.store);
routes.post('/login', SessionController.login);
routes.get('/teams', TeamController.index);
routes.post('/create_team', upload.single('thumbnail'), TeamController.store);

module.exports = routes;