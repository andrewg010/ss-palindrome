import { Response } from 'express'
import { dataStore } from '../../../app'
import config from '../../../../config'
import getNHighestEntries from './getNHighestEntries'
import capitalise from './capitalise'

export default (res: Response) => {
  try {
    const entries = dataStore.getEntries().map(entry => {
      entry.name = capitalise(entry.name)
      return entry
    })
    const highestEntries = getNHighestEntries(entries, config.numHighestEntries)
    res.status(200).send(highestEntries)
  } catch (err) {
    res.status(500).send()
  }
}
