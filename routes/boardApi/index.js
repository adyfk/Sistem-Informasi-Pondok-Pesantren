import express from 'express'
import models from '../../models'
import { uuid1 } from '../../utils/common'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { Op } from 'sequelize'
const router = express.Router()

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
    const boards = await models.Board.paginate(configs)

    if (!boards) {
      throw new ReqException({ status: 404, message: 'Pengurus tidak ditemukan' })
    }

    res
      .status(200)
      .json({
        data: boards,
        message: 'Berhasil mengambil pengurus'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: [],
        message: err.message || 'Gagal mengambil pengurus',
        messageSystem: checkErrorRequest(err)
      })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const board = await models.Board.findByPk(req.params.id, {
      include: [
        {
          model: models.User,
          attributes: { exclude: ['password'] }
        },
        'BoardDocument'
      ]
    })

    if (!board) {
      throw new ReqException({ status: 404, message: 'Pengurus tidak ditemukan' })
    }

    res
      .status(200)
      .json({
        data: board,
        message: 'Berhasil mengambil Pengurus'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal mengambil Pengurus',
        messageSystem: checkErrorRequest(err)
      })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const username = req.body.name.replace(/ /g, '') + new Date().getTime()
    const user = await models.User.create({
      id: uuid1(),
      username: username
    })
    const board = await models.Board.create({
      id: uuid1(),
      userId: user.id,
      ...req.body
    })
    await models.BoardDocument.create({
      studentId: board.id
    })

    res
      .status(200)
      .json({
        data: board,
        message: 'Berhasil membuat pengurus'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Gagal membuat pengurus',
        messageSystem: checkErrorRequest(err)
      })
  }
})

// untuk update data pengurus
router.put('/:id', auth, async (req, res) => {
  try {
    const board = await models.Board.findByPk(req.params.id)

    if (!board) { throw new ReqException({ status: 404, message: 'Board not found!' }) }

    await board.update(req.body)
    res
      .status(200)
      .json({
        data: board,
        message: 'Success!'
      })
  } catch (err) {
    res
      .status(err.status || 500)
      .json({
        data: {},
        message: err.message || 'Unable to take board!',
        messageSystem: checkErrorRequest(err)
      })
  }
})

export default router
