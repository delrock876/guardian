const { Model, Datatypes } = require('sequelize')
const sequelize = require('../config')

module.exports = app => {
   require('./Animal.js')(sequelize, Model, Datatypes)
   require('./Person.js')(sequelize, Model, Datatypes)
}
