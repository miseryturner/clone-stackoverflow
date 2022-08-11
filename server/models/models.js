const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW},
    img: {type: DataTypes.STRING},
})

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false, unique: true}
})

User.hasMany(Question)
Question.belongsTo(User)

User.hasMany(Answer)
Answer.belongsTo(User)

Question.hasMany(Answer)
Answer.belongsTo(Question)

Answer.hasOne(Question)
Question.belongsTo(Answer)

Type.hasMany(Question)
Question.belongsTo(Type)

module.exports = {
    User, 
    Question, 
    Answer, 
    Type
}
