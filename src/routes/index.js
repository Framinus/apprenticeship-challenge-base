import express from 'express'

import albums from './albums'
import authentication from './authentication'
import users from './users'

const routes = express.Router()

routes.use('/', authentication)

// const isLoggedIn = (req, res, next) => {
//   if (!req.session.user) {
//     const currentUrl = req.url
//     res.redirect(`/sign-in?REDIRECT_URL=${currentUrl}`)
//   } else {
//     res.redirect('/albums')
//   }
// }

// routes.use(isLoggedIn)

routes.get('/', (req, res) => res.redirect('/albums'))

routes.use('/albums', albums)
routes.use('/users', users)

export default routes
