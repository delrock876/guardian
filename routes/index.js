// module.exports = app => {
    // pass express app to other route files
  // }
  // This is where the Model thing comes in

  // module.exports = app =>{
    app.get('/animal',(req,res) =>{
        res.send('Get all aniamals')
    })

    app.post('/animal', (req,res) =>{
      res.send('Post an animal')
    })

    app.put('/animal/:id', (req,res) =>{
      res.send('Put an animal')
    })

    app.delete('/items/:id', (req,res) =>{
      res.send('Delete an animal')
    })
  // }