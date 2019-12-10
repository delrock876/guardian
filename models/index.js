const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

const Animal =  require('./animal.js')(sequelize, Model, DataTypes)

const Person = require('./Person.js')(sequelize, Model, DataTypes)

Animal.hasOne(Person)
Person.belongsTo(Animal)

module.exports =  {Animal, Person}
