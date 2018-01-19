console.log('hello from the browser JavaScript')

const editProfileBtn = document.getElementById('edit-profile-btn')
const editNameField = document.querySelector('.edit-name-field')
const editEmailField = document.querySelector('.edit-email-field')
const userField = document.querySelector('.user')
const statusField = document.querySelector('.status-message')

const editProfile = (event) => {
  event.preventDefault()
  const name = editNameField.value
  const email = editEmailField.value
  const id = userField.value
  fetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({id, name, email}),
  })
    .then(response => response.json())
    .then((success) => {
      console.log(success)
      statusField.innerHTML = 'Details successfully updated!'
    })
    .catch((err) => {
      console.error(err)
      statusField.innerHTML = 'Something went wrong. Try again.'
    })
}

editProfileBtn.addEventListener('click', editProfile)
