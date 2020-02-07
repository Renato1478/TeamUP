const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

mongoose.connect('mongodb+srv://renato:1478@principalcluster-i0xhz.gcp.mongodb.net/iceTime?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);