export default ({ name, word }: { name: string, word: string }) => {
  const sanitizedName = sanitizeName(name)
  const sanitizedWord = sanitizeString(word)
  return { name: sanitizedName, word: sanitizedWord }
}

const sanitizeString = (string: string) => {
  return string.toLowerCase().trim().replace(/\s\s+/g, ' ')
}

const sanitizeName = (name: string) => {
  name = sanitizeString(name)
  return name.replace(/[^\w\s]|_/g, '')
}
