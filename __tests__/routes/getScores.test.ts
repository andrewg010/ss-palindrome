import request from 'supertest'
import app from '../../src/app'
import Entries from '../../src/data/entries'

describe('api/getScores route', () => {

  jest.mock('../../src/data/entries')

  test('Responds with an array of top 5 scorers', async () => {
    Entries.prototype.getEntries = jest.fn().mockImplementationOnce(() => {
      return [
        { name: 'name1', points: 10 },
        { name: 'name2', points: 100 },
        { name: 'name3', points: 99 },
        { name: 'name4', points: 120 },
        { name: 'name5', points: 150 },
        { name: 'name6', points: 200 },
        { name: 'name7', points: 40 }
      ]
    })
    const response = await request(app).get('/api/getScores')
    expect(response.body.length).toBe(5)
  })

  test('Capitalises the words in names in entries', async () => {
    Entries.prototype.getEntries = jest.fn().mockImplementationOnce(() => {
      return [{ name: 'john smith', points: 10 }]
    })
    const response = await request(app).get('/api/getScores')
    expect(response.body[0].name).toBe('John Smith')
  })
})
