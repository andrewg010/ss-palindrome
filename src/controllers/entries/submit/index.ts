import { Request, Response } from 'express'
import { dataStore } from '../../../app'
import sanitize from './sanitize'
import scorePalindrome from './scorePalindrome'

export default (req: Request, res: Response) => {
  const { name, word } = sanitize(req.body)

  if (getUserCurrentScore(name) >= word.length) return res.status(400).send()

  const points = scorePalindrome(word) 
  if (!points) return res.status(400).send()

  try {
    const response = dataStore.addEntry({ name, points })
    return res.status(200).send(response)
  } catch (err) {
    return res.status(500).send()
  }
}

const getUserCurrentScore = (name: string) => {
  const userScore = dataStore.getEntries((entry) => entry.name === name)
  if (!userScore.length) return 0
  return userScore[0].points
}
