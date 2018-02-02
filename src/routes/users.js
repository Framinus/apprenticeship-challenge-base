import express from 'express'
import {getUserById, editUser} from '../actions'

const router = express.Router()

router.get('/:id', (req, res) => {
  const {id} = req.params
  return getUserById(id)
    .then((user) => {
      res.render('users/profile', {user})
    })
    .catch((err) => {
      console.error(err)
      res.render('users', {msg: 'error retrieving user'})
    })
})

router.put('/:id', (req, res) => {
  const {id} = req.params
  const {name, email} = req.body
  return editUser(id, name, email)
    .then((editedUser) => {
      console.log('editedUser', editedUser)
      res.json({editedUser})
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/:id/edit', (req, res) => {
  const {id} = req.params
  const {name, email} = req.body
  return getUserById(id, name, email)
    .then((user) => {
      res.render('users/editprofile', {user})
    })
    .catch((err) => {
      console.error(err)
      res.render('users', {msg: 'error retrieving user'})
    })
})



export default router
