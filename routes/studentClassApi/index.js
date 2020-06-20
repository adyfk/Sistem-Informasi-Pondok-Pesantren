import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import auth from '../../middleware/auth'
import { checkErrorRequest, ReqException } from '../../utils/exception'
// import { Op, Sequelize } from 'sequelize'

const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const studentClass = await models.StudentClass.create({
      id: uuid1(),
      studentIn: new Date(),
      ...req.body
    })
    if (!studentClass) { throw new ReqException({ status: 400 }) }
    res
      .status(200)
      .json({
        data: studentClass,
        message: 'Berhasil menambah santri!'
      })
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({
        data: {},
        message: error?.message || 'Gagal menambah santri!',
        messageSystem: checkErrorRequest(error)
      })
  }
})

router.put('/:id/checkout', auth, async (req, res) => {
  try {
    const studentClass = await models.StudentClass.findByPk(req.params.id)

    await studentClass.update({
      studentOut: new Date()
    })

    res
      .status(200)
      .json({
        data: studentClass,
        message: 'Berhasil check out santri!'
      })
  } catch (error) {
    res
      .status(error.status || 500)
      .json({
        data: {},
        message: error.message || 'Gagal checkout santri!',
        messageSystem: checkErrorRequest(error)
      })
  }
})

export default router
