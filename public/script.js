console.log('hello from the browser JavaScript')

const editProfileBtn = document.querySelector('#edit-profile-btn')

const editProfile = (event) => {
  event.preventDefault()
  const id = editProfileBtn.getAttribute('data-id')
  const name = document.getElementById('edit-name').value
  const email = document.getElementById('edit-email').value
  fetch(`/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({id, name, email}),
  })
    .then((editedUser) => {
      console.log('user has been edited', editedUser)
    })
    .catch((err) => {
      console.error(err)
    })
}

editProfileBtn.addEventListener('click', editProfile)
