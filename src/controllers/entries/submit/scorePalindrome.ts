export default (string: string) => {
  if (!isValid(string)) return 0
  const formattedString = formatString(string)
  return isPalindrome(formattedString) ? formattedString.length : 0
}

const isPalindrome = (string: string) => {
  const reversedString = string.split('').reverse().join('')
  return string === reversedString
}

const isValid = (string: string) => {
  if (/(.)\1{2}/.test(string)) return false
  if (/([^\w]|_|\s)\1{1}/g.test(string)) return false
  return true
}

const formatString = (string: string) => string.replace(/[^\w]|_|\s/g, '').toLowerCase()
