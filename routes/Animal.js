const { Animal } = require('../models')

module.exports = app =>{
    app.get('/animal', (req,res) =>{
        res.send('GET all animals')
    })
    app.post('/animal', (req,res) =>{
        res.send('POST an animal')
    })
    app.put('/animal/:id', (req,res) =>{
        res.send('PUT a specific animal')
    })
    app.delete('/animal/:id', (req,res) =>{
        res.send('DELETE an animal')
    })
}
