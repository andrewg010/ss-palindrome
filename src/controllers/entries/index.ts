import { Response, Request } from 'express'
import submit from './submit'
import getScores from './getScores'

const entryController = {
  submit: (req: Request, res: Response) => {
    submit(req, res)
  },

  getScores: (res: Response) => {
    getScores(res)
  }
}

export default entryController
