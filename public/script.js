console.log('hello from the browser JavaScript')

const editProfileBtn = document.getElementById('edit-profile')
const idField = document.querySelector('.id-field')
const nameField = document.querySelector('.name-field')
const emailField = document.querySelector('.email-field')

const changeProfile = (event) => {
  event.preventDefault()
  const id = idField.value
  const name = nameField.value
  const email = emailField.value
  fetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({id, name, email}),
  })
    .then(response => response.json())
    .then((editedUser) => {
      console.log('editedUser', editedUser)
    })
}

editProfileBtn.addEventListener('click', changeProfile)
