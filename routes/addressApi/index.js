import express from 'express'
import dotenv from 'dotenv'
import {
  ReqException,
  checkErrorRequest
} from '../../utils/exception'
import request from 'request'
import auth from '../../middleware/auth'

dotenv.config()
const router = express.Router()

router.get('/province', auth, async (req, res) => {
  try {
    const configs = {
      url: 'https://dev.farizdotid.com/api/daerahindonesia/provinsi',
      headers: { key: process.env.API_KEY_RAJAONGKIR }
    }
    request(configs, (error, response, body) => {
      if (error) {
        throw ReqException({ status: 404, data: [], message: 'Province not Found' })
      }
      const result = JSON.parse(body)
      res.json({
        data: result.provinsi
      })
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})

router.get('/dorp', auth, async (req, res) => {
  try {
    const configs = {
      url: 'https://dev.farizdotid.com/api/daerahindonesia/kota',
      qs: {
        id_provinsi: req.query.provinceId
      }
    }
    request(configs, (error, response, body) => {
      if (error) {
        throw ReqException({ status: 404, data: [], message: 'Province not Found' })
      }
      const result = JSON.parse(body)
      res.json({
        data: result.kota_kabupaten
      })
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})

router.get('/district', auth, async (req, res) => {
  try {
    const configs = {
      url: 'https://dev.farizdotid.com/api/daerahindonesia/kecamatan',
      qs: {
        id_kota: req.query.dorpId
      }
    }
    request(configs, (error, response, body) => {
      if (error) {
        throw ReqException({ status: 404, data: [], message: 'Province not Found' })
      }
      const result = JSON.parse(body)
      res.json({
        data: result.kecamatan
      })
    })
  } catch (err) {
    res.status(err.status || 500)
    res.json({
      data: [],
      message: err.message || 'Gagal mengambil bedroom',
      messageSystem: checkErrorRequest(err)
    })
  }
})

export default router
