import express from 'express'
import models from '../../models'
import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'

const router = express.Router()

router.post('/', auth, async (req, res) => {
  try {
    const payment = await models.PaymentDetail.create({
      ...req.body
    })

    if (!payment) {
      throw new ReqException({ status: 404, message: 'Pembayaran gagal!' })
    }

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
