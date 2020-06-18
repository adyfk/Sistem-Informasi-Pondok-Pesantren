import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
// import { uuid1 } from '../../utils/common'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const bedrooms = await models.Bedroom.findAll()

    if (!bedrooms) {
      throw new ReqException({ status: 404, message: 'Bedroom tidak ditemukan' })
    }

    res.status(200)
    res.json({
      data: bedrooms,
      message: 'Berhasil mengambil bedroom'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const bedroom = await models.Bedroom.findByPk(req.params.id)
    if (!bedroom) {
      throw new ReqException({ status: 404, message: 'Bedroom tidak di temukan!' })
    }

    res.status(200)
    res.json({
      data: bedroom,
      message: 'Berhasil meng-ambil bedroom'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal mengambil bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const bedroom = await models.Bedroom.findByPk(req.params.id)

    await bedroom.update(req.body)

    res.status(200)
    res.json({
      data: bedroom,
      message: 'Berhasil meng-update bedroom'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal meng-update bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})
router.post('/', async (req, res) => {
  try {
    const body = {
      ...req.body,
      id: uuid1()
    }

    const Bedroom = await models.Bedroom.create(body)

    if (!Bedroom) {
      throw new ReqException({ status: 404 })
    }

    res.status(200)
    res.json({
      data: Bedroom,
      message: 'Berhasil menambah bedroom'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal menambah bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})

export default router
