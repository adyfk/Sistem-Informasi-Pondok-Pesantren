import express from 'express'
import models from '../../models'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'

const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const paymentDetail = await models.PaymentDetail.create({
      ...req.body
    })

    if (!paymentDetail) {
      throw new ReqException({ status: 404, message: 'Pembayaran gagal!' })
    }

    const payment = await models.PaymentDetail.findAll({
      where: {
        paymentId: req.body.paymentId
      }
    })

    res.status(200)
    res.json({
      data: payment,
      message: 'Berhasil melakukan pembayaran!'
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      data: {},
      message: error.message || 'Pembayaran gagal!',
      messageSystem: checkErrorRequest(error)
    })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const payment = await models.PaymentDetail.findAll({
      where: {
        paymentId: req.params.id
      }
    })

    res.status(200)
    res.json({
      data: payment,
      message: 'Berhasil melakukan pembayaran!'
    })
  } catch (error) {
    res.status(error.status || 500)
    res.json({
      data: {},
      message: error.message || 'Pembayaran gagal!',
      messageSystem: checkErrorRequest(error)
    })
  }
})

export default router
