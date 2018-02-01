console.log('hello from the browser JavaScript')

const editProfileBtn = document.getElementById('edit-profile-btn')


const editProfile = (event) => {
  console.log('this button is being clicked')
  event.preventDefault()
  const id = editProfileBtn.getAttribute('data-id')
  const name = document.querySelector('.form-field-name').value
  const email = document.querySelector('.form-field-email').value
  fetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({name, email}),
  })
    .then((editedUser) => {
      console.log('editedUser', editedUser)
    })
    .catch(console.error)
}

editProfileBtn.addEventListener('click', editProfile)
