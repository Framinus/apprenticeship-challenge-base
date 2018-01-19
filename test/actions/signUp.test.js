import '../env'
import { expect } from 'chai';
import createUser from '../../src/actions/signUp'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    createUser('larry', 'l@l.com', 'larry')
      .then((newUser) => {
        expect(newUser.name).to.equal('larry')
      })
  })
})
