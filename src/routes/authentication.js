import express from 'express'

import createUser from '../actions/signUp'
import validateUser from '../actions/signIn'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {message: ''})
})

router.post('/sign-up', (req, res) => {
  const {name, email, password} = req.body
  createUser(name, email, password)
    .then((newUser) => {
      req.session.user = newUser.id
      req.session.name = newUser.name
      req.session.email = newUser.email
      req.session.password = newUser.password
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-up', {message: 'Email already in use'})
    })
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {message: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  validateUser(email, password)
    .then((validUser) => {
      req.session.user = validUser.id
      req.session.name = validUser.name
      req.session.email = validUser.email
      req.session.password = validUser.password
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-in', {message: 'Incorrect email or password'})
    })
})

export default router
