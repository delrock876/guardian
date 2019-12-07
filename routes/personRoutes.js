const { Person } = require('../models')

module.exports = app => {

    //get all people
    app.get('/person', (req, res) => {
        Person.findAll()
            .then(person => {
                res.json(person)
            })
            .catch(e => console.error(e))
    })

    //get specific person
    app.get('/person/:id', (req, res) => {
        Person.findOne({ where: { id: parseInt(req.params.id) } })
            .then(person => {
                res.json(person)
            })
            .catch(e => console.error(e))
    })

    //add new person
    app.post('/person', (req, res) => {
        Person.create(req.body)
            .then(() => {
                res.sendStatus(200)
            })
            .catch(e => console.error(e))
    })

    //update person
    app.put('/person/:id', (req, res) => {
        Person.findOne({ where: { id: parseInt(req.params.id) } })
            .then(person => person.update(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })

    //delete person
    app.delete('/person/:id', (req, res) => {
        Person.findOne({ where: { id: parseInt(req.params.id) } })
            .then(person => person.destroy())
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'))
    });
}