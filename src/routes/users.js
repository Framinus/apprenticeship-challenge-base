import express from 'express'
import editUser from '../actions/editUser'
import getUserById from '../actions/getUserById'

const router = express.Router()

router.get('/:id', (req, res) => {
  const {id} = req.params
  return getUserById(id)
    .then((userProfile) => {
      console.log(userProfile)
      res.render('users/profile', {userProfile})
    })
    .catch((err) => {
      console.error(err)
    })
})

router.get('/:id/edit', (req, res) => {
  const {id} = req.params
  return getUserById(id)
    .then((userProfile) => {
      res.render('users/editprofile', {userProfile})
    })
    .catch((err) => {
      console.error(err)
    })
})

router.put('/:id', (req, res) => {
  const {id} = req.params
  console.log('id', id)
  const {name, email} = req.body
  console.log('name', name)
  return editUser(id, name, email)
    .then((edited) => {
      console.log('edited', edited)
      res.json({edited})
    })
    .catch(console.error)
})

export default router
