import userApi from './userApi'
import generationApi from './generationApi'
import bedroomApi from './bedroomApi'
import classApi from './classApi'
import addressApi from './addressApi'
import santriApi from './santriApi'
import documentApi from './documentApi'
import studentBedroomApi from './studentBedroomApi'
import studentClassApi from './studentClassApi'
import boardApi from './boardApi'
import paymantApi from './paymentApi'

export default function (app) {
  app.use('/user', userApi)
  app.use('/class', classApi)
  app.use('/generation', generationApi)
  app.use('/bedroom', bedroomApi)
  app.use('/address', addressApi)
  app.use('/santri', santriApi)
  app.use('/document', documentApi)
  app.use('/student-bedroom', studentBedroomApi)
  app.use('/student-class', studentClassApi)
  app.use('/board', boardApi)
  app.use('/payment', paymantApi)
}
