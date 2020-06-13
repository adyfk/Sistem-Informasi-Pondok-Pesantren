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
        data: Generation
      })
    }

    if (Generation) {
      res.status(200)
      res.json({
        data: Generation
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
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
        data: newGeneration
      })
    }

    if (Generation) {
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
        data: newGeneration
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})

router.get('/detail', async (req, res) => {
  try {
    const Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })

    if (!Generation) {
      res.status(400)
      res.json({
        data: []
      })
      return
    }

    const GenerationDetail = await models.GenerationDetail.findAll({
      where: {
        generationId: Generation.id
      }
    })

    if (!GenerationDetail) {
      res.status(400)
      res.json({
        data: []
      })
      return
    }

    if (GenerationDetail) {
      res.status(200)
      res.json({
        data: GenerationDetail
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})

router.post('/detail', async (req, res) => {
  try {
    const Generation = await models.Generation.findOne({
      order: [['createdAt', 'DESC']]
    })

    if (!Generation) {
      res.status(400)
      res.json({
        message: 'Tolonog generate generasi dulu'
      })
      return
    }
    // body = {title,description,cost}
    const GenerationDetail = await models.GenerationDetail.create({
      id: uuid1(),
      generationId: Generation.id,
      ...req.body
    })

    if (!GenerationDetail) {
      res.status(400)
      res.json({
        message: 'Gagal Menambah detail'
      })
      return
    }

    if (GenerationDetail) {
      res.status(200)
      res.json({
        data: GenerationDetail
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
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
      res.status(400)
      res.json({
        message: 'Gagal Mengubah detail'
      })
      return
    }

    if (result[0]) {
      const generationDetail = await models.GenerationDetail.findByPk(req.params.id)
      res.status(200)
      res.json({
        data: generationDetail
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
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
      res.status(400)
      res.json({
        message: 'Gagal Menghapus detail'
      })
      return
    }

    if (result) {
      console.log('smpe sini')
      const generationDetail = await req.uest({
        method: 'GET',
        url: '/generation/detail'
      })
      res.status(200)
      res.json({
        data: generationDetail.body.data
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
