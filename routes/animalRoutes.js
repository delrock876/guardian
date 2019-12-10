const { Animal } = require('../models')

//view all animals
module.exports = app =>{
    app.get('/animal', (req, res) =>{
        Animal.findAll()
            .then(animal =>{
                res.json(animal)
            })
            .catch(e => console.error(e))
    })

//find specific animal
    app.get('/animal/:id', (req, res) =>{
        Animal.findOne({where: {id: parseInt(req.params.id) } })
            .then(animal =>{
                res.json(animal)
            })
            .catch(e => console.error(e))
    })

//add new animal 
    app.post('/animal', (req, res) =>{
        Animal.create(req.body)
            .then(() =>{
                res.sendStatus(200)
            })
            .catch(e => console.error(e))
    })

    //update animal
    app.put('/animal/:id', (req, res) =>{
        Animal.findOne({ where:{id: parseInt(req.params.id) } })
            .then(animal => animal.update(req.body))
            .then(() => res.sendStatus(200))
            .catch(e => console.error(e))
    })

//delete an animal
    app.delete('/animal/:id', (req, res) =>{
        Animal.findOne({where: { id: parseInt(req.params.id) }})
            .then(animal => animal.destroy())
            .then(() => res.sendStatus(200))
            .catch(e =>console.error(e))
        })
        
}
