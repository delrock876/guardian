const { Animal } = require('../models')

module.exports = app =>{
    app.get('/animal', (req,res) =>{
        Animal.findAll()
            .then(animal =>{
                res.json(animal)
            })
            .catch(e => console.error(e))
    })


    app.get('/animal', (req,res) =>{
        Animal.findOne({where: {id: parseInt(req.params.id) } })
            .then(animal =>{
                res.json(animal)
            })
            .catch(e => console.error(e))
    })


    app.post('/animal/:id', (req,res) =>{
        Animal.create(req.body)
            .then(() =>{
                res.sendStatus(200)
            })
            .catch(e => console.error(e))
    })

    app.put('/animal/:id', (req,res) =>{
        Animal.findOne({ where:{id: parseInt(req.params.id) } })
            .then(animal => animal.update(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })


    app.delete('/animal/:id', (req,res) =>{
        Animal.findOne({where: { id: parseInt(req.params.id) }})
            .then(animal => animal.destroy())
            .then(() => res.sendStatus(200))
            .catch(e =>console.error(e))
        })
}
