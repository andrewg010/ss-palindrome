import request from 'supertest'
import app from '../../src/app'

describe('submitEntry route', () => {
  const validPalindrome = 'A man, a plan, a canal Panama'
  const invalidPalindrome = 'A man, a plan, ann canal Panama'
  const name = 'name'

  test('Responds to valid palindrome with the entry object created', async () => {
    const response = await request(app)
      .post('/api/submitEntry')
      .send({ name, word: validPalindrome })
    expect(response.body).toStrictEqual({ name: 'name', points: 21 })
  })

  test('Responds with 400 status code to an invalid palindrome', async () => {
    const response = await request(app)
      .post('/api/submitEntry')
      .send({ name, word: invalidPalindrome })
    expect(response.status).toBe(400)
  })

  test('Responds with 400 status code if a user tries to enter a score lower than they already scored', async () => {
    await request(app)
      .post('/api/submitEntry')
      .send({ name, word: validPalindrome })
    const response = await request(app)
      .post('/api/submitEntry')
      .send({ name, word: 'oo' })
    expect(response.status).toBe(400)
  })
})