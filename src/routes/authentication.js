import express from 'express'
import signUp from '../actions/signUp'
import signIn from '../actions/signIn'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {msg: ''})
})

router.post('/sign-up', (req, res) => {
  const {name, email, password} = req.body
  return signUp(name, email, password)
    .then((newUser) => {
      console.log('newUser', newUser)
      req.session.user = newUser
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-up', {msg: 'error signing up user'})
    })
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {msg: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  return signIn(email, password)
    .then((validUser) => {
      console.log('validUser', validUser)
      req.session.user = validUser
      res.redirect('/')
    })
    .catch((err) => {
      console.error(err)
      res.render('authentication/sign-in', {msg: 'incorrect email or password'})
    })
})


export default router
