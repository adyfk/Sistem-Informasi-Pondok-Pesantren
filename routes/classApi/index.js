import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'

const router = express.Router()

router.get('/', auth, async (req, res) => {
  try {
    const classes = await models.Class.findAll()

    if (!classes) {
      throw new ReqException({ status: 404, message: 'Kelas tidak ditemukan!' })
    }

    res.status(200)
    res.json({
      data: classes,
      message: 'Berhasil mengambil kelas!'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil kelas!',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.get('/:id', auth, async (req, res) => {
  try {
    const classX = await models.Class.findByPk(req.params.id)
    if (!classX) {
      throw new ReqException({ status: 404, message: 'Kelas tidak ditemukan!' })
    }

    res.status(200)
    res.json({
      data: classX,
      message: 'Berhasil mengambil kelas!'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal mengambil kelas!',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.put('/:id', auth, async (req, res) => {
  try {
    const classX = await models.Class.findByPk(req.params.id)

    await classX.update(req.body)

    res.status(200)
    res.json({
      data: classX,
      message: 'Perubahan tersimpan!'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal melakukan perubahan!',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.post('/', auth, async (req, res) => {
  try {
    const body = {
      ...req.body,
      id: uuid1()
    }

    const classX = await models.Class.create(body)

    if (!classX) {
      throw new ReqException({ status: 404, message: 'Gagal menambah kelas!' })
    }

    res.status(200)
    res.json({
      data: classX,
      message: 'Berhasil menambah kelas'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal menambah class',
      messageSystem: checkErrorRequest(err)
    })
  }
})

export default router
