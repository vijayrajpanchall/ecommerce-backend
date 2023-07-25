const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./src/routers/auth');
require('dotenv').config();

const app = express();

// routers -> paths -> address -> url
app.use('/auth', authRoutes);

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

app.listen(3000, () => {
    console.log(`Server is up and running on 3000 ...`);
});