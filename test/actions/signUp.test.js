import '../env'
import { expect } from 'chai'
import { signUp } from '../../src/actions'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp('bob', 'b@b.com', 'bob')
      .then((newUser) => {
        expect(newUser.name).to.equal('bob')
      })
  })
})
