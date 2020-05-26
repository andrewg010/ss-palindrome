import Entries, { Entry } from '../../src/data/entries'

describe('Entries', () => {
  let entries: Entries

  beforeEach(() => {
    entries = new Entries()
  })

  test('getEntries returns empty array if no entries', () => {
    const result = entries.getEntries()
    expect(result.length).toBe(0)
  })

  test('Add entry succeeds when adding by returning a confirmation of the entry as an object', () => {
    const result = entries.addEntry({ name: 'person', points: 400 })
    expect(result).toStrictEqual({ name: 'person', points: 400 })
  })

  test('Throws error if we try to add the wrong data types', () => {
    // @ts-ignore
    expect(() => entries.addEntry('name', false)).toThrow()
  })

  test('Can filter entries with an optional function', () => {
    addBaseEntries(entries)
    const result = entries.getEntries((entry: Entry)  => entry.name === 'person1')
    expect(result.length).toBe(1)
    expect(result[0]).toStrictEqual({ name: 'person1', points: 200 })
  })

  test('Updates score for a name that already exists', () => {
    addBaseEntries(entries)
    entries.addEntry({ name: 'person2', points: 1000 })
    const result = entries.getEntries((entry: Entry) => entry.name === 'person2')
    expect(result[0].points).toBe(1000)
  })
})

const addBaseEntries = (entries: Entries) => {
  entries.addEntry({ name: 'person1', points: 200 })
  entries.addEntry({ name: 'person2', points: 300 })
  entries.addEntry({ name: 'person3', points: 400 })
} 
