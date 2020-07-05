import express from 'express'
import models, { sequelize } from '../../models'
import { generateNis } from './helper'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { Op } from 'sequelize'
const router = express.Router()
// list student

router.get('/', auth, async (req, res) => {
  const { page = 1, paginate = 25, search } = req.query
  const configs = {
    page,
    paginate,
    order: [['name', 'ASC']]
  }
  if (search) {
    configs.where = {
      [Op.or]: {
        name: {
          [Op.regexp]: search
        }
      }
    }
  }
  const students = await models.Student.paginate(configs)

  res
    .status(200)
    .json({
      data: students || [],
      message: 'Berhasil mengambil santri!'
    })
})
// get detail student

router.get('/:id', auth, async (req, res) => {
  try {
    const student = await models.Student.findByPk(req.params.id, {
      include: [
        {
          model: models.User,
          attributes: { exclude: ['password'] }
        },
        'StudentDocument',
        {
          model: models.StudentDetail,
          include: 'Generation'
        },
        'Parent'
      ]
    })

    if (!student) {
      throw new ReqException({ status: 404, message: 'Santri tidak ditemukan!' })
    }

    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil mengambil santri!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil santri!',
        messageSystem: checkErrorRequest(err)
      })
  }
})

router.post('/', auth, async (req, res) => {
  const t = await sequelize.transaction()
  console.log(req.body)
  try {
    const username = req.body.name.replace(/ /g, '') + new Date().getTime()
    const generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })
    const tagihan = await models.GenerationDetail.sum('cost', {
      where: {
        generationId: generation.id
      }
    })
    const usetLatest = await models.Student.findOne({
      order: [['createdAt', 'DESC']]
    })
    const [, year, no] = usetLatest.id.split('.')

    const studentId = generateNis({ year, no })
    const user = await models.User.create({
      id: uuid1(),
      username: username
    }, {
      transaction: t
    })
    const student = await models.Student.create({
      id: studentId,
      userId: user.id,
      ...req.body
    }, {
      transaction: t
    })
    await models.StudentDocument.create({
      studentId: student.id
    }, {
      transaction: t
    })
    await models.StudentDetail.create({
      studentId: student.id,
      generationId: generation.id,
      status: true
    }, {
      transaction: t
    })
    await models.Parent.create({
      id: uuid1(),
      studentId: student.id
    }, {
      transaction: t
    })
    await models.Payment.create({
      id: uuid1(),
      studentId: student.id,
      paymentTypeId: 'PT1',
      description: 'uang-gedung',
      bill: tagihan
    }, {
      transaction: t
    })
    await t.commit()
    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil menambah santri!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal menambah santri!',
        messageSystem: checkErrorRequest(err)
      })
    await t.rollback()
  }
})

// untuk update student data
router.put('/:id', auth, async (req, res) => {
  try {
    const student = await models.Student.findByPk(req.params.id)

    if (!student) { throw new ReqException({ status: 404, message: 'Santri tidak ditemukan!' }) }

    await student.update(req.body)
    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil mengambil santri!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil santri!',
        messageSystem: checkErrorRequest(err)
      })
  }
})

// update data parent
router.put('/:id/parent', auth, async (req, res) => {
  try {
    const parent = await models.Parent.findOne({
      where: {
        studentId: req.params.id
      }
    })

    if (!parent) { throw new ReqException({ status: 404, message: 'Orang tua tidak ditemukan!' }) }
    await parent.update(req.body)

    res
      .status(200)
      .json({
        data: parent,
        message: 'Berhasil mengambil data orang tua!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil data orang tua!',
        messageSystem: checkErrorRequest(err)
      })
  }
})

// update data parent
router.put('/:id/document', auth, async (req, res) => {
  try {
    const studentDocument = await models.StudentDocument.findOne({
      where: {
        studentId: req.params.id
      }
    })

    if (!studentDocument) { throw new ReqException({ status: 404, message: 'Dokumen santri tidak ditemukan!' }) }

    await studentDocument.update(req.body)

    res
      .status(200)
      .json({
        data: studentDocument,
        message: 'Berhasil mengambil dokumen santri!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil dokumen santri!',
        messageSystem: checkErrorRequest(err)
      })
  }
})
export default router
