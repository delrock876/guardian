const { Person } = require('../models')

module.exports = app =>{
    app.get('/person', (req,res) =>{
        res.send('GET all persons')
    })
    app.post('/person', (req,res) =>{
        res.send('POST a person')
    })
    app.put('/person/:id', (req,res) =>{
        res.send('PUT a specific a person')
    })
    app.delete('/person/:id', (req,res) =>{
        res.send('DELETE an person')
    })
}