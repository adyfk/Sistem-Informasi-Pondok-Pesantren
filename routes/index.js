import userApi from './userApi'
import generationApi from './generationApi'
import bedroomApi from './bedroomApi'
import classApi from './classApi'
import addressApi from './addressApi'

export default function (app) {
  app.use('/user', userApi)
  app.use('/class', classApi)
  app.use('/generation', generationApi)
  app.use('/bedroom', bedroomApi)
  app.use('/address', addressApi)
}
