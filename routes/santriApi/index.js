import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'

const router = express.Router()

router.get('/', auth, async (req, res) => {
  try {
    const students = await models.Student.findAll()

    if (!students) {
      throw new ReqException({ status: 404, message: 'Student tidak ditemukan' })()()
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

router.get('/:id', auth, async (req, res) => {
  try {
    const student = await models.Student.findByPk(req.params.id, {
      include: [
        {
          model: models.User,
          attributes: ['id', 'username', 'roleId']
        },
        'StudentDocument',
        'StudentDetail'
      ]
    })

    if (!student) {
      throw new ReqException({ status: 404, message: 'Student tidak ditemukan' })()()
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
    const { body: { data: generation } } = await req.uest({
      url: '/generation/latest',
      method: 'GET',
      headers: {
        Authorization: req.headers.authorization
      }
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

export default router
