import express from 'express'
import createUser from '../actions/signUp'
import validateUser from '../actions/signIn'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})

router.post('/sign-up', (req, res) => {
  const {name, email, password} = req.body
  return createUser(name, email, password)
    .then((newUser) => {
      console.log('newUser', newUser)
      req.session.user = newUser.id
      res.redirect('/')
    })
    .catch(console.error)
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {msg: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  return validateUser(email, password)
    .then((validUser) => {
      req.session.user = validUser.id
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-in', {msg: 'incorrect email or password'})
    })
})

export default router
