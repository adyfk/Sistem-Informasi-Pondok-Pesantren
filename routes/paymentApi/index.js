import express from 'express'
import models, { sequelize } from '../../models'
import auth from '../../middleware/auth'
import { uuid1 } from '../../utils/common'
import { Sequelize, Op } from 'sequelize'
import { ReqException } from '../../utils/exception'

const router = express.Router()

router.get('/student', async (req, res) => {
  try {
    const { id = '' } = req.query

    const payment = await models.Student.findAll({
      where: {
        id
      },
      include: [
        {
          model: models.Payment,
          required: false,
          attributes: {
            include: [
              [
                sequelize.literal(`(
                  SELECT SUM(paid)
                  FROM paymentdetails
                  WHERE
                    paymentId = \`Payments.id\`
              )`, 'int'),
                'paid']
            ]
          }
        }
      ]
    })

    res.json({
      data: payment
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

router.post('/generate', auth, async (req, res) => {
  try {
    const paymentLatest = await models.Payment.findOne({
      attributes: ['createdAt'],
      where: {
        paymentTypeId: 'PT2'
      },
      order: [['createdAt', 'DESC']]
    })

    if (new Date(paymentLatest.createdAt).getMonth() === new Date().getMonth()) {
      throw new ReqException({ status: 404, message: 'Bulan Ini telah ter-generate.' })
    }

    const students = await models.Student.findAll({
      where: {
        [Op.and]: [
          Sequelize.literal('`StudentClasses`.`studentId` IS NOT NULL'),
          Sequelize.literal('`StudentClasses`.`studentOut` IS NULL'),
          Sequelize.literal('`StudentDetail`.`status`=1')
        ]
      },
      include: [
        {
          model: models.StudentClass,
          required: false,
          include: [{
            model: models.Class
          }]
        },
        'StudentDetail'
      ]
    })

    const payments = students.map((student) => ({
      id: uuid1(),
      paymentTypeId: 'PT2',
      studentId: student.id,
      bill: student.StudentClasses[0].Class.cost,
      description: `SPP ${new Date().toLocaleDateString().slice(2)} - ${student.StudentClasses[0].Class.title}`
    }))
    await models.Payment.bulkCreate(payments)

    res.json({
      data: {
        total: payments.length
      },
      message: `${payments.length} Santri di berhasil di generate`
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

export default router
