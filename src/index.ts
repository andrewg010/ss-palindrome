import config from '../config'
import app from './app'

if (process.env.NODE_ENV !== 'test') {
  app.listen(config.port, () => {
    console.log('Server', process.pid, 'listening on port', config.port);
  })
}
