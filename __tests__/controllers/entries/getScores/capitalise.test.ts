import capitalise from '../../../../src/controllers/entries/getScores/capitalise'

describe('capitalise the first letter of all words in a string', () => {
  test('someting', () => {
    const result = capitalise('john d smith')
    expect(result).toBe('John D Smith')
  })

  test('Capitalise first letter of only one word', () => {
    const result = capitalise('john')
    expect(result).toBe('John')
  })
})