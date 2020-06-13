import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'

const router = express.Router()

router.get('/latest', async (req, res) => {
  try {
    let Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']],
      include: ['GenerationDetails']
    })

    if (!Generation) {
      Generation = await models.Generation.create({
        id: 'G1',
        title: 'Angakatan 1'
      })
      res.status(200)
      res.json({
        data: Generation,
        message: 'Berhasil mengambil generasi terakhir'
      })
    }

    if (Generation) {
      res.status(200)
      res.json({
        data: Generation,
        message: 'Berhasil mengambil generasi terakhir'
      })
    }
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil generasi terakhir',
      messageSystem: err
    })
  }
})

router.post('/generate', async (req, res) => {
  try {
    const Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })

    if (!Generation) {
      const newGeneration = await models.Generation.create({
        id: 'G1',
        title: 'Angakatan 1'
      })
      res.status(200)
      res.json({
        data: newGeneration,
        message: 'Berhasil meng-generate generasi'
      })
    }

    const id = parseInt(Generation.id.slice(1)) + 1
    const newGeneration = await models.Generation.create({
      id: `G${id}`,
      title: `Angakatan ${id}`
    })

    const detailGeneration = await models.GenerationDetail.findAll({
      where: {
        generationId: Generation.id
      }
    })
    await models.GenerationDetail.bulkCreate(
      detailGeneration.map(data => ({
        id: uuid1(),
        generationId: newGeneration.id,
        title: data.title,
        description: data.description,
        cost: data.cost
      }))
    )

    res.status(200)
    res.json({
      data: newGeneration,
      message: 'Berhasil meng-generate generasi'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal meng-generate generasi',
      messageSystem: err
    })
  }
})

router.get('/detail', async (req, res) => {
  try {
    const Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })

    if (!Generation) {
      throw new Error({ status: 400, message: 'Tidak ada data generasi ! Generate terlebih dahulu.' })
    }

    const GenerationDetail = await models.GenerationDetail.findAll({
      where: {
        generationId: Generation.id
      }
    })

    if (!GenerationDetail) {
      throw new Error({ status: 404, message: 'Detail generasi tidak di temukan!' })
    }

    res.status(200)
    res.json({
      data: GenerationDetail
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil detail generasi',
      messageSystem: err
    })
  }
})

router.post('/detail', async (req, res) => {
  try {
    const Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })

    if (!Generation) {
      throw new Error({ status: 400, message: 'Tidak ada data generasi ! Generate terlebih dahulu.' })
    }

    // body = {title,description,cost}
    const GenerationDetail = await models.GenerationDetail.create({
      id: uuid1(),
      generationId: Generation.id,
      ...req.body
    })

    if (!GenerationDetail) {
      throw new Error({ status: 400 })
    }

    res.status(200)
    res.json({
      data: GenerationDetail,
      message: 'Berhasil mengambil detail generasi'
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal menambah detail generasi',
      messageSystem: err
    })
  }
})
router.put('/detail/:id', async (req, res) => {
  try {
    const body = { ...req.body }
    delete body.generationId
    const result = await models.GenerationDetail.update(body, {
      where: {
        id: req.params.id
      }
    })
    if (!result) {
      throw new Error({ status: 400 })
    }

    const generationDetail = await models.GenerationDetail.findByPk(req.params.id)
    res.status(200)
    res.json({
      data: generationDetail,
      message: `Berhasil men-update detail generasi ${req.params.id}`
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || `Gagal men-update detail generasi ${req.params.id}`,
      messageSystem: err
    })
  }
})
router.delete('/detail/:id', async (req, res) => {
  try {
    const body = { ...req.body }
    delete body.generationId
    const result = await models.GenerationDetail.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!result) {
      throw new Error({ status: 400 })
    }

    const generationDetail = await req.uest({
      method: 'GET',
      url: '/generation/detail'
    })
    res.status(200)
    res.json({
      data: generationDetail.body.data,
      message: `Berhasil meng-hapus detail generasi ${req.params.id}`
    })
  } catch (err) {
    res.status(err.status || 400)
    res.json({
      data: [],
      message: err.message || `Gagal meng-hapus detail generasi ${req.params.id}`,
      messageSystem: err
    })
  }
})

export default router
