const Sequelize = require('sequelize');

const sequelize = new Sequelize('SmashIndy', 'postgres', 'jasper', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to SmashIndy database');
    },
    function(err){
        console.log(err);
    }
);

Tournaments = sequelize.import('./models/tournaments');
User = sequelize.import('./models/users');
Tournaments.belongsTo(User)
User.hasMany(Tournaments)

module.exports = sequelize;