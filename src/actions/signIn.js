import db from '../db'

export default function validateUser(email, password) {
  return db.oneOrNone(`SELECT * FROM users
    WHERE email=$1 AND password=$2`, [email, password])
}
