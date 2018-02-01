import db from '../db/index'

export default function editUser(id, name, email) {
  return db.one(`UPDATE users SET name=$2, email=$3
    WHERE id=$1`, [id, name, email])
}
