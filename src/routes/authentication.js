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
      console.log('newUser', newUser)
      req.session.user = newUser.id
      req.session.name = newUser.name
      req.session.email = newUser.email
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('/', {message: 'try again.'})
    })
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {message: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  validateUser(email, password)
    .then((validUser) => {
      console.log('validUser', validUser)
      if (validUser) {
        req.session.user = validUser.id
        req.session.name = validUser.name
        req.session.email = validUser.email
        res.redirect('/')
      }
      else {
        throw new Error('invalid email or password')
      }
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-in', {message: 'incorrect email or password'})
    })
})

export default router
