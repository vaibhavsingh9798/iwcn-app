const Sequlize = require('sequelize')
const sequelize = require('../util/db')

const Task = sequelize.define('task',{
    id:{
        type : Sequlize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    title:{
        type : Sequlize.STRING
    },
    description:{
        type: Sequlize.STRING
    },
    time:{
        type : Sequlize.STRING
    }
});

module.exports = Task;