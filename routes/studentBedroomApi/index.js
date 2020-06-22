import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import auth from '../../middleware/auth'
import { checkErrorRequest, ReqException } from '../../utils/exception'
import { Op, Sequelize } from 'sequelize'

const router = express.Router()

router.get('/student', async (req, res) => {
  try {
    const { id = '', bedroomId = '' } = req.query

    const bedroom = await models.Bedroom.findByPk(bedroomId)

    const student = await models.Student.findByPk(id, {
      include: [
        {
          model: models.StudentBedroom,
          required: false,
          limit: 1,
          include: ['Bedroom'],
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

    if (!student.StudentBedrooms[0].studentOut) {
      const bedroomUsed = student.StudentBedrooms[0].Bedroom.title
      throw new ReqException({
        status: 404,
        message: `Santri masih menggunakan kamar ${bedroomUsed}`
      })
    }

    if (student.gender !== bedroom.gender) {
      throw new ReqException({
        status: 404,
        message: `Kamar kusus ${bedroom.gender === 'P' ? 'Perempuan' : 'Laki-laki'}`
      })
    }

    res.json({
      data: student
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
    const studentBedroom = await models.StudentBedroom.create({
      id: uuid1(),
      studentIn: new Date(),
      ...req.body
    })
    if (!studentBedroom) { throw new ReqException({ status: 400 }) }
    res
      .status(200)
      .json({
        data: studentBedroom,
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
router.get('/:id/student', async (req, res) => {
  try {
    const { name = '' } = req.query
    const condition = {}

    if (name) {
      condition.name = {
        [Op.regexp]: name
      }
    }
    const student = await models.Student.findAll({
      where: {
        [Op.and]: [
          Sequelize.literal('`StudentBedrooms`.`studentOut` IS NULL'),
          Sequelize.literal("`StudentBedrooms`.`bedroomId` ='" + req.params.id + "'")
        ],
        ...condition
      },
      include: [
        {
          model: models.StudentBedroom,
          required: false
        }
      ]
    })

    res.json({
      data: student
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const studentBedroom = await models.StudentBedroom.create({
      id: uuid1(),
      studentIn: new Date(),
      ...req.body
    })
    if (!studentBedroom) { throw new ReqException({ status: 400 }) }
    res
      .status(200)
      .json({
        data: studentBedroom,
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
    const studentBedroom = await models.StudentBedroom.findByPk(req.params.id)

    if (!studentBedroom) { throw new ReqException({ status: 404, message: 'Santri Not Found' }) }

    await studentBedroom.update({
      studentOut: new Date()
    })

    res
      .status(200)
      .json({
        data: studentBedroom,
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
