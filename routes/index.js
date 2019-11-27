module.exports = app => {
 require('./animalRoutes.js')(app)
 require('./personRoutes.js')(app)
}