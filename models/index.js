const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

const Animal =  require('./Animal.js')(sequelize, Model, DataTypes)

const Person = require('./Person.js')(sequelize, Model, DataTypes)

module.exports =  {Animal, Person}
