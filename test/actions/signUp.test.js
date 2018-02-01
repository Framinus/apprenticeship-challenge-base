import '../env'
import { expect } from 'chai'
import createUser from '../../src/actions/signUp'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return createUser('luke', 'l@l.com', 'luke')
      .then((newUser) => {
        expect(newUser.name).to.equal('luke')
      })
  })
})
