import express from 'express'
import routes from './routes'
import Entries from './data/entries'
import bootstrapServer from './bootstrapServer'

const app = express()

export const dataStore = new Entries()
bootstrapServer(app)

app.get('/', (_req, res) => {
	res.render('index.html')
})

app.use('/api', routes)

export default app
