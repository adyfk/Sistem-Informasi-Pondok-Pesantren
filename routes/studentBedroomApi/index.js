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
    const condition = {}

    if (id) {
      condition.id = {
        [Op.regexp]: id
      }
    }

    const bedroom = await models.Bedroom.findByPk(bedroomId)

    const student = await models.Student.findAll({
      where: {
        [Op.or]: [
          Sequelize.literal('`StudentBedrooms`.`studentId` IS NULL'),
          Sequelize.literal('`StudentBedrooms`.`studentOut` IS NOT NULL')
        ],
        [Op.and]: [
          Sequelize.literal('`StudentDetail`.`status`=1')
        ],
        gender: bedroom.gender,
        ...condition
      },
      include: [
        {
          model: models.StudentBedroom,
          required: false
        },
        'StudentDetail'
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
