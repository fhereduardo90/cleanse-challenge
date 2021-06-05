const cleanse = require('./cleanse')
const mocks = require('../mocks')

describe('cleanse', () => {
  it('should remove properties with values null or undefined', () => {
    const firstExampleResult = cleanse(mocks.firstExample)
    const secondExampleResult = cleanse(mocks.secondExample)

    expect(firstExampleResult).toMatchSnapshot()
    expect(secondExampleResult).toMatchSnapshot()
    expect(secondExampleResult).not.toHaveProperty('nickname')
    expect(secondExampleResult).not.toHaveProperty('address')
    expect(secondExampleResult).toHaveProperty('active', false)
    expect(secondExampleResult.friends[0]).toHaveProperty('active', true)
    expect(secondExampleResult.friends[0]).not.toHaveProperty('address')
  })
})