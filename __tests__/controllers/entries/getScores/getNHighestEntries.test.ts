import getNHighestEntries from '../../../../src/controllers/entries/getScores/getNHighestEntries'

const entries = [
  { name: 'name1', points: 10 },
  { name: 'name2', points: 100 },
  { name: 'name3', points: 30 },
  { name: 'name4', points: 99 },
  { name: 'name5', points: 2 },
  { name: 'name6', points: 99 },
  { name: 'name7', points: 99 },
  { name: 'name8', points: 99 },
  { name: 'name9', points: 99 },
  { name: 'name10', points: 120 },
  { name: 'name11', points: 120 },
  { name: 'name12', points: 200 },
  { name: 'name13', points: 40 }
]


describe('getNHighestEntries', () => {
  test('Returns empty array if no entries', () => {
    const result = getNHighestEntries([], 5)
    expect(result).toStrictEqual([])
  })

  test('Returns number of scores specified, drawing scorers share the position', () => {
    const result = getNHighestEntries(entries, 3)
    expect(result).toStrictEqual([
      { name: 'name12', points: 200 },
      { name: 'name10', points: 120 },
      { name: 'name11', points: 120 },
      { name: 'name2', points: 100 }
    ])
  })
})