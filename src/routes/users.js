import express from 'express'
import editUser from '../actions/editUser'

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.session.user
  const {name, email} = req.session
  res.render('users/profile', {id, name, email})
})

router.get('/:id/edit', (req, res) => {
  const id = req.session.user
  const {name, email} = req.session
  res.render('users/editprofile', {id, name, email})
})

router.put('/:id', (req, res) => {
  const id = req.session.user
  console.log('id', id)
  const {name, email} = req.body
  console.log('name', name)
  console.log('email', email)
  editUser(id, name, email)
    .then((editedUser) => {
      res.json({editedUser})
    })
    .catch((err) => {
      console.error(err)
    })
})

export default router
