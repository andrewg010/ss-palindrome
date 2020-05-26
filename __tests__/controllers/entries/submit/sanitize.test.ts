import sanitize from '../../../../src/controllers/entries/submit/sanitize'

describe('sanitize', () => {
  test('Replaces multiple spaces with one space', () => {
    const result = sanitize({name: 'name     ofperson' , word: 'hello     how       are you?'})
    expect(result.name).toBe('name ofperson')
    expect(result.word).toBe('hello how are you?')
  })

  test('trims the ends of the string', () => {
    const result = sanitize({name: ' name ofperson ' , word: ' hello how are you?      '})
    expect(result.name).toBe('name ofperson')
    expect(result.word).toBe('hello how are you?') 
  })

  test('Removes any non alphanumerical characters from name', () => {
    const result = sanitize({name: 'name][{}!_"><*&^%$£@!' , word: 'hello how are you?'})
    expect(result.name).toBe('name')
  })

  test('converts strings to lower case', () => {
    const result = sanitize({name: 'Name Here' , word: 'Hello how are You?'})
    expect(result.name).toBe('name here')
    expect(result.word).toBe('hello how are you?') 
  })
})