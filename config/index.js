const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.LOCAL_URL)
// module.exports = new Sequelize(process.env.NODE_ENV ? process.env.JAWDB_URL : process.env.LOCAL_URL)