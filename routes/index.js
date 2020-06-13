import userApi from './userApi'
import generationApi from './generationApi'
import bedroomApi from './bedroomApi'
// import payment_ from './payment'
// import classInfo_ from './class-info'
// import generation_ from './generation'
// import bedroomInfo_ from './bedroom-info'
// import studentManagement_ from './student-management'
// import pondokManagement_ from './pondok-management'

export default function (app) {
  app.use('/user', userApi)
  app.use('/generation', generationApi)
  app.use('/bedroom', bedroomApi)
//   app.use('/payment', payment_)
//   app.use('/test-api', testApi_)
//   app.use('/class-info', classInfo_)
//   app.use('/generation', generation_)
//   app.use('/bedroom-info', bedroomInfo_)
//   app.use('/pondok-management', pondokManagement_)
//   app.use('/student-management', studentManagement_)
}
