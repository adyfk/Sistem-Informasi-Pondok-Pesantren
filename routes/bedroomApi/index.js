import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
// import { uuid1 } from '../../utils/common'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const bedrooms = await models.Bedroom.findAll()
    if (!bedrooms) {
      res.status(400)
      res.json({
        data: bedrooms
      })
    }
    if (bedrooms) {
      res.status(200)
      res.json({
        data: bedrooms
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})
router.get('/:id', async (req, res) => {
  try {
    const bedroom = await models.Bedroom.findByPk(req.params.id)
    if (!bedroom) {
      res.status(400)
      res.json({
        data: bedroom
      })
    }
    if (bedroom) {
      res.status(200)
      res.json({
        data: bedroom
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})
router.put('/:id', async (req, res) => {
  try {
    const body = { ...req.body }
    delete body.id
    const Bedroom = await models.Bedroom.update(body, {
      where: {
        id: req.params.id
      }
    })
    console.log(Bedroom, body)
    // respond dari update adalah array
    // saat tidak ada perubahan data maka akan respond false
    // [0] === 0 === false => artinya gagal
    // [0] === 1 === true => artinya berhasil
    if (!Bedroom[0]) {
      res.status(400)
      res.json({
        data: Bedroom
      })
    }

    if (Bedroom[0]) {
      const afterUpdate = await req.uest({
        method: 'GET',
        url: `/${req.params.id}`
      })
      res.status(200)
      res.json({
        data: afterUpdate
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
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
      res.status(400)
      res.json({
        data: Bedroom
      })
    }

    if (Bedroom) {
      res.status(200)
      res.json({
        data: Bedroom
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})

export default router
