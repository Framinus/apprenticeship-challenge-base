import '../env'
import { expect } from 'chai';
import createUser from '../../src/actions/signUp'

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    createUser('Mack', 'mack@mack.com', 'mack')
      .then((newUser) => {
        expect(newUser.name).to.equal('Mack')
      })
  })
})
