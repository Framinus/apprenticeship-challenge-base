import express from 'express'

import editUser from '../actions/editUser'

const router = express.Router()

router.get('/:id', (req, res) => {
  const {user, name, email} = req.session
  res.render('users/profile', {user, name, email})
})

router.get('/:id/edit', (req, res) => {
  const {user, name, email} = req.session
  res.render('users/editprofile', {user, name, email})
})

router.put('/:id', (req, res) => {
  const {id, name, email} = req.body
  editUser(id, name, email)
    .then((editedUser) => {
      res.send(editedUser)
    })
    .catch((err) => {
      console.error(err)
    })
})

export default router
