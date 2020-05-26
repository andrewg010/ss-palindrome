import { Router } from 'express'
import entryController from '../controllers/entries'

const app = Router()

app.get('/getScores', (_req, res) => {
  entryController.getScores(res)
})

app.post('/submitEntry', (req, res) => {
  entryController.submit(req, res)
})

export default app
