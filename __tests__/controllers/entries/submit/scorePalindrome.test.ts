import scorePalindrome from '../../../../src/controllers/entries/submit/scorePalindrome'

describe('scorePalindrome', () => {
  test('Identifies valid palindrome', () => {
    const result = scorePalindrome('Able was I ere I saw Elba')
    expect(result).toBeGreaterThan(0)
  })

  test('Accepts palindromes with punctuation', () => {
    const result = scorePalindrome('A man, a plan, a canal – Panama')
    expect(result).toBeGreaterThan(0)
  })

  test('Identifies string that is not palindrome', () => {
    const result = scorePalindrome('hello how are you?')
    expect(result).toBe(0)
  })

  test('Rejects strings with more than 2 of a character in a row', () => {
    const result = scorePalindrome('looooooool')
    expect(result).toBe(0) 
  })
  
  test('Reject string with more than one punctuation character in a row', () => {
    const result = scorePalindrome('A man,, a plan, a canal – Panama')
    expect(result).toBe(0) 
  })

  test('Returns score which is the length of the string without spaces and punctuation', () => {
    const result = scorePalindrome('A man, a plan, a canal – Panama')
    expect(result).toBe(21)
  })
})