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
      throw new ReqException({ status: 404, message: 'class tidak ditemukan' })
    }

    res.status(200)
    res.json({
      data: classes,
      message: 'Berhasil mengambil class'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil class',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.get('/:id', auth, async (req, res) => {
  try {
    const classX = await models.Class.findByPk(req.params.id)
    if (!classX) {
      throw new ReqException({ status: 404, message: 'class tidak di temukan!' })
    }

    res.status(200)
    res.json({
      data: classX,
      message: 'Berhasil meng-ambil class'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal mengambil class',
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
      message: 'Berhasil meng-update class'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal meng-update class',
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
      throw new ReqException({ status: 404, message: 'Gagal membuat class !' })
    }

    res.status(200)
    res.json({
      data: classX,
      message: 'Berhasil menambah class'
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
