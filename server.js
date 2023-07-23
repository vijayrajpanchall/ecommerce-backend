const express = require('express');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db authentication
const db = require('./src/core/db/sequilize').sequelize;
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    db.sync().then(() => {
        console.log('database synchronised...');
    }).catch(err => {
        console.log('database synchronised err : ', err);
    })
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// routers -> paths -> address -> url
const authRoutes = require('./src/routers/auth');

app.use('/auth', authRoutes);

app.listen(3000);