// just for adoption

// link user info 

//get all users
const getPerson = () => {
  axios.get('/person')
  .then(person => {
    console.log(person)
  })
  .catch(e => console.log(e))
}

//add users
const addPerson = (name) => {
  axios.post('/person', {
    firstName: document.getElementById('first_name').value,
    lastName: document.getElementById('last_name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phoneNumber').value
  })
  .then(() => {
    console.log('Person Added')
  })
  .catch(e => console.log(e))
}

//update users
const updatePerson = id => {
  axios.put(`/person/:${id}`)
  .then(() => {
    console.log('person updated')
  })
  .catch(e => console.log(e))
}

// remove users

const removePerson = id => {
  axios.delete(`/person/:${id}`)
  .then(() => {
    console.log('person deleted')
  })
  .catch(e => console.log(e))
}

// get animals
const getAnimal = () => {
  axios.get('/animal')
  .then(animal => {
    console.log(animal)
  })
  .catch(e => console.log(e))
}

//add users
const addAnimal = (animal) => {
  axios.post('/animal', {
    name: document.getElementById('name').value,
    breed: document.getElementById('breed').value,
    age: document.getElementById('age').value,
    type: document.getElementById('type').value,
    isFed: document.getElementById('fed').value,
    isWalked: document.getElementById('walked').value,
    isClean: document.getElementById('cleaned').value,
    isPlayed: document.getElementById('played').value,
    adoptReady: document.getElementById('adoptReady').value,
    isAdopted: false
  })
  .then(() => {
    console.log('animal Added')
  })
  .catch(e => console.log(e))
}

//update users
const updateAnimal= id => {
  axios.put(`/animal/:${id}`)
  .then(() => {
    console.log('animal updated')
  })
  .catch(e => console.log(e))
}

// remove users

const removeAnimal = id => {
  axios.delete(`/animal/:${id}`)
  .then(() => {
    console.log('animal deleted')
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