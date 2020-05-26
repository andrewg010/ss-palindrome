import { Entry } from '../../../data/entries'

interface TopEntries {
  [key: number]: Entry[]
}

export default (entries: Entry[], maxNum: number) => {
  const topEntries: TopEntries = {}

  if (!entries.length) return []

  entries.forEach(({ name, points }) => {
    const { topScores, lowestTopScore, topScoresFull } = getScoreData(topEntries, maxNum)
    if (topScoresFull && points < lowestTopScore) return
    if (topScoresFull && !topScores[points]) {
      delete topEntries[lowestTopScore]
    }
    if (!topEntries[points]) topEntries[points] = []
    topEntries[points].push({ name, points })
  })

  return getHighestScorersDescending(topEntries)
}

const getScoreData = (topEntries: TopEntries, maxNum: number) => {
  const topScores = convertObjectKeysToNumbers(Object.keys(topEntries))
  const lowestTopScore = getLowestTopScore(topScores)
  const topScoresFull = maxTopScoresReached(topScores.length, maxNum)

  return { topScores, lowestTopScore, topScoresFull }
}

const getHighestScorersDescending = (topEntries: TopEntries) => {
  return convertObjectKeysToNumbers(Object.keys(topEntries))
    .sort((a: number, b: number) => b - a)
    .map(score => topEntries[score])
    .reduce((topScorers, equalScorers) => topScorers.concat(equalScorers)) 
}

const maxTopScoresReached = (maxLength: number, maxScores: number) => {
  return maxLength === maxScores
}

const getLowestTopScore = (topScores: number[]) => {
  if (!topScores.length) return 0
  return Math.min(...topScores)
}

const convertObjectKeysToNumbers = (keys: string[]) => {
  return keys.map(key => Number(key))
}
