import { Application } from 'express'
import bodyParser from 'body-parser'
import express from 'express'
import { join } from 'path'

export default (app: Application) => {
  app.use(bodyParser.json())
  app.use(express.static(join(__dirname, '../public')))
}
