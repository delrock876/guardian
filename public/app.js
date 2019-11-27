// just for adoption

// link user info 

//get all users
const getUser = () => {
  axios.get('/users')
  .then(users => {
    console.log(users)
  })
  .catch(e => console.log(e))
}

//add users
const addUser = (name) => {
  axios.post('/users', {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phoneNumber').value
  })
  .then(() => {
    console.log('User Added')
  })
  .catch(e => console.log(e))
}

//update users
const updateUser = id => {
  axios.put(`/users/:${id}`)
  .then(() => {
    console.log('user updated')
  })
  .catch(e => console.log(e))
}

// remove users

const removeUser = id => {
  axios.delete(`/users/:${id}`)
  .then(() => {
    console.log('user deleted')
  })
  .catch(e => console.log(e))
}

// get animals
const getUser = () => {
  axios.get('/users')
  .then(users => {
    console.log(users)
  })
  .catch(e => console.log(e))
}

//add users
const addUser = (name) => {
  axios.post('/users', {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phoneNumber').value
  })
  .then(() => {
    console.log('User Added')
  })
  .catch(e => console.log(e))
}

//update users
const updateUser = id => {
  axios.put(`/users/:${id}`)
  .then(() => {
    console.log('user updated')
  })
  .catch(e => console.log(e))
}

// remove users

const removeUser = id => {
  axios.delete(`/users/:${id}`)
  .then(() => {
    console.log('user deleted')
  })
  .catch(e => console.log(e))
}


//button javascript

document.getElementById('submitButton').addEventListener('click', e => {
  e.preventDefault()
  let user = {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phoneNumber').value
  }
  addUser(user)

  document.getElementById('first_name').value = ''
  document.getElementById('last_name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phoneNumber').value = ''

  console.log(user)
}
)

//