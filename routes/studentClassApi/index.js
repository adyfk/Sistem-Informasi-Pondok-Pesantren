import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import auth from '../../middleware/auth'
import { checkErrorRequest, ReqException } from '../../utils/exception'
// import { Sequelize, Op } from 'sequelize'
// import { Op, Sequelize } from 'sequelize'

const router = express.Router()

router.get('/student', async (req, res) => {
  try {
    const { id = '' } = req.query

    const student = await models.Student.findByPk(id, {
      include: [
        {
          model: models.StudentClass,
          required: false,
          limit: 1,
          include: ['Class'],
          order: [['studentIn', 'DESC']]
        },
        'StudentDetail'
      ]
    })

    if (!student.StudentDetail.status) {
      throw new ReqException({
        status: 404,
        message: 'Santri telah tidak aktif'
      })
    }

    if (!student.StudentClass.length < 1) {
      if (!student.StudentClass[0].studentOut) {
        const classUsed = student.StudentClass[0].Class.title
        throw new ReqException({
          status: 404,
          message: `Santri masih menggunakan kelas ${classUsed}`
        })
      }
    }

    res.json({
      data: student,
      message: 'sukses'
    })
  } catch (error) {
    res.status(
     error?.status || 500
    ).json({
      status: error?.status || 500,
      message: error.message || 'Gagal ambil santri'
    })
  }
})

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
