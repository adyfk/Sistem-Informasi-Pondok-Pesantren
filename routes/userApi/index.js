import express from 'express'
import models from '../../models'
import { generateToken } from '../../utils/jwt_auth'
import auth from '../../middleware/auth'
import { getStudentByUserId, getBoardByUserId } from './helper'
import { ReqException, checkErrorRequest } from '../../utils/exception'
const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const User = await models.User.findOne({
      where: {
        username: req.body.username
      }
    })

    if (!User) {
      throw new ReqException({
        status: 400,
        message: {
          username: 'Username anda tidak ditemukan!'
        }
      })
    }

    if (User.password !== req.body.password) {
      throw new ReqException({
        status: 410,
        message: {
          password: 'Password yang Anda inputkan salah!'
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
        }),
        message: 'Berhasil login!'
      })
    }
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal login!',
      messageSystem: checkErrorRequest(err)
    })
  }
})

router.get('/profile', auth, async (req, res) => {
  try {
    switch (req.user.roleId) {
      case 'R1': {
        const Board = await getBoardByUserId({ userId: req.user.id })
        const mapBoard = Board.toJSON()

        mapBoard.photo = mapBoard.BoardDocument.photo
        mapBoard.roleId = req.user.roleId
        delete mapBoard.BoardDocument

        res.status(200)
        return res.json({
          data: mapBoard,
          message: 'Berhasil menagmbil data profil!'
        })
      }
      case 'R2': {
        const Student = await getStudentByUserId({ userId: req.user.id })

        const mapStudent = Student.toJSON()

        mapStudent.photo = mapStudent.StudentDocument.photo
        mapStudent.roleId = req.user.roleId
        delete mapStudent.StudentDocument
        res.status(200)
        return res.json({
          data: mapStudent,
          message: 'Berhasil menagmbil data profil!'
        })
      }
    }
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: {},
      message: err.message || 'Gagal mengambil data profil!',
      messageSystem: checkErrorRequest(err)
    })
  }
})

export default router
