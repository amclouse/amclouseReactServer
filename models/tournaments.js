module.exports = (sequelize, DataTypes) => {
    const Tournaments = sequelize.define('tournaments', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        maxPlayers: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prizePool: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return Tournaments;
}