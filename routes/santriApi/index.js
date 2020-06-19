import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { Op } from 'sequelize'
const router = express.Router()
// list student

router.get('/', auth, async (req, res) => {
  try {
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

    if (!students) {
      throw new ReqException({ status: 404, message: 'Student tidak ditemukan' })
    }

    res
      .status(200)
      .json({
        data: students,
        message: 'Berhasil mengambil Student'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: [],
        message: err.message || 'Gagal mengambil Student',
        messageSystem: checkErrorRequest(err)
      })
  }
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
        'StudentDetail'
      ]
    })

    if (!student) {
      throw new ReqException({ status: 404, message: 'Student tidak ditemukan' })
    }

    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil mengambil Student'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil Student',
        messageSystem: checkErrorRequest(err)
      })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const username = req.body.name.replace(/ /g, '') + new Date().getTime()
    const generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })
    const user = await models.User.create({
      id: uuid1(),
      username: username
    })
    const student = await models.Student.create({
      id: uuid1(),
      userId: user.id,
      ...req.body
    })
    await models.StudentDocument.create({
      studentId: student.id
    })
    await models.StudentDetail.create({
      studentId: student.id,
      generationId: generation.id
    })

    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil membuat Student'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal membuat Student',
        messageSystem: checkErrorRequest(err)
      })
  }
})

// untuk update student data
router.put('/:id', auth, async (req, res) => {
  try {
    const student = await models.Student.findByPk(req.params.id)

    if (!student) { throw new ReqException({ status: 404, message: 'Student Not Found' }) }

    await student.update(req.body)
    res
      .status(200)
      .json({
        data: student,
        message: 'Berhasil mengambil Student'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil Student',
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

    if (!parent) { throw new ReqException({ status: 404, message: 'parent Not Found' }) }

    await parent.update(req.body)
    res
      .status(200)
      .json({
        data: parent,
        message: 'Berhasil mengambil parent'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil parent',
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

    if (!studentDocument) { throw new ReqException({ status: 404, message: 'studentDocument Not Found' }) }

    await studentDocument.update(req.body)

    res
      .status(200)
      .json({
        data: studentDocument,
        message: 'Berhasil mengambil Dokumen Student'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil Dokumen Student',
        messageSystem: checkErrorRequest(err)
      })
  }
})
export default router
