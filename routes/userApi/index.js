import express from 'express'
import models from '../../models'
import { generateToken } from '../../utils/jwt_auth'
import auth from '../../middleware/auth'
import { getStudentByUserId } from './helper'
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const User = await models.User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (!User) {
      res.status(404)
      res.json({
        message: {
          username: 'Username not found'
        }
      })
    }

    if (User.password !== req.body.password) {
      res.status(410)
      res.json({
        message: {
          password: 'Password salah'
        }
      })
    }

    if (User) {
      const user = User
      delete user.password
      res.json({
        token: generateToken({
          id: User.id,
          roleId: User.roleId
        })
      })
    }
  } catch (e) {
    res.status(500)
    res.json({
      message: e
    })
  }
})

router.get('/profile', auth, async (req, res) => {
  switch (res.user.roleId) {
    case 2: {
      try {
        const Student = await getStudentByUserId({ userId: req.user.id })
        res.status(200)
        res.json({
          data: Student
        })
      } catch (e) {
        res.status(400)
        res.json({
          message: 'Student Not Found'
        })
      }
      break
    }
  }
})

export default router
