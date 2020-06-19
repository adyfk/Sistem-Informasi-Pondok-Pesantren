import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
// import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { checkErrorRequest } from '../../utils/exception'
// import { Op } from 'sequelize'
const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const studentBedroom = await models.StudentBedroom.create({
      id: uuid1(),
      createdAt: new Date(),
      ...req.body
    })

    res
      .status(200)
      .json({
        data: studentBedroom,
        message: 'Berhasil menambah santri!'
      })
  } catch (error) {
    res
      .status(error.status || 500)
      .json({
        data: {},
        message: error.message || 'Gagal menambah santri!',
        messageSystem: checkErrorRequest(error)
      })
  }
})
