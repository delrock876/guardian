const { Person } = require('../models')

module.exports = app =>{
    app.get('/person', (req,res) =>{
        res.send('GET all animals')
    })
    app.post('/person', (req,res) =>{
        res.send('POST an animal')
    })
    app.put('/person/:id', (req,res) =>{
        res.send('PUT a specific animal')
    })
    app.delete('/person/:id', (req,res) =>{
        res.send('DELETE an animal')
    })
}