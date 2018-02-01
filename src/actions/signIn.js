import db from '../db/index'

export default function validateUser(email, password) {
  return db.one(`SELECT * FROM users
    WHERE email=$1 AND password=$2`, [email, password])
}
