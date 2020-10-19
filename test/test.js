const Decentragram = artifacts.require('./Decentragram.sol')

// chai is used for tesing
require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentragram', ([deployer, author, tipper]) => {
  let decentragram

  // before method is used to initiate the contract
  before(async () => {
    decentragram = await Decentragram.deployed()
  })

  // describe gives the title for what we are doing
  describe('deployment', async () => {
    // it method checks the specific task
    it('deploys successfully', async () => {
      // check if the address is valid
      const address = await decentragram.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    // checks if the name is retrieved successfully
    it('has a name', async () => {
      const name = await decentragram.name()
      assert.equal(name, 'Decentragram')
    })
  })

  describe('images', async () => {
    let result

    it('create images', async () => {
      result = await decentragram.uploadImage()
      let image  = await decentragram.images(1)
      console.log(image)
    })
  })
})