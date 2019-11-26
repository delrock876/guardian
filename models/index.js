const { Model, Datatypes } = require('sequelize')
const sequelize = require('../config')

module.exports = app => {
  Animal: require('./Animal.js')(sequelize, Model, Datatypes)
  Person: require('./Person.js')(sequelize, Model, Datatypes)

}
