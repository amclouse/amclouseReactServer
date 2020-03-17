// EXPRESS
require('dotenv').config()
const express = require('express');
const app = express(); 
// CONTROLLER IMPORTS
const tourney = require("./controllers/tourneycontroller")
const user = require("./controllers/usercontroller");
// DATABASE IMPORT & SYNC
const sequelize = require('./db');
sequelize.sync(); //{ force: true } //in parens to drop tables and resync models to pgAdmin
app.use(express.json());
// MIDDLEWARE
app.use(require('./middleware/headers'));

// ROUTES
app.use('/smash/user', user)
app.use('/smash/tourney', tourney)

//TEST
app.use('/smash/test', function(req, res) {
    res.send('This is info from the server')
});
//APP START
app.listen(process.env.PORT, function() {
    console.log(`App is listening on ${process.env.PORT}`)
})