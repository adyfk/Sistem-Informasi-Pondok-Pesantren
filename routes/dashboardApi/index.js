import express from 'express'
import models from '../../models'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { Sequelize } from 'sequelize'

const router = express.Router()

router.get('/space-bedroom', auth, async (req, res) => {
  try {
    const dashboard = await models.Bedroom.findAll({
      model: models.StudentBedroom,
      attributes: {
        include: [
          [
            Sequelize.literal('(SELECT count(bedroomId) FROM studentbedrooms WHERE studentbedrooms.bedroomId = `Bedroom`.`id` AND studentbedrooms.studentOut is null)'),
            'used'
          ]
        ]
      },
      order: [['gender', 'ASC']]
    })

    if (!dashboard) {
      throw new ReqException({ status: 404, message: 'Kelas tidak ditemukan!' })
    }

    res.status(200)
    res.json({
      data: dashboard,
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

export default router
