import uuid from 'uuid/v4'

export const getUser = () =>{
    fetch('http://localhost:3001').then(response => {
        return response.text()
    }).then(data => console.log(data))
}

export const createUser = (email, selections) => {
    const user_id = uuid()
    fetch('http://localhost:3001/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user_id, email, selections}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data)
        return getUser()
      }).then(data => console.log(data))
  }