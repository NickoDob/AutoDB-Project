const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Auto = sequelize.define('auto', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    num: {type: DataTypes.STRING, unique: true, allowNull: false},
    color: {type: DataTypes.STRING, allowNull: false},
    created: {type: DataTypes.DATE},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Mark = sequelize.define('mark', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const AutoInfo = sequelize.define('auto_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


Mark.hasMany(Auto)
Auto.belongsTo(Mark)

Auto.hasMany(AutoInfo, {as: 'info'});
AutoInfo.belongsTo(Auto)


module.exports = {
    User,
    Auto,
    Mark,
    AutoInfo
}





