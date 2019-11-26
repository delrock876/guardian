const { Person } = require('../models')

module.exports = app =>{
    app.get('/person', (req,res) =>{
        Person.findAll()
            .then(person =>{
                res.json(person)
            })
            .catch(e => console.error(e))
    })


    app.get('/person', (req,res) =>{
        Person.findOne({where: {id: parseInt(req.params.id) } })
            .then(person =>{
                res.json(person)
            })
            .catch(e => console.error(e))
    })


    app.post('/person/:id', (req,res) =>{
        Person.create(req.body)
            .then(() =>{
                res.sendStatus(200)
            })
            .catch(e => console.error(e))
    })

    app.put('/person/:id', (req,res) =>{
        Person.findOne({ where:{id: parseInt(req.params.id) } })
            .then(person => person.update(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })


    app.delete('/person/:id', (req,res) =>{
        Person.findOne({where: { id: parseInt(req.params.id) }})
            .then(person => person.destroy())
            .then(() => res.sendStatus(200))
            .catch(e =>console.error(e))
        })
}